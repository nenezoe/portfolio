import React from 'react';
import Navbar from '../../componet/navbar';
import Contact from '../contact';
import Introduction from '../introduction';
import Resume from '../resume';
import Reviews from '../reviews';
import Services from '../services';
import Works from '../works';

const MainPage = () => {
    return (
        <section className='container px-4 px-md-5 py-3 main-content'>
           
           <Introduction/>
           <Services/>
           <Works/>
           <Resume/>
           <Reviews/>
           <Contact/>
        </section>
    );
}

export default MainPage;
