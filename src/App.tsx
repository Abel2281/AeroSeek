import './App.css'
import Navbar from './components/Navbar'
import { WeatherCard } from './components/WeatherCard'

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <main className="flex-1 flex items-center justify-center w-full px-4">
        <WeatherCard />
      </main>
    </div>
  )
}

export default App


