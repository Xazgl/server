import { Dispatch, SetStateAction } from 'react';
import bannerTradeIn from '/public/images/astra.jpg';

type TradeInProps = {
  setShowTradeInModal: Dispatch<SetStateAction<boolean>>
}
export function TradeIn({setShowTradeInModal}: TradeInProps) {
  // const setShowTradeInModal = props.setShowTradeInModal
   let text = `Обменяйте ваш автомобиль 
   на новый OPEL  с АРКОНТ`
    return (
        <>
          <div className="background">
            <div className="contentEl">
                 <div className="content">      
                   <div className="title">Trade-In</div>
                   <div className="words">{text}</div>
                 </div>
                 <div className="content"> 
                   <div className="btnDiv">
                      <button className="btn" onClick={()=>{setShowTradeInModal(true)}}>Записаться на оценку</button>
                  </div>
               </div>
            </div>
          </div>

<style jsx>{`
   .background { 
     display:flex; 
      width: 100%;
      height:600px;
      justify-content: center;
      background-blend-mode: darken;
      background: rgba(0, 0, 0, .60);
      background-repeat: no-repeat;
      overflow: hidden;
      background-size: cover;
      background-position: center center;
      background-image: url('${bannerTradeIn.src}');
   }
  .contentEl{
    display:flex; 
    width: 900px;
    justify-content: center;
    flex-direction:row;
    margin-top:50px;
  }
  .content {
    display:flex; 
    flex-direction:column;
    justify-content:center;
    color:black;
  }

  .title {
    display:flex;
    justify-content:start;
    font-size:55px;
    font-weight: bold;
    font-family: 'Montserrat'; 
    color:white;
    margin-top:120px;
  }
  .words {
    display:flex;
    justify-content:start;
    color:white;
    font-size:35px;
    font-family: 'Montserrat'; 
    margin-bottom:250px;
    font-weight: 300;
  }
  .btnDiv{
    display:flex;
    justify-content:start;
    margin-bottom:200px;
  }
  .btn {
    background:transparent;
    font-family: 'Montserrat'; 
    font-size:25px;
    color:white;
    border-radius:5px;
    width: 350px;
    height: 50px;
    background-color: transparent;
    border-color: yellow;
    font-weight: bold;

  }

  .btn:hover {
    background-color:#f7ff14;
    color:black;
    border:inset;
    border-color:black;
    box-shadow:none;
    transform: scale(0.98);
  }

  @media(max-width: 1350px) {
    .background {
      height:600px;
    }
    .title {
      margin-bottom:10px;
    }
    .content {
      margin-left:40px;
    }
  }
  @media(max-width: 900px ){
    .background {
      height:400px;
    }
    .content {
      margin-left:80px;
    }
    .title {
      font-size:30px;
    }
    .words {
      font-size:24px;
      margin-bottom:100px;
    }
    .btn {
      font-size: 20px;
      width: 300px;
    }
  }
  @media(max-width: 600px ){
    .background {
      height:350px;
    }
    .content {
      margin-left:50px;
    }
    .title {
      font-size:25px;
    }
    .words {
      font-size:20px;
      margin-bottom:70px;
    }
    .btn {
      font-size: 20px;
      width: 270px;
    }
  }
  @media(max-width: 360px ){
    .background {
      height:180px;
    }
    .content {
      margin-left:30px;
    }
    .title {
      font-size:16px;
    }
    .words {
      font-size:12px;
      margin-bottom:20px;
    }
    .btn {
      font-size: 12px;
      width: 170px;
      height: 30px;
    }
  }
  @media(max-width: 260px ){
    .background {
      height:150px;
    }
    .words {
      font-size:9px;
      margin-bottom:10px;
    }
    .btn {
      font-size: 7px;
      width: 120px;
      height: 20px;
    }
  }


  }
`}</style>

 </>
    )
}