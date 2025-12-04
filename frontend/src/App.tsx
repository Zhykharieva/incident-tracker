import { Navigate, Route, Routes } from 'react-router-dom'
import AppHeader from './components/layout/AppHeader'
import IncidentsPage from './pages/IncidentsPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      <AppHeader />
      <main className="box-border w-full px-4 py-6 sm:px-8 lg:px-14">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/incidents" element={<IncidentsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
