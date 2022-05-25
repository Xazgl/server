import { Dispatch, FormEvent, SetStateAction } from 'react'
import img1 from '/public/images/grandland/1.png'
import img2 from '/public/images//grandland/2.png'
import img3 from '/public/images/grandland/3.png'
import img4 from '/public/images//grandland/4.png'



export function TextGrandland({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
<>       
    <div className='bigColumn'>
        <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'>ИНТЕРЬЕР</div>
               <div className='columnText'>В Новом Opel Grandland X все разработано с заботой о комфорте водителя и пассажиров. Продуманная эргономика, высококачественные материалы отделки и практичный дизайн интерьера сделает Grandland X Вашим личным пространством!
               </div>
            </div>
           <div  className = "column" id = "leftColumn1"></div>
        </div>
        <div className="containerWithColumn">
           <div  className = "column" id = "leftColumn2"></div>
           <div  className = "column" id = "rightColumn">
                <div className='columnName'>КОМФОРТ</div>
                <div className='columnText'>Эргономичные передние сиденья, сертифицированные организацией Aktion Gesunder Rücken (AGR — Ассоциация врачей и терапевтов по вопросам здоровья позвоночника)¹, обеспечивают первоклассный комфорт в поездках.
                     Opel Grandland X готов к суровым реалиям Российского климата и уже в базовой комплектации оборудован пакетом Winter Options (Зимних опций).
                </div>
           </div>
        </div>

        <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'>ИННОВАЦИИ</div>
               <div className='columnText'>
                   <ul>
                       <li>Интеллектуальные, полностью светодиодные фары AFL обеспечивают более мощный световой поток чем у галогенных фар. Система автоматического переключения света с ближнего на дальний в темное время суток делает вождение менее утомительным и способствует повышению безопасности.</li>
                       <li>Современные системы помощи при вождении Opel Grandland X делают вождение проще и безопаснее, чем когда-либо прежде.
                             Уверенность даже в условиях ограниченной видимости.</li>    
                   </ul> 
               </div>
           </div>
           <div  className = "column" id = "leftColumn3"></div>
        </div>
        <div className="containerWithColumn">
           <div  className = "column" id = "leftColumn4"></div>
           <div  className = "column" id = "rightColumn">
           <div className='columnName'>СИСТЕМЫ СВЯЗИ</div>
                <div className='columnText'>Современная мультимедийная система НАВИ IntelliLink® 5.0 с встроенной системой навигации и 8-ми дюймовым сенсорным дисплеем поможет вам получить максимум удовольствия от поездки.
Забудьте о проводах, ведь в новом Opel Grandland X зарядить гаджеты можно и без них. Просто поместите телефон в специальный отсек в подлокотнике для подзарядки.
                </div>
           </div>
        </div>
    </div>
       
    
    <div className="miniColumn">
      <div className="columnt">
         <div className="columnMiniImg" id="first"></div>
        <div className="columnMini">
           <div className="title">ИНТЕРЬЕР</div>
           <div className="words">В Новом Opel Grandland X все разработано с заботой о комфорте водителя и пассажиров. Продуманная эргономика, высококачественные материалы отделки и практичный дизайн интерьера сделает Grandland X Вашим личным пространством!
            </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="second"></div>
        <div className="columnMini">
           <div className="title">КОМФОРТ</div>
           <div className="words">Эргономичные передние сиденья, сертифицированные организацией Aktion Gesunder Rücken (AGR — Ассоциация врачей и терапевтов по вопросам здоровья позвоночника)¹, обеспечивают первоклассный комфорт в поездках.
                Opel Grandland X готов к суровым реалиям Российского климата и уже в базовой комплектации оборудован пакетом Winter Options (Зимних опций).
           </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="three"></div>
         <div className="columnMini">
           <div className="title">ИННОВАЦИИ</div>
           <div className="words">
                  <ul>
                       <li>Интеллектуальные, полностью светодиодные фары AFL обеспечивают более мощный световой поток чем у галогенных фар. Система автоматического переключения света с ближнего на дальний в темное время суток делает вождение менее утомительным и способствует повышению безопасности.</li>
                       <li>Современные системы помощи при вождении Opel Grandland X делают вождение проще и безопаснее, чем когда-либо прежде.
                             Уверенность даже в условиях ограниченной видимости.</li>    
                   </ul> 
           </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="four"></div>
         <div className="columnMini">
           <div className="title">СИСТЕМЫ СВЯЗИ</div>
           <div className="words">Современная мультимедийная система НАВИ IntelliLink® 5.0 с встроенной системой навигации и 8-ми дюймовым сенсорным дисплеем поможет вам получить максимум удовольствия от поездки.
                 Забудьте о проводах, ведь в новом Opel Grandland X зарядить гаджеты можно и без них. Просто поместите телефон в специальный отсек в подлокотнике для подзарядки.
           </div>
        </div>
      </div>
    </div>

<style jsx>{` 
.background {
    display: flex;
}
.bigColumn{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center; 
}
 .containerWithColumn {
    display: flex;
    flex-direction: columnt;
    width: 1100px;
}
.column {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 420px;
}

#leftColumn1{
    background-position: center center;
    background-image: url('${img1.src}');
    overflow: hidden;
    background-repeat: no-repeat;
    -moz-background-size: contain;
    background-size: contain;
    
}
#leftColumn2{
    background-position: center center;
    background-image: url('${img2.src}');
    overflow: hidden;
    background-repeat: no-repeat;
    -moz-background-size: contain;
    background-size: contain;
}
#leftColumn3{
    background-position: center center;
    background-image: url('${img3.src}');
    overflow: hidden;
    background-repeat: no-repeat;
    -moz-background-size: contain;
    background-size: contain;
}
#leftColumn4{
    background-position: center center;
    background-image: url('${img4.src}');
    overflow: hidden;
    background-repeat: no-repeat;
    -moz-background-size: contain;
    background-size: contain;
}

#rightColumn{
 padding:20px;
}

.columnName {
    font-size:25px;
    font-family: 'OpelNextW01-Regular', sans-serif; 
    margin-top:20px;
    display:flex;
    justify-content:center;
}
.columnText{ 
    font-size:16px;
    font-family: 'OpelNextW01-Regular', sans-serif; 
    margin-top:30px;
    align-items:center;
    justify-content:center;
}
.miniColumn {
    display:none;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}
li {
    list-style-type:none;
}
.columnt {
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:10px;
}
.columnMini{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width: 400px;
    height: 400px;
    justify-content: start;
}
.columnMiniImg{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width: 400px;
    height: 300px;

}
#first {
    display:flex; 
     background-position: center center;
    background-image: url('${img1.src}');
    overflow: hidden;
    background-repeat: no-repeat;
    -moz-background-size: contain;
    background-size: contain;
}
#second {
    display:flex; 
     background-position: center center;
    background-image: url('${img2.src}');
    overflow: hidden;
    background-repeat: no-repeat;
    -moz-background-size: contain;
    background-size: contain;
}
#three {
    display:flex; 
     background-position: center center;
    background-image: url('${img3.src}');
    overflow: hidden;
    background-repeat: no-repeat;
    -moz-background-size: contain;
    background-size: contain;
}
#four {
    display:flex; 
     background-position: center center;
    background-image: url('${img4.src}');
    overflow: hidden;
    background-repeat: no-repeat;
    -moz-background-size: contain;
    background-size: contain;
}
.title{
    font-size:20px;
    font-family: 'OpelNextW01-Regular', sans-serif; 
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:row;
    font-weight: 600;
    margin-top:10px;
}
.words{
    font-size:14px;
    font-family: 'OpelNextW01-Regular', sans-serif; 
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:row;
    margin-top:5px;
}
@media(max-width: 1250px) {
    .containerWithColumn {
        height: 400px;
        width:800px;
    }
    .columnText {
        font-size: 14px;
    }
}
@media(max-width: 850px) {
    .containerWithColumn {
        height: 400px;
        width:600px;
    }
    .columnText {
        font-size: 12px;
    }
}
@media(max-width: 620px) {
.miniColumn {
    display:flex;
}
.bigColumn {
    display:none;
}
}
@media(max-width: 450px) {
    .columnMiniImg {
        width: 300px;
       height: 220px;
    }
    .words {
    font-size: 11px;
    padding:30px;
    }
    .title{
    font-size: 14px;
    }
}
@media(max-width: 350px) {
    .miniColumn {
       display:none;
    }
}
`}</style>
</>)}