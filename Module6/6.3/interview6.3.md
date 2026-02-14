---
title: Circuit Breaker Pattern – Interview Questions
sidebar_label: Interview Questions
---

# Circuit Breaker Pattern – Interview Questions

---

## 1. What is the Circuit Breaker pattern?

### Expected Answer
The Circuit Breaker pattern is a resilience mechanism that stops calling a failing service after repeated failures to prevent cascading system failures.

### Interview One-Liner ⭐
> Circuit breakers prevent cascading failures by failing fast.

---

## 2. Why do we need a circuit breaker in distributed systems?

### Expected Points
- Prevent thread exhaustion
- Avoid cascading failures
- Reduce latency impact
- Protect upstream services

---

## 3. What are the three states of a circuit breaker?

### Expected Answer
- Closed
- Open
- Half-Open

---

## 4. What happens in the Closed state?

### Expected Answer
Requests flow normally. Failures are monitored, and if they exceed a threshold, the circuit transitions to Open.

---

## 5. What happens in the Open state?

### Expected Answer
No requests are sent to the failing service. The system fails fast and immediately returns errors.

---

## 6. What happens in the Half-Open state?

### Expected Answer
After a cooldown period, a limited number of test requests are allowed. If successful, the circuit closes; otherwise, it reopens.

---

## 7. What is fail-fast behavior?

### Expected Answer
Fail-fast means immediately returning an error instead of waiting for a timeout when a dependency is known to be failing.

---

## 8. How is a circuit breaker different from retry logic?

### Expected Answer
- Retry attempts to re-execute a failed request.
- Circuit breaker stops sending requests after repeated failures.

---

## 9. Should retry and circuit breaker be used together?

### Expected Answer
Yes, but carefully. Retry handles transient failures; circuit breaker handles persistent failures.

---

## 10. What metrics can trigger a circuit breaker?

### Expected Points
- Error rate
- Timeout rate
- Response latency
- Consecutive failures

---

## 11. What is a cascading failure?

### Expected Answer
A cascading failure occurs when one failing service causes other dependent services to fail due to blocked resources or overload.

---

## 12. How does a circuit breaker improve system resilience?

### Expected Answer
It isolates failures and prevents system-wide degradation.

---

## 13. In a payment system, where would you use a circuit breaker?

### Expected Answer
On calls to non-critical downstream services such as fraud detection, notification, or analytics.

---

## 14. What are common configuration challenges in circuit breakers?

### Expected Points
- Setting failure threshold
- Choosing timeout duration
- Determining cooldown period

---

## 15. What happens if the circuit breaker opens too aggressively?

### Expected Answer
Healthy services may be unnecessarily blocked, reducing system functionality.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. What problem does circuit breaker solve?
2. What state blocks all traffic?
3. What state tests recovery?
4. Why is fail-fast important?
5. What is the difference between retry and circuit breaker?

---

## ⭐ Keywords Interviewers Like to Hear

- Cascading failure
- Fail-fast
- Closed state
- Open state
- Half-Open state
- Failure threshold
- Timeout
- Resilience

---

## ✅ You’re Strong in 6.3 If You Can:
- Explain the three states clearly
- Compare retry vs circuit breaker
- Discuss cascading failures
- Apply circuit breaker in real-world example

---
