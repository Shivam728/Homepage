import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  Ueno is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/1.jpg").default + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      <h3>Reuters News App</h3> <br></br>
                      <br></br>
                      <small>-Design, Product</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/3.jpg").default + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/2.jpg").default + ")",
                    }}
                  ></div>
                  <h2>
                    Our Services
                  </h2>
                  <p>
                    We’ve spent a lot of time thinking about this. What is it that we actually do? Do we make websites? Yes, sometimes. Do we make apps and other digital products? Yup, we make a fair amount of those. Do we create brands? Yea, that too.


                  </p>
                  <p>
                    But that doesn’t really explain it.
                  </p>
                  <p>
                    After thinking and thinking, taking long pensive walks on the beach, and even talking to some people, we realized that what we really do is create connections. We help our clients connect with their customers.
                  </p>
                  <p>
                    What makes some brands and products special? What is it about them that makes people come back to them again and again?

                    When you work with Ueno, we begin by spending quality time with you, figuring out who you really are and what you’re really about. Then we start building: We come up with a brand strategy that tells your story. We help you shape your product in a way that will make your customers happier and more productive. We build digital experiences that get the word out to the people who are looking for you, whether they know it or not.                  </p>
                  <p>
                    In short, we help you become more you. And then we help everyone else understand why you are exactly what they are looking for.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Join Us At Positions</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg").default}
                    ></img>
                    <h4 className="title">San Francisco</h4>
                    <p className="category text-info">No Open Positions</p>
                    
                  </div>
                </Col>
                <Col md="4">
                <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg").default}
                    ></img>
                    <h4 className="title">New York</h4>
                    <p className="category text-info">No Open Positions</p>
                    
                  </div>
                </Col>
                <Col md="4">
                <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/angeles.jpg").default}
                    ></img>
                    <h4 className="title">Los Angeles</h4>
                    <p className="category text-info">No Open Positions</p>
                    
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Got a Project!</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Project Name..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Project Description in max 300 words..."
                    maxLength ="300"
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
