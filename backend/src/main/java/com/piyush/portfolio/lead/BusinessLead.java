package com.piyush.portfolio.lead;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.Instant;

@Entity
@Table(name = "business_leads")
public class BusinessLead {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 160)
    private String name;

    @Column(nullable = false, length = 320)
    private String email;

    @Column(nullable = false, length = 120)
    private String service;

    @Column(nullable = false, length = 4000)
    private String message;

    @Column(nullable = false)
    private Instant createdAt;

    protected BusinessLead() {
    }

    public BusinessLead(String name, String email, String service, String message) {
        this.name = name;
        this.email = email;
        this.service = service;
        this.message = message;
        this.createdAt = Instant.now();
    }
}