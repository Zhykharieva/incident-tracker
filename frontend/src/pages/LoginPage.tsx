import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'

const LoginPage = () => {
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate('/incidents')
  }

  return (
    <section className="flex min-h-[65vh] w-full flex-1 items-center justify-center px-4 py-10 sm:px-8">
      <div className="w-full max-w-lg space-y-8 rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.5em] text-indigo-300">Access</p>
          <h1 className="text-2xl font-semibold text-white">Sign in to Incident Tracker</h1>
          <p className="text-sm text-slate-400">
            Monitor live incidents, escalations and runbooks from one focused workspace.
          </p>
        </div>

        <div className="space-y-3">
          <Button size="lg" className="w-full justify-center gap-3" onClick={handleContinue}>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-900">
              G
            </span>
            Sign in with Google
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full justify-center gap-3"
            onClick={handleContinue}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white">
              GH
            </span>
            Sign in with GitHub
          </Button>
        </div>

        <p className="text-xs text-slate-500">
          SSO coming soon. Use either option to preview the incidents workspace.
        </p>
      </div>
    </section>
  )
}

export default LoginPage
