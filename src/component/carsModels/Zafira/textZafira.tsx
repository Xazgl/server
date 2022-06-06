import { Dispatch, FormEvent, SetStateAction } from 'react'
import img1 from '/public/images/zafira/1.webp'
import img2 from '/public/images/zafira/2.webp'
import img3 from '/public/images/zafira/3.webp'
import img4 from '/public/images/zafira/4.webp'


export function TextZafira({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
     <>


         <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'>АДАПТИВНОСТЬ</div>
               <div className='columnText'><span className='span1'>Закажите Zafira Life на 8 посадочных мест, соответствующий потребностям вашей семьи или бизнеса. Собираетесь на пляж или организуете деловую встречу? Места хватит на всех!
                   Сиденья второго и третьего рядов можно сдвинуть вперед или назад для большего комфорта ваших ног, сложить или убрать для размещения багажа или развернуть для дружеской беседы лицом к лицу.
                   Парные электрические двери открывают широкие проемы для пассажиров сзади.
                   В каждом автомобиле Zafira Life, выпускаемом в двух размерах, соблюден идеальный баланс между относительно компактными размерами и просторным, в высшей степени универсальным интерьером.
                </span></div>
           </div>
           <div  className = "column" id = "leftColumn1"></div>
         </div>
         <div className="containerWithColumn">
           <div  className = "column" id = "leftColumn2"></div>
           <div  className = "column" id = "rightColumn">
           <div className='columnName'>БЕЗОПАСНОСТЬ</div>
                <div className='columnText'><span className='span'>Широкий выбор систем помощи водителю сделает повседневные поездки проще: Система предупреждения о выходе из полосы дорожной разметки, Система сигнализации при засыпании водителя, Система адаптации к скоростным ограничениям, Круиз-контроль.
                  Zafira Life, оснащенный фронтальными и боковыми подушками безопасности, а также шторками безопасности для пассажиров всех трех рядов.
                 Сиденья второго и третьего рядов Zafira Life оснащены креплениями ISOFIX.
                  Многофункциональные камеры переднего и заднего вида обеспечивают работу системы распознавания знаков ограничения скорости, системы сигнализации при засыпании водителя, системы полукругового заднего обзора при парковке и других систем.
                  </span></div>
           </div>
         </div>
         <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'>КОМФОРТ</div>
               <div className='columnText'><span className='span'>Ощутите новый уровень роскоши благодаря массажной функции, встроенной в сиденья водителя и переднего пассажира Zafira Life, которая создает ощущение полного комфорта.
                  В любое время года в Zafira Life вам будет тепло и уютно, а подогрев передних сидений создает всестороннее ощущение комфорта.
                  Благодаря двухзонному климат-контролю пассажиры спереди и сзади могут отрегулировать комфортную для них температуру, и споров о том, холодно или жарко, больше не будет.
                  </span></div>
           </div>
           <div  className = "column" id = "leftColumn3"></div>
         </div>
         <div className="containerWithColumn">
           <div  className = "column" id = "leftColumn4"></div>
           <div  className = "column" id = "rightColumn">
           <div className='columnName'>ПОЛНЫЙ ПРИВОД</div>
                <div className='columnText'><span className='span'>Селектор, расположенный на приборной панели слева, дает возможность переключиться между 2WD и 4WD режимами (ECO и 4WD), что позволяет использовать систему именно там, где это нужно и экономить топливо, если необходимости подключения полного привода нет.
                  Вес полноприводной конструкции составляет 85 кг. Элементы полного привода, расположенные под днищем автомобиля, понижают центр тяжести, что положительно сказывается на курсовой устойчивости и управляемости.
                  </span></div>
           </div>
         </div>
 

<style jsx>{` 
.span {
    width: 100%;
    display: inline-block;
    text-align: center;
}
.background {
    display: flex;
}
 .containerWithColumn {
    display: flex;
    flex-direction: row;
    width: 100%;
}
.column {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 400px;
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
}
.span1 {
                    width: 100%;
                    display: inline-block;
                    text-align: center;
          }
@media(max-width: 1050px) {
    .containerWithColumn {
        height: 440px;
    }
}
@media(max-width: 850px) {
    .containerWithColumn {
        height: 400px;
    }
    .columnText {
        font-size: 14px;
    }
}
@media(max-width: 550px) {
    .columnText {
        font-size: 12px;
    }
    .columnName {
        font-size: 19px;
    }
    .containerWithColumn {
        flex-direction:column;
    }
    .column {
        width:100%
    }
    #leftColumn1{
      background-size: cover;
      height: 300px;
      
    }
   #leftColumn2{
     background-size: cover;
     height: 300px;
     }
    #leftColumn3{
     background-size: cover;
     height: 300px;
    }
    #leftColumn4{
      background-size:cover;
      height: 300px;
    }
    @media(max-width: 450px) {
    .columnText {
        font-size: 9px;
    }
    .columnName {
        font-size: 12px;
    }
    }
}
@media(max-width: 350px) {
    .columnText {
        font-size: 8px;
    }
    .columnName {
        font-size: 10px;
    }
    #leftColumn1{
      background-size: cover;
      height: 100px;
      
    }
   #leftColumn2{
     background-size: cover;
     height: 100px;
     }
    #leftColumn3{
     background-size: cover;
     height: 100px;
    }
    #leftColumn4{
      background-size:cover;
      height: 100px;
    }
}
@media(max-width: 260px) {
    .containerWithColumn {
        display: none;
    }
}
`}</style>

     </>)}