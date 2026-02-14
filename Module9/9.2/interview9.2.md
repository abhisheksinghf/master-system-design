---
title: Metrics & Monitoring – Interview Questions
sidebar_label: Interview Questions
---

# Metrics & Monitoring – Interview Questions

---

## 1. What is the difference between logs and metrics?

### Expected Answer
- Logs provide detailed event-level records.
- Metrics provide aggregated numerical measurements over time.

### Interview One-Liner ⭐
> Logs explain what happened; metrics show how often and how severe.

---

## 2. What are the four golden signals?

### Expected Answer
- Latency
- Traffic
- Errors
- Saturation

---

## 3. Why is latency important?

### Expected Answer
Latency directly impacts user experience and system responsiveness.

---

## 4. Why should we monitor p95 or p99 latency instead of average latency?

### Expected Answer
Because average latency can hide slow requests. Percentiles reveal tail latency, which impacts real users.

---

## 5. What is traffic in monitoring?

### Expected Answer
Traffic refers to system load, such as requests per second (RPS) or queries per second (QPS).

---

## 6. What does saturation measure?

### Expected Answer
Saturation measures how close a system is to its capacity limits (e.g., CPU, memory, thread pool usage).

---

## 7. What is an SLI?

### Expected Answer
A Service Level Indicator (SLI) is a measured metric that reflects system performance (e.g., request success rate).

---

## 8. What is an SLO?

### Expected Answer
A Service Level Objective (SLO) is a target value for an SLI (e.g., 99.9% uptime).

---

## 9. What is an SLA?

### Expected Answer
A Service Level Agreement (SLA) is a contractual agreement defining service guarantees and penalties.

---

## 10. What is the difference between monitoring and alerting?

### Expected Answer
- Monitoring collects and visualizes metrics.
- Alerting notifies engineers when thresholds are exceeded.

---

## 11. What metrics would you monitor in a payment system?

### Expected Points
- Payment success rate
- Transaction latency
- Error rate
- Queue backlog
- Database latency
- CPU/memory usage

---

## 12. Why is high CPU usage alone not sufficient to detect issues?

### Expected Answer
Because user-facing problems are better detected through latency and error rate metrics.

---

## 13. What is tail latency?

### Expected Answer
Tail latency refers to the slowest requests (e.g., p95 or p99 latency).

---

## 14. What happens if alerts are too sensitive?

### Expected Answer
Alert fatigue occurs, causing engineers to ignore real issues.

---

## 15. What should alerts be based on?

### Expected Answer
User-impacting metrics such as high error rate or latency rather than minor internal fluctuations.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. What are the golden signals?
2. Why is p99 important?
3. What does saturation measure?
4. What is the difference between SLO and SLA?
5. Why avoid alert fatigue?

---

## ⭐ Keywords Interviewers Like to Hear

- Golden signals
- p95 / p99 latency
- SLI
- SLO
- SLA
- Tail latency
- Alert fatigue
- Capacity monitoring

---

## ✅ You’re Strong in 9.2 If You Can:
- Explain golden signals clearly
- Discuss tail latency importance
- Differentiate SLI, SLO, SLA
- Propose meaningful alerts

---
