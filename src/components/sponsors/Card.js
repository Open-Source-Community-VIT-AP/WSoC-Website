import React from "react";
import styled from 'styled-components';

const Container_sponsors = styled.div`
    height: 200px;
    max-width: 350px;
    overflow: hidden;
    color: #fff;
    text-align: center;
    margin: 35px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(255, 255, 255, 0.158) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

`

const Sponsorimage = styled.img`
    padding: .5rem;
    margin: auto;
    width: 80%;
    max-width: 320px;
    height: auto;
`

const Alink = styled.a`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

function card({imgurl , redirect}) {
  return (
    <div>
      <Container_sponsors>
      <Alink target="_blank" rel="noopener noreferrer" href= {redirect} >
        <Sponsorimage
          src = {imgurl}
          />
          </Alink>
      </Container_sponsors>
    </div>
  );
}

export default card;
