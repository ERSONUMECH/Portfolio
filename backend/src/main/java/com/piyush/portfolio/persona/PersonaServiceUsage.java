package com.piyush.portfolio.persona;

import java.time.Instant;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "persona_service_usage")
public class PersonaServiceUsage {
    @Id
    private String id;

    private String persona;
    private String service;
    private String details;
    private Instant createdAt;

    protected PersonaServiceUsage() {
    }

    public PersonaServiceUsage(String persona, String service, String details) {
        this.persona = persona;
        this.service = service;
        this.details = details;
        this.createdAt = Instant.now();
    }
}