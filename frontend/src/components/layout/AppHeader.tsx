import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { cn } from '../../lib/utils'

const AppHeader = () => {
  const handleLogout = () => {
    console.log('Logout coming soon')
  }

  return (
    <header className="w-full border-b border-white/10 bg-slate-900 shadow-lg shadow-black/20 backdrop-blur-sm">
      <div className="box-border flex w-full flex-wrap items-center gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <NavLink to="/" className="flex items-center gap-3 text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-sm font-semibold tracking-tight text-white shadow-lg shadow-indigo-500/30">
            IT
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Incident Tracker</p>
            <p className="text-xs text-slate-400">Internal incident log</p>
          </div>
        </NavLink>

        <div className="ml-auto flex w-full flex-wrap items-center justify-end gap-3 text-sm sm:w-auto">
          <nav className="flex items-center gap-3">
            <NavLink
              to="/incidents"
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3 py-1 text-slate-300 transition hover:text-white',
                  isActive && 'bg-white/10 text-white'
                )
              }
            >
              Overview
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-slate-300 shadow-inner shadow-black/30">
              <p className="font-semibold text-white">Signed in as</p>
              <p className="text-[11px] text-slate-400">user@example.com</p>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader

