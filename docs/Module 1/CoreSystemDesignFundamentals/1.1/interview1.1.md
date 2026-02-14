---
title: What Is System Design? – Interview Questions
sidebar_label: "1.1 Interview Questions"
description: Interview questions and expected answers for system design fundamentals.
---

# Module 1.1 – What Is System Design  
## Interview Questions & Expected Answers

---

## 1. What is system design?

### Expected Answer
System design is the process of defining system components, data flow, and trade-offs to meet functional and non-functional requirements at scale.

### Interview One-Liner ⭐
> System design is about making informed trade-offs, not drawing boxes.

---

## 2. Why is system design important?

### Expected Points
- Systems must scale
- Failures are inevitable
- Performance and reliability matter
- Poor design fails in production

### Interview Line
> Code solves problems today, design solves problems at scale.

---

## 3. What are functional and non-functional requirements?

### Functional
- What the system does
- Business features

### Non-Functional
- How well the system works
- Scalability, latency, availability, security

### Interview Tip ⭐
Always mention **both**.

---

## 4. Which requirements do you clarify first in an interview?

### Correct Answer
Non-functional requirements.

### Why?
They determine:
- Architecture
- Technology choices
- Data consistency model

### Interview Line ⭐
> Non-functional requirements drive the architecture.

---

## 5. What are common non-functional requirements?

### Expected List (Name at least 5)
- Scalability
- Availability
- Reliability
- Latency
- Throughput
- Consistency
- Durability
- Security

---

## 6. Difference between High-Level Design (HLD) and Low-Level Design (LLD)?

### HLD
- Components
- Data flow
- Technology choices

### LLD
- Classes
- APIs
- Schemas

### Interview Line
> System design interviews focus mainly on HLD.

---

## 7. How do interviewers evaluate system design answers?

### They Look For
- Structured approach
- Clear assumptions
- Trade-off awareness
- Bottleneck identification
- Failure handling

### NOT Looking For
- Perfect solution
- Tool memorization

---

## 8. What is your approach to a system design problem?

### Ideal Answer (Stepwise)
1. Clarify requirements
2. Estimate scale
3. High-level architecture
4. Data design
5. Identify bottlenecks
6. Scaling strategy
7. Failure handling

### Interview Tip ⭐
Say this **before** starting design.

---

## 9. Why is estimation important in system design interviews?

### Expected Answer
Estimation helps understand load, choose the right architecture, and identify scaling challenges.

### Example
> 1M users × 10 requests/day ≈ 115 RPS

---

## 10. What is a bottleneck in system design?

### Expected Answer
A component that limits system performance or scalability.

### Common Bottlenecks
- Database
- Shared state
- Synchronous dependencies

---

## 11. What is a Single Point of Failure (SPOF)?

### Expected Answer
A component whose failure brings down the entire system.

### Interview Add-on ⭐
> Good designs eliminate SPOFs through redundancy.

---

## 12. What do we mean by trade-offs in system design?

### Expected Answer
Improving one aspect often degrades another.

Examples:
- Consistency vs availability
- Latency vs durability
- Simplicity vs scalability

### Interview Gold Line ⭐
> There is no perfect design, only well-chosen trade-offs.

---

## 13. Should you start drawing architecture immediately in an interview?

### Correct Answer
No.

### Why?
- Requirements may be unclear
- Leads to wrong assumptions

### Interview Line
> I’ll clarify requirements before designing.

---

## 14. What mistakes do candidates commonly make?

### Common Mistakes
- Skipping requirements
- No scale estimation
- Over-engineering
- Ignoring failures

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why are non-functional requirements critical?
2. What comes after requirement clarification?
3. Why is failure handling important?
4. What shows senior-level design thinking?
5. Why is system design not about tools?

---

## ⭐ Key Interview Keywords to Use Naturally

- Non-functional requirements
- Bottlenecks
- SPOF
- Trade-offs
- Scalability
- Structured approach