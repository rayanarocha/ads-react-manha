import './App.css'
import HalfDakotaPiata from "./assets/halfdkttonton.jpg"

const renderComponent = (x) => {
  if(x) {
    return <h1>Renderizou dentro do if</h1>
  } else {
    return <h1>Renderizou dentro do else</h1>
  }
}

function App() {

  return (
    <div>
      <div>
            <div>
                <img src="./public/dkttonton.jpg" alt="Foto de Dakota e Piatã boca de tubarão" width='250' height='200' />
            </div>
            <div>
                <img src={HalfDakotaPiata} alt="Half part of Dakota e Piatã" width='250' height='200'/>
            </div>
            <div>{renderComponent(true)}</div>
            <div>{renderComponent(false)}</div>
        </div>
    </div>
  )
}

export default App
