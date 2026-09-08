# PIYUSH AI Maven Backend

Maven-based Spring Boot backend for the portfolio's `PIYUSH AI` agent.

## Requirements

- Java 17+
- Maven 3.9+

## Run

```powershell
mvn spring-boot:run
```

The API starts on `http://localhost:8787`.

## Test

```powershell
mvn test
```

## Endpoints

- `GET /api/health`
- `POST /api/agent/chat`

Example request:

```json
{
  "message": "I need an AI agent for my business"
}
```
