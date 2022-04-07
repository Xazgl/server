import banner from '/public/images/modelBanner.jpg'
import Image from 'next/image'
export function SpecialOffers() {
    return (
        <>
       <div className="specialOffers">
         <div className="titleMain">Специальные предложения</div>
            <div className="container">
                <div className='containerEl'>
                    <div className='img'>
                        <img src={banner.src} className='banner' />
                    </div>
                   {/* <div className="img">
                     
                    </div> */}
                   <div className="titleOffers"></div>
                   <div className='btnDiv'>
                       <button className="btn" type="submit">Узнать больше</button>
                    </div>
                </div>
                <div className='containerEl'>
                   <div className="img"></div>
                   <div className="titleOffers"></div>
                   <div className='btnDiv'>
                       <button className="btn" type="submit">Узнать больше</button>
                    </div>
                </div>
                <div className='containerEl'>
                   <div className="img"></div>
                   <div className="titleOffers"></div>
                   <div className='btnDiv'>
                       <button className="btn" type="submit">Узнать больше</button>
                    </div>
                </div>
            </div>
        </div>
        
<style jsx>{`
    .banner {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
.specialOffers{
    display:flex;
    flex-direction:column;
    margin-top:20px;
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
    background-color:#A9A9A9;
    border:solid;
    border-color:black;
    padding:10px;
    margin-top:30px;
    width:300px;
    height:300px;
}

.containerEl:hover{
        box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        transform: scale(1.005);
}

.img{
    display:flex;
    width:100px;
    height:100px;
}

.titleOffers {
    display:flex;
    flex-direction:row;
    justify-content:center;
}

.btnDiv {
    display:flex;
    flex-direction:row;
    justify-content:center;
}

.btn {
    font-family: 'Montserrat', sans-serif;
    border-radius: 3px;
    border:none;
    transition: transform.3s ;
    color: #ffffff;
    background-color: #48484d;
    width: 150px;
    height: 35px;
    font-size: 16px;
}

.btn:hover {
    background-color: #f7ff14;
    font-size: 20px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    color:black;
    transform: scale(1.02);
    font-size: 17px;
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
}             
`}</style>
</>
)}