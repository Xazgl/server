
import img1 from '/public/images/vivaro/1.png'
import img2 from '/public/images/vivaro/2.png'
import img3 from '/public/images/vivaro/3.png'
import img4 from '/public/images/vivaro/4.png'
import { Dispatch, FormEvent, SetStateAction } from 'react'


export function TextVivaro({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
<>       
    <div className='bigColumn'>
        <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'>УНИВЕРСАЛЬНОСТЬ</div>
               <div className='columnText'>
                   <ul>
                       <li>Opel Vivaro доступен в двух длинах кузова: M (4 959 мм) и L (5 309 мм).</li>
                       <li> Обе длины вмещают 3 европоддона.</li>
                       <li>Раздвижные двери обеспечивают широкий проем для удобного доступа пассажиров и загрузки предметов.</li>
                       <li>Высота Vivaro до 1,9 м позволяет заезжать на подземные парковки.</li>
                   </ul>
               </div>
            </div>
           <div  className = "column" id = "leftColumn1"></div>
        </div>
        <div className="containerWithColumn">
           <div  className = "column" id = "leftColumn2"></div>
           <div  className = "column" id = "rightColumn">
                <div className='columnName'>ПОГРУЗКА</div>
                <div className='columnText'>Технология FlexCargo® расширяет погрузочную длину Vivaro до 4 метров благодаря специальному лючку в перегородке переднего сиденья.
                    Экономьте на поездках и перевозите больше благодаря максимальной грузоподъёмности нового Vivaro — до 1 333 кг.
                    Доступ к грузовому пространству обеспечивается через задние распашные двери и боковую сдвижную дверь, что позволяет без проблем разместить даже габаритные грузы.
               </div>
           </div>
        </div>

        <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'>МОБИЛЬНЫЙ ОФИС</div>
               <div className='columnText'>
                   <ul>
                       <li>Превратите свой Vivaro в офис на колесах с помощью двухместного пассажирского сиденья FlexCargo® и регулируемого офисного стола для водителя или пассажира.</li>
                       <li>Наслаждайтесь высоким уровнем комфорта в просторном салоне Vivaro с подогреваемыми сиденьями переднего ряда.</li>
                       <li>В Vivaro достаточно места для размещения любых предметов благодаря открытым вещевым отсекам в приборной панели, отделениям для бутылок емкостью до 1,5 л. в дверных карманах и перчаточному ящику с функцией охлаждения</li>
                   </ul>       
               </div>
           </div>
           <div  className = "column" id = "leftColumn3"></div>
        </div>
        <div className="containerWithColumn">
           <div  className = "column" id = "leftColumn4"></div>
           <div  className = "column" id = "rightColumn">
           <div className='columnName'>ПОЛЕЗНЫЕ ОПЦИИ</div>
                <div className='columnText'>
                    <ul>
                        <li>Уже в стандартной комплектации Vivaro оборудован эффективными опциями безопасности, такими как антиблокировочная тормозная система (ABS), электронная система динамической стабилизации (ESP), фронтальные подушки безопасности водителя и пассажира, система помощи при экстренном торможении (BOS).</li>
                        </ul>
                </div>
           </div>
        </div>
    </div>
       
    
    <div className="miniColumn">
      <div className="columnt">
         <div className="columnMiniImg" id="first"></div>
        <div className="columnMini">
           <div className="title">УНИВЕРСАЛЬНОСТЬ</div>
           <div className="words">
             <ul>
                 <li>Opel Vivaro доступен в двух длинах кузова: M (4 959 мм) и L (5 309 мм).</li>
                  <li> Обе длины вмещают 3 европоддона.</li>
                  <li>Раздвижные двери обеспечивают широкий проем для удобного доступа пассажиров и загрузки предметов.</li>
                   <li>Высота Vivaro до 1,9 м позволяет заезжать на подземные парковки.</li>
             </ul>
           </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="second"></div>
        <div className="columnMini">
           <div className="title">ПОГРУЗКА</div>
           <div className="words">
               Технология FlexCargo® расширяет погрузочную длину Vivaro до 4 метров благодаря специальному лючку в перегородке переднего сиденья. Экономьте на поездках и перевозите больше благодаря максимальной грузоподъёмности нового Vivaro — до 1 333 кг. Доступ к грузовому пространству обеспечивается через задние распашные двери и боковую сдвижную дверь, что позволяет без проблем разместить даже габаритные грузы
           </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="three"></div>
         <div className="columnMini">
           <div className="title">МОБИЛЬНЫЙ ОФИС</div>
           <div className="words">
                     <ul>
                       <li>Превратите свой Vivaro в офис на колесах с помощью двухместного пассажирского сиденья FlexCargo® и регулируемого офисного стола для водителя или пассажира.</li>
                       <li>Наслаждайтесь высоким уровнем комфорта в просторном салоне Vivaro с подогреваемыми сиденьями переднего ряда.</li>
                       <li>В Vivaro достаточно места для размещения любых предметов благодаря открытым вещевым отсекам в приборной панели, отделениям для бутылок емкостью до 1,5 л. в дверных карманах и перчаточному ящику с функцией охлаждения</li>
                   </ul>
           </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="four"></div>
         <div className="columnMini">
           <div className="title">ПОЛЕЗНЫЕ ОПЦИИ</div>
           <div className="words">Уже в стандартной комплектации Vivaro оборудован эффективными опциями безопасности, такими как антиблокировочная тормозная система (ABS), электронная система динамической стабилизации (ESP), фронтальные подушки безопасности водителя и пассажира, система помощи при экстренном торможении (BOS).
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