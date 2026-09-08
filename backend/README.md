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

Business leads are stored in PostgreSQL. Set `DATABASE_URL`,
`DATABASE_USERNAME`, and `DATABASE_PASSWORD` before starting the backend.

Persona and service usage is stored in MongoDB. Set `MONGODB_URI`, for example:

```powershell
$env:MONGODB_URI="mongodb://localhost:27017/piyush_portfolio"
```

The `POST /api/persona-services` endpoint accepts a persona, selected service,
and optional details:

```json
{
  "persona": "entrepreneur",
  "service": "AI & AUTOMATION",
  "details": "Interested in automating lead follow-up"
}
```

Chat submissions continue to be stored through the JPA persistence layer and
include the message, optional name and email, detected intent, agent reply, and
creation timestamp.

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
