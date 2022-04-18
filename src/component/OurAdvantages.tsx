import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"


export function OurAdvantages({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }){
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    return (
        
        <>
        <div className="ourAdvantages">

            <div className="titleMain">Наши приемущества</div>
            <div className="container">
              <div className="containerEl">
                  <div className="title">Диагностика</div>
                  <div className="words">Проверка авто по 25+ пунктам.Выявление неисправностей</div>
              </div>
              <div className="containerEl">
                  <div className="title">Гарантийный ремонт</div>
                  <div className="words">Ремонт автомобиля по гарантии от производителя</div>
              </div>
              <div className="containerEl">
                  <div className="title">ТО по регламенту</div>
                  <div className="words">Пришло время пройти ТО? Запишитесь прямо сейчас!</div>
              </div>
            </div>
            <div className="container">
              <div className="containerEl">
                  <div className="title">Кузовные работы</div>
                  <div className="words">Ремонт кузовных элементов, сколов, выпрямление вмятин.</div>
              </div>
              <div className="containerEl">
                  <div className="title">Ремонт любой сложности</div>
                  <div className="words">Ремонт и замена узлов и агрегатов. Оригинальные запчасти.</div>
              </div>
              <div className="containerEl">
                  <div className="title">Техобслуживание</div>
                  <div className="words">Замена масла, фильтров и другие работы.</div>
              </div>
            </div>
          <div className="btnDiv">
           <form onSubmit={showModal}>
              <button className="btn">Записаться</button>
            </form>
          </div>
        </div>    

 <style jsx>{`
.ourAdvantages{
    display:flex;
    flex-direction:column;
    margin-top:20px;
}

.titleMain{
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-family: 'Montserrat', sans-serif;
    font-size:30px;
    font-weight:bold;
}

.container{
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;  
}

.containerEl{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border:solid;
    border-color:#f7ff14;
    padding:10px;
    margin-top:30px;
    width:400px;
    height:250px;
    background-color:rgb(51, 51, 51);
    border-radius: 7px;
    color: white;
}

.containerEl:hover{
        box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        transform: scale(1.005);
}


.title{
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-size:23px;
    font-family: 'Montserrat', sans-serif;
    align-items:center;
    font-weight: bold;
}

.words {
    margin-top:20px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-size:17px;
    font-family: 'Montserrat', sans-serif;
    align-items:center;
}

.btnDiv {
    display:flex;
    flex-direction:row;
    justify-content:center;
}

.btn {
    margin-top:20px;
    font-family: 'Montserrat', sans-serif;
    border-radius: 3px;
    border:none;
    transition: transform.3s ;
    color: #ffffff;
    background-color: #48484d;
    width: 300px;
    height: 40px;
    font-size: 25px;
    margin-bottom:10px;
}

.btn:hover {
    background-color: #f7ff14;
    font-size: 20px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    color:black;
    transform: scale(1.02);
    font-size: 24px;
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
}         `}</style>
</>
)}

function setShowModal(arg0: boolean) {
    throw new Error("Function not implemented.")
}
        