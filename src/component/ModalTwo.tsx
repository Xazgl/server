
import { ChangeEvent, FormEvent, useState } from "react";
import { Dispatch, SetStateAction, useRef } from "react";
import IMask from 'imask';
import { IMaskInput } from "react-imask";

//let phoneMask = document.getElementsByClassName('phone');
  // let maskOptions = {
   //     mask:'+{7}(000)000-00-00',
    //}
//let mask = new IMask(phoneMask, maskOptions)

type ModelPropsTrade = {
    showTradeInModal: boolean, 
    setShowTradeInModal: Dispatch<SetStateAction<boolean>>
}

export function TradeinModal({showTradeInModal, setShowTradeInModal}: ModelPropsTrade) {
    const [closeStarting, setCloseStarting] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [ carModal, setCarModal] =  useState('')
    const [carYear, setCarYear] =  useState('')
    function closeModal() {
        setCloseStarting(true)
        setTimeout(() => {
            setShowTradeInModal(false)
            setCloseStarting(false)
        }, 500)
    }
    async function sendmailTradein(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const res = await fetch('/api/sendmailTradein', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, carModal, carYear  })
        })
        if (res.ok) {
            const result = await res.json()
            console.log(result);            
        }
    }

    const backgroundEl = useRef(null)
    const className = [
        'modalBackground',
        showTradeInModal ? 'modalBackground_show': '',
        closeStarting ? 'modalBackground_close-starting': '', 
    ]
    return <>    
        <div className={className.join(' ')} style={{color: 'red'}} id="modalBackground" ref={backgroundEl} onClick={(event) => {
                if (event.target === backgroundEl.current) closeModal()
            }}>
            <div className="modalWindow" id="modalWindow">
                <div className="mb-2"><span id="modalTitle">Заказать звонок</span></div>
                <div className="modalEl">
                    <form id="submit-form" onSubmit={sendmailTradein}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label"></label>
                            <input type="text" 
                                className="name" 
                                id="name" 
                                name="name" 
                                placeholder="Имя" 
                                required
                                value={name}
                                onChange={event => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label"></label>
                            {/* <input type="text" className="phone" id="phone" name="phone" 
                            placeholder="+7(***)-***-**-**" 
                            required
                            value={phone}
                            onChange={event => setPhone(event.target.value)} /> */}
                            <IMaskInput 
                                style={{fontSize:'18px',height:'35px'}}
                                className="phone"
                                mask={'+{7}(000)000-00-00'}
                                placeholder="+7(***)-***-**-**" 
                                required
                                value={phone}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="carYear" className="form-label"></label>
                            <input type="number"
                            placeholder="Год выпуска вашего авто"
                             min="1990" max="2030"  
                             value={carYear}
                             onChange={event => setCarYear(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="carModal" className="form-label"></label>
                            <input type="text" className="carModal" id="carModal" name="carModal" 
                            placeholder="KIA RIO" 
                            required
                            value={carModal}
                            onChange={event => setCarModal(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <button className="btn-modal" type="submit">Отправить</button>
                        </div>
                    </form>
                </div>
                <div className="modalEl">
                    <button className="btn-modal" id="close-modal" onClick={() => {closeModal()}}>Закрыть</button>
                </div>
            </div>
        </div>

    <style jsx>{`

            @keyframes modalBackground-open {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }

            @keyframes modalBackground-close {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }

            .disable-scroll {
                overflow: hidden;
            }

            .modalBackground
            {
                display: none;
                position: fixed;
                justify-content: center;
                top: 0;
                right: 0;
                left: 0;
                height: 100vh;
                background-color: rgb(0,0,0, 0.5);
                align-items: center;
            }

            .modalBackground_show {
                animation:modalBackground-open.5s ;
                display: flex;
            }

            .modalBackground_close-starting {
                animation:modalBackground-close.5s ;
            }

            .modalWindow {
                display: flex;
                justify-content: center;
                height: 500px;
                width: 380px;
                align-items: center;
                background-color: rgba(48, 54, 58, 1);
                flex-direction: column;
                border-radius: 3px;
                box-shadow: 0px 3px 11px 3px #000000bd;
                color: #f7ff14;
                border: solid;
            }

            .modalEl {
                display: flex;
                justify-content: center;
                flex-direction: column;
            }

            .mb-3 {
                display: flex;
                justify-content: center;
                flex-direction: row;
                margin-top:30px;
            }

            input {
                font-size: 18px;
                height: 35px;
            }

            .btn-modal {
                font-family: 'OpelNextW01-Regular', sans-serif; 
                border-radius: 3px;
                border:solid;
                border-width: 1px;
                border-color:#f7ff14;
                transition: transform.3s ;
                color: #e1d9d9;
                font-size: 18px;
                background-color:  rgba(48, 54, 58, 1);
                width: 180px;
                height: 40px;
                font-weight: 400;
                margin-top:20px;
                font-weight: bold;
            }

            .btn-modal:hover {
                background-color: #f7ff14;
                font-size: 19px;
                border-width: 1px;
                border: none;
                font-family: 'OpelNextW01-Regular', sans-serif; 
                border-radius: 3px;
                color:black;
                transform: scale(1.02)
            }

            #modalTitle {
                color: white;
                font-size:30px;
                font-family: 'OpelNextW01-Regular', sans-serif; 
                font-weight: bold;
            }
        @media(max-width: 700px) {
          #modalTitle {
           font-size:23px;
          }
          .mb-2 {
            font-size:23px; 
          }
          .btn-modal {
            width: 100px;
            height: 30px;
            font-size: 15px;
          }
          .btn-modal:hover {
            font-size: 16px;
          }
          input {
                font-size: 15px;
                height: 35px;
          }
          .modalWindow {
            height: 460px;
            width: 300px;
          }
        }
        @media(max-width: 350px) {
          #modalTitle {
           font-size:18px;
          }
          .mb-2 {
            font-size:18px; 
          }
          .btn-modal {
            width: 100px;
            height: 23px;
            font-size: 15px;
          }
          .btn-modal:hover {
            font-size: 16px;
          }
          input {
                font-size: 13px;
                height: 20px;
          }
          .modalWindow {
            height: 370px;
            width: 230px;
          }
        }
      `}
        </style>
    </>
}
