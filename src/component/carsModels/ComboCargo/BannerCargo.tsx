import { Dispatch, FormEvent, SetStateAction } from 'react'
import banner from '/public/images/modelBannerCargo.png'
import miniBanner from '/public/images/zafira/carYellow.webp'
import zafira from '/public/images/models/4.webp';

export function BannerCargo({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {

    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
        <>
            <div className="bannerZafira">
                    <div className="title"><span className='t'></span></div>
            </div>
             
             <div className='descriptionZafira'>
                 <div className='text'><h1 className='y'><span className='span1'>НАДЕЖНЫЙ, УЛЬТРАПРАКТИЧНЫЙ И УНИВЕРСАЛЬНЫЙ</span></h1></div>
             </div>
               
               <div className='blockBuy'>
                <div className='cont'> 
                 <div className='imgBuy'>
                 </div>

                  <div className='blockEl'>
                    <div className='el'>
                      <h2 className="u">ЗАЧЕМ ЖДАТЬ?</h2>
                    </div>
                    <div className='el'>
                    <span className='span'> <h4 className="u2">Найдите подходящий автомобиль в нашем Диллерском центре.</h4></span>
                    </div>
                    <div className='el'>
                       <form onSubmit={showModal}>
                          <button className='btn'>Найти авто</button>
                        </form>
                    </div>
                  </div>
                </div>
               </div>
              <div className='mainName'>Комплектации</div>
              <div className='complectationContainer'>
               <div className='complectation'>
                <div className='content'>
                 <div className="comImg"></div>
                 <div className="complTitle">COMBO™ CARGO</div>
                 <div className="complUl">
                   <ul>
                    <li><span className='span'>- Полная масса 2150 кг</span></li>
                     <li><span className='span'>- Длина кузова 4380 мм</span></li>
                     <li><span className='span'>- Антиблокировочная тормозная система (ABS)</span></li>
                     <li><span className='span'>- Cистема помощи  при начале движения на склоне (Hill assist)</span></li>
                   </ul>
                   <div className="complTitle">ОТ 1 949 900 ₽</div>
                  </div>
                </div>
                <div className='content'>
                 <div className="comImg"></div>
                 <div className="complTitle">COMBO™ CARGO XL</div>
                 <div className="complUl">
                   <ul>
                     <li><span className='span'>- Полная масса 2190 кг</span></li>
                     <li><span className='span'>- Правая боковая неостеклённая сдвижная дверь для версии XL</span></li>
                     <li><span className='span'>- Длина кузова 4628 мм</span></li>
                     <li><span className='span'>- Cистема помощи  при начале движения на склоне (Hill assist)</span></li>
                   </ul>
                   <div className="complTitle">ОТ 2 039 900 ₽</div>
                  </div>
                </div>
              </div>
              </div>
            <style jsx>{`
            .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:row;
                    font-family:'OpelNextW01-Regular', sans-serif; 
                    font-size:40px;
                }
            .t {
                    font-family:'OpelNextW01-Regular', sans-serif; 
                    font-size:80px;
                    color:white;
            }
            .bannerZafira {
                    display:flex; 
                    background-blend-mode: darken;
                    background: rgba(0, 0, 0, .40);
                    width: 100%;
                    height: 600px;
                    justify-content: center;
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-size: cover;
            }
            .descriptionZafira{
                    display:flex;
                    justify-content:center;
                    align-items:center;
            }
            .text {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    font-family:'OpelNextW01-Regular', sans-serif; 
                    color: #888;
                    padding:20px;
          }

          .blockBuy{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width:100%
          }
          .cont{
                 display:flex;
                 justify-content:center;
                 align-items:center;
                 width:1000px;
          }
          .imgBuy{
                    display:flex;
                    background-image: url('${miniBanner.src}');
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 100%;
                    height: 300px;
          }
          .span {
                    width: 100%;
                    display: inline-block;
                    text-align: start;
          }
          .blockEl {
                display:flex;
                justify-content: center;
                flex-direction:column;
                align-items:start;
                height: 400px;
                width: 100%;
                padding-left:50px;
          }
          .el {
                display:flex;
                flex-direction:row;
                color:black;
                font-family:'OpelNextW01-Regular', sans-serif; 
          }
          .btn {
                  margin-top:30px;
                  font-family: 'OpelNextW01-Regular', sans-serif; 
                  border-radius: 3px;
                  transition: transform.3s ;
                  color: #ffffff;
                  border-color: #000;
                  color: #000;
                  background: 0 0;
                  width: 300px;
                  height: 40px;
                  font-size: 25px;
                  margin-bottom:20px;
          }
          .btn:hover {
                  background-color: #f7ff14;
                  font-family: 'OpelNextW01-Regular', sans-serif;
                  color:black;
                  transform: scale(1.02);
                  box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
          } 
          .complectation{
                  display:flex;
                  margin-top:40px;
                  justify-content:center;
                  flex-direction:row;
                  margin-bottom:30px;
                  align-items: baseline;
                  width:1200px
          }
          .complectationContainer{
                  display:flex;
                  margin-top:40px;
                  justify-content:center;
                  flex-direction:row;
                  margin-bottom:30px;
                  align-items: center;;
                  width:100%;
          }
          .content {
                  display:flex;
                  justify-content:center;
                  flex-direction:column;
                  align-items:center;
                  width:31%;
          }
                
                .comImg{
                  display:flex;
                  flex-direction:row;
                  width:100%;
                  height:150px;
                  background-position: center center;
                  background-image: url('${zafira.src}');
                  background-repeat: no-repeat;
                  overflow: hidden;
                  background-size:contain;
                  transition: 0.5s linear;
                }
                .complTitle {
                  display:flex;
                  justify-content:center;
                  flex-direction:row;
                  font-family: 'OpelNextW01-Regular', sans-serif;
                  font-size:23px;
                }
                .mainName {
                   display:flex;
                   justify-content:center;
                   background:black;
                   color:white;
                   font-family: 'OpelNextW01-Regular', sans-serif; 
                   font-size:33px;
                   
                }
                .complUl{
                  font-family: 'OpelNextW01-Regular', sans-serif; 
                  font-size:16px;
                }
                li {
                  list-style-type: none;
                  margin-top:5px;
                }
                .span1 {
                    width: 100%;
                    display: inline-block;
                    text-align: center;
                }
                @media (max-width: 1200px) {
                  .bannerZafira {
                    height: 500px;
                  }
                  .y{
                     font-size:30px;
                  }
                  .text {
                    font-size
                  }
                  .t{
                    font-size:60px;
                  }
                  .complUl {
                    font-size:13px;
                  }
                  .complTitle {
                    font-size:20px;
                  }
                  .complectation{
                  width:1000px
                }
                .comImg {
                  height: 120px;
                }
                }
                @media (max-width: 900px) {
                  .t{
                    font-size:55px;
                  }
                  .y{
                     font-size:25px;
                  }
                  .cont {
                    flex-direction: column;
                    width:auto;
                  }
                  .content {
                    width: 25%;
                  }
                  .complUl {
                    font-size:12px;
                  }
                  .complTitle {
                    font-size:18px;
                  }
                  .blockEL {
                    align-items: center;
                  }
                  .imgBuy {
                    margin-left: 0px;
                    background-size: contain;
                  }
                  .btn {
                    width: 250px;
                    font-size: 25px;
                  }
                  .btn:hover{
                    font-size: 26px;
                  }
                }
                @media (max-width: 800px) {
                  .t{
                    font-size:50px;
                  }
                  .y{
                     font-size:20px;
                  }
                  .bannerZafira {
                    height: 350px;
                  }
                  .u{
                    font-size:20px;
                  }
                  .u2{
                    font-size:14px;
                  }
                  .backgroundBuy {
                    flex-direction:column;
                    align-items: center;
                  }
                  .btn {
                    width: 200px;
                    font-size: 22px;
                  }
                  .btn:hover{
                    font-size: 23px;
                  }
                  .mainName{
                    font-size:50px;
                  }
                  .content {
                    width: 90%;
                  }
                  .complUl {
                    font-size:12px;
                  }
                  .complTitle {
                    font-size:18px;
                  }
                  .complectation {
                    flex-direction:column;
                  }
                  .blockBuy{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                  }
                  .imgBuy{
                    display:flex;
                    background-size: cover;
                    width: 100%;
                    height: 300px;
                  }
                  .blockEl {
                     display:flex;
                     flex-direction:column;
                     align-items:center;
                     height: 250px;
                     width: 100%;
                  }
                  .el{
                     justify-content:center;
                  }
                }

                @media (max-width: 600px) {
                .imgBuy {
                    
                    background-size: contain;
                    height: 200px;
                  }
                  .el {
                    width:200px;
                    padding:1px;
                  }
                }
                @media (max-width: 500px) {
                  .y{
                     font-size:18px;
                  }
                  .t
                  {
                    font-size:40px;
                  }
                  .bannerZafira {
                    height: 250px;
                  }
                  .nameBlock {
                    font-size:25px;
                  }
                  .u{
                    font-size:17px;
                  }
                  .u2{
                    font-size:11px;
                  }
                  .el{
                    padding:10px;
                  }
                  .btn {
                    width: 150px;
                    font-size: 17px;
                  }
                  .btn:hover{
                    font-size: 18px;
                  }
                  .mainName{
                    font-size:20px;
                  }
                  .content{
                    height: 300px;
                   }
                   .complTitle {
                    font-size:16px;
                  }
                  .complUl {
                    font-size:10px;
                  }
                }

                @media (max-width: 400px) {
                  .imgBuy.jsx-2274578631 {
                   
                     background-size: contain;
                     height: 150px;
                  }
                  .nameBlock {
                    font-size:20px;
                  }
                }
                @media (max-width: 300px) {
                  .blockBuy {
                    display:none;
                  }
                  .y{
                     font-size:12px;
                  }
                  .t
                  {
                    font-size:30px;
                  }
                  .bannerZafira {
                    height: 100px;
                  }
                  .imgBuy{
                    
                     background-size: contain;
                     height: 100px;
                  }
                  .u{
                    font-size:14px;
                  }
                  .u2{
                    font-size:10px;
                  }
                  .btn {
                    width: 100px;
                    font-size: 11px;
                    height: 25px;
                  }
                  .btn:hover{
                    font-size: 12px;
                  }
                  .mainName{
                    font-size:15px;
                  }
                  .content{
                    height: 300px;
                   }
                   .complTitle {
                    font-size:10px;
                  }
                  .complUl {
                    font-size:8px;
                  }
                  .comImg{
                    width:220px;
                  }
                }
                @media (max-width: 250px) {
                  .comImg{
                    width:150px;
                  }
                  .complU {
                    font-size:6px;s
                  }
                }

            `}</style>
        </>
    )
}