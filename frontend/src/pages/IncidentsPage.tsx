import Button from '../components/ui/Button'
import type { IncidentCardProps } from '../components/incidents/IncidentCard'
import IncidentCard from '../components/incidents/IncidentCard'

const mockIncidents: IncidentCardProps[] = [
  {
    id: 'INC-2045',
    title: 'Payments API latency spike',
    status: 'INVESTIGATING',
    owner: 'SRE · Taylor',
    updatedAt: '5 minutes ago',
    severity: 'HIGH',
  },
  {
    id: 'INC-2044',
    title: 'Login failures in EU region',
    status: 'OPEN',
    owner: 'Platform · Lee',
    updatedAt: '24 minutes ago',
    severity: 'CRITICAL',
  },
  {
    id: 'INC-2042',
    title: 'Streaming pipeline backlog',
    status: 'RESOLVED',
    owner: 'Data · Amina',
    updatedAt: '2 hours ago',
    severity: 'MEDIUM',
  },
  {
    id: 'INC-2038',
    title: 'Staging secrets rotation',
    status: 'OPEN',
    owner: 'Security · Priya',
    updatedAt: '1 hour ago',
    severity: 'LOW',
  },
]

const IncidentsPage = () => {
  const handleNewIncident = () => {
    console.debug('New incident dialog coming soon')
  }

  return (
    <section className="w-full space-y-8">
      <header className="flex w-full flex-col gap-6 rounded-3xl border border-white/5 bg-slate-900/40 p-6 shadow-inner shadow-black/20 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.45em] text-indigo-300">Operational view</p>
          <div>
            <h1 className="text-3xl font-semibold text-white">Incidents</h1>
            <p className="mt-2 text-sm text-slate-400">
              Track current investigations, handoffs, and severity at a glance. Live data hook-up
              coming soon.
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

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {mockIncidents.map((incident) => (
          <IncidentCard key={incident.id} {...incident} />
        ))}
      </div>
    // </section>

  )
}

export default IncidentsPage
