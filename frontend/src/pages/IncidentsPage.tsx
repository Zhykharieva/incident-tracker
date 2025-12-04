
import { useEffect, useState } from 'react'
import { fetchIncidents, type Incident } from '../api/incidents'
import Button from '../components/ui/Button'
import IncidentCard, { type IncidentCardProps } from '../components/incidents/IncidentCard'

const incidentToCardProps = (incident: Incident): IncidentCardProps => ({
  id: `INC-${incident.id}`,
  title: incident.title,
  owner: incident.service,
  updatedAt: new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(incident.updated_at)),
  status: incident.status.toUpperCase() as IncidentCardProps['status'],
  severity: incident.severity.toUpperCase() as IncidentCardProps['severity'],
})

const IncidentsPage = () => {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleNewIncident = () => {
    console.debug('New incident dialog coming soon')
  }

  useEffect(() => {
    let isMounted = true

    fetchIncidents()
      .then((data) => {
        if (!isMounted) return
        setIncidents(data)
        setLoading(false)
      })
      .catch((err: unknown) => {
        console.error('Error while fetching incidents:', err)
        if (!isMounted) return
        setError(err instanceof Error ? err.message : 'Unknown error')
        setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])


  if (loading) {
    return (
      <section className="w-full space-y-8">
        <p className="text-sm text-slate-300">Loading incidents…</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="w-full space-y-8">
        <p className="text-sm text-red-400">
          Failed to load incidents: {error}
        </p>
      </section>
    )
  }

  return (
    <section className="w-full space-y-8">
      <header className="flex w-full flex-col gap-6 rounded-3xl border border-white/5 bg-slate-900/40 p-6 shadow-inner shadow-black/20 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.45em] text-indigo-300">
            Operational view
          </p>
          <div>
            <h1 className="text-3xl font-semibold text-white">Incidents</h1>
            <p className="mt-2 text-sm text-slate-400">
              Track current investigations, handoffs, and severity at a
              glance. Live data hook-up is now powered by the backend.
            </p>
          </div>
        </div>
        <Button
          onClick={handleNewIncident}
          className="w-full justify-center gap-2 md:w-auto"
        >
          + New incident
        </Button>
      </header>

      {incidents.length === 0 ? (
        <p className="text-sm text-slate-300">
          No incidents yet. Create the first one to start tracking.
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {incidents.map((incident) => (
            <IncidentCard key={incident.id} {...incidentToCardProps(incident)} />
          ))}
        </div>
      )}
    </section>
  )
}

export default IncidentsPage
