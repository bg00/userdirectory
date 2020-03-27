import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_1280.jpg">
        <h1>Employee Directory</h1>
        <h2>Find your coworkers</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to the Employee Directory!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              If you're looking for information about your coworker, such as
              their contact info, birthday or location - you're in the right
              spot!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
