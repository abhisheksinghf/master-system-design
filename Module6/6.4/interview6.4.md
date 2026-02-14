---
title: Rate Limiting – Interview Questions
sidebar_label: Interview Questions
---

# Rate Limiting – Interview Questions

---

## 1. What is rate limiting?

### Expected Answer
Rate limiting is a mechanism that restricts the number of requests a client can make within a specified time window to protect system stability.

### Interview One-Liner ⭐
> Rate limiting protects systems from overload and abuse.

---

## 2. Why is rate limiting important in distributed systems?

### Expected Points
- Prevent abuse and bot attacks
- Protect backend services
- Maintain fairness among users
- Avoid cascading failures
- Control traffic spikes

---

## 3. What HTTP status code is returned when rate limit is exceeded?

### Expected Answer
HTTP 429 – Too Many Requests.

---

## 4. What is the Token Bucket algorithm?

### Expected Answer
Tokens are added to a bucket at a fixed rate. Each request consumes a token. If no tokens are available, the request is rejected.

---

## 5. What is the main advantage of Token Bucket?

### Expected Answer
It allows short bursts of traffic while maintaining an average rate limit.

---

## 6. What is the Leaky Bucket algorithm?

### Expected Answer
Requests enter a queue and are processed at a constant rate. Excess requests are dropped if the queue is full.

---

## 7. What is the key difference between Token Bucket and Leaky Bucket?

### Expected Answer

- Token Bucket → allows bursts.
- Leaky Bucket → enforces constant output rate.

---

## 8. What is Fixed Window rate limiting?

### Expected Answer
Counts requests in a fixed time window (e.g., 100 requests per minute). Resets counter after window ends.

---

## 9. What is Sliding Window rate limiting?

### Expected Answer
Tracks requests over a rolling time window to reduce burst issues at window boundaries.

---

## 10. How do you implement rate limiting in a distributed system?

### Expected Answer
Use a centralized data store (like Redis) with atomic increment operations to maintain consistent request counters across instances.

---

## 11. What challenges arise in distributed rate limiting?

### Expected Points
- Race conditions
- Synchronization issues
- Performance overhead
- Network latency

---

## 12. Where is rate limiting typically applied?

### Expected Answer
- API Gateway
- Load balancer
- Reverse proxy
- Application layer

---

## 13. What is the difference between rate limiting and throttling?

### Expected Answer
- Rate limiting restricts number of requests.
- Throttling controls the processing rate or bandwidth.

---

## 14. How would you rate limit login attempts?

### Expected Answer
Limit failed login attempts per IP or per user ID within a time window (e.g., 5 attempts per minute).

---

## 15. Why is burst allowance useful?

### Expected Answer
It allows legitimate users to make short bursts of requests without being blocked while maintaining overall rate control.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Which algorithm allows bursts?
2. Which algorithm smooths traffic?
3. What status code indicates rate limit exceeded?
4. Why use Redis for rate limiting?
5. What problem does sliding window solve?

---

## ⭐ Keywords Interviewers Like to Hear

- Token Bucket
- Leaky Bucket
- Sliding Window
- HTTP 429
- Distributed counters
- Redis
- Burst control
- Fairness

---

## ✅ You’re Strong in 6.4 If You Can:
- Explain Token vs Leaky Bucket clearly
- Discuss distributed rate limiting challenges
- Implement per-user/IP limits conceptually
- Handle real-world abuse scenarios

---
