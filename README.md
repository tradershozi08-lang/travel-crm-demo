# Travel CRM Demo

> **Public portfolio demo by Shehroz Malik**  
> A sanitized demonstration of a production travel CRM built with Laravel and React. The real production repository, customer data, credentials, financial records, private integrations, and proprietary business logic remain private.

## Project Summary

Travel CRM is an operations platform designed for a UK travel business to manage the full customer journey from first enquiry to booking, payment, finance reconciliation, document signing, communications, staff attendance, and management reporting.

The production system is a private Laravel 12 + React/Vite application running on an Ubuntu VPS. This public repository is intentionally rebuilt with **mock data and frontend-only demo behaviour** so recruiters and technical reviewers can understand the product scope without exposing production code or sensitive business information.

## 日本語概要

このリポジトリは、旅行会社向けCRMの**公開ポートフォリオ用デモ**です。

本番システムは Laravel 12 + React/Vite で構築され、問い合わせ、顧客、予約、支払い、財務、電子署名、WhatsApp / Telnyx、勤怠、レポートなどの業務を一元管理します。

この公開版には、実際の顧客情報、APIキー、銀行情報、決済情報、認証情報、社内データ、または本番用ビジネスロジックは含まれていません。採用担当者や技術者がUI設計、業務フロー、システム構成、実装範囲を確認できるように、モックデータだけで再構成しています。

## Production Technology Stack

| Area | Technology |
|---|---|
| Backend | PHP, Laravel 12 |
| Frontend | React, Vite, JavaScript, Blade |
| Database | Relational database with Laravel migrations |
| Authentication | Session authentication + role-based access control |
| Payments | Stripe, Square, bank transfer, cash/manual payment workflows |
| Communications | WhatsApp Cloud API, Telnyx messaging and browser voice |
| Documents | PDF receipts/invoices and E-Sign workflows |
| Reporting | Finance ledger, monthly sales audit, P&L and Excel exports |
| Deployment | Ubuntu VPS, GitHub, Vite production builds |
| Quality | Feature tests, syntax checks, build verification, backup-first maintenance |

## Core CRM Features

### Leads & Enquiries
- Lead capture and assignment
- Agent ownership
- Team Lead delegation
- Inquiry status and follow-up workflow
- Website enquiry webhook integration
- Signed request verification
- Lead conversion into active bookings
- Communication context inside the lead workspace

### Customers & Bookings
- Customer records
- Flight, hotel and visa booking details
- Passenger records
- Multiple service types per booking
- Booking duplication
- Booking activity history
- Booking file uploads
- Role-aware access to booking records
- Team Lead access to supervise agent bookings
- Legacy booking archive
- Legacy → CRM working-copy workflow for continued work on historical bookings

### Payments
- Booking-level payment rows
- Cash payments
- Stripe payments
- Square payments
- Named bank-account payments
- Bank transfer validation
- Payment-link requests
- Payment-to-booking synchronization
- Outstanding-balance integrity checks
- Protection against duplicated payment accounting

### Finance
- Bank Book
- Finance Ledger
- Double-entry journal
- Supplier payments
- Operating expenses
- Bank charges
- Transaction workflows
- Bank statements
- Reconciliation controls
- Finance-role permissions
- Booking-level cost and profit tracking

### Monthly Sales & P&L
- Direct booking-level sales calculation
- Supplier payable and direct-cost calculation
- Gross profit / loss
- Approved operating expenses
- Net profit / loss
- Customer collections
- Supplier payments
- Legacy archive reconciliation
- Exception reporting
- Professional month-end Excel exports
- Automatic closing summary blocks

### E-Sign & Documents
- E-Sign document generation
- Customer signing workflow
- Current booking travel dates
- Booking receipt generation
- Invoice synchronization
- Document regeneration
- Role-controlled access

### WhatsApp & Telnyx
- WhatsApp conversation management
- First-contact template workflow
- Free-reply service-window handling
- Telnyx messaging
- Browser-based Telnyx voice calling
- Agent availability / phone presence
- Assisted call transfer
- Call recording privacy controls
- Communication event logs

### Attendance & Staff Operations
- Attendance records
- Employee attendance profiles
- QR / ID-based workflows
- Daily attendance ledger
- Present / Absent / Active states
- Attendance administration
- Excel export support

### Role-Based Access Control

The production application uses backend-enforced permissions for roles such as:

- Super Admin
- Admin
- Manager
- Finance
- Finance Team
- Team Lead
- Agent

Access is enforced server-side by module and action. Hiding a menu item is not treated as authorization.

## Demo Modules

This public demo contains representative UI screens for:

1. Dashboard
2. Leads
3. Client Bookings
4. Payments
5. Finance
6. E-Sign
7. Communications
8. Attendance
9. Reports

All demo customers, bookings, amounts and messages are fictional.

## Architecture

```text
Browser
   |
   v
React / Vite UI
   |
   v
Laravel API + Blade views
   |
   +-- Booking & document services
   +-- Payment synchronization
   +-- Finance ledger services
   +-- E-Sign services
   +-- WhatsApp / Telnyx services
   +-- Attendance services
   |
   v
Relational Database
   |
   +-- Stripe
   +-- Square
   +-- WhatsApp Cloud API
   +-- Telnyx
```

More detail:
- [Architecture](docs/ARCHITECTURE.md)
- [Feature Map](docs/FEATURES.md)
- [Public Demo Security](SECURITY.md)

## Run This Demo

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Engineering & Maintenance Approach

The production CRM has been maintained with a conservative production workflow:

- inspect existing behaviour before editing;
- back up affected files before production changes;
- keep fixes tightly scoped;
- preserve already-working functionality;
- verify PHP syntax and frontend builds after edits;
- enforce authorization on the backend;
- reconcile financial data from source booking/payment records;
- avoid exposing credentials or customer data in source control;
- use automated tests before merging important repository updates.

## Public Demo Safety Boundary

This repository does **not** contain:

- production database exports;
- real customer or passenger records;
- employee private data;
- `.env` files;
- API keys or webhook secrets;
- Stripe, Square, Telnyx or WhatsApp credentials;
- bank account details;
- production uploads;
- internal ID-card assets;
- call recordings;
- private invoices or PDFs;
- production deployment credentials;
- proprietary production accounting implementation.

## Repository Purpose

This is a **portfolio demonstration repository**, not the production CRM source repository.

It is intended for employers, recruiters and technical reviewers who want to understand the breadth of the system while keeping the real production environment private and secure.

## Author

**Shehroz Malik**  
Software / CRM Development & Technical Operations

Production source: **Private & proprietary**  
Public repository: **Sanitized portfolio demo**
