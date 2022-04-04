export function Map() {
    return (
        <>
       <div className="container">
          <div className="containerEl"><h2>Схема проезда  OPEL АРКОНТ</h2></div>
          <div className="containerEl"><h3>Ждем вас по адресу г. Волгоград, ул. Вильнюсская, д. 42</h3></div>
        </div>
        <script type="text/javascript" charSet="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5d0eb9f3144dba9594c054da1284695fa0ceeaf5f15349948c0309e8fff904c3&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></script>       
       
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