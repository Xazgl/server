import comboCargo from '/public/images/models/4.jpg';
import comboLife from '/public/images/models/0.jpg';
import zafira from '/public/images/models/3.jpg';
import vivaro from '/public/images/models/2.jpg';
import crossland from '/public/images/models/1.jpg';
import granlandX from '/public/images/models/5.jpg';
import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"
import { useRouter } from "next/router";
import Link from 'next/link';



export function ModelRow({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }){
    const router = useRouter()
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    async function showZafira() {
        router.push('/opelModels/zafira')
    //     const res = await fetch('/api/zafira', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ })
    //     })
    //     if (res.ok) {
    //     const result = await (await res).json()
    //         if (result.redirectUrl) {
    //            router.push(result.redirectUrl as string)
    //         }
    //   }
    }  
        
    


    return (
    <div className="ourAdvantages">
        <div className="titleMain">Модельный ряд OPEL</div>
            <div className="container">
              <div className="containerEl">
                  <div className="img1"></div>
                  <div className="title">Combo Cargo</div>
                  <div className="words"></div>
            </div>
            <Link href="/opelModels/zafira">
                <div className="containerEl">
                    <div className="img2"></div>
                    <div className="title">Zafira Life</div>
                    <div className="words"></div>
                </div>
            </Link>
            <div className="containerEl">
                  <div className="img3"></div>
                  <div className="title">Combo Life</div>
                  <div className="words"></div>
            </div>
            <div className="containerEl">
                  <div className="img4"></div>
                  <div className="title">Grandland X</div>
                  <div className="words"></div>
            </div>
            <div className="containerEl">
                  <div className="img6"></div>
                  <div className="title">Crossland</div>
                  <div className="words"></div>
            </div>
            <div className="containerEl">
                  <div className="img5"></div>
                  <div className="title">Vivaro</div>
                  <div className="words"></div>
            </div>
        </div>
        <div className="btnDiv">
           <form onSubmit={showModal}>
              <button className="btn">Тест-драйв</button>
            </form>
        </div>

            
<style jsx>{`
.ourAdvantages{
    display:flex;
    flex-direction:column;
    margin-top:50px;
    border-bottom-color: rgba(0, 0, 0, 0.4);
    border-bottom: solid;
}

.titleMain{
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-family: 'Montserrat', sans-serif;
    font-size:30px;
    font-weight:bold;
}

.container{
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;  
}

.containerEl{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:10px;
    margin-top:30px;
    width:200px;
    height:250px;
}



.title{
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-size:23px;
    font-family: 'Montserrat', sans-serif;
    align-items:center;
    font-weight: bold;
}

.words {
    margin-top:20px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-size:17px;
    font-family: 'Montserrat', sans-serif;
    align-items:center;
}

.img1{
    width:100%;
    height:400px;
    background-position: center center;
    background-image: url('${comboCargo.src}');
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 5px;
    background-size:contain;
    transition: 0.5s linear;
}
.img1:hover{
        transform: scale(1.4);
}
.img2{
    width:100%;
    height:400px;
    background-position: center center;
    background-image: url('${zafira.src}');
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 5px;
    background-size:contain;
    transition: 0.5s linear;
}
.img2:hover{
        transform: scale(1.4);
}
.img3{
    width:100%;
    height:400px;
    background-position: center center;
    background-image: url('${comboLife.src}');
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 5px;
    background-size:contain;
    transition: 0.5s linear;
}
.img3:hover{
        transform: scale(1.4);
}
.img4{
    width:100%;
    height:400px;
    background-position: center center;
    background-image: url('${granlandX.src}');
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 5px;
    background-size:contain;
    transition: 0.5s linear;
}
.img4:hover{
        transform: scale(1.4);
}
.img5{
    width:100%;
    height:400px;
    background-position: center center;
    background-image: url('${crossland.src}');
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 5px;
    background-size:contain;
    transition: 0.5s linear;
}
.img5:hover{
        transform: scale(1.4);
}
.img6{
    width:100%;
    height:200px;
    background-position: center center;
    background-image: url('${vivaro.src}');
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 5px;
    background-size:contain;
    transition: 0.5s linear;
}
.img6:hover{
        transform: scale(1.4);
}

.btnDiv {
    display:flex;
    flex-direction:row;
    justify-content:center;
}

.btn {
    margin-top:50px;
    font-family: 'Montserrat', sans-serif;
    border-radius: 3px;
    border:none;
    transition: transform.3s ;
    color: #ffffff;
    background-color: #48484d;
    width: 250px;
    height: 50px;
    font-size: 28px;
    margin-bottom:60px;
}

.btn:hover {
    background-color: #f7ff14;
    font-size: 20px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    color:black;
    transform: scale(1.02);
    font-size: 29px;
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
}         
`}</style>
  </div>
)}
        