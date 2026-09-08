import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AiAgent from "./AiAgent";

const success = (payload) => ({
  ok: true,
  json: async () => payload
});

describe("AiAgent", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders nothing when closed", () => {
    const {container} = render(<AiAgent open={false} onClose={vi.fn()} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("renders the greeting and all quick actions when open", () => {
    render(<AiAgent open onClose={vi.fn()} />);

    expect(screen.getByText("PIYUSH AI")).toBeInTheDocument();
    expect(screen.getByText(/Hi! I'm your AI Business Agent/)).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /Build a Web Application/})).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(8);
  });

  it("does not call the backend for an empty message", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<AiAgent open onClose={vi.fn()} />);

    await user.click(screen.getByRole("button", {name: "➜"}));

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("sends a quick action and renders the backend response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(success({
      agent: "PIYUSH AI",
      intent: "AI agent",
      reply: "I can help design your AI agent.",
      nextSteps: ["Define the agent's responsibility"]
    })));
    const user = userEvent.setup();
    render(<AiAgent open onClose={vi.fn()} />);

    await user.click(screen.getByRole("button", {name: /AI Agents for My Business/}));

    await waitFor(() => expect(screen.getByText("I can help design your AI agent.")).toBeInTheDocument());
    expect(screen.getByText(/AI agent · Next:/)).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith("/api/agent/chat", expect.objectContaining({method: "POST"}));
  });

  it("supports typed messages submitted with Enter", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(success({
      agent: "PIYUSH AI",
      intent: "web application",
      reply: "Let us scope your application.",
      nextSteps: ["Clarify the users"]
    })));
    const user = userEvent.setup();
    render(<AiAgent open onClose={vi.fn()} />);
    const input = screen.getByPlaceholderText("Describe your requirement...");

    await user.type(input, "Build me a web application{Enter}");

    await waitFor(() => expect(screen.getByText("Let us scope your application.")).toBeInTheDocument());
  });

  it("shows a backend error when the API rejects the request", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({error: "Service unavailable"})
    }));
    const user = userEvent.setup();
    render(<AiAgent open onClose={vi.fn()} />);

    await user.click(screen.getByRole("button", {name: /Other Business Need/}));

    await waitFor(() => expect(screen.getByText("Service unavailable")).toBeInTheDocument());
    expect(screen.getByText(/Start the backend with npm run backend:dev/)).toBeInTheDocument();
  });

  it("disables the composer while the backend is responding", async () => {
    let resolveRequest;
    vi.stubGlobal("fetch", vi.fn(() => new Promise(resolve => {
      resolveRequest = resolve;
    })));
    const user = userEvent.setup();
    render(<AiAgent open onClose={vi.fn()} />);

    await user.click(screen.getByRole("button", {name: /Build a Web Application/}));

    expect(screen.getByPlaceholderText("PIYUSH AI is thinking...")).toBeDisabled();
    resolveRequest(success({agent: "PIYUSH AI", intent: "web application", reply: "Done.", nextSteps: []}));
  });
});
