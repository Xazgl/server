import { Dispatch, FormEvent, SetStateAction } from 'react'
import img1 from '/public/images/comboLife/1.png'
import img2 from '/public/images/comboLife/2.jpg'
import img3 from '/public/images/comboLife/3.png'
import img4 from '/public/images/comboLife/4.png'
import img5 from '/public/images/comboLife/5.jpg'



export function TextComboLife({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
<>       
    <div className='bigColumn'>
        <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'>УДОБСТВО ДОСТУПА</div>
               <div className='columnText'>Какие бы задачи вы не ставили перед Opel Combo Life, пространства для крупоногабаритного багажа хватит с запасом. Багажная дверь занимает всю ширину кузова и продолжается до самого заднего бампера, открывая огромные возможности для размещения вещей. Погрузочная высота минимальная, и вам будет не сложно поместить внутрь и увесистые коробки и тяжелые сумки из магазина.
                   Объем багажника у Combo Life составляет 675 литров, а сложив сиденья второго ряда, вы получите 3000 литров.
                   Для пассажиров на втором ряду подготовлены три раздельных мультифункциональных задних сиденья, которые можно отрегулировать индивидуально.
                </div>
            </div>
           <div  className = "column" id = "leftColumn1"></div>
        </div>
        <div className="containerWithColumn">
           <div  className = "column" id = "leftColumn2"></div>
           <div  className = "column" id = "rightColumn">
                <div className='columnName'>ДИЗАЙН</div>
                <div className='columnText'>Дизайнеры Opel добились удачного сочетания яркой внешности и функциональных преимуществ: Combo Life выглядит и ощущается просторным. Солидный дорожный просвет, небольшой передний и задний свес, массивные молдинги: такой автомобиль не испугается ни городских бордюров, ни раскисших проселочных дорог.
                       Как полагается многофункциональному автомобилю, Opel Combo Life заботится и о вещах, которые нужно отвезти за город, и о водителе, которому нужно вовремя получать советы от удобной системы навигации, и о самых маленьких пассажирах.
               </div>
           </div>
        </div>

        <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'>БЕЗОПАСНОСТЬ</div>
               <div className='columnText'>
                   <ul>Элементы пассивной безопасности
                       <li>— Силовая конструкция кузова из высокопрочной стали</li>
                       <li>— Фронтальные и боковые подушки безопасности</li>
                       <li>— Крепления ISOFIX на боковых задних сидениях</li>
                   </ul>
                   <ul>Элементы активной безопасности
                       <li>— Антиблокировочная система ABS</li>
                       <li>— Система распределения тормозных усилий EBD</li>
                       <li>— Усилитель экстренного торможения AFU</li>
                       <li>— Система динамической стабилизации ESP</li>
                       <li>— Противобуксовочная система ASR</li>
                   </ul>
               </div>
           </div>
           <div  className = "column" id = "leftColumn3"></div>
        </div>
        <div className="containerWithColumn">
           <div  className = "column" id = "leftColumn4"></div>
           <div  className = "column" id = "rightColumn">
           <div className='columnName'>СИСТЕМА INTELLIGRIP</div>
                <div className='columnText'>Intelligrip — это патентованная противобуксовочная система, позволяющая адаптировать сцепление автомобиля с дорогой под тип дорожного покрытия (песок, грунт и снег).
                </div>
           </div>
        </div>
    </div>
       
    
    <div className="miniColumn">
      <div className="columnt">
         <div className="columnMiniImg" id="first"></div>
        <div className="columnMini">
           <div className="title">УДОБСТВО ДОСТУПА</div>
           <div className="words">Какие бы задачи вы не ставили перед Opel Combo Life, пространства для крупоногабаритного багажа хватит с запасом. Багажная дверь занимает всю ширину кузова и продолжается до самого заднего бампера, открывая огромные возможности для размещения вещей. Погрузочная высота минимальная, и вам будет не сложно поместить внутрь и увесистые коробки и тяжелые сумки из магазина. Объем багажника у Combo Life составляет 675 литров, а сложив сиденья второго ряда, вы получите 3000 литров. Для пассажиров на втором ряду подготовлены три раздельных мультифункциональных задних сиденья, которые можно отрегулировать индивидуально.
           </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="second"></div>
        <div className="columnMini">
           <div className="title">ДИЗАЙН</div>
           <div className="words">Дизайнеры Opel добились удачного сочетания яркой внешности и функциональных преимуществ: Combo Life выглядит и ощущается просторным. Солидный дорожный просвет, небольшой передний и задний свес, массивные молдинги: такой автомобиль не испугается ни городских бордюров, ни раскисших проселочных дорог. Как полагается многофункциональному автомобилю, Opel Combo Life заботится и о вещах, которые нужно отвезти за город, и о водителе, которому нужно вовремя получать советы от удобной системы навигации, и о самых маленьких пассажирах.
           </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="three"></div>
         <div className="columnMini">
           <div className="title">БЕЗОПАСНОСТЬ</div>
           <div className="words">
                   <ul>Элементы пассивной безопасности
                       <li>— Силовая конструкция кузова из высокопрочной стали</li>
                       <li>— Фронтальные и боковые подушки безопасности</li>
                       <li>— Крепления ISOFIX на боковых задних сидениях</li>
                   </ul>
                   <ul>Элементы активной безопасности
                       <li>— Антиблокировочная система ABS</li>
                       <li>— Система распределения тормозных усилий EBD</li>
                       <li>— Усилитель экстренного торможения AFU</li>
                       <li>— Система динамической стабилизации ESP</li>
                       <li>— Противобуксовочная система ASR</li>
                   </ul>
           </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="four"></div>
         <div className="columnMini">
           <div className="title">СИСТЕМА INTELLIGRIP</div>
           <div className="words">Intelligrip — это патентованная противобуксовочная система, позволяющая адаптировать сцепление автомобиля с дорогой под тип дорожного покрытия (песок, грунт и снег).
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