# PIYUSH AI Spring Boot Backend

Spring Boot backend for the portfolio's `PIYUSH AI` agent.

## Requirements

- Java 17+
- Gradle 8+

## Run

```powershell
./gradlew bootRun
```

The API starts on `http://localhost:8787`.

Chat submissions are stored in the file-backed H2 database at `backend/data/`.
Each record includes the message, optional name and email, detected intent,
agent reply, and creation timestamp.

## Endpoints

- `GET /api/health`
- `POST /api/agent/chat`

Example request:

```json
{
  "message": "I need an AI agent for my business"
}
```

The current service provides deterministic intent routing and next-step recommendations. The `AgentService` is the integration point for connecting an LLM provider later.
