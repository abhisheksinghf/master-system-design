---
title: Scalability Basics – Interview Questions
sidebar_label: "1.2 Interview Questions"
description: Interview questions and expected answers for scalability fundamentals.
---

# Module 1.2 – Scalability Basics  
## Interview Questions & Expected Answers

---

## 1. What is scalability?

### Expected Answer
Scalability is the ability of a system to handle increased load (users, requests, data) without performance degradation or major redesign.

### Interview One-Liner ⭐
> Scalability is about growth handling, not speed.

---

## 2. Difference between scalability and performance?

### Performance
- How fast the system responds

### Scalability
- How well the system handles growth

### Interview Example
> A system can be fast for 100 users but crash at 10,000 users — fast but not scalable.

---

## 3. Vertical scaling vs horizontal scaling?

### Vertical Scaling
- Add more CPU/RAM to one machine
- Simple but limited

### Horizontal Scaling
- Add more machines
- Requires stateless services

### Interview Gold Line ⭐
> Horizontal scaling is preferred for large-scale systems.

---

## 4. Why is horizontal scaling preferred?

### Expected Points
- No single hardware limit
- Fault tolerance
- Cheaper long-term

### Interview Add-on
> It avoids single points of failure.

---

## 5. What is load in system design?

### Expected Answer
Load refers to the demand on a system, usually measured in:
- Requests per second (RPS)
- Concurrent users
- Data size

---

## 6. How do you estimate system load?

### Expected Steps
1. Number of users
2. Requests per user
3. Traffic pattern

### Example
```

1M users × 10 requests/day ≈ 115 RPS

```

---

## 7. What is a bottleneck?

### Expected Answer
A bottleneck is the component that limits system performance or scalability under load.

### Common Bottlenecks
- Database
- Network
- CPU
- Locks

---

## 8. What is a Single Point of Failure (SPOF)?

### Expected Answer
A SPOF is a component whose failure brings down the entire system.

### Interview Line ⭐
> Good designs eliminate SPOFs through redundancy.

---

## 9. Why are databases usually the first bottleneck?

### Expected Points
- Centralized state
- Disk I/O limits
- Lock contention

### Interview Line
> Stateless services scale easily; databases do not.

---

## 10. How do you scale stateless services?

### Expected Answer
By adding more instances behind a load balancer.

### Requirements
- No session stored in memory
- Externalize state

---

## 11. How do you scale stateful components like databases?

### Expected Strategies
- Read replicas
- Sharding
- Caching
- Asynchronous writes

---

## 12. What is read-heavy vs write-heavy traffic?

### Read-Heavy
- More reads than writes
- Use caching & replicas

### Write-Heavy
- Many writes
- Use sharding & async processing

---

## 13. Can you scale infinitely by adding servers?

### Correct Answer
No.

### Why?
- Databases
- Network limits
- Coordination overhead

### Interview Line ⭐
> Scaling always introduces new bottlenecks.

---

## 14. What happens if you over-scale?

### Expected Answer
- Higher cost
- Operational complexity
- Harder maintenance

---

## 15. What happens if you under-scale?

### Expected Answer
- System crashes
- High latency
- Poor user experience

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why do stateless services scale better?
2. Why is database scaling hard?
3. What comes first: caching or sharding?
4. Can vertical scaling solve all problems?
5. Why does load balancing matter?

---

## ⭐ Key Interview Keywords to Use Naturally

- Horizontal scaling
- Bottlenecks
- SPOF
- Stateless services
- Load estimation
- Trade-offs

---

## ✅ If You Can Answer These, You’re Strong in 1.2

- Explain scaling clearly
- Identify bottlenecks
- Choose horizontal over vertical
- Talk about database limitations