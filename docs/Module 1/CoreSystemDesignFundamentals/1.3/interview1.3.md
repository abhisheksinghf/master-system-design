---
title: Latency vs Throughput – Interview Questions
sidebar_label: "1.3 Interview Questions"
description: Interview questions and expected answers for latency and throughput concepts.
---

# Latency vs Throughput – Interview Questions

---

## 1. What is latency?

### Expected Answer
Latency is the time taken to process a single request from start to finish, usually measured in milliseconds.

### Interview One-Liner ⭐
> Latency measures how fast one request is handled.

---

## 2. What is throughput?

### Expected Answer
Throughput is the number of requests a system can handle per unit time, usually measured in requests per second (RPS).

### Interview One-Liner ⭐
> Throughput measures how much work the system can do.

---

## 3. Difference between latency and throughput?

### Expected Answer
- **Latency** → time per request  
- **Throughput** → number of requests per second  

### Interview Example
> A system can have high throughput but still high latency.

---

## 4. Can a system have low latency but low throughput?

### Correct Answer
Yes.

### Explanation
A system may process requests very fast but only a few at a time due to limited concurrency.

---

## 5. Can a system have high throughput but high latency?

### Correct Answer
Yes.

### Explanation
Batch or async systems process many requests together, increasing throughput but delaying individual responses.

---

## 6. Which is more important: latency or throughput?

### Correct Answer
It depends on the system.

### Examples
- Payment systems → **low latency**
- Analytics/logging → **high throughput**

### Interview Line ⭐
> System requirements decide whether latency or throughput is more important.

---

## 7. What is tail latency?

### Expected Answer
Tail latency refers to latency experienced by the slowest requests, usually measured as p95 or p99 latency.

### Interview Gold Line ⭐
> Tail latency matters more than average latency.

---

## 8. Why is tail latency important?

### Expected Points
- Users notice slow requests
- SLAs are based on p95/p99
- A few slow calls can degrade user experience

---

## 9. How do synchronous calls affect latency?

### Expected Answer
Each synchronous call adds waiting time, increasing overall latency.

### Interview Example
> Chained microservice calls increase end-to-end latency.

---

## 10. How does asynchronous processing affect throughput?

### Expected Answer
Async processing allows the system to handle more requests concurrently, increasing throughput.

---

## 11. How does caching affect latency and throughput?

### Expected Answer
- Reduces latency by avoiding expensive operations
- Increases throughput by reducing backend load

### Interview Line ⭐
> Caching improves both latency and throughput.

---

## 12. How do message queues impact latency and throughput?

### Expected Answer
- Increase throughput
- Increase latency for individual requests

### Interview Example
> Queues trade latency for higher throughput and reliability.

---

## 13. Why do microservices increase latency?

### Expected Answer
Because each inter-service call adds network overhead and processing time.

### Interview Line ⭐
> Microservices improve scalability but can increase latency.

---

## 14. How do you reduce latency in a system?

### Expected Points
- Reduce network hops
- Use caching
- Avoid blocking calls
- Use faster serialization

---

## 15. How do you increase throughput in a system?

### Expected Points
- Async processing
- Parallelism
- Batching
- Horizontal scaling

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Is low latency always required?
2. Can improving throughput hurt latency?
3. Why does batching increase throughput?
4. Why does network communication add latency?
5. Why are payment systems latency-sensitive?

---

## ⭐ Keywords Interviewers Like to Hear

- Tail latency (p95 / p99)
- Latency-sensitive system
- Throughput-oriented system
- Async processing
- Trade-offs

---

## ✅ You’re Strong in 1.3 If You Can:
- Clearly differentiate latency and throughput
- Give real system examples
- Talk about tail latency
- Explain trade-offs confidently

---