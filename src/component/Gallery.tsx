import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import a from '/public/images/gallery/1.jpg';
import b from '/public/images/gallery/2.jpg';
import c from '/public/images/gallery/3.jpg';
import d from '/public/images/gallery/4.jpg';
import e from '/public/images/gallery/5.jpg';
import f from '/public/images/gallery/6.jpg';
import g from '/public/images/gallery/7.jpg';
import h from '/public/images/gallery/8.jpg';
import i from '/public/images/gallery/9.jpg';
import j from '/public/images/gallery/10.jpg';
import k from '/public/images/gallery/11.jpg';
import l from '/public/images/gallery/12.jpg';
import { ModalImg } from './ModalImg';
import { useState } from 'react';



export default function Gallery() {
  const [showModal, setShowModal] = useState(false)
  const [imgSrc, setImgSrc] = useState('')
  return (
    <div className='container'>
      {/* <Box sx={{ width: 1200, height: 700, overflowY: 'scroll' }}> */}
      <Box sx={theme => ({
        width: 1200, height: 700, overflowY: 'scroll' ,
        [theme.breakpoints.down('xl')]:{
          width: 1200, height: 700, overflowY: 'scroll' 
          },
       [theme.breakpoints.down('lg')]:{
        width: 900, height: 600, overflowY: 'scroll' 
        },
        [theme.breakpoints.down('md')]:{
          width: 600, height: 400, overflowY: 'scroll' 
        },
        [theme.breakpoints.down('sm')]:{
            width: 250, height: 150, overflowY: 'scroll' 
        },
        [theme.breakpoints.down('xs')]:{
          width: 100, height: 150, overflowY: 'scroll' 
        }
       })
      }>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={'car'}
                loading="lazy"
                onClick={() => {
                  setShowModal(true)
                  setImgSrc(item.img)
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <ModalImg showModal={showModal} setShowModal={setShowModal} imgSrc={imgSrc} />
      <style jsx>{`
        .container{
            display:flex;
           flex-direction:column;           
           margin-top:20px;
           justify-content:center;
           align-items:center;
           margin-bottom:20px;
        }
        .title{
          display:flex;
          justify-content:center;
          background-color:black;
          color:white;
          font-size: 40px;
         font-family: 'Montserrat';
         width:100%;
         margin-bottom:30px;
         margin-top:20px;
        }
    `}</style>
    </div>
  );
}

const itemData = [
  {
    img: `${a.src}`,
  },
  {
    img: `${b.src}`,
  },
  {
    img: `${c.src}`,
  },
  {
    img: `${d.src}`,
  },
  {
    img: `${i.src}`,
  },
  {
    img: `${f.src}`,
  },
  {
    img: `${g.src}`,
  },
  {
    img: `${e.src}`,
  },
  {
    img: `${h.src}`,
  },
  {
    img: `${j.src}`,
  },
  {
    img: `${k.src}`,
  },
  {
    img: `${l.src}`,
  },
];