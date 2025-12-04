import Badge from '../ui/Badge'

export type IncidentStatus = 'OPEN' | 'INVESTIGATING' | 'RESOLVED'
export type IncidentSeverity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'

export type IncidentCardProps = {
  id: string
  title: string
  owner: string
  updatedAt: string
  status: IncidentStatus
  severity: IncidentSeverity
}

const statusVariantMap: Record<IncidentStatus, 'info' | 'warning' | 'success'> = {
  OPEN: 'info',
  INVESTIGATING: 'warning',
  RESOLVED: 'success',
}

const severityVariantMap: Record<IncidentSeverity, 'muted' | 'warning' | 'danger' | 'critical'> = {
  LOW: 'muted',
  MEDIUM: 'warning',
  HIGH: 'danger',
  CRITICAL: 'critical',
}

const IncidentCard = ({ id, title, owner, updatedAt, status, severity }: IncidentCardProps) => {
  return (
    <article className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 shadow-xl shadow-black/20 transition hover:border-indigo-400/60">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-500">{id}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
        </div>
        <Badge variant={statusVariantMap[status]}>{status}</Badge>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
        <span className="font-medium text-slate-100">{owner}</span>
        <span className="h-1 w-1 rounded-full bg-slate-600" aria-hidden />
        <span>Updated {updatedAt}</span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge variant={severityVariantMap[severity]}>Severity: {severity}</Badge>
      </div>
    </article>
  )
}

export default IncidentCard

