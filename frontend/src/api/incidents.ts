
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export type Incident = {
  id: number
  title: string
  service: string
  severity: string
  status: string
  started_at: string
  updated_at: string
}

export async function fetchIncidents(): Promise<Incident[]> {
  const res = await fetch(`${API_URL}/incidents`)

  if (!res.ok) {
    throw new Error(`Failed to fetch incidents, status ${res.status}`)
  }

  return res.json()
}
