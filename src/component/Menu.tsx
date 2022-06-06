import Link from "next/link";
import styles from "./Menu.module.css";
import banner from '/public/images/label.png'

const hundler = (event: React.SyntheticEvent) => {
  console.log('Click');
  event.preventDefault()
}
export  function Menu() {
  return <nav>
   
    <ul className={styles.menu}>

    <li className="menuLebel" >
         <Link href={'/'}><img  className="ImgBanner" src={banner.src} alt="opel" /></Link>
      </li>
      {/* <li className={styles.menuEl}>
         <Link href={'/servicePage'}>СЕРВИС OPEL</Link>
      </li> */}
      <li className="menuEL">
         <Link href={'/servicePage'}><span>СЕРВИС OPEL</span></Link>
      </li>
      <li className="menuEL">
         <Link href={'/modelPage'}><span>МОДЕЛИ</span></Link>
      </li>
      <li className="menuEL" >
         <Link href={'/'}><span>НА ГЛАВНУЮ</span></Link>
      </li>
      <li className="menuEL">
      <Link href={'/contactPage'}><span>КОНТАКТЫ</span></Link>
      </li>
      <li className="menuEL">
        <a href="tel:+78442222222"><span>+7(8442)22-22-22</span></a>
      </li>
    </ul>
    
   

    {/* CSS in JS */}
    <style jsx>{`
    

      ul {
        justify-content: space-evenly; 
        font-family: 'OpelNextW01-Regular', sans-serif; 
        border-bottom: 1px solid #eaeaea;   
        font-size:18px;
        position: fixed;
        width: 100%;
        background-color:white;
        font-weight: bold;
        background-color: rgba(247,255,20,.9);
        border:none;
        z-index:9999;
        margin-top:0;
        display:flex;
        align-items:center;
        height: 42px;
        padding-right: 180px;
      }
      li {
        font-family: 'OpelNextW01-Regular', sans-serif; 
      }
      span{
        font-family: 'OpelNextW01-Regular', sans-serif; 
      }
      .menuEL {
        display:flex;
        justify-content:center;
        font-family: 'OpelNextW01-Regular', sans-serif; 
        list-style: none;
        transition: 0.4s linear;
        position:relative;
      }

      span::after{
        position:absolute;
        content:"";
        width:0%;
        height:1.7px;
        background-color:black;
        left:50%;
        bottom:-1px;
        transition:all 0.3s ease-in-out;
      }

      span:hover {
        font-weight: bold;
        cursor:pointer;
        transform:scale(1.04);
        transition:0.4s;
      }

      span:hover:after {
        cursor:pointer;
        width:100%;
        left:0;
      }

      .menuLebel {
        display:flex;
        justify-content:start;
        list-style: none;
      }

      @media(max-width: 700px) {
    ul {
      display:none;
      z-index:none;
    }
}
    `}</style>
  </nav>
}
// -webkit-transform: skewX(-15deg); 
// -moz-transform: skewX(-15deg); 
//  -ms-transform: skewX(-15deg); 
// -o-transform: skewX(-15deg); 
// transform: skewX(-15deg); 