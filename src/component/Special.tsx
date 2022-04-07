import banner from '/public/images/special.jpg'

export function Special() {
    return (
        <>
        <div className="background">
                       <div className="column-left">
                           <div  className="columntitle">ПРИ ПОСЕЩЕНИЕ ОФИЦИАЛЬНОГО СЕРВИСНОГО ЦЕНТРА - СКИДКИ ПОСТОЯННЫМ КЛИЕНТАМ ПО ПРОГРАММЕ SPECIAL</div>
                           <div  className="columnMinititle">Запишите свой OPEL</div>
                       </div>
                       <div className="column-right">
                       </div>
        </div>
        



        <style jsx>{`
            .background{
                display:none;
                justify-content:center;
                flex-direction:row;
                align-items:center;
                width:100%;
                height:600px;
            }
          
            .column-left{
                display:flex;
                flex-direction:column;
                background-position: center center;
                background-image: url('${banner.src}');
                background-repeat:no-repeat;
                background-size:cover;
                width:50%;
                height:800px;
            }
            .column-right {
                display:flex;
                flex-direction:column;
                width:50%;
                height:600px;
            }
        `}</style>
        </>
        )}