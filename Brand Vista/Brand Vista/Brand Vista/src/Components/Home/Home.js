import React from 'react';
import Foot from '../Footer/Foot';
import Navbar from '../Navbar/Navbar';
import imge from './Content.jpg';

const Home = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div style={{marginTop:'65px'}}>
            <img src={imge} alt='Background' style={{height:'690px',width:'100%'}}/>
        </div>
        <div>
          <Foot/>
        </div>
    </div>
  )
}

export default Home;
