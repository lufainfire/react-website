import React from 'react';
import { NavbarDefault } from '../components/NavbarDefault';
import Navbar from '../components/NavbarElements';
import Button from '../components/Button';

const Home = () => (
    <div>

        <Navbar class="fixed w-full top-0 left-0"/>
        <div className="h-16 bg-gradient-to-r from-cyan-500 to-blue-500 size-full"/>
    
        <div className="home bg-blend-dark p-8 max-h-screen flex flex-colomn justify-left items-top size-full h-[800px] bg-page bg-cover bg-center "/>
        {/* <div className="home bg-blend-dark p-8 max-h-screen flex flex-colomn justify-left items-top size-full h-[800px] bg-page2 bg-cover bg-center "/> */}

        <div className="home bg-blend-dark p-8 max-h-screen flex flex-row justify-left items-top ">
        <div className='w-[500px] h-[157px] bg-logo2 bg-cover bg-center rounded-md'/>
            <span className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-blue-500 mt-20 ">
                Un club de volleyball d'excellence
            </span>
        </div>
    </div>
);

export default Home;
