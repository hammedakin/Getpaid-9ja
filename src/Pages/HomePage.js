import React from "react";
import Showcase from "../Components/Showcase/Showcase";
import About from '../Components/About/About'
import HowToEarn from '../Components/HowToEarn/HowToEarn'
import HomeRegister from '../Components/HomeRegister/HomeRegister'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Showcase />
    <About/>
    <HowToEarn/>
    <HomeRegister/>
    <Footer></Footer>

    </>
  );
};

export default Home;
