import Link from "next/link";
import styles from "./Menu.module.css";
import banner from '/public/images/label.png'

const hundler = (event) => {
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
         <Link href={'/servicePage'}>СЕРВИС OPEL</Link>
      </li>
      <li className="menuEL">
         <Link href={'/modelPage'}>МОДЕЛИ</Link>
      </li>
      <li className="menuEL" >
         <Link href={'/'}>НА ГЛАВНУЮ</Link>
      </li>
      <li className="menuEL">
      <Link href={'/contactPage'}>КОНТАКТЫ</Link>
      </li>
      <li className="menuEL">
        <a href="tel:+78442222222">+7(8442)22-22-22</a>
      </li>
    </ul>
    
   

    {/* CSS in JS */}
    <style jsx>{`
    @media(max-width: 700px) {
    ul {
      display:none;
    }
}

      ul {
        justify-content: space-evenly; 
        font-family: 'Montserrat'; 
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
      }
      
      .menuEL:hover {
        font-weight: bold;
        transform: scale(1.05);
        background-color:black;
        color:white;
        -webkit-transform: skewX(-15deg); 
	      -moz-transform: skewX(-15deg); 
       	-ms-transform: skewX(-15deg); 
	      -o-transform: skewX(-15deg); 
	      transform: skewX(-15deg); 

      }

      .menuEL {
        display:flex;
        justify-content:center;
        list-style: none;
        transition: 0.4s linear;
      }
   
      .menuLebel {
        display:flex;
        justify-content:start;
        list-style: none;
      }

      
    `}</style>
  </nav>
}
