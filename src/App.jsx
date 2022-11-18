import { Attribution } from './components/Attribution'
import { CardForm } from './components/Card/CardForm'
import useWindowDimensions from './hooks/useWindowDimensions';

function App() {
  const { width } = useWindowDimensions();

  return (
    <div className={`flex flex-col bg-no-repeat bg-pattern-size h-full ${width > 490 ? "bg-main-desktop" : "bg-main-mobile"}`} >
      <CardForm />
      <Attribution />
    </div>
  )
}

export default App