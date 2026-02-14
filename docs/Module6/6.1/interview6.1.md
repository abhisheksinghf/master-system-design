---
title: Designing for Failures – Interview Questions
sidebar_label: Interview Questions
---

# Designing for Failures – Interview Questions

---

## 1. Why are failures inevitable in distributed systems?

### Expected Answer
Because distributed systems involve multiple machines, networks, and components, any of which can fail due to hardware issues, network problems, software bugs, or human errors.

### Interview One-Liner ⭐
> In distributed systems, failure is normal — not exceptional.

---

## 2. What is a Single Point of Failure (SPOF)?

### Expected Answer
A Single Point of Failure is a component whose failure causes the entire system to fail.

---

## 3. Give an example of a SPOF.

### Expected Answer
- A single database instance without replication.
- A single load balancer without backup.
- A single application server.

---

## 4. How do you eliminate a Single Point of Failure?

### Expected Answer
By adding redundancy, such as:
- Multiple servers
- Replicated databases
- Backup infrastructure

---

## 5. What is redundancy?

### Expected Answer
Redundancy means having multiple instances of a component so that if one fails, others continue operating.

---

## 6. What is the difference between Active-Active and Active-Passive setups?

### Active-Active
All nodes handle traffic simultaneously.

### Active-Passive
One node handles traffic; backup takes over if primary fails.

---

## 7. What is a failure domain?

### Expected Answer
A failure domain is a boundary within which failures are correlated, such as a single server rack or availability zone.

---

## 8. Why is it important to distribute systems across failure domains?

### Expected Answer
To prevent correlated failures from bringing down all replicas simultaneously.

---

## 9. What is graceful degradation?

### Expected Answer
Graceful degradation means the system continues functioning with reduced features when some components fail.

Example:
Checkout works even if recommendation system is down.

---

## 10. What is the fail-fast principle?

### Expected Answer
A system should quickly detect and stop using unhealthy components to prevent cascading failures.

---

## 11. Why should you design for the worst-case scenario?

### Expected Answer
Because distributed systems will eventually encounter failures, and planning only for the happy path leads to outages.

---

## 12. What happens if you ignore SPOFs in system design?

### Expected Answer
The system becomes fragile and can experience full outages from a single failure.

---

## 13. How does redundancy improve availability?

### Expected Answer
If one instance fails, other instances continue serving requests.

---

## 14. In a payment system, which components must never fail?

### Expected Answer
Critical path components such as payment authorization and balance updates must be highly available.

---

## 15. Which components can degrade gracefully in a payment system?

### Expected Answer
Non-critical services like email notifications, analytics, or logging.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. What is a SPOF?
2. Why is redundancy important?
3. What is graceful degradation?
4. What is a failure domain?
5. Why should you assume failure will happen?

---

## ⭐ Keywords Interviewers Like to Hear

- Single Point of Failure (SPOF)
- Redundancy
- Active-Active
- Active-Passive
- Failure domain
- Graceful degradation
- Fail-fast

---

## ✅ You’re Strong in 6.1 If You Can:
- Identify SPOFs in a system diagram
- Propose redundancy strategies
- Discuss failure domains confidently
- Explain graceful degradation clearly

---
