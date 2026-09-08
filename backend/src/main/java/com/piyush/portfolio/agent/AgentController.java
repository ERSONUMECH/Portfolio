package com.piyush.portfolio.agent;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AgentController {
    private final AgentService agentService;

    public AgentController(AgentService agentService) {
        this.agentService = agentService;
    }

    @GetMapping("/health")
    public HealthResponse health() {
        return new HealthResponse("ok", agentService.agentName());
    }

    @PostMapping("/agent/chat")
    public ResponseEntity<AgentResponse> chat(@Valid @RequestBody AgentRequest request) {
        return ResponseEntity.ok(agentService.respond(request.message()));
    }

    public record AgentRequest(@NotBlank(message = "A message is required.") String message) {
    }

    public record AgentResponse(String agent, String intent, String reply, java.util.List<String> nextSteps) {
    }

    public record HealthResponse(String status, String agent) {
    }
}
