---
title: Delivery Semantics – Interview Questions
sidebar_label: Interview Questions
---

# Delivery Semantics – Interview Questions

---

## 1. What are delivery semantics in messaging systems?

### Expected Answer
Delivery semantics define how many times a message will be delivered to a consumer in a distributed system.

### Interview One-Liner ⭐
> Delivery semantics define reliability guarantees for messages.

---

## 2. What is At-Most-Once delivery?

### Expected Answer
A message is delivered zero or one time. If failure occurs, the message may be lost.

### Trade-Off
No duplicates, but possible data loss.

---

## 3. What is At-Least-Once delivery?

### Expected Answer
A message is delivered one or more times. The system retries if processing fails.

### Trade-Off
No data loss, but duplicates are possible.

### Interview Gold Line ⭐
> Most real-world systems use at-least-once delivery.

---

## 4. What is Exactly-Once delivery?

### Expected Answer
A message is delivered exactly one time, with no duplicates and no loss.

### Reality
Very complex and expensive in distributed systems.

---

## 5. Why is Exactly-Once hard to achieve?

### Expected Points
- Requires coordination across systems
- Needs deduplication mechanisms
- Requires transactional guarantees
- Complex failure handling

---

## 6. What is idempotency?

### Expected Answer
An operation is idempotent if executing it multiple times produces the same result as executing it once.

Example:
Marking order status as “completed” safely multiple times.

---

## 7. Why is idempotency important in At-Least-Once systems?

### Expected Answer
Because duplicate messages may be delivered, and the system must avoid duplicate side effects.

---

## 8. Which delivery guarantee may cause data loss?

### Expected Answer
At-Most-Once.

---

## 9. Which delivery guarantee may cause duplicate processing?

### Expected Answer
At-Least-Once.

---

## 10. Which delivery guarantee is most expensive?

### Expected Answer
Exactly-Once.

---

## 11. Can you achieve Exactly-Once purely through messaging?

### Expected Answer
No. It often requires coordination with storage systems and idempotent processing logic.

---

## 12. Give a real-world example where At-Least-Once is acceptable.

### Expected Answer
Email notifications — sending twice is better than not sending at all.

---

## 13. Give a real-world example where duplicates are dangerous.

### Expected Answer
Charging a customer twice in a payment system.

Solution:
Use idempotency keys.

---

## 14. Does delivery guarantee imply ordering guarantee?

### Expected Answer
No. Delivery semantics and ordering guarantees are separate concerns.

---

## 15. How do systems typically prevent duplicate side effects?

### Expected Answer
By using idempotency keys, deduplication logic, or unique transaction identifiers.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Which guarantee may lose messages?
2. Which guarantee may duplicate messages?
3. Which guarantee is most common?
4. Why is idempotency critical?
5. Why is exactly-once expensive?

---

## ⭐ Keywords Interviewers Like to Hear

- At-most-once
- At-least-once
- Exactly-once
- Idempotency
- Deduplication
- Retry mechanism
- Reliability trade-offs

---

## ✅ You’re Strong in 5.3 If You Can:
- Clearly compare all three delivery guarantees
- Explain idempotency confidently
- Discuss trade-offs between reliability and complexity
- Provide real-world examples

---
