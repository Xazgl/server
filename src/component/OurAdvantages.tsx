import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"
import n1 from '/public/images/a71.png'
import n2 from '/public/images/a72.png'
import n3 from '/public/images/a73.png'
import n4 from '/public/images/a74.png'
import n5 from '/public/images/a75.png'



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
              <div className="containerEl" id="n1">
                  <div className="title">Диагностика</div>
                  <div className="words"><span className='span'>Проверка авто по 25+ пунктам.Выявление неисправностей</span></div>
              </div>
              <div className="containerEl" id="n2">
                  <div className="title">Гарантийный ремонт</div>
                  <div className="words"><span className='span'>Ремонт автомобиля по гарантии от производителя</span></div>
              </div>
              <div className="containerEl" id="n3">
                  <div className="title">ТО по регламенту</div>
                  <div className="words"><span className='span'>Пришло время пройти ТО? Запишитесь прямо сейчас!</span></div>
              </div>
            </div>
            <div className="container" >
              <div className="containerEl" id="n4">
                  <div className="title">Кузовные работы</div>
                  <div className="words"><span className='span'>Ремонт кузовных элементов,сколов, выпрямление вмятин.</span></div>
              </div>
              <div className="containerEl" id="n5">
                  <div className="title">Ремонт любой сложности</div>
                  <div className="words"><span className='span'>Ремонт и замена узлов и агрегатов. Оригинальные запчасти.</span></div>
              </div>
              <div className="containerEl" id="n6">
                  <div className="title">Техобслуживание</div>
                  <div className="words"><span className='span'>Замена масла, фильтров и другие работы.</span></div>
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
    margin-top:50px;
    align-items: center;
}

.titleMain{
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-family: 'OpelNextW01-Regular', sans-serif;
    font-size:30px;
    font-weight:bold;
    margin-bottom:20px;
}

.container{
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;  
    width:1000px;
    align-items:center;
}
#n1 {
    background-image:url('${n1.src}');
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}
.span {
    width: 100%;
    display: inline-block;
    text-align: center;
}
#n2 {
    background-image: url('${n2.src}');
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}
#n3 {
    background-image: url('${n3.src}');
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}
#n4 {
    background-image: url('${n4.src}');
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}
#n5 {
    background-image: url('${n5.src}');
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}
#n6 {
    background-image: url('${n5.src}');
    background-position: center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
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
    width:310px;
    height:250px;
    background-blend-mode: darken;
    background: rgba(0, 0, 0, .60);

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
    font-size:19px;
    font-family: 'Montserrat', sans-serif;
    align-items:center;
    font-weight: bold;
}

.words {
    margin-top:14px;
    display:flex;
    justify-content:center;
    flex-direction:row;
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
    margin-top:50px;
    margin-bottom:20px;
    font-family: 'Montserrat', sans-serif;
    border-radius: 3px;
    transition: transform.3s ;
    color: #ffffff;
    border-color: #000;
    color: #000;
    background: 0 0;
    width: 250px;
    height: 50px;
    font-size: 23px;
}

.btn:hover {
    background-color: #f7ff14;
    font-family: 'Montserrat', sans-serif;
    color:black;
    transform: scale(1.02);
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
}     

@media(max-width: 1100px) {
    .container{
        width: 100%;
    }
   .containerEl{
     width:250px;
     height:210px;
     padding:5px;
   }
   .title{
    font-size:17px;
   }
   .words {
    font-size:16px;
    padding-left:10px;
   }
   .btn {
    font-size: 25px;
    margin-top:30px;
   }
   .btn:hover {
    font-size: 26px;
   }
}
@media(max-width: 800px) {
    .container{
     flex-direction: column;
    }
   .containerEl{
     width:450px;
     height:150px;
     padding:5px;
    }
   .titleMain{
    margin-bottom: 0px;
    font-size: 25px;
    }
   .title{
    font-size:20px;
    }
   .words {
    font-size:18px;
    padding-left:10px;
    }
   .btn {
    height: 40px;
    font-size: 20px;
    width: 200px;
    margin-top:20px;
    }
   .btn:hover {
    font-size: 21px;
    }
}
@media(max-width: 540px) {
   .containerEl{
     width:300px;
     height:150px;
     padding:5px;
   }
   .titleMain{
    margin-bottom: 0px;
    font-size: 20px;
   }
   .title{
    font-size:17px;
   }
   .words {
    font-size:14px;
    padding-left:10px;
   }
   .btn {
    height: 40px;
    font-size: 17px;
    width: 160px;
    margin-top:20px;
   }
   .btn:hover {
    font-size: 18px;
   }
}
@media(max-width: 340px) {

.containerEl{
  width:200px;
  height:100px;
  padding:5px;
}
.titleMain{
 margin-bottom: 0px;
 font-size: 17px;
}
.title{
 font-size:12px;
}
.words {
 font-size:10px;
 padding-left:10px;
}
.btn {
 height: 35px;
 font-size: 16px;
 width: 120px;
 margin-top:20px;
}
.btn:hover {
 font-size: 17px;
}
}
@media(max-width: 240px) {

.containerEl{
  width:150px;
  height:100px;
  padding:5px;
}
.titleMain{
 margin-bottom: 0px;
 font-size: 12px;
}
.title{
 font-size:10px;
}
.words {
 font-size:9px;
 padding-left:10px;
}
.btn {
 height: 30px;
 font-size: 12px;
 width: 100px;
 margin-top:20px;
}
.btn:hover {
 font-size: 12px;
}
}

 `}</style>
</>
)}

function setShowModal(arg0: boolean) {
    throw new Error("Function not implemented.")
}
        