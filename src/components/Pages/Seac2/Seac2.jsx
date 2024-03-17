import { Box, Typography } from '@mui/material';
import React from 'react';
import people from '../../../assets/people.svg'
import img2 from '../../../assets/img2.svg';
import css from '../Seac2/Seac2.module.css'
const Seac2 = () => {
  return (
    <div className='container'>
      <div className={css.Box__flex}>
        <Box
          sx={{
            position: 'relative',
            height: 639,
            boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
            overflow: 'hidden', 
          }}
        >
          <img src={img2} alt="Fashion Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className={css.position_ab} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <Typography
              sx={{
                color: '#fff',
                fontSize: '35px',
                fontWeight: 'bold',
                width: '566px',
                height: '84px',
                marginBottom: '20px', 
              }}
              variant='h4'
            >
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                width: '451px',
                height: '72px',
                marginTop: '30px', 
                color: '#ffffff',
                marginBottom: '50px', 
              }}
              variant='h6'
            >
              In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </Typography>
            <button style={{ padding: '12px 44px', fontSize: '18px', fontWeight: '600', borderRadius: '8px', border: 'none', backgroundColor: '#fff', color: '#000' }}>Shop Now</button>
          </div>
        </Box>
        <Box
          sx={{
            height: 639,
            boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
          }}
        >
          <img src={people} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
      </div>
    </div>
  );
};

export default Seac2;
