---
title: File Storage System – Interview Questions
sidebar_label: Interview Questions
---

# File Storage System – Interview Questions

---

## 1. Why separate metadata and blob storage?

### Expected Answer
Metadata needs indexed queries/transactions; blobs need cheap, scalable object storage.

---

## 2. Why use pre-signed URLs?

### Expected Answer
To let clients upload/download directly from storage and reduce app server load.

---

## 3. How do resumable uploads work?

### Expected Answer
Split file into chunks and retry only failed chunks.

---

## 4. What should metadata store contain?

### Expected Answer
Owner, filename, path, object key, size, mime type, version, ACL references.

---

## 5. How do you enforce sharing permissions?

### Expected Answer
ACL checks in metadata/auth layer before issuing access URLs.

---

## 6. Why use CDN for downloads?

### Expected Answer
Reduces latency and origin load for frequently accessed files.

---

## 7. How do you ensure file integrity?

### Expected Answer
Checksums/hash verification for chunks and final assembled file.

---

## 8. What happens if blob upload succeeds but metadata fails?

### Expected Answer
Orphan object cleanup via background job.

---

## 9. How can deduplication be implemented?

### Expected Answer
Content hashing and storing shared chunks by hash key.

---

## 10. Why version files?

### Expected Answer
Supports rollback, auditability, and conflict recovery.

---

## 11. What are key non-functional requirements?

### Expected Answer
Durability, availability, scalability, and security.

---

## 12. How do you secure downloads?

### Expected Answer
Short-lived signed URLs and authorization checks.

---

## 13. What DB type is suitable for metadata?

### Expected Answer
Relational DB is common due to joins/ACL consistency.

---

## 14. How do you design for huge files (GB/TB)?

### Expected Answer
Multipart uploads, parallel chunks, resume tokens, background compaction.

---

## 15. Biggest interview pitfall?

### Expected Answer
Ignoring permission/security and focusing only on raw storage.
