import { Sales } from '@prisma/client'
import { Dispatch, FormEvent, MouseEvent, SetStateAction, useState } from 'react'
import salesOne from '/public/images/sales.webp'
import salesTwo from '/public/images/sales2.webp'
import salesThree from '/public/images/sales3.webp'

type SalesProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  sales?: Sales[];
  // isAdmin?: boolean;
}

export function SalesComponent({ setShowModal, sales }: SalesProps) {
  const [curModelId, setCurModelId] = useState(0)
  function showModal(event: MouseEvent<HTMLDivElement, MouseEvent>) {
    setShowModal(true)
  }

  if (Array.isArray(sales) && sales.length > 0) {
    return (
      <>
        <div className="blockSales">
          <div className="titleMain">АКЦИИ OPEL</div>
          {
            sales.map(sale => {
              return <div className="salesEl" onClick={showModal} >
              <img className="img-custom" src={sale.img}/>
              <div className="title">{sale.title}</div>
              <div className="salesWords">{sale.description}</div>
            </div>
            })
          }
          {/* <div className="containerSales">
            <div className="salesEl">
              <div className="img1" onClick={showModal}></div>
              <div className="title">Кроссовер Crossland</div>
              <div className="salesWords">Кроссовер с выгодой до 200 000р.</div>
              {isAdmin && }
            </div>
            <div className="salesEl">
              <div className="img2" onClick={showModal}></div>
              <div className="title">Zafira Life</div>
              <div className="salesWords">Минивэн с выгодой до 200 000р.</div>
            </div>
            <div className="salesEl">
              <div className="img3" onClick={showModal}></div>
              <div className="title">Combo Life</div>
              <div className="salesWords">Надженость для вашего визнеса</div>
            </div>
          </div> */}
        </div>

        <style jsx>{`
    
    .blockSales {
        display:flex;
        justify-content:center;
        flex-direction:column;
        margin-top:30px;
        background-color:black;
    
    }
    
    .titleMain{
        display:flex;
        font-family: Montserrat; 
        font-size: 35px;
        font-weight: bold;
        justify-content:center;
        color:white;
    }
    .containerSales {
        display:flex;
        justify-content:space-evenly;
        width: 100%;
        margin-top:50px;
        color:white;
    } 
    
    .salesEl {
        display:flex;
        justify-content: center;
        flex-direction: column;
        height: 400px;
        color:white;
        margin-bottom:30px;
    }
    
    .img1{
        display:flex; 
        height: 100%;
        weight: 100%;
        background-position: center center;
        background-image: url('${salesOne.src}');
        background-repeat: no-repeat;
        overflow: hidden;
        border-radius: 5px;
    }
    
    .img1:hover{ 
        border:solid;
        border-color:black;
        -webkit-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        -moz-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        transform: scale(1.005);
    
    }
    
    .img2{
        display:flex; 
        height: 100%;
        weight: 100%;
        background-position: center center;
        background-image: url('${salesTwo.src}');
        background-repeat: no-repeat;
        overflow: hidden;
        border-radius: 5px;
    }
    
    .img2:hover{ 
        border:solid;
        border-color:black;
        -webkit-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        -moz-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        transform: scale(1.005);
    }
    
    .img3{
        display:flex; 
        height: 100%;
        weight: 100%;
        background-position: center center;
        background-image: url('${salesThree.src}');
        background-repeat: no-repeat;
        overflow: hidden;
        border-radius: 5px;
    }

    .img-custom {
        height: 100%;
        weight: 100%;
    }
    
    .img3:hover{ 
        border:solid;
        border-color:black;
        -webkit-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
         -moz-box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
         box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42); 
         transform: scale(1.005);
    }
    
    .title {
        display:flex;
        font-family: 'Montserrat'; 
        font-size: 25px;
        font-weight: bold;
        justify-content:center;
        margin-top:10px;
        color:white;
    }
    
    
    .salesWords {
        display:flex;
        font-family: 'Montserrat'; 
        font-size: 20px;
        justify-content:center;
        margin-top:10px;
        color:white;
    }
         
    `}</style>
      </>
    )
  }

  return <div>Акции не обнаружены</div>
}