import React, { useState } from 'react'
import About from '../components/about/About';
import Archive from '../components/archive/Archive';
import Footer from '../components/footer/Footer';
import Hero from '../components/heroSection/Hero';
import Navbar from '../components/navbar/Navbar'
import Projects from '../components/projects/Projects';
import Register from '../components/register/Register';
import Sidebar from '../components/sidebar/Sidebar';
import Timeline from '../components/timeline/Timeline';

function Home() {

    const [isOpen, setisOpen] = useState(false)

    const toggle = () => setisOpen(!isOpen)

    return (
        <div>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle}/>

            <Hero/>
            <About/>
            <Timeline/>
            <Projects/>
            <Archive/>
            <Register/>
            <Footer/>
        </div>
    )
}

export default Home
