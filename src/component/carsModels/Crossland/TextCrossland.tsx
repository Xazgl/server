import img1 from '/public/images/crossland/1.png'
import img2 from '/public/images/crossland/2.png'
import img3 from '/public/images/crossland/3.jpg'
import { Dispatch, FormEvent, SetStateAction } from 'react'



export function TextCrossland({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
<>       
    <div className='bigColumn'>
        <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'>КРАСОТА НА КАЖДЫЙ ДЕНЬ.</div>
               <div className='columnText'>Дизайн нового Opel Crossland тщательно продуман и ориентирован на практичность в использовании. Он создан отвечать потребностям водителя и пассажиров. Благодаря смелому стилю и создающему комфорт дизайну этот кроссовер подойдет всем, кто готов искать свой собственный путь и следовать по нему.
               </div>
            </div>
           <div  className = "column" id = "leftColumn1"></div>
        </div>
        <div className="containerWithColumn">
           <div  className = "column" id = "leftColumn2"></div>
           <div  className = "column" id = "rightColumn">
                <div className='columnName'>ОТЛИЧНЫЙ ДИЗАЙН. ОТЛИЧНЫЕ ОЩУЩЕНИЯ.</div>
                <div className='columnText'>Управляя Crossland, вы будете не только производить впечатление на дорогах, но и великолепно чувствовать себя за рулем. Многофункциональность салона: сдвигающиеся сиденья заднего ряда, высокая посадка и первоклассная вместительность, дополненная сиденьями с массой настроек, — все это делает комфортными как короткие, так и дальние поездки.
                </div>
           </div>
        </div>

        <div className="containerWithColumn">
           <div  className = "column" id = "rightColumn">
               <div className='columnName'>ВЫБИРАЙТЕ СВОЙ ПУТЬ.</div>
               <div className='columnText'>
                  Crossland — это больше, чем стильный и эффектный кроссовер. В нем есть все инновационные системами помощи водителю. Система интеллектуального привода IntelliGrip, система предупреждения о непроизвольном пересечении дорожной разметки, проекционный дисплей и камера заднего вида с полукруговым обзором позволяют сделать каждое путешествие безопаснее и комфортнее.
               </div>
           </div>
           <div  className = "column" id = "leftColumn3"></div>
        </div>
    </div>
       
    
    <div className="miniColumn">
      <div className="columnt">
         <div className="columnMiniImg" id="first"></div>
        <div className="columnMini">
           <div className="title">КРАСОТА НА КАЖДЫЙ ДЕНЬ.</div>
           <div className="words">Дизайн нового Opel Crossland тщательно продуман и ориентирован на практичность в использовании. Он создан отвечать потребностям водителя и пассажиров. Благодаря смелому стилю и создающему комфорт дизайну этот кроссовер подойдет всем, кто готов искать свой собственный путь и следовать по нему.
           </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="second"></div>
        <div className="columnMini">
           <div className="title">ОТЛИЧНЫЙ ДИЗАЙН. ОТЛИЧНЫЕ ОЩУЩЕНИЯ.</div>
           <div className="words">Управляя Crossland, вы будете не только производить впечатление на дорогах, но и великолепно чувствовать себя за рулем. Многофункциональность салона: сдвигающиеся сиденья заднего ряда, высокая посадка и первоклассная вместительность, дополненная сиденьями с массой настроек, — все это делает комфортными как короткие, так и дальние поездки.
           </div>
        </div>
      </div>
      <div className="columnt">
         <div className="columnMiniImg" id="three"></div>
         <div className="columnMini">
           <div className="title">ВЫБИРАЙТЕ СВОЙ ПУТЬ.</div>
           <div className="words">
           Crossland — это больше, чем стильный и эффектный кроссовер. В нем есть все инновационные системами помощи водителю. Система интеллектуального привода IntelliGrip, система предупреждения о непроизвольном пересечении дорожной разметки, проекционный дисплей и камера заднего вида с полукруговым обзором позволяют сделать каждое путешествие безопаснее и комфортнее.
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