import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for ContactLess Delivery"
        backgroundimg="model-s.jpg"
        leftbtntext="Custom Order"
        rightbtntext="Existing Inventory"
      />

      <Section
        title="Model 3"
        description="Order online for ContactLess Delivery"
        backgroundimg="model-3.jpg"
        leftbtntext="Custom Order"
        rightbtntext="Existing Inventory"
      />

      <Section
        title="Model X"
        description="Order online for ContactLess Delivery"
        backgroundimg="model-x.jpg"
        leftbtntext="Custom Order"
        rightbtntext="Existing Inventory"
      />

      <Section
        title="Model Y"
        description="Order online for ContactLess Delivery"
        backgroundimg="model-y.jpg"
        leftbtntext="Custom Order"
        rightbtntext="Existing Inventory"
      />

      <Section
        title="Lowest Cost Solar Panels"
        description="Money Back guarntee"
        backgroundimg="solar-panel.jpg"
        leftbtntext="Order Now"
        rightbtntext="Learn More"
      />

      <Section
        title="Accessories"
        description=""
        backgroundimg="accessories.jpg"
        leftbtntext="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
