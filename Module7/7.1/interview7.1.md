---
title: Time & Ordering Problems – Interview Questions
sidebar_label: Interview Questions
---

# Time & Ordering Problems – Interview Questions

---

## 1. Why is time unreliable in distributed systems?

### Expected Answer
Because each machine has its own physical clock, and clocks may drift (clock skew). Network delays further complicate event ordering.

### Interview One-Liner ⭐
> There is no global clock in distributed systems.

---

## 2. What is clock skew?

### Expected Answer
Clock skew is the difference in time between system clocks on different machines.

---

## 3. Why is clock skew dangerous?

### Expected Points
- Incorrect event ordering
- Token expiry issues
- Inconsistent logs
- Conflict resolution errors

---

## 4. Does synchronizing clocks via NTP eliminate ordering problems?

### Expected Answer
No. NTP reduces skew but does not eliminate it completely, and network delays still affect ordering.

---

## 5. Why does arrival order not guarantee event order?

### Expected Answer
Because network latency can cause messages to arrive in a different order than they were sent.

---

## 6. What is a logical clock?

### Expected Answer
A logical clock is a mechanism that tracks event ordering based on causality instead of physical time.

---

## 7. What is a Lamport clock?

### Expected Answer
A Lamport clock assigns increasing counters to events to maintain a happens-before relationship across distributed processes.

---

## 8. What does the “happens-before” relationship mean?

### Expected Answer
If event A happened before event B causally, then the timestamp of A will be smaller than B.

---

## 9. Can Lamport clocks detect concurrent events?

### Expected Answer
No. Lamport clocks establish ordering but cannot always detect concurrency.

---

## 10. What are concurrent events?

### Expected Answer
Events that have no causal relationship and occur independently of each other.

---

## 11. Why is event ordering important in distributed systems?

### Expected Points
- Financial transactions
- Replication
- Event sourcing
- Distributed logs
- Conflict resolution

---

## 12. Give an example where incorrect ordering causes issues.

### Expected Answer
Processing a payment before recording an order due to clock differences.

---

## 13. Why can’t we rely purely on timestamps for conflict resolution?

### Expected Answer
Because physical timestamps may not accurately represent causal order due to clock skew and network delays.

---

## 14. What is the difference between physical and logical clocks?

### Expected Answer
- Physical clocks represent real-world time.
- Logical clocks track event causality.

---

## 15. How do distributed databases handle ordering issues?

### Expected Answer
Using logical clocks, version numbers, or consensus mechanisms to establish consistent ordering.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. What causes clock skew?
2. What does NTP do?
3. What does Lamport clock track?
4. What is concurrency in distributed systems?
5. Why is arrival order unreliable?

---

## ⭐ Keywords Interviewers Like to Hear

- Clock skew
- No global clock
- Network latency
- Logical clocks
- Lamport clock
- Happens-before
- Concurrency
- Causality

---

## ✅ You’re Strong in 7.1 If You Can:
- Explain why time cannot be trusted
- Define clock skew clearly
- Explain logical clocks confidently
- Discuss ordering challenges with examples

---
