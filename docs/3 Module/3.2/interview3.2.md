---
title: Types of Databases – Interview Questions
sidebar_label: Interview Questions
---

# Types of Databases – Interview Questions

---

## 1. Why are there different types of databases?

### Expected Answer
Different databases are optimized for different data models, access patterns, and scalability requirements. No single database works best for all use cases.

### Interview One-Liner ⭐
> Database choice depends on how data is accessed, not just how it is stored.

---

## 2. What is a relational database?

### Expected Answer
A relational database stores data in tables with fixed schemas and supports ACID transactions and complex queries using joins.

### Common Use Cases
- Banking
- Payments
- Order management

---

## 3. What is a key-value database and where is it used?

### Expected Answer
A key-value database stores data as simple key–value pairs and is optimized for fast lookups.

### Use Cases
- Caching
- Session storage
- Rate limiting

---

## 4. What is a document database?

### Expected Answer
A document database stores data as JSON-like documents with flexible schemas, allowing nested and evolving data structures.

### Use Cases
- User profiles
- Content management systems
- Product catalogs

---

## 5. What is a column-family database?

### Expected Answer
A column-family database stores data by columns rather than rows and is optimized for high write throughput and large-scale distributed systems.

### Use Cases
- Logs
- Time-series data
- Analytics ingestion

---

## 6. What is a graph database and when would you use it?

### Expected Answer
A graph database stores data as nodes and relationships (edges) and is optimized for relationship-heavy queries.

### Use Cases
- Social networks
- Recommendations
- Fraud detection

---

## 7. Which database type is best for strong consistency and transactions?

### Correct Answer
Relational (SQL) databases.

### Reason
They support ACID transactions and enforce data integrity.

---

## 8. Which database type is best for low-latency reads?

### Expected Answer
Key-value databases.

---

## 9. Which database type is best for flexible schemas?

### Expected Answer
Document databases.

---

## 10. Which database type is best for massive write throughput?

### Expected Answer
Column-family databases.

---

## 11. Which database type is best for relationship-heavy queries?

### Expected Answer
Graph databases.

---

## 12. What is polyglot persistence?

### Expected Answer
Using multiple database types in the same system, each optimized for a specific use case.

### Interview Gold Line ⭐
> Polyglot persistence is common in real-world systems.

---

## 13. Why shouldn’t you use one database for everything?

### Expected Answer
Because different workloads have different requirements for consistency, latency, scalability, and query patterns.

---

## 14. What factors should you consider when choosing a database?

### Expected Points
- Consistency requirements
- Read vs write patterns
- Schema flexibility
- Relationship complexity
- Scale

---

## 15. Give a real-world example using multiple database types.

### Expected Answer
- SQL for transactions
- Key-value store for caching
- Search database for search
- Column database for analytics

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why are key-value stores fast?
2. Why are joins expensive in NoSQL systems?
3. Why do document databases duplicate data?
4. Why are graph databases not ideal for simple CRUD?
5. Why is database choice critical in system design?

---

## ⭐ Keywords Interviewers Like to Hear

- Access patterns
- ACID
- Horizontal scaling
- Schema flexibility
- Polyglot persistence

---

## ✅ You’re Strong in 3.2 If You Can:
- Instantly map a use case to a database type
- Explain trade-offs clearly
- Avoid “one database fits all” thinking
- Talk about real-world examples confidently

---
