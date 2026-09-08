package com.piyush.portfolio.agent;

import java.util.List;
import java.util.Locale;
import org.springframework.stereotype.Service;

@Service
public class AgentService {
    private static final String AGENT_NAME = "PIYUSH AI";
    private final AgentConversationRepository conversationRepository;

    public AgentService(AgentConversationRepository conversationRepository) {
        this.conversationRepository = conversationRepository;
    }

    private final List<Intent> intents = List.of(
        new Intent(
            "web application",
            List.of("web", "website", "application", "app", "platform", "frontend", "backend"),
            "I can help shape this into a production-ready web application with a clear user flow, scalable architecture, and an implementation plan.",
            List.of("Clarify the users and primary workflow", "Define the first release scope", "Recommend the application architecture")
        ),
        new Intent(
            "automation solution",
            List.of("automation", "automate", "process", "integration"),
            "This sounds like a strong automation opportunity. I can map the current process, identify the highest-value automations, and define the integrations needed.",
            List.of("Map the current process", "Identify repetitive decision points", "Prioritize the first automation")
        ),
        new Intent(
            "AI agent",
            List.of("agent", "assistant", "chatbot", "copilot", "llm"),
            "I can help design an AI agent with a focused role, trusted knowledge sources, useful tools, and a measurable handoff to your team.",
            List.of("Define the agent's responsibility", "List the data and tools it can access", "Design evaluation and human handoff")
        ),
        new Intent(
            "AI video and content workflow",
            List.of("video", "content", "visual", "storytelling", "creator"),
            "I can help turn this into an AI-assisted content workflow for planning, generation, editing, and publishing while keeping the creative direction consistent.",
            List.of("Define the content format and audience", "Choose the generation workflow", "Create a repeatable publishing pipeline")
        )
    );

    public String agentName() {
        return AGENT_NAME;
    }

    public AgentController.AgentResponse respond(String message, String name, String email) {
        String normalized = message.toLowerCase(Locale.ROOT);
        Intent intent = intents.stream()
            .filter(candidate -> candidate.terms().stream().anyMatch(normalized::contains))
            .findFirst()
            .orElse(new Intent(
                "discovery conversation",
                List.of(),
                "I can help turn this idea into a practical digital product or AI solution. Let us start by clarifying the outcome, users, and constraints.",
                List.of("Describe the outcome you want", "Identify who will use it", "Choose the smallest useful first version")
            ));

        conversationRepository.save(new AgentConversation(message, name, email, intent.label(), intent.reply()));
        return new AgentController.AgentResponse(AGENT_NAME, intent.label(), intent.reply(), intent.nextSteps());
    }

    private record Intent(String label, List<String> terms, String reply, List<String> nextSteps) {
    }
}
