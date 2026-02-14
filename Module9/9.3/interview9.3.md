---
title: Distributed Tracing – Interview Questions
sidebar_label: Interview Questions
---

# Distributed Tracing – Interview Questions

---

## 1. What is distributed tracing?

### Expected Answer
Distributed tracing tracks a single request as it flows across multiple services in a distributed system.

### Interview One-Liner ⭐
> Distributed tracing provides end-to-end visibility of a request.

---

## 2. Why is distributed tracing important in microservices?

### Expected Answer
Because a single request may pass through multiple services, and tracing helps identify bottlenecks and failures across service boundaries.

---

## 3. What is a trace?

### Expected Answer
A trace represents the complete journey of a single request across services.

---

## 4. What is a span?

### Expected Answer
A span represents a single unit of work within a trace, such as a service call or database query.

---

## 5. What is a Trace ID?

### Expected Answer
A unique identifier assigned to a request that is propagated across all services involved in processing that request.

---

## 6. Why must the Trace ID be propagated across services?

### Expected Answer
So that all spans belonging to the same request can be correlated and visualized together.

---

## 7. What problems does distributed tracing solve?

### Expected Points
- Identifying slow services
- Debugging request failures
- Detecting latency bottlenecks
- Understanding service dependencies

---

## 8. How is tracing different from logging?

### Expected Answer
- Logging records events within a service.
- Tracing connects events across multiple services for a single request.

---

## 9. How is tracing different from metrics?

### Expected Answer
- Metrics provide aggregated data.
- Tracing provides request-level detail.

---

## 10. Why is sampling used in distributed tracing?

### Expected Answer
Because tracing every request is expensive in terms of storage and performance, so only a subset of requests is traced.

---

## 11. What is tail-based sampling?

### Expected Answer
A sampling strategy where requests are sampled based on outcome (e.g., slow or failed requests).

---

## 12. How would you debug high latency using tracing?

### Expected Answer
Inspect the trace to find the span with the highest latency and identify which service or dependency is causing delay.

---

## 13. What happens if Trace IDs are not propagated?

### Expected Answer
Request flow becomes fragmented, making it impossible to reconstruct the full journey.

---

## 14. What is the relationship between logs, metrics, and tracing?

### Expected Answer
- Logs → Event details  
- Metrics → Aggregated system health  
- Tracing → End-to-end request visibility  

---

## 15. In a payment system, how does tracing help?

### Expected Answer
It identifies which service (e.g., fraud detection, database, external API) is causing delays or failures in payment processing.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. What connects spans across services?
2. What does a span represent?
3. Why is sampling necessary?
4. What does tracing help identify?
5. How does tracing differ from metrics?

---

## ⭐ Keywords Interviewers Like to Hear

- Trace
- Span
- Trace ID
- Span ID
- End-to-end visibility
- Sampling
- Latency bottleneck
- Observability

---

## ✅ You’re Strong in 9.3 If You Can:
- Explain trace vs span clearly
- Describe trace ID propagation
- Differentiate logs, metrics, tracing
- Debug latency using tracing confidently

---
