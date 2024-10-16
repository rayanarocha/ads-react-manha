import { useState } from 'react'

const DataCollectionHook = () => {

    const[data, setData] = useState({
        name: "Rayana",
        surname: "Rocha",
        linkedin: "https://www.linkedin.com/in/rayanarocha/"
    })
    
  return (
      <div className='formulario'>
        <h2>Formulário</h2>
        <label>Name: </label>
        <input 
            type="text"
            value={data.name}
            onChange={e => {setData({...data, name: e.target.value})}}
        />

        <label>Surname: </label>
        <input 
            type="text"
            value={data.surname}
            onChange={e => {setData({...data, surname: e.target.value})}}
        />

        <label>Perfil Linkedin: </label>
        <input 
            type="text"
            value={data.linkedin}
            onChange={e => {setData({...data, linkedin: e.target.value})}}
        />
        <br />

        <div>
            <p>Dados inseridos: </p>
            <p>Nome: {data.name}</p>
            <p>Sobrenome: {data.surname}</p>
            <p>Linkedin: {data.linkedin}</p>
        </div>
    </div>
  )
}

export default DataCollectionHook
