import React from 'react';
import '../../Pages/Seac4/Seac4.css'
import img5 from '../../../assets/img5.svg'
const Seac4 = () => {
  return (
    <div>
      <section style={{marginTop: '100px'}}className="summer container"> 
        <div className="content"> 
            <div className="image-container"> 
                <img src={img5} alt="" />
                <div className="image-text"> 
                    <h4>Dress</h4> 
                    <h1>Summer Value Package</h1> 
                    <h4>cool / colorful / comfy</h4> 
                    <div className="text-btn"> 
                        <button>Shop Now</button> 
                    </div> 
                </div> 
            </div> 
        </div> 
      </section>
    </div>
  );
}

export default Seac4;
