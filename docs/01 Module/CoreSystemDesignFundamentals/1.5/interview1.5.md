---
title: Consistency Models – Interview Questions
sidebar_label: Interview Questions
---

# Consistency Models – Interview Questions

---

## 1. What is a consistency model?

### Expected Answer
A consistency model defines the rules about when and how updates to data become visible to different clients in a distributed system.

### Interview One-Liner ⭐
> Consistency models describe what data clients are allowed to see.

---

## 2. What is strong consistency?

### Expected Answer
Strong consistency guarantees that after a write completes, all subsequent reads return the most recent value.

### Example
- Bank balance updates

---

## 3. What is eventual consistency?

### Expected Answer
Eventual consistency guarantees that if no new writes occur, all replicas will eventually converge to the same value.

### Interview Line ⭐
> Eventual consistency allows temporary inconsistencies for higher availability.

---

## 4. When would you choose strong consistency?

### Expected Use Cases
- Banking systems
- Payment ledgers
- Inventory systems

### Reason
Incorrect data is unacceptable.

---

## 5. When is eventual consistency acceptable?

### Expected Use Cases
- Social media feeds
- Likes/views counters
- Caches

### Reason
Temporary inconsistency does not break business logic.

---

## 6. What is read-after-write consistency?

### Expected Answer
A client always sees its own writes immediately, even if other clients may not.

### Example
- Updating user profile

---

## 7. What is monotonic read consistency?

### Expected Answer
Once a client has seen a value, it will never see an older value later.

---

## 8. What is monotonic write consistency?

### Expected Answer
Writes from a single client are applied in the order they were issued.

---

## 9. What is causal consistency?

### Expected Answer
Operations that are causally related must be seen in the same order by all clients.

### Example
- A comment should not appear before the post.

---

## 10. How do consistency models relate to CAP?

### Expected Answer
Consistency models are how CAP trade-offs are implemented:
- CP systems → strong consistency
- AP systems → eventual consistency

---

## 11. Why is strong consistency expensive?

### Expected Points
- Requires coordination across replicas
- Increases latency
- Reduces availability during failures

---

## 12. Can a system use multiple consistency models?

### Correct Answer
Yes.

### Explanation
Modern systems often use different consistency models for different operations.

### Interview Gold Line ⭐
> Choose the weakest consistency model that satisfies business requirements.

---

## 13. What consistency model improves user experience without full strong consistency?

### Correct Answer
Read-after-write consistency.

---

## 14. What are common misconceptions about eventual consistency?

### Expected Clarification
- Data is not wrong forever
- Inconsistency is temporary
- Eventual consistency is safe for many use cases

---

## 15. Give an example of a hybrid consistency system.

### Expected Answer
- Social media app:
  - Posting content → strong or causal consistency
  - Feed display → eventual consistency

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Does eventual consistency mean data loss?
2. Can strong consistency exist without latency cost?
3. Which consistency model is best for caches?
4. Why is causal consistency useful?
5. Which consistency model is most expensive?

---

## ⭐ Keywords Interviewers Like to Hear

- Strong consistency
- Eventual consistency
- Read-after-write
- Causal consistency
- Trade-offs

---

## ✅ You’re Strong in 1.5 If You Can:
- Explain each model clearly
- Choose the right model for a system
- Relate consistency to CAP
- Talk about trade-offs confidently

---
