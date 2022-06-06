import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/banner.webp'


export function Video() {
    return (
        <>
            <section className="showcase">
                <video  autoPlay loop muted >
                  <source src ="/video.webm"  type="video/webm" />
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
                    font-family: 'OpelNextW01-Regular', sans-serif;
                    font-size: 350px;
                    color:#fff;
                    mix-blend-mode:multiply;
                    background-color:black;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                

             
                @media(max-width: 1000px) {
                    .showcase {
                        display:none;
                    }
                    
                }
                
                
            `}</style>
        </>
    )
}