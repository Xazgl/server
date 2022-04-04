import { useState } from "react"

type Model = {
  id: number,
  price: number,
  name: string
}

const modelList: Model[] = [
  {
    id: 1,
    price: 2000000,
    name: 'Cargo'
  },
  {
    id: 2,
    price: 2030000,
    name: 'Astra'
  },
]

export function Model() {
  const [curModelId, setCurModelId] = useState(0)

  /*let  parseString = require('/public/peugeotNew.xml').parseString;
  let  xml = "<root>Hello xml2js!</root>"
  parseString(xml, function(err:any, result:string) {
    console.dir(JSON.stringify(result));
  }); */

  return (
    <div  className="title">
      <div className="titleWords">Модельный ряд OPEL</div>
      <div className="containerModel">
      <div className="dropdown">
        <select  className="selectModel" value={curModelId} onChange={event => setCurModelId(+event.target.value)}>
          <option value={0} selected disabled>Выберите модель</option>
          {modelList.map(model => <option key={model.id} value={model.id}>{model.name}</option>)}
        </select>
       </div>
       <div className="dropdown">
          <h3  className="price">Цена: {modelList.find(model => model.id === curModelId)?.price || 'Укажите модель'}</h3>
       </div>
      </div>

<style jsx>{`
  .title{
    display: flex;
    justify-content:center;
    flex-direction:column;
  }
  .titleWords{
    display: flex;
    justify-content:center;
    flex-direction:row;
    font-size:25px;
    font-family: Montserrat; 
    font-weight: bold;
    margin-top: 30px;
  }
 .selectModel{
   background-color: black;
   color: #f7ff14;
   font-size: 20px;
   font-family: Montserrat; 
   border-radius: 6px;
  }
  .selectModel:hover{
    background-color: #f7ff14;
    color: black;
  }


  .price {
    font-size: 20px;
    font-family: Montserrat; 
  }
 .containerModel {
   display: flex;
   justify-content:space-evenly;
   align-items: center;
   margin-top: 50px;
  }

.dropdown {
  display: flex; 
 }


`}</style>

</div>
  )
}

