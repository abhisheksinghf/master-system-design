---
title: CAP Theorem – Interview Questions
sidebar_label: Interview Questions
---

# CAP Theorem – Interview Questions

---

## 1. What is the CAP Theorem?

### Expected Answer
The CAP Theorem states that a distributed system can guarantee at most two of the following three properties at the same time: Consistency, Availability, and Partition Tolerance.

### Interview One-Liner ⭐
> In the presence of a network partition, a system must choose between consistency and availability.

---

## 2. What do Consistency, Availability, and Partition Tolerance mean?

### Consistency (C)
All clients see the most recent write.

### Availability (A)
Every request receives a response, even during failures.

### Partition Tolerance (P)
The system continues to operate despite network failures between nodes.

---

## 3. Why is partition tolerance mandatory in distributed systems?

### Expected Answer
Because network failures are inevitable in distributed systems, so systems must tolerate partitions to function correctly.

### Interview Line ⭐
> Network partitions are not optional; they will happen.

---

## 4. Can a system be CA in real-world distributed systems?

### Correct Answer
No.

### Explanation
CA systems assume no network partitions, which is unrealistic once systems are distributed.

---

## 5. What happens during a network partition?

### Expected Answer
Nodes cannot communicate with each other, forcing the system to choose between consistency and availability.

---

## 6. What is a CP system?

### Expected Answer
A CP system prioritizes consistency and partition tolerance, potentially rejecting requests during network failures to maintain correctness.

### Examples
- Banking systems
- Payment systems

---

## 7. What is an AP system?

### Expected Answer
An AP system prioritizes availability and partition tolerance, always responding to requests even if data may be stale.

### Examples
- Social media feeds
- DNS
- Caching systems

---

## 8. Which CAP model do payment systems usually follow and why?

### Correct Answer
CP.

### Reason
Correctness is more important than availability; returning incorrect data is unacceptable.

---

## 9. Which CAP model do social media systems usually follow and why?

### Correct Answer
AP.

### Reason
Showing slightly stale data is acceptable, but the system must always respond.

---

## 10. Does CAP mean you must choose only one model for the entire system?

### Correct Answer
No.

### Explanation
Modern systems often make CAP trade-offs per operation rather than system-wide.

### Interview Gold Line ⭐
> CAP choices can be operation-specific.

---

## 11. Does CAP apply all the time?

### Correct Answer
No.

### Explanation
CAP trade-offs only apply during network partitions.

---

## 12. How does CAP relate to latency?

### Expected Answer
Stronger consistency requires more coordination between nodes, which increases latency.

---

## 13. Is an AP system eventually consistent?

### Expected Answer
Yes.

### Explanation
AP systems rely on eventual consistency to synchronize data after partitions heal.

---

## 14. What are common misconceptions about CAP?

### Expected Points
- You always choose two forever ❌
- AP systems are incorrect ❌
- Consistency means instant sync everywhere ❌

---

## 15. Give a real-world example where availability is preferred over consistency.

### Expected Answer
- Social media feeds
- DNS resolution
- Cached product listings

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why can’t we have C, A, and P together?
2. What is more important in payments: C or A?
3. What happens if a CP system faces a partition?
4. What happens if an AP system faces a partition?
5. Can a single-node database be CA?

---

## ⭐ Keywords Interviewers Like to Hear

- Network partition
- Strong consistency
- Eventual consistency
- Trade-offs
- Distributed systems

---

## ✅ You’re Strong in 1.4 If You Can:
- Explain CAP clearly without confusion
- Relate CAP to real systems
- Correct misconceptions
- Discuss trade-offs confidently

---
