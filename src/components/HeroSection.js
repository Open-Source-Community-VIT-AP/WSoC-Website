import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SnowFlake from "../assets/images/snowflake.png";
import "../App.css";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  
  h1 {
    margin-bottom: 0rem;
    font-size: 2rem;
  }
  
  p {
    margin: 0.75rem 0;
    font-size: 1rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 0.5rem 3rem;
  font-size: 1rem;
  border: 2px solid #ffffff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #ffffff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 60px;
    left: 10px;
  }

  ${Image}:nth-child(2) {
    top: 300px;
    left: 280px;
    height: 100px;
    width: 100px;
  }

  ${Image}:nth-child(3) {
    top: 450px;
    left: 80px;
  }
`;

function HeroSection() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Winter Season of Code 2021
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            01.10.2021
          </motion.p>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, backgroundColor: '#ffffff', border: 'none', color: '#000000' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            Coming Soon
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={SnowFlake}
            alt='snowflake'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 }}}
          />
          <Image
            src={SnowFlake}
            alt='snowflake'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 }}}
          />
          <Image
            src={SnowFlake}
            alt='snowflake'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 }}}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
}

export default HeroSection;
