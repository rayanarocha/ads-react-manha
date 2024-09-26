const Event = () => {

    const handleMyButton = (e) => {
        console.log(e)
        console.log("Evento ativado")
    }

    return (
        <div>
            <div>
                <button onClick={handleMyButton}>Clique aqui</button>
            </div>
            <div onClick={() => console.log("clicou!")}>
                Clique aqui também
            </div>
            <div><button>Outro cli</button></div>
        </div>
    )
}

export default Event