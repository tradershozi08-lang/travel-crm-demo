# Architecture

## Public Demo

This repository is a frontend-only portfolio demonstration.

```text
Vite
  └── React
      ├── Dashboard
      ├── Leads
      ├── Bookings
      ├── Payments
      ├── Finance
      ├── E-Sign
      ├── Communications
      ├── Attendance
      └── Reports
```

All data in the public demo comes from `src/mockData.js`.

## Production Architecture

The private production CRM follows a layered structure:

```text
Browser / Staff Users
        |
        v
React + Blade interface
        |
        v
Laravel routes / controllers / middleware
        |
        v
Domain and application services
        |
        +-- Booking lifecycle
        +-- Payment synchronization
        +-- Finance journal / Bank Book
        +-- Document generation
        +-- E-Sign
        +-- WhatsApp / Telnyx
        +-- Attendance
        +-- Reporting / audit exports
        |
        v
Relational database
        |
        +-- Payment providers
        +-- Communication providers
        +-- Secure document storage
```

## Design Principles

### Backend authorization
Permissions are enforced by the server. Frontend menu visibility is treated as presentation only.

### Booking as operational source
Current CRM bookings are the operational source of truth. Historical Legacy records remain reference/archive records unless explicitly duplicated into a new active CRM booking.

### Payment integrity
Booking payments, payment links and finance journals are reconciled carefully to avoid duplicate accounting.

### Separation of sales and cash flow
Monthly sales are calculated from booking-level sale data. Customer collections are presented separately as cash-flow information.

### Fail-safe maintenance
Production changes are intentionally scoped, backed up, syntax-checked, tested and merged only after automated checks pass.

## Public/Private Boundary

The production repository is private. This demo does not reproduce private controllers, service implementations, schemas, credentials, customer records or deployment configuration.
