package com.piyush.portfolio.persona;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/persona-services")
public class PersonaServiceUsageController {
    private final PersonaServiceUsageRepository usageRepository;

    public PersonaServiceUsageController(PersonaServiceUsageRepository usageRepository) {
        this.usageRepository = usageRepository;
    }

    @PostMapping
    public ResponseEntity<UsageResponse> record(@Valid @RequestBody UsageRequest request) {
        usageRepository.save(new PersonaServiceUsage(request.persona(), request.service(), request.details()));
        return ResponseEntity.ok(new UsageResponse("Persona service usage recorded."));
    }

    public record UsageRequest(
        @NotBlank @Size(max = 80) String persona,
        @NotBlank @Size(max = 120) String service,
        @Size(max = 4000) String details
    ) {
    }

    public record UsageResponse(String message) {
    }
}