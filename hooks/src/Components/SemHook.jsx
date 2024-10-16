const SemHook = () => {
  
    let someData = 10

    console.log(someData)
  
    return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15)}>Mudar variável</button>
    </div>
  )
}

export default SemHook
