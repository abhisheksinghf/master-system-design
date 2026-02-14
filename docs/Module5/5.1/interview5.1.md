---
title: Sync vs Async Communication – Interview Questions
sidebar_label: Interview Questions
---

# Sync vs Async Communication – Interview Questions

---

## 1. What is synchronous communication?

### Expected Answer
Synchronous communication is a request-response model where the caller waits (blocks) until the callee returns a response.

### Interview One-Liner ⭐
> In synchronous communication, the caller blocks until it receives a response.

---

## 2. What is asynchronous communication?

### Expected Answer
Asynchronous communication allows a service to send a message or event without waiting for the receiver to process it.

### Interview One-Liner ⭐
> In asynchronous communication, the caller does not wait for processing to complete.

---

## 3. What is the difference between blocking and non-blocking?

### Blocking
Thread waits until operation completes.

### Non-Blocking
Thread continues execution and handles response later (callback/event).

---

## 4. What are the advantages of synchronous communication?

### Expected Points
- Simple to implement
- Immediate response
- Stronger consistency
- Easier debugging

---

## 5. What are the disadvantages of synchronous communication?

### Expected Points
- Tight coupling
- Cascading failures
- Higher latency
- Limited scalability

---

## 6. What are the advantages of asynchronous communication?

### Expected Points
- Loose coupling
- Better scalability
- Failure isolation
- Traffic buffering

---

## 7. What are the disadvantages of asynchronous communication?

### Expected Points
- Increased complexity
- Harder debugging
- Eventual consistency
- Requires idempotency

---

## 8. REST vs Messaging — what’s the difference?

### Expected Answer
REST follows synchronous request-response, while messaging supports asynchronous communication using queues or events.

---

## 9. When should you use synchronous communication?

### Expected Use Cases
- Login requests
- Payment confirmation
- Form submissions
- Real-time responses required

---

## 10. When should you use asynchronous communication?

### Expected Use Cases
- Sending emails
- Notifications
- Analytics updates
- Background processing

---

## 11. How does async communication improve scalability?

### Expected Answer
It decouples services and allows tasks to be processed independently, preventing bottlenecks in the main request flow.

---

## 12. What happens if a downstream service fails in synchronous communication?

### Expected Answer
The entire request fails or times out, leading to cascading failures.

---

## 13. What happens if a consumer fails in asynchronous communication?

### Expected Answer
The message can be retried later without affecting the main user request.

---

## 14. Why is idempotency important in asynchronous systems?

### Expected Answer
Because retries may cause duplicate message processing.

---

## 15. Give a real-world example of combining sync and async.

### Expected Answer
In a payment system:
- Payment processing is synchronous.
- Sending receipt email is asynchronous.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Which model improves failure isolation?
2. Which model provides immediate feedback?
3. Why can sync systems cause cascading failures?
4. Why is async harder to debug?
5. Why are side effects often async?

---

## ⭐ Keywords Interviewers Like to Hear

- Blocking
- Non-blocking
- Decoupling
- Failure isolation
- Eventual consistency
- Idempotency

---

## ✅ You’re Strong in 5.1 If You Can:
- Clearly compare sync vs async
- Choose correct model for a use case
- Discuss scalability trade-offs
- Explain failure behavior confidently