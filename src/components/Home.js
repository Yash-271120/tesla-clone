import React from 'react';
import Section from './Section';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Section
        title='Model S'
        discription='Order Online for Touchless Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='GET UPDATES'
        rightBtnText='LEARN MORE'
      />

      <Section
        title='Model Y'
        discription='Order Online for Touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='GET UPDATES'
        rightBtnText='LEARN MORE'
      />

      <Section
        title='Model X'
        discription='Order Online for Touchless Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='GET UPDATES'
        rightBtnText='LEARN MORE'
      />

      <Section
        title='Model 3'
        discription='Order Online for Touchless Delivery'
        backgroundImg='model-3.jpg'
        leftBtnText='GET UPDATES'
        rightBtnText='LEARN MORE'
      />

      <Section
        title='Lowest Cost Solar Panels in India'
        discription='Money-back guarentee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='GET UPDATES'
        rightBtnText='LEARN MORE'
      />

      <Section
        title='Solar for New Roofs'
        discription='Solar Roof Costs Less Than a New Roof'
        backgroundImg='solar-roof.jpg'
        leftBtnText='GET UPDATES'
        rightBtnText='LEARN MORE'
      />

      <Section
        title='Accessories'
        discription=''
        backgroundImg='accessories.jpg'
        leftBtnText='SHOP NOW'
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
