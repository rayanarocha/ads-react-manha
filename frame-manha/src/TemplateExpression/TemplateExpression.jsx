const TemplateExpression = () => {

    const data = {
        nome: "Rayana",
        curso: "ADS"
    }

    return (
        <div>
            <p>Olá, me chamo {data.nome} e estou cursando {data.curso}</p>
        </div>
    )

}

export default TemplateExpression