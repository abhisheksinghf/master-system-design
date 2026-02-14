---
title: Logging – Interview Questions
sidebar_label: Interview Questions
---

# Logging – Interview Questions

---

## 1. Why is logging important in distributed systems?

### Expected Answer
Because distributed systems involve multiple services and machines, logs provide visibility into system behavior, failures, and request flow.

### Interview One-Liner ⭐
> Logs are essential for debugging production systems.

---

## 2. What is structured logging?

### Expected Answer
Structured logging records logs in a machine-readable format (e.g., JSON) instead of plain text.

---

## 3. Why is structured logging better than plain text logging?

### Expected Points
- Easier to search and filter
- Machine-readable
- Better for analytics
- Works well with centralized logging systems

---

## 4. What are common log levels?

### Expected Answer
- DEBUG
- INFO
- WARN
- ERROR
- FATAL

---

## 5. What is centralized logging?

### Expected Answer
Centralized logging collects logs from multiple services into a single system for easier search and analysis.

---

## 6. Why is centralized logging necessary in microservices?

### Expected Answer
Because logs are distributed across multiple instances and machines, making local log inspection impractical.

---

## 7. What is a correlation ID?

### Expected Answer
A unique identifier attached to a request and propagated across services to trace the request flow.

---

## 8. Why are correlation IDs important?

### Expected Answer
Because a single user request may pass through multiple services, and correlation IDs help track it end-to-end.

---

## 9. What should never be logged?

### Expected Answer
- Passwords
- Credit card numbers
- API keys
- JWT tokens
- Sensitive personal data

---

## 10. What is the difference between logs and metrics?

### Expected Answer
- Logs provide detailed event-level information.
- Metrics provide aggregated numerical measurements (e.g., latency, error rate).

---

## 11. How do log levels help reduce noise?

### Expected Answer
They allow filtering logs based on severity so developers can focus on relevant information.

---

## 12. What problems arise from excessive logging?

### Expected Points
- Increased storage cost
- Performance overhead
- Harder debugging due to noise

---

## 13. How do you debug a failed request in microservices?

### Expected Answer
Use correlation ID to trace logs across services in a centralized logging system.

---

## 14. Why is timestamp important in logs?

### Expected Answer
To understand event sequence and correlate events across distributed systems.

---

## 15. How do you secure logging systems?

### Expected Answer
- Restrict access
- Encrypt logs at rest
- Avoid logging sensitive data
- Implement log retention policies

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why use structured logs?
2. What enables request tracing?
3. Should passwords be logged?
4. Why centralize logs?
5. What’s the difference between logs and metrics?

---

## ⭐ Keywords Interviewers Like to Hear

- Structured logging
- Centralized logging
- Correlation ID
- Log levels
- Observability
- Secure logging
- Log aggregation

---

## ✅ You’re Strong in 9.1 If You Can:
- Explain structured logging clearly
- Discuss centralized logging benefits
- Use correlation IDs properly
- Identify security risks in logging

---
