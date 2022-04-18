import { useEffect } from "react"

export function Map() {
    // useEffect(() => {
    //     let script = document.createElement('script');
    //     script.async = true;
    //     script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5d0eb9f3144dba9594c054da1284695fa0ceeaf5f15349948c0309e8fff904c3&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true'
    //     document.body.append(script);
    //     return () => {
    //         const ymaps = document.querySelector('body ymaps')
    //         ymaps?.remove()
    //         console.log('Unmount');
    //     }
    // }, [])
    return (
        <>
       <div className="container">
          <div className="containerEl"><h2>Схема проезда  OPEL АРКОНТ</h2></div>
          <div className="containerEl"><h3>Ждем вас по адресу г. Волгоград, ул. Вильнюсская, д. 42</h3></div>
        </div>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7ae7bd69df4597c0df1c210c058a53f9001c9e6a459524ac86f7983dd1763f95&amp;source=constructor" width="100%" height="720" frameborder="0"></iframe>
        {/* <script type="text/javascript" charSet="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5d0eb9f3144dba9594c054da1284695fa0ceeaf5f15349948c0309e8fff904c3&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></script>        */}
        {/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff921a257cb510513efadfecac5e0a652b1a5285958f95fd32f604ec25402228&amp;source=constructor" width="995" height="720"></iframe> */}
    <style jsx>{`
        .container {
            display:flex;
            flex-direction:column;
            justify-content:center;
            background-color:black;
        }
        .border {
            border-top:
        }
        .containerEl {
            display:flex;
            color:white;
            font-family: Montserrat; 
            justify-content:center;
            margin-top:20px;
        }
    `}</style>
 </>
    )
}