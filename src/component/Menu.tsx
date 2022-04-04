import Link from "next/link";
import styles from "./Menu.module.css";


const hundler = (event) => {
  console.log('Click');
  event.preventDefault()
}
export  function Menu() {
  return <nav>
    <ul className={styles.menu}>
      <li className={styles.menuEl}>
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
        justify-content: space-around; 
        font-family: Montserrat; 
        border-bottom: 1px solid #eaeaea;   
        font-size:17px;
      }
      
      li:hover {
        font-weight: bold;
        transform: scale(1.03);

      }

      li {
        list-style: none;
      }

      
    `}</style>
  </nav>
}
