import smile from '/public/images/smile.jpg';

export function Statistic() {
    const words = `Каждый год мы стараемся сделать покупку авто для вас приятным событием.
    В этом нам помогают выгодные условия, которые мы формировали не один год.
    И кажется нам это удается.`
    return (
        <>
           <div className="background">
             <div className="contentEl">
                <div className="left">
                    <div className="title">AРКОНТ СТАТИСТИК</div>
                    <div className="words"><span className='span'>{words}</span></div>
                     {/* <div className="table">
                                   <div className="tableColumn">
                                       <ul>
                                           <li><div className='wordsT'>Отремонтировали авто <span id="numeric">&emsp;300</span></div></li>
                                           <li><div className='wordsT'>Купили авто  <span id="numeric">&emsp;150</span></div></li>
                                           
                                       </ul>
                                   </div>
                                   <div className="tableColumn">
                                       <ul>
                                         <li><div className='wordsT'>Прошли ТО <span id="numeric">&emsp;500</span></div></li>
                                         <li><div className='wordsT'>Посетили дц <span id="numeric">&emsp;981</span></div></li>
                                       </ul>
                                   </div>
                         </div>
                         </div> */}


                   
                 <div className="table">
                     <div className="tableColumn">
                        <div className='rowT'>
                            <div  id='numeric'>120&emsp; </div>
                            <div className='wordsT'>Купили авто</div>
                        </div>
                        <div className='rowT'>
                            <div  id='numeric'>300&emsp; </div>
                            <div className='wordsT'>Ремонт авто</div>
                        </div>
                      </div>
                      <div className="tableColumn">
                        <div className='rowT'>
                            <div id='numeric'>1000&emsp; </div>
                            <div className='wordsT'>Прошли ТО</div>
                        </div>
                        <div className='rowT'>
                            <div  id='numeric'>5000&emsp; </div>
                            <div className='wordsT'>Посетели ДЦ</div>
                        </div>
                    </div>
                    </div>
                </div> 
                {/* <div className="right">
                    <div className="img"></div>
                </div> */}
             </div>
            </div>

            <style jsx>{`
                .background {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    height:600px;
                }
                .contentEl{
                 display:flex; 
                 justify-content: center;
                 flex-direction:row;
                 width:900px;
                }
                .left{
                 display:flex; 
                 justify-content: center;
                 flex-direction:column;
                 align-items:center;
                 width:900px;
                
                }
                .right{
                 display:flex; 
                 justify-content: center;
                 flex-direction:column;
                 align-items:center; 
                 width:400px;
                }
                .title {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    font-size:40px;
                    font-weight:bold;
                    font-family: 'Montserrat', sans-serif;
                }
                .words {
                    margin-top:10px;
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    font-size:19px;
                    font-family: 'Montserrat', sans-serif;
                    padding:3px;
                }
                .table {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    margin-top:10px;
                    justify-content: space-around;
                    width:100%
                }
                .tableColumn {
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    align-items:start;
                }
                .rowT {
                    display:flex;
                    justify-content:start;
                    flex-direction:row;
                    align-items: center;
                    margin-top:20px;
                }
                    
                .img {
                    display:flex;
                    height:250px;
                    width:100%;
                    background-position: center center;
                    background-repeat: no-repeat;
                    overflow: hidden;
                    background-size:contain;
                    background-image: url('${smile.src}');
                    border-left-style: inset;
                }
                #numeric {
                    display:flex;
                    font-size:50px;
                    color:orange;
                    justify-content:center;
                    flex-direction:row;

                }
                .span {
                  width: 100%;
                  display: inline-block;
                 text-align: center;
                }
                .wordsT {
                    display:flex;
                    font-family: 'Montserrat', sans-serif;
                    font-size:25px;
                    font-weight:bold;
                    justify-content:center;
                    flex-direction:row;
                    align-items:center;
  
                }
                li {
                    list-style:none;
                }
                @media(max-width: 1000px) {
                    .title {
                        font-size: 35px;
                    }
                    .words {
                        font-size: 17px;
                    }
                    .table {
                        flex-direction: column;
                        align-items: center;
                    }
                    .words {
                        width: 700px;
                        flex-direction: column;
                    }
                }
                @media(max-width:  750px) {
                    .background {
                        height: 450px;
                    }
                    .title {
                        font-size: 25px;
                    }
                    .words {
                        font-size: 14px;
                    }
                    .table {
                        flex-direction: column;
                        align-items: center;
                    }
                    .words {
                        width: 600px;
                        flex-direction: column;
                        padding: 20px;
                        margin-top:0;
                        display:none;
                    }
                    #numeric {
                        font-size: 40px;
                    }
                    .wordsT {
                        font-size: 17px;
                    }
                    .table{
                        margin-top: 0px;
                    }
                }
                @media(max-width:  350px) {
                    .background {
                        height: 300px;
                    }
                    #numeric{
                        font-size: 20px;
                    }
                    .title {
                        font-size: 17px;
                    }
                    .wordsT {
                        font-size: 14px;
                    }
                }
                @media(max-width:  280px) {
                    .background {
                        height: 250px;
                    }
                    #numeric{
                        font-size: 15px;
                    }
                    .title {
                        font-size: 14px;
                    }
                    .wordsT {
                        font-size: 12px;
                    }
                }
            `}</style>
        </>
    )
}