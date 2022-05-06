import banner from '/public/images/88.jpg'
import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"

export function ServiceIndexPage({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
        <>
       <div className="background">
            <div className="container">  
                   <div className="el">
                        <div className="title"><span>Услуги Сервиса</span> &#160;<span id='yellow'>Арконт</span></div>
                        <div className="words"><span className='span'>Наши работники регулярно проходят повышение квалификации у официальных представителей марки OPEL, поэтому доверяя ваш авто нам вы доверяете, его профессионалам.</span></div>
                        <div className="btnDiv">
                           <form onSubmit={showModal}>
                             <button className='btn'>Записаться</button>
                            </form>
                        </div>
                   </div>
                   <div className="el">
                        <div className="ul">
                            <ul>
                                <li> <span id='yellow'>&#10003;</span> Ремонт КПП</li>
                                <li> <span id='yellow'>&#10003;</span> Замена масла в  КПП</li>
                                <li> <span id='yellow'>&#10003;</span> Замена масла</li>
                                <li> <span id='yellow'>&#10003;</span> Замена свечей</li>
                                <li> <span id='yellow'>&#10003;</span> Замена колодок</li>
                                <li> <span id='yellow'>&#10003;</span> Балансировка колес</li>
                                <li> <span id='yellow'>&#10003;</span> Диагностика ЭБУ</li>
                            </ul>
                        </div>
                    </div>
                   <div className="el"> 
                      <div className="ul">
                           <ul>
                                <li> <span id='yellow'>&#10003;</span> Замена датчиков</li>
                                <li> <span id='yellow'>&#10003;</span>Регулировка углов</li>
                                <li> <span id='yellow'>&#10003;</span> Обновление ПО</li>
                                <li> <span id='yellow'>&#10003;</span> Прошивка на Евро 2 </li>
                                <li> <span id='yellow'>&#10003;</span> Замена амортизаторов</li>
                                <li> <span id='yellow'>&#10003;</span> Мойка радиатора </li>
                           </ul>
                       </div>
                    </div>  
            </div>
        </div>
         

<style jsx>{`
                .background {
                    display:flex;
                    margin-top:50px;
                    justify-content:center;
                    flex-direction:row;
                    background-color:#0a0a0a;
                    width: 100%;
                    height: 450px;
                    justify-content: center;
                    background-blend-mode: darken;
                    background: rgba(0, 0, 0, .80);
                    background-position: center center;
                    background-image: url('${banner.src}');
                }
                .mainTitle{
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    font-family: 'OpelNextW01-Regular', sans-serif;
                    font-size:30px;
                    margin-top:50px;
                    font-weight: bold;

                }
                .container {
                    display:flex;
                    flex-direction:row;
                    width:1000px;
                    align-items:center;
                    justify-content:space-evenly;
                    margin-top:50px;
                    margin-bottom:50px;
                    color:white;
                }
                .span {
                    width: 100%;
                    display: inline-block;
                    text-align: center;
                }  
                
                .row{
                    display:flex;
                    flex-direction:row;
                    justify-content:center;
                }
                .el{
                    height:350px;
                    width:300px;
                    display:flex;
                    flex-direction:column;
                }
                .title{
                    display:flex;
                    flex-direction:row;
                    margin-top:30px;
                    justify-content:center;
                    font-family: 'OpelNextW01-Regular', sans-serif;
                    font-size:24px;
                    color:white;
                    font-weight: bold;
                }
                #yellow {
                    color:rgb(247, 255, 20);
                }
                .words{
                    display:flex;
                    flex-direction:row;
                    justify-content:center;
                    font-family: 'OpelNextW01-Regular', sans-serif;
                    margin-top: 20px;
                    font-size:16px;
                    padding:3px;
                    color:white;
                }
                .ul {
                    margin-top:50px;
                }
                li {
                    font-family: 'OpelNextW01-Regular', sans-serif; 
                    font-size:18px;
                    color:white;
                    list-style-type:none;
                    transition: transform.3s ;
                    margin-top:10px;
                }
                li:hover {
                    transform: scale(1.02);
                }
                .btnDiv{
                    display:flex;
                    justify-content:center;
                    margin-top:20px;
                }
                .btn {
                    justify-content: center;
                    display: flex;
                    align-items:center;
                   font-family: 'OpelNextW01-Regular', sans-serif;
                   transition: transform.3s ;
                   border-color: yellow;
                   color: yellow;
                   background: 0 0;
                   width: 202px;
                   height: 45px;
                   font-size: 22px;
                   margin-top:10px;
                   font-weight: bold;
                }
                #yellow1 {
                    color:rgb(247, 255, 20);
                }
               .btn:hover {
                 background-color: #f7ff14;
                 font-family: 'OpelNextW01-Regular', sans-serif;
                 color:black;
                 transform: scale(1.02);
                 box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
                 }
                 @media(max-width: 1000px) {
                     .background {
                        height: 400px;
                     }
                     .container {
                        width:700px;
                     }
                     .el {
                        height: 350px;
                        width: 250px;
                     }
                     .title {
                        font-size: 17px;
                     }
                     .words {
                        font-size: 15px;
                     }
                     .ul {
                         margin-top:0px;
                     }
                     li {
                        font-size: 15px;
                     }
                     .btn {
                        width: 202px;
                        height: 40px;
                        font-size: 19px;
                        margin-top:10px;
                     }
                 }
                 @media(max-width: 760px) {
                    .container {
                        width:500px;
                     }
                     .el {
                        height: 350px;
                        width: 190px;
                     }
                     .title {
                        font-size: 12px;
                     }
                     .words {
                        font-size: 11px;
                     }
                     .ul {
                         margin-top:15px;
                     }
                     li {
                        font-size: 12px;
                     }
                     .btn {
                        width: 120px;
                        height: 35px;
                        font-size: 14px;
                        margin-top:10px;
                     }
                 }
                 @media(max-width: 560px) {
                    .container {
                        width:400px;
                     }
                     .el {
                        height: 300px;
                        width: 150px;
                     }
                     .title {
                        font-size: 10px;
                     }
                     .words {
                        font-size: 10px;
                     }
                     .ul {
                         margin-top:11px;
                     }
                     li {
                        font-size: 11px;
                     }
                     .btn {
                        width: 100px;
                        height: 30px;
                        font-size: 12px;
                        margin-top:10px;
                     }
                 }
                 @media(max-width: 460px) {
                    .background {
                        display:none;
                     }
                 }
              
`}</style></> )}