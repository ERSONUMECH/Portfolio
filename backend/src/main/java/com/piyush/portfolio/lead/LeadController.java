package com.piyush.portfolio.lead;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/leads")
public class LeadController {
    private final BusinessLeadRepository leadRepository;

    public LeadController(BusinessLeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    @PostMapping
    public ResponseEntity<LeadResponse> create(@Valid @RequestBody LeadRequest request) {
        leadRepository.save(new BusinessLead(request.name(), request.email(), request.service(), request.message()));
        return ResponseEntity.ok(new LeadResponse("Thanks. Your business inquiry has been received."));
    }

    public record LeadRequest(
        @NotBlank @Size(max = 160) String name,
        @NotBlank @Email @Size(max = 320) String email,
        @NotBlank @Size(max = 120) String service,
        @NotBlank @Size(max = 4000) String message
    ) {
    }

    public record LeadResponse(String message) {
    }
}