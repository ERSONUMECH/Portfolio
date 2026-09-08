package com.piyush.portfolio.agent;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.Instant;

@Entity
@Table(name = "agent_conversations")
public class AgentConversation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 4000)
    private String message;

    @Column(length = 160)
    private String name;

    @Column(length = 320)
    private String email;

    @Column(nullable = false, length = 120)
    private String intent;

    @Column(nullable = false, length = 4000)
    private String reply;

    @Column(nullable = false)
    private Instant createdAt;

    protected AgentConversation() {
    }

    public AgentConversation(String message, String name, String email, String intent, String reply) {
        this.message = message;
        this.name = name;
        this.email = email;
        this.intent = intent;
        this.reply = reply;
        this.createdAt = Instant.now();
    }

    public Long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getIntent() {
        return intent;
    }

    public String getReply() {
        return reply;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }
}
