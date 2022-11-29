import { Attribution } from './components/Attribution'
import { CCForm } from './components/CCForm'
import useWindowDimensions from './hooks/useWindowDimensions';

function App() {
  const { width } = useWindowDimensions();

  return (
    <div className={`flex flex-col bg-no-repeat bg-pattern-size h-full ${width > 490 ? "bg-desktop" : "bg-mobile"}`} >
      <CCForm />
      <Attribution />
    </div>
  )
}

export default App