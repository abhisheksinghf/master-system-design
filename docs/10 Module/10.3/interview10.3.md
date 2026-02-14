---
title: Notification System – Interview Questions
sidebar_label: Interview Questions
---

# Notification System – Interview Questions

---

## 1. Why should notifications be asynchronous?

### Expected Answer
Because provider calls are slow/failure-prone and should not block primary user flows.

---

## 2. What channels are typically supported?

### Expected Answer
Email, SMS, push notifications.

---

## 3. Why do we need user preference storage?

### Expected Answer
To respect user opt-in/opt-out and channel priorities.

---

## 4. What is DLQ in notifications?

### Expected Answer
A queue for messages that fail repeatedly after retries.

---

## 5. How do you prevent duplicate sends?

### Expected Answer
Use idempotency keys and deduplicate by message ID.

---

## 6. What should router decide?

### Expected Answer
Channel selection, provider choice, and fallback route.

---

## 7. How to handle provider outage?

### Expected Answer
Circuit breaker + provider failover + retry.

---

## 8. What metrics matter most?

### Expected Answer
Delivery success rate, latency, queue lag, DLQ growth.

---

## 9. Why split workers by channel?

### Expected Answer
Different throughput/latency/failure characteristics per channel.

---

## 10. How do scheduled notifications work?

### Expected Answer
Store `scheduled_at` and enqueue when due via scheduler/cron worker.

---

## 11. At-least-once or exactly-once delivery?

### Expected Answer
Typically at-least-once with idempotent consumers.

---

## 12. Where should templates be rendered?

### Expected Answer
In notification service before provider call, with versioned templates.

---

## 13. How would you control costs?

### Expected Answer
Channel prioritization, batching, smart retries, provider pricing optimization.

---

## 14. Why keep provider adapters abstracted?

### Expected Answer
To switch providers without changing business logic.

---

## 15. Typical failure scenario to discuss?

### Expected Answer
Spike traffic + provider outage; queue absorbs load while fallback handles recovery.
