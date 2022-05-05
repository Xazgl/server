import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import img1 from '/public/images/1.jpg'
import img2 from '/public/images/2.jpg'
import img3 from '/public/images/3.jpg'
import img4 from '/public/images/4.jpg'



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '',
    imgPath:`${img1.src}`,
  },
  {
    label: '',
    imgPath:`${img2.src}`,
  },
  {
    label: '',
    imgPath:`${img3.src}`,
  },
  {
    label: '',
    imgPath:`${img4.src}`,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
    <div className='upTitle'>OPEL СЕРВИС</div>
    <div className='background'>
    <Box  sx={{ maxWidth: 1500, flexGrow: 1}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          // bgcolor: '#3d3a3a',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 550,
                  display: 'block',
                  maxWidth: 1500,
                  overflow: 'hidden',
                  width: '100%',
                  objectFit: {
                    md: 'cover',
                    sm: 'contain'
                  },
                  // bgcolor: '#242222',
                  // bgcolor: 'black',
                  borderRadius:'7px',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{
          // bgcolor: '#3d3a3a',
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
          sx={{
            color: 'black',
          }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}
          sx={{
            color: 'white',
          }}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            
          </Button>
        }
      />
    </Box>
    </div>

<style jsx>{`
.upTitle {
    display:flex;
    justify-content:center;
    background:black;
    color:white;
    font-family: 'Montserrat', sans-serif;
    font-size:50px;
    padding-top: 42px;
}

.background {
    display:flex;
    justify-content:center;
}

@media(max-width: 800px) {
    .upTitle {
      font-size:40px;
    }
}

@media(max-width:600px) {
  .upTitle {
      font-size:30px;
    }
}

@media(max-width:: 300px) {
  .upTitle {
      font-size:20px;
    }
}

@media(max-width: 200px) {
  .upTitle {
      font-size:10px;
    }
}



   
`}</style>

</>
  );

}

export default SwipeableTextMobileStepper;