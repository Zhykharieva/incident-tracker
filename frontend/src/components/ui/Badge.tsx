import type { PropsWithChildren } from 'react'
import { cn } from '../../lib/utils'

type BadgeVariant = 'neutral' | 'info' | 'warning' | 'danger' | 'success' | 'muted' | 'critical'

type BadgeProps = PropsWithChildren<{
  variant?: BadgeVariant
  className?: string
}>

const baseClasses =
  'inline-flex items-center rounded-full border border-transparent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide'

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'border-white/10 bg-white/5 text-white',
  info: 'border-sky-500/40 bg-sky-500/15 text-sky-200',
  warning: 'border-amber-400/40 bg-amber-400/15 text-amber-200',
  danger: 'border-rose-400/60 bg-rose-400/10 text-rose-200',
  success: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-200',
  muted: 'border-slate-500/30 bg-slate-500/10 text-slate-300',
  critical: 'border-red-600/70 bg-red-600/15 text-red-100',
}

const Badge = ({ children, variant = 'neutral', className }: BadgeProps) => {
  return <span className={cn(baseClasses, variantClasses[variant], className)}>{children}</span>
}

export default Badge

