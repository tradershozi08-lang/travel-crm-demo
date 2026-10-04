import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  attendance,
  bookings,
  communications,
  finance,
  leads,
  metrics,
  payments,
  reports,
} from './mockData'
import './styles.css'

const navigation = [
  ['Dashboard', 'Overview'],
  ['Leads', 'Lead workspace'],
  ['Bookings', 'Client bookings'],
  ['Payments', 'Payment records'],
  ['Finance', 'Ledger & P&L'],
  ['E-Sign', 'Documents'],
  ['Communications', 'WhatsApp / Telnyx'],
  ['Attendance', 'Staff operations'],
  ['Reports', 'Audit & exports'],
]

const iconMap = {
  Dashboard: '⌂',
  Leads: '◎',
  Bookings: '✈',
  Payments: '£',
  Finance: '▥',
  'E-Sign': '✎',
  Communications: '◌',
  Attendance: '◉',
  Reports: '▤',
}

function App() {
  const [active, setActive] = useState('Dashboard')
  const [query, setQuery] = useState('')

  const filteredLeads = useMemo(
    () => leads.filter(row => `${row.name} ${row.id} ${row.stage}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">R</div>
          <div>
            <strong>Travel CRM</strong>
            <span>Portfolio Demo</span>
          </div>
        </div>

        <nav>
          {navigation.map(([name, description]) => (
            <button
              className={active === name ? 'nav-item active' : 'nav-item'}
              key={name}
              onClick={() => setActive(name)}
              type="button"
            >
              <span className="nav-icon">{iconMap[name]}</span>
              <span>
                <strong>{name}</strong>
                <small>{description}</small>
              </span>
            </button>
          ))}
        </nav>

        <div className="privacy-card">
          <strong>Safe public demo</strong>
          <p>Mock data only. Production code, customer records and credentials are private.</p>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">RR Travels CRM · Sanitized Portfolio</p>
            <h1>{active}</h1>
          </div>
          <div className="top-actions">
            <span className="status-dot"><i /> Demo environment</span>
            <div className="avatar">SM</div>
          </div>
        </header>

        {active === 'Dashboard' && <Dashboard />}
        {active === 'Leads' && <Leads query={query} setQuery={setQuery} rows={filteredLeads} />}
        {active === 'Bookings' && <Bookings />}
        {active === 'Payments' && <Payments />}
        {active === 'Finance' && <Finance />}
        {active === 'E-Sign' && <ESign />}
        {active === 'Communications' && <Communications />}
        {active === 'Attendance' && <Attendance />}
        {active === 'Reports' && <Reports />}
      </main>
    </div>
  )
}

function Dashboard() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="pill">Operations overview</span>
          <h2>One workspace for travel operations.</h2>
          <p>Leads, bookings, payments, finance, documents, communications and staff activity in one role-aware CRM.</p>
        </div>
        <div className="hero-card">
          <span>System status</span>
          <strong>Operational</strong>
          <small>Portfolio simulation · no live services connected</small>
        </div>
      </section>

      <section className="metric-grid">
        {metrics.map(item => (
          <article className="metric-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.hint}</small>
          </article>
        ))}
      </section>

      <div className="two-col">
        <Panel title="Recent leads" subtitle="Mock lead workspace">
          <LeadTable rows={leads.slice(0, 4)} compact />
        </Panel>
        <Panel title="Recent bookings" subtitle="Booking and payment progress">
          <BookingList rows={bookings.slice(0, 4)} />
        </Panel>
      </div>
    </>
  )
}

function Leads({ query, setQuery, rows }) {
  return (
    <Panel
      title="Lead workspace"
      subtitle="Assignment, ownership, status and communication context"
      action={
        <input
          className="search"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Search mock leads"
        />
      }
    >
      <LeadTable rows={rows} />
    </Panel>
  )
}

function LeadTable({ rows, compact = false }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Lead</th>
            {!compact && <th>Source</th>}
            <th>Owner</th>
            <th>Stage</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td><strong>{row.name}</strong><small>{row.id}</small></td>
              {!compact && <td>{row.source}</td>}
              <td>{row.owner}</td>
              <td><Badge value={row.stage} /></td>
              <td>{row.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Bookings() {
  return (
    <>
      <SectionIntro title="Client bookings" text="Representative flight, hotel, visa and package workflows with booking-level payment tracking." />
      <Panel title="Active CRM bookings" subtitle="Legacy archive records are kept separate from current working bookings">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Booking</th><th>Customer</th><th>Service</th><th>Travel</th><th>Total</th><th>Paid</th><th>Status</th></tr></thead>
            <tbody>
              {bookings.map(row => (
                <tr key={row.no}>
                  <td><strong>{row.no}</strong></td>
                  <td>{row.customer}</td>
                  <td>{row.service}</td>
                  <td>{row.travel}</td>
                  <td>{row.total}</td>
                  <td>{row.paid}</td>
                  <td><Badge value={row.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  )
}

function BookingList({ rows }) {
  return (
    <div className="booking-list">
      {rows.map(row => (
        <div className="booking-row" key={row.no}>
          <div><strong>{row.no}</strong><span>{row.customer} · {row.service}</span></div>
          <div className="booking-money"><strong>{row.total}</strong><span>{row.paid} paid</span></div>
        </div>
      ))}
    </div>
  )
}

function Payments() {
  return (
    <>
      <SectionIntro title="Payment records" text="Booking payments remain tied to their receiving method and reconciliation state." />
      <Panel title="Payment activity" subtitle="Mock records only">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Reference</th><th>Booking</th><th>Method</th><th>Amount</th><th>State</th></tr></thead>
            <tbody>
              {payments.map(row => (
                <tr key={row.ref}>
                  <td><strong>{row.ref}</strong></td>
                  <td>{row.booking}</td>
                  <td>{row.method}</td>
                  <td>{row.amount}</td>
                  <td><Badge value={row.state} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  )
}

function Finance() {
  return (
    <>
      <SectionIntro title="Finance ledger & P&L" text="Booking-level sales and costs feed month-end reporting while collections remain a separate cash-flow metric." />
      <section className="finance-grid">
        {finance.map(item => (
          <article className="finance-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>
      <Panel title="Accounting workflow" subtitle="Simplified portfolio representation">
        <div className="flow">
          <FlowStep number="01" title="Booking payment" text="Payment is recorded against the active CRM booking." />
          <FlowStep number="02" title="Receiving source" text="Cash, Stripe, Square or a selected bank account is preserved." />
          <FlowStep number="03" title="Finance journal" text="Approved entries reconcile into the ledger / Bank Book." />
          <FlowStep number="04" title="Month-end audit" text="Sales, direct costs, gross profit, expenses and net P&L are exported." />
        </div>
      </Panel>
    </>
  )
}

function ESign() {
  return (
    <div className="document-layout">
      <div className="document-preview">
        <div className="document-head">
          <div className="brand-mark small">R</div>
          <div><strong>Travel Service Agreement</strong><span>Demo document · RR-1208</span></div>
        </div>
        <div className="document-section"><span>Customer</span><strong>Aiko Tanaka</strong></div>
        <div className="document-section"><span>Travel dates</span><strong>18 Nov 2026 — 27 Nov 2026</strong></div>
        <div className="document-section"><span>Services</span><strong>Return flight + hotel accommodation</strong></div>
        <div className="signature-line">Customer signature</div>
      </div>
      <Panel title="E-Sign workflow" subtitle="Representative document lifecycle">
        <div className="timeline">
          <Timeline title="Document generated" meta="Current CRM booking data" done />
          <Timeline title="Sent to customer" meta="Secure signing link" done />
          <Timeline title="Customer viewed" meta="Demo event" done />
          <Timeline title="Signed copy stored" meta="Awaiting signature in this mock example" />
        </div>
      </Panel>
    </div>
  )
}

function Communications() {
  return (
    <>
      <SectionIntro title="WhatsApp & Telnyx" text="Customer communication context with template-window awareness and browser voice operations." />
      <div className="communication-grid">
        {communications.map(row => (
          <article className="conversation-card" key={row.customer}>
            <div className="conversation-icon">{row.channel === 'WhatsApp' ? 'W' : 'T'}</div>
            <div><strong>{row.customer}</strong><span>{row.channel}</span></div>
            <Badge value={row.state} />
            <small>Owner · {row.owner}</small>
          </article>
        ))}
      </div>
      <Panel title="Communication safeguards" subtitle="Production design principles">
        <div className="feature-chips">
          <span>Template-first contact</span><span>Reply-window awareness</span><span>Agent presence</span><span>Assisted transfer</span><span>Recording privacy</span>
        </div>
      </Panel>
    </>
  )
}

function Attendance() {
  return (
    <>
      <SectionIntro title="Staff attendance" text="Daily staff status, check-in workflow and administration tools." />
      <section className="attendance-grid">
        {attendance.map(row => (
          <article className="staff-card" key={row.name}>
            <div className="staff-avatar">{row.name.split(' ').map(part => part[0]).join('')}</div>
            <div><strong>{row.name}</strong><span>{row.role}</span></div>
            <Badge value={row.state} />
            <small>Check-in {row.checkIn}</small>
          </article>
        ))}
      </section>
    </>
  )
}

function Reports() {
  return (
    <>
      <SectionIntro title="Reports & audit exports" text="Management reporting focuses on traceability rather than dashboard-only totals." />
      <section className="report-grid">
        {reports.map((row, index) => (
          <article className="report-card" key={row.title}>
            <span>0{index + 1}</span>
            <strong>{row.title}</strong>
            <p>{row.meta}</p>
            <button type="button">Preview demo</button>
          </article>
        ))}
      </section>
    </>
  )
}

function Panel({ title, subtitle, action, children }) {
  return (
    <section className="panel">
      <div className="panel-head">
        <div><h3>{title}</h3><p>{subtitle}</p></div>
        {action}
      </div>
      {children}
    </section>
  )
}

function SectionIntro({ title, text }) {
  return (
    <section className="section-intro">
      <span className="pill">Production-inspired module</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}

function Badge({ value }) {
  const className = value.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')
  return <span className={`badge ${className}`}>{value}</span>
}

function FlowStep({ number, title, text }) {
  return <div className="flow-step"><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></div>
}

function Timeline({ title, meta, done }) {
  return (
    <div className="timeline-row">
      <div className={done ? 'timeline-dot done' : 'timeline-dot'}>{done ? '✓' : ''}</div>
      <div><strong>{title}</strong><span>{meta}</span></div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
