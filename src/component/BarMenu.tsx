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
         <Link href={'/servicePage'}><span className='span'>СЕРВИС OPEL</span></Link>
      </li>
      <li className="menuEL">
         <Link href={'/modelPage'}><span className='span'>МОДЕЛИ</span></Link>
      </li>
      <li className="menuEL" >
         <Link href={'/'}><span className='span'>НА ГЛАВНУЮ</span></Link>
      </li>
      <li className="menuEL">
      <Link href={'/contactPage'}><span className='span'>КОНТАКТЫ</span></Link>
      </li>
      <li className="menuEL">
        <a href="tel:+78442222222"><span className='span'>+7(8442)22-22-22</span></a>
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
    font-family: 'OpelNextW01-Regular', sans-serif;
    border-bottom: 1px solid #eaeaea;   
    font-size:12px;
}

li:hover {
    font-weight: bold;
    transform: scale(1.03);
   
}
.span {
      width: 100%;
      display: inline-block;
      text-align: center;
      margin-top: 10px;
}

li {
    list-style: none;
}

@media(max-width: 500px) {
  .span {
      margin-top: 5px;
}
ul {
    font-size:10px;
}
}
@media(max-width: 200px) {
  .span {
      margin-top: 5px;
}
ul {
    font-size:7px;
}
}
`}</style>
    </div>

  );
}
         

   
