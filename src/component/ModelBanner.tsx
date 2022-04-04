import banner from '/public/images/modelBanner.jpg'

export function ModelBanner() {
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
                    background-repeat: no-repeat;
                    background-size: cover;
}

                }
                .title {
                    display:flex;
                    justify-content:center;
                    alight-items:center;
                    flex-direction:column;
                    color:black;
                    font-family: Montserrat; 
                }
  
            `}</style>
        </>
    )
}