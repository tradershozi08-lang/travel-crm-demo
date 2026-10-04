export const metrics = [
  { label: 'Active leads', value: '148', hint: '+12 this week' },
  { label: 'Open bookings', value: '64', hint: '18 due soon' },
  { label: 'Monthly sales', value: '£61.9k', hint: 'Mock portfolio data' },
  { label: 'Collections', value: '£20.2k', hint: 'Current month' },
]

export const leads = [
  { id: 'LD-2041', name: 'Aiko Tanaka', source: 'Website', owner: 'Maya', stage: 'Quoted', updated: '8 min ago' },
  { id: 'LD-2038', name: 'Daniel Brooks', source: 'WhatsApp', owner: 'Noah', stage: 'Payment Pending', updated: '24 min ago' },
  { id: 'LD-2032', name: 'Sofia Khan', source: 'Referral', owner: 'Maya', stage: 'New Lead', updated: '42 min ago' },
  { id: 'LD-2027', name: 'Leo Martin', source: 'Campaign', owner: 'John', stage: 'Negotiation', updated: '1 hr ago' },
]

export const bookings = [
  { no: 'RR-1208', customer: 'Aiko Tanaka', service: 'Flight + Hotel', travel: '18 Nov 2026', total: '£1,860.00', paid: '£900.00', status: 'Confirmed' },
  { no: 'RR-1206', customer: 'Daniel Brooks', service: 'Umrah Package', travel: '27 Nov 2026', total: '£2,450.00', paid: '£2,450.00', status: 'Paid' },
  { no: 'RR-1201', customer: 'Sofia Khan', service: 'Visa + Flight', travel: '04 Dec 2026', total: '£980.00', paid: '£400.00', status: 'Pending' },
  { no: 'RR-1196', customer: 'Leo Martin', service: 'Flight', travel: '10 Dec 2026', total: '£720.00', paid: '£220.00', status: 'Confirmed' },
]

export const payments = [
  { ref: 'PAY-7781', booking: 'RR-1208', method: 'Stripe', amount: '£450.00', state: 'Reconciled' },
  { ref: 'PAY-7772', booking: 'RR-1206', method: 'Bank Transfer', amount: '£1,100.00', state: 'Reconciled' },
  { ref: 'PAY-7764', booking: 'RR-1201', method: 'Cash', amount: '£400.00', state: 'Recorded' },
  { ref: 'PAY-7758', booking: 'RR-1196', method: 'Square', amount: '£220.00', state: 'Reconciled' },
]

export const finance = [
  { label: 'Active CRM sales', value: '£61,992.65' },
  { label: 'Direct cost of sales', value: '£36,750.48' },
  { label: 'Gross profit', value: '£25,242.17' },
  { label: 'Approved expenses', value: '£0.00' },
  { label: 'Net profit / loss', value: '£25,242.17' },
  { label: 'Supplier payments', value: '£0.00' },
]

export const communications = [
  { customer: 'Aiko Tanaka', channel: 'WhatsApp', state: 'Reply window open', owner: 'Maya' },
  { customer: 'Daniel Brooks', channel: 'Telnyx Voice', state: 'Call completed', owner: 'John' },
  { customer: 'Sofia Khan', channel: 'WhatsApp', state: 'Template required', owner: 'Maya' },
]

export const attendance = [
  { name: 'Maya Singh', role: 'Agent', state: 'Present', checkIn: '10:02' },
  { name: 'John Carter', role: 'Team Lead', state: 'Present', checkIn: '09:54' },
  { name: 'Noah Evans', role: 'Agent', state: 'Active', checkIn: '10:11' },
]

export const reports = [
  { title: 'Monthly Sales Audit', meta: 'Booking-level sales, cost, P&L and reconciliation' },
  { title: 'Bank Book', meta: 'Receiving account, payment source and journal reconciliation' },
  { title: 'Agent Performance', meta: 'Lead ownership, conversions and operational activity' },
  { title: 'Legacy Reconciliation', meta: 'Archive-only records versus active CRM working copies' },
]
