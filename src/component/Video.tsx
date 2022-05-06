import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/banner.webp'


export function Video() {
    return (
        <>
            <section className="showcase">
                <video  autoPlay loop muted >
                  <source src ="/video.mp4"  type="video/mp4" />
                </video>
                <h1 className="title">OPEL</h1>
            </section>

            <style jsx>{`
                .showcase {
                    width: 100%;
                    height: 400px;
                    position:relative;  
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                .showcase video {
                    width: 100%;
                    height:  400px;
                    position:absolute;  
                    top:0;
                    left:0;
                    object-fit:cover; 
                }
                .title {
                    width: 100%;
                    height: 100%;
                    font-family: 'OpelNextW01-Regular'; 
                    font-size: 350px;
                    color:#fff;
                    mix-blend-mode:multiply;
                    background-color:black;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                

             
                @media(max-width: 900px) {
                    .title { 
                        font-size:30px;
                    }
                }
                @media(max-width: 720px) {
                    .title { 
                        font-size:25px;
                    }
                    .titleMini {
                        font-size:15px;
                    }
                    .MainBanner { 
                        height: 400px;
                    }
                }
                @media(max-width: 540px) {
                    .title { 
                        font-size:18px;
                    }
                    .titleMini {
                        font-size:12px;
                    }
                    .MainBanner { 
                        height: 250px;
                    }
                }
                @media(max-width: 350px) {
                    .title { 
                        font-size:12px;
                    }
                    .titleMini {
                        font-size:9px;
                    }
                    .MainBanner { 
                        height: 150px;
                    }
                }
                @media(max-width: 250px) {
                    .title { 
                        font-size:9px;
                        margin-top:10px;
                    }
                    .titleMini {
                        font-size:7px;
                    }
                    .MainBanner { 
                        height: 130px;
                    }
                    .titleMini{
                        margin-bottom:00px;
                        margin-top:10px;
                    }
                }
            `}</style>
        </>
    )
}