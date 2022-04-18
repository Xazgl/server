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
                        <div className="words">Наши работники регулярно проходят повышение квалификации у официальных представителей марки OPEL, поэтому доверяя ваш авто нам вы доверяете, его профессионалам.</div>
                        <div className="btnDiv">
                           <form onSubmit={showModal}>
                             <button className='btn'>Записаться 	<span id='yellow1'>&#10097;</span></button>
                            </form>
                        </div>
                   </div>
                   <div className="el">
                        <div className="ul">
                            <ul>
                                <li> <span id='yellow'>&#10003;</span> Ремонт КПП</li>
                                <li> <span id='yellow'>&#10003;</span> Замена масла в  КПП</li>
                                <li> <span id='yellow'>&#10003;</span> Замена масла в двигателе</li>
                                <li> <span id='yellow'>&#10003;</span> Замена свечей</li>
                                <li> <span id='yellow'>&#10003;</span> Замена тормозных колодок</li>
                                <li> <span id='yellow'>&#10003;</span> Балансировка колес</li>
                                <li> <span id='yellow'>&#10003;</span> Диагностика и считывание ошибок ЭБУ</li>
                            </ul>
                        </div>
                    </div>
                   <div className="el"> 
                      <div className="ul">
                           <ul>
                                <li> <span id='yellow'>&#10003;</span> Замена датчиков</li>
                                <li> <span id='yellow'>&#10003;</span> Чистка системы кондиционирования</li>
                                <li> <span id='yellow'>&#10003;</span> Обновление ПО</li>
                                <li> <span id='yellow'>&#10003;</span> Прошивка на Евро 2 </li>
                                <li> <span id='yellow'>&#10003;</span> Замена амортизаторов</li>
                                <li> <span id='yellow'>&#10003;</span> Мойка радиатора охлаждения</li>
                           </ul>
                       </div>
                    </div>  
            </div>
        </div>
         

<style jsx>{`
                .background {
                    display:flex;
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
                    font-family: 'Montserrat', sans-serif;
                    font-size:30px;
                    margin-top:50px;
                    font-weight: bold;

                }
                .container {
                    display:flex;
                    flex-direction:row;
                    width:900px;
                    align-items:center;
                    justify-content:space-evenly;
                    margin-top:50px;
                    margin-bottom:50px;
                    color:white;
                }
                  
                
                .row{
                    display:flex;
                    flex-direction:row;
                    justify-content:center;
                }
                .el{
                    height:350px;
                    width:270px;
                    display:flex;
                    flex-direction:column;
                }
                .title{
                    display:flex;
                    flex-direction:row;
                    margin-top:30px;
                    justify-content:center;
                    font-family: 'Montserrat', sans-serif;
                    font-size:21px;
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
                    font-family: 'Montserrat', sans-serif;
                    margin-top: 20px;
                    font-size:12px;
                    color:white;
                }
                .ul {
                    margin-top:50px;
                }
                li {
                    font-family: 'Montserrat', sans-serif; 
                    font-size:14px;
                    color:white;
                    list-style-type:none;
                    transition: transform.3s ;
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
                   font-family: 'Montserrat', sans-serif;
                   border-radius: 3px;
                   border:none;
                   transition: transform.3s ;
                   color: white;
                   border:#f7ff14;
                   border: solid;
                   border-width: 1px;
                   background-color: black;
                   width: 200px;
                   height: 30px;
                   font-size: 20px;
                   margin-top:10px;
                   font-weight: bold;
                }
                #yellow1 {
                    color:rgb(247, 255, 20);
                }
               .btn:hover {
                 background-color: #f7ff14;
                 border: none;
                font-family: 'Montserrat', sans-serif;
                 color:black;
                 transform: scale(1.02);
                 box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
                 }
              
`}</style></> )}