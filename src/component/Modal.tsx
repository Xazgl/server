
// import styles from "./Menu.module.css";

import { ChangeEvent, FormEvent, useState } from "react";
import { Dispatch, SetStateAction, useRef } from "react";
import { IMaskInput } from "react-imask";

type ModelProps = {
    showModal: boolean,    
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export function Modal({showModal, setShowModal}: ModelProps) {
    const [closeStarting, setCloseStarting] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    function closeModal() {
        setCloseStarting(true)
        setTimeout(() => {
            setShowModal(false)
            setCloseStarting(false)
        }, 500)
    }
    async function sendmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const res = await fetch('/api/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone })
        })
        if (res.ok) {
            const result = await res.json()
            console.log(result);            
        }
    }
    const backgroundEl = useRef(null)
    const className = [
        'modalBackground',
        showModal ? 'modalBackground_show': '',
        closeStarting ? 'modalBackground_close-starting': '', 
    ]
    return <>    
        <div className={className.join(' ')} style={{color: 'red'}} id="modalBackground" ref={backgroundEl} onClick={(event) => {
                if (event.target === backgroundEl.current) closeModal()
            }}>
            <div className="modalWindow" id="modalWindow">
                <div className="mb-2"><span id="modalTitle">Заказать звонок</span></div>
                <div className="modalEl">
                    <form id="submit-form" onSubmit={sendmail}>
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
                            <IMaskInput  
                                style={{fontSize:'18px',height:'35px'}}
                                id="inputP"
                                className="phone"
                                mask={'+{7}(000)000-00-00'}
                                placeholder="+7(***)-***-**-**" 
                                required
                                value={phone}
                                name="phone"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
                                
                            />
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
                height: 400px;
                width: 500px;
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
                font-family: 'Montserrat', sans-serif;
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
                font-family: 'Montserrat', sans-serif;
                border-radius: 3px;
                color:black;
                transform: scale(1.02)
            }

            #modalTitle {
                color: white;
                font-size:30px;
                font-family: 'Montserrat';
                font-weight: bold;
            }
      `}
        </style>
    </>
}
