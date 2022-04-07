import { Dispatch, SetStateAction } from 'react';
import bannerTradeIn from '/public/images/astra.jpg';

type TradeInProps = {
  setShowTradeInModal: Dispatch<SetStateAction<boolean>>
}
export function TradeIn({setShowTradeInModal}: TradeInProps) {
  // const setShowTradeInModal = props.setShowTradeInModal
   let text = `Позволь себе больше 
   с новой кредитной программой от OPEL АРКОНТ`
    return (
        <>
            <div className="background">
               <div className="content">      
                   <div className="title">Trade-In</div>
                   <div className="words">{text}</div>
                   <div className="title">
                      <button className="btn" onClick={()=>{setShowTradeInModal(true)}}>Записаться на оценку</button>
                   </div>
               </div>
            </div>

<style jsx>{`
   .background { 
     display:flex; 
      width: 100%;
      height:800px;
      justify-content: center;
      background-color:black;
      background-image: url('${bannerTradeIn.src}');
      background-repeat: no-repeat;
      overflow: hidden;
      margin-top:50px;
      background-size: cover;
      background-position-y: bottom;
   }

  .content {
    display:flex; 
    flex-direction:column;
    justify-content:center;
    color:black;
  }

  .title {
    font-size:55px;
    font-weight: bold;
    font-family: Montserrat; 
    margin-bottom:100px;
  }
  .words {
    font-size:35px;
    font-family: Montserrat; 
    margin-bottom:250px;
    font-weight: 300;
  }
  
  .btn {
    background-color:black;
    color:#f7ff14;
    font-family: 'Montserrat'; 
    font-size:25px;
    border:none;
    font-weight: bold;
    border-radius:5px;
    -webkit-box-shadow: 1px 26px 8px -3px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 1px 26px 8px -3px rgba(34, 60, 80, 0.2);
    box-shadow: 1px 26px 8px -3px rgba(34, 60, 80, 0.2);  
    width: 350px;
    height: 50px;
  }

  .btn:hover {
    background-color:#f7ff14;
    color:black;
    font-family: Montserrat; 
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