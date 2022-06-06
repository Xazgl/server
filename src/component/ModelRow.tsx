import comboCargo from '/public/images/models/4.webp';
import comboLife from '/public/images/models/0.webp';
import zafira from '/public/images/models/3.webp';
import vivaro from '/public/images/models/2.webp';
import crossland from '/public/images/models/1.webp';
import granlandX from '/public/images/models/5.webp';
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
            <Link href="/opelModels/comboCargo">
              <div className="containerEl">
                  <div className="img1"></div>
                  <div className="title">Combo Cargo</div>
                  <div className="words"></div>
            </div>
            </Link>
            <Link href="/opelModels/zafira">
                <div className="containerEl">
                    <div className="img2"></div>
                    <div className="title">Zafira Life</div>
                    <div className="words"></div>
                </div>
            </Link>
            <Link href="/opelModels/comboLife">
            <div className="containerEl">
                  <div className="img3"></div>
                  <div className="title">Combo Life</div>
                  <div className="words"></div>
            </div>
            </Link>
            <Link href="/opelModels/grandland">
            <div className="containerEl">
                  <div className="img4"></div>
                  <div className="title">Grandland X</div>
                  <div className="words"></div>
            </div>
            </Link>
            <Link href="/opelModels/crossland">
            <div className="containerEl">
                  <div className="img5"></div>
                  <div className="title">Crossland</div>
                  <div className="words"></div>
            </div>
            </Link>
            <Link href="/opelModels/vivaro">
            <div className="containerEl">
                  <div className="img6"></div>
                  <div className="title">Vivaro</div>
                  <div className="words"></div>
            </div>
            </Link>
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
    font-family: 'OpelNextW01-Regular', sans-serif;
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
    font-family: 'OpelNextW01-Regular', sans-serif;
    align-items:center;
    font-weight: bold;
}

.words {
    margin-top:20px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-size:17px;
    font-family: 'OpelNextW01-Regular', sans-serif;
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
    font-family: 'OpelNextW01-Regular', sans-serif;
    border-radius: 3px;
    transition: transform.3s ;
    color: #ffffff;
    border-color: #000;
    color: #000;
    background: 0 0;
    width: 250px;
    height: 50px;
    font-size: 25px;
    margin-bottom:60px;
    display:flex;
    justify-content:center;
    align-items:center;
}

.btn:hover {
    background-color: #f7ff14;
    font-family: 'OpelNextW01-Regular', sans-serif;
    color:black;
    transform: scale(1.02);
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
}    

@media(max-width: 1200px) {
    .container{
        flex-wrap: wrap;
    }
}
@media(max-width: 900px) {
    .img1{
        height: 300px;
    }
    .img1:hover{
        transform: scale(1.1);
    }
    .img2{
        height: 300px;
    }
    .img2:hover{
        transform: scale(1.1);
    }
    .img3{
        height: 300px;
    }
    .img3:hover{
        transform: scale(1.1);
    }
    .img3:hover{
        transform: scale(1.1);
    }
    .img4{
        height: 300px;
    }
    .img4:hover{
        transform: scale(1.1);
    }
    .img5{
        height: 300px;
    }
    .img5:hover{
        transform: scale(1.1);
    }
    .img6{
        height: 300px;
    }
    .img6:hover{
        transform: scale(1.1);
    }
    .title {
        font-size:20px;
    }
    .btn {
       width: 200px;
       height: 40px;
       font-size: 23px;
       margin-bottom: 30px;
       margin-top: 20px;
    }
    .btn:hover {
        font-size: 24px;
    }
}
@media(max-width: 680px) {
    .titleMain {
        font-size: 23px;
    }
    .img1{
        height: 200px;
    }
    .img2{
        height: 200px;
    }
    .img3{
        height: 200px;
    }
    .img4{
        height: 200px;
    }
    .img5{
        height: 200px;
    }
    .img6{
        height: 200px;
    }
    .title {
        font-size:16px;
    }
    .btn {
       width: 160px;
       height: 35px;
       font-size: 17px;
       margin-bottom: 30px
    }
    .btn:hover {
        font-size: 18px;
    }
}
@media(max-width: 420px) {
    .containerEl{
       height: 150px;
    }
    .titleMain {
        font-size: 18px;
    }
    .btn {
       width: 140px;
       height: 35px;
       font-size: 15px;
       margin-bottom: 20px
    }
    .btn:hover {
        font-size: 16px;
    }
}
@media(max-width: 240px) {
    .containerEl{
       height: 100px;
    } 
    .titleMain {
        font-size: 10px;
    }
    .title {
        font-size: 12px;
    }
    .btn {
       width: 90px;
       font-size: 10px;
       margin-bottom: 20px
    }
    .btn:hover {
        font-size: 10px;
    }
}
`}</style>
  </div>
)}
        