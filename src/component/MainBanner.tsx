import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/banner.webp'

export function MainBanner() {
    return (
        <>
            <div className="MainBanner">
               {/* <Image
                    src={banner}
                    alt="opel"
                    width={1000}
                    height={1000}
                />*/}

                {/* <img  className="ImgBanner" src={banner.src} alt="opel" /> */}
                {/* <div  className="ImgBanner2" /> */}
                    <div className="title">
                        <h2>АРКОНТ ОФИЦИАЛЬНЫЙ ДИЛЕР OPEL</h2>
                        <div className="titleMini">
                          <h3>Ждем Вас на Спартановке</h3>
                          <h3>Ежедневно с 8:00 до 20:00</h3>
                        </div>
                   </div>
            </div>

            <style jsx>{`
                .MainBanner {
                    display:flex; 
                    width: 100%;
                    height: 800px;
                    justify-content: center;
                    background-color:black;
                    background-position: center center;
                    background-image: url('${banner.src}');
                }
                .title {
                    display:flex;
                    justify-content:center;
                    alight-items:center;
                    flex-direction:column;
                    color:white;
                    font-family: Montserrat; 
                }
                .titleMini {
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    padding-left: 100px;
                    color:white;
                    margin-top:100px;
                    font-family: Montserrat; 
                }
                .ImgBanner2{
                   /* overflow: hidden;
                       border-radius: 5px;
                   */
                    
                    background-position: center center;
                    display:flex;
                }
            `}</style>
        </>
    )
}