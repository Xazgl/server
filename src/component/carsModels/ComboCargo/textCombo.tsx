import { FormEvent } from 'react'
import img1 from '/public/images/cargo/1.png'
import img2 from '/public/images/cargo/2.png'
import img3 from '/public/images/cargo/3.png'
import img4 from '/public/images/cargo/4.png'


export function TextCombo({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
     <>
             

    <div className='bigColumn'>
        <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'><span className='span'>ДИЗАЙН</span></div>
               <div className='columnText'><span className='span'>Лаконичный и практичный Opel Combo Cargo станет незаменимым помощником для вашего бизнеса.
                   Высокая посадка и широкий угол обзора, многочисленные удобные места для хранения обеспечивают комфорт и эргономичность водительского места.
                   Светодиодные дневные ходовые огни эффективно помогают обезопасить вас и других водителей в темное время суток.</span></div>
           </div>
           <div  className = "column" id = "leftColumn1"></div>
        </div>
        <div className="containerWithColumn">
           <div  className = "column" id = "leftColumn2"></div>
           <div  className = "column" id = "rightColumn">
           <div className='columnName'><span className='span'>ХАРАКТЕРИСТИКИ</span></div>
                <div className='columnText'><span className='span'>Opel Combo Cargo поставляется в двух вариантах кузова — 4,4 м для обычной версии или 4,75 м для Opel Combo Cargo XL с удлиненной колесной базой. Выберите фургон, который подходит именно Вам.
                   В Opel Combo Cargo достаточно места, чтобы удовлетворить все ваши потребности в перевозке грузов, поэтому даже крупногабаритные объекты можно перемещать с комфортом.
                   Высокая грузоподъемность в 708 кг Opel Combo Cargo XL делает фургон идеальным партнером в бизнесе. Индикатор перегрузки измеряет заднюю часть кузова и предупреждает водителя о превышении допустимого веса.
                   </span></div>
           </div>
        </div>

        <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'><span className='span'>БЕЗОПАСНОСТЬ И ТЕХНОЛОГИИ</span></div>
               <div className='columnText'><span className='span'>ABS- Антиблокировочная система предотвращает блокировку колес автомобиля при экстренном торможении и позволяет сохранить прямолинейную траекторию на дорогах с неоднородным покрытием.
                   ESP- Система динамической стабилизации (ESP) помогает сохранить контроль над траекторией автомобиля в сложных дорожных ситуациях.
                   ЭРА-ГЛОНАСС- Система аварийного оповещения экстренных служб ЭРА-ГЛОНАССHILL ASSIST- Cистема помощи (удержания автомобиля) при начале движения на склоне.
                   Мультимедийная система с экраном 7″ на базе операционной системы Android (радио, BlueTooth, 2 USB) с управлением подрулевым переключателем, два динамика.
                   Базовая комплектация Opel Combo Cargo включает внешние боковые зеркала с электроприводом регулировок и обогревом.
                   </span></div>
           </div>
           <div  className = "column" id = "leftColumn3"></div>
        </div>
        <div className="containerWithColumn">
           <div  className = "column" id = "leftColumn4"></div>
           <div  className = "column" id = "rightColumn">
           <div className='columnName'><span className='span'>ДВИГАТЕЛЬ</span></div>
                <div className='columnText'><span className='span'>Opel Combo Cargo поставляется с двумя версиями двигателей, бензиновым Injection 1.6л.(115) и дизельным — Diesel 1.6л.(90). Все автомобили конфигурируются 5-ступенчатой механической коробкой передач.
                </span></div>
           </div>
        </div>
    </div>
       
    
    <div className="miniColumn">
      <div className="columnt">
         <div className="columnMiniImg" id="first"></div>
        <div className="columnMini">
           <div className="title"><span className='span'>ДИЗАЙН</span></div>
           <div className="words"><span className='span'>Лаконичный и практичный Opel Combo Cargo станет незаменимым помощником для вашего бизнеса.
                   Высокая посадка и широкий угол обзора, многочисленные удобные места для хранения обеспечивают комфорт и эргономичность водительского места.
                   Светодиодные дневные ходовые огни эффективно помогают обезопасить вас и других водителей в темное время суток
                </span>
            </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="second"></div>
        <div className="columnMini">
           <div className="title"><span className='span'>ХАРАКТЕРИСТИКИ</span></div>
           <div className="words"><span className='span'>Opel Combo Cargo поставляется в двух вариантах кузова — 4,4 м для обычной версии или 4,75 м для Opel Combo Cargo XL с удлиненной колесной базой. Выберите фургон, который подходит именно Вам.
                   В Opel Combo Cargo достаточно места, чтобы удовлетворить все ваши потребности в перевозке грузов, поэтому даже крупногабаритные объекты можно перемещать с комфортом.
                   Высокая грузоподъемность в 708 кг Opel Combo Cargo XL делает фургон идеальным партнером в бизнесе. Индикатор перегрузки измеряет заднюю часть кузова и предупреждает водителя о превышении допустимого веса
                   </span>
            </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="three"></div>
         <div className="columnMini">
           <div className="title"><span className='span'>БЕЗОПАСНОСТЬ И ТЕХНОЛОГИИ</span></div>
           <div className="words"><span className='span'>ABS- Антиблокировочная система предотвращает блокировку колес автомобиля при экстренном торможении и позволяет сохранить прямолинейную траекторию на дорогах с неоднородным покрытием.
                   ESP- Система динамической стабилизации (ESP) помогает сохранить контроль над траекторией автомобиля в сложных дорожных ситуациях.
                   ЭРА-ГЛОНАСС- Система аварийного оповещения экстренных служб ЭРА-ГЛОНАССHILL ASSIST- Cистема помощи (удержания автомобиля) при начале движения на склоне.
                   Мультимедийная система с экраном 7″ на базе операционной системы Android</span>
           </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="four"></div>
         <div className="columnMini">
           <div className="title"><span className='span'>ДВИГАТЕЛЬ</span></div>
           <div className="words"><span className='span'>Opel Combo Cargo поставляется с двумя версиями двигателей, бензиновым Injection 1.6л.(115) и дизельным — Diesel 1.6л.(90). Все автомобили конфигурируются 5-ступенчатой механической коробкой передач</span></div>
        </div>
      </div>
    </div>

<style jsx>{` 
.background {
    display: flex;
}
.span {
    width: 100%;
    display: inline-block;
    text-align: center;
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
    font-family: 'Montserrat'; 
    margin-top:20px;
    display:flex;
    justify-content:center;
}
.columnText{ 
    font-size:16px;
    font-family: 'Montserrat'; 
    margin-top:30px;
    align-items:center;
    justify-content:center;
    padding: 10px;
}
.miniColumn {
    display:none;
    justify-content:center;
    align-items:center;
    flex-direction:column;
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
    font-family: 'Montserrat'; 
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:row;
    font-weight: 600;
    margin-top:10px;
}
.words{
    font-size:14px;
    font-family: 'Montserrat'; 
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
.miniColumn{
    display:flex;
}
.bigColumn{
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

}

`}</style>

     </>)}