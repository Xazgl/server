import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";

export default function BarMenu() {
  return (
    <div className='bar'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='title'>Меню</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
    <ul className={"menu"}>
      <li className={"menuEl"}>
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      

<style jsx>{`
@media(min-width: 700px) {
    .bar {
      display:none;
    }
}

@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dongle&family=Montserrat&family=Roboto:wght@300;400;500;700&display=swap');


.title {
  display: flex;
  flex-direction:row;
}
.menu {
    display: flex;
    flex-direction:row;
    flex-direction:column;
    align-items: start;
}

.menuEl {
    list-style: none;
}


ul {
    font-family: Montserrat; 
    border-bottom: 1px solid #eaeaea;   
    font-size:12px;
}

li:hover {
    font-weight: bold;
    transform: scale(1.03);
   
}

li {
    list-style: none;
}

`}</style>
    </div>

  );
}
         

   
