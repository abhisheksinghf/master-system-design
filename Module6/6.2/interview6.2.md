---
title: Health Checks & Monitoring – Interview Questions
sidebar_label: Interview Questions
---

# Health Checks & Monitoring – Interview Questions

---

## 1. What is a health check?

### Expected Answer
A health check is a mechanism used to determine whether a service is functioning correctly and can handle traffic.

### Interview One-Liner ⭐
> Health checks prevent routing traffic to unhealthy services.

---

## 2. What is the difference between liveness and readiness checks?

### Expected Answer

- **Liveness Check** → Determines if the service is alive. If it fails, the service should be restarted.
- **Readiness Check** → Determines if the service is ready to handle traffic. If it fails, traffic should stop but restart may not be needed.

### Interview Gold Line ⭐
> Liveness restarts; readiness removes from traffic.

---

## 3. When should a liveness check fail?

### Expected Answer
- Application crash
- Deadlock
- Infinite loop
- Process not responding

---

## 4. When should a readiness check fail?

### Expected Answer
- Database unavailable
- Cache unavailable
- Application still starting
- External dependency failure

---

## 5. Why is readiness check important in microservices?

### Expected Answer
Because services may depend on other systems, and even if the service is running, it may not be ready to handle requests.

---

## 6. What happens if you confuse liveness and readiness?

### Expected Answer
The system may restart unnecessarily or continue routing traffic to unhealthy services.

---

## 7. What is monitoring?

### Expected Answer
Monitoring is the process of collecting and analyzing system metrics to ensure system health and performance.

---

## 8. What are key metrics to monitor?

### Expected Points
- Latency
- Throughput
- Error rate
- CPU usage
- Memory usage
- Queue backlog

---

## 9. Why is monitoring important in distributed systems?

### Expected Answer
Because issues may not be visible immediately, and early detection prevents large-scale failures.

---

## 10. What is alerting?

### Expected Answer
Alerting is the mechanism that notifies engineers when monitored metrics exceed predefined thresholds.

---

## 11. What is auto-scaling?

### Expected Answer
Auto-scaling automatically increases or decreases the number of service instances based on system load.

---

## 12. How does auto-scaling improve reliability?

### Expected Answer
It handles traffic spikes and prevents overload by adding more instances when necessary.

---

## 13. What happens if you don’t monitor queue backlog?

### Expected Answer
You may miss increasing load, leading to delays and eventual system failure.

---

## 14. In a payment system, what should be monitored closely?

### Expected Answer
- Payment success rate
- Transaction latency
- Error rate
- Database replication lag

---

## 15. Why is alert fatigue dangerous?

### Expected Answer
Too many false alerts cause engineers to ignore alerts, potentially missing real incidents.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. What does liveness check determine?
2. What does readiness check determine?
3. What are the three golden signals?
4. Why is monitoring critical?
5. How does auto-scaling help during traffic spikes?

---

## ⭐ Keywords Interviewers Like to Hear

- Liveness
- Readiness
- Monitoring
- Latency
- Error rate
- Auto-scaling
- Alerting
- SLA

---

## ✅ You’re Strong in 6.2 If You Can:
- Clearly explain liveness vs readiness
- Identify key monitoring metrics
- Discuss alerting strategy
- Explain auto-scaling triggers

---
