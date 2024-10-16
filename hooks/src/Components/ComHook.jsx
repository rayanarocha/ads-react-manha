import { useState } from "react"

const ComHook = () => {
  
    const [number, setNumber] = useState(20)
  
    return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(30)}>Mudar variável</button>
    </div>
  )
}

export default ComHook





