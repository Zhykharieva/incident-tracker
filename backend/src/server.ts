import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

const mockIncidents = [
  {
    id: 1,
    title: 'Payments API latency spike',
    service: 'API',
    severity: 'HIGH',
    status: 'INVESTIGATING',
    started_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Login failures in EU region',
    service: 'Auth',
    severity: 'CRITICAL',
    status: 'OPEN',
    started_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

app.get('/incidents', (_req, res) => {
  res.json(mockIncidents)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

