import React, { useState } from "react";
import {
  Accordion,
  Button,
  Col,
  Container,
  Row,
  Table,
  Image,
} from "react-bootstrap";
import Contact from "./Includes/Contact";
import FixedIcons from "./Includes/FixedIcons";
import Info from "./Includes/Info";
import MasterPlan from "./Includes/MasterPlan";
import Slider from "./Includes/Slider";
import Location from "../images/location.png";
import Modals from "./Includes/Modals";
import Gallery from "./Includes/Gallery";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Slider />
      <div className="py-3 py-md-3">
        <Container fluid>
          <Row>
            <Col md={9}>
              <section id="overview" className="py-3 py-md-5 bg-light">
                <Container fluid className="ps-0 pe-0">
                  <Row>
                    <Col md={12}>
                      <h2 className="pb-2 text-center py-2 py-md-5 fs-3">
                        Project Highlights
                      </h2>
                      <span className="bg-danger position-absolute start-50 span-line"></span>
                      <Table className="table table-bordered align-middle">
                        <tbody>
                          <tr>
                            <th>RERA No</th>
                            <td>1251/309/PR/310322/004800.</td>
                          </tr>
                          <tr>
                            <th>Development Size</th>
                            <td>6.5 Acres</td>
                          </tr>

                          <tr>
                            <th>Types of Projects</th>
                            <td>Apartment & Row House</td>
                          </tr>

                          <tr>
                            <th>Total No. of Units</th>
                            <td>
                              307(apartment) <br /> 20 (Row House)
                            </td>
                          </tr>
                          <tr>
                            <th>No. of Bed Rooms</th>
                            <td>2 & 3BHK</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Container>
              </section>

              <section className="py-2 py-md-2">
                <Container fluid className="ps-0 pe-0">
                  <Row>
                    <Col md={12}>
                      <h2 className="py-2 text-center fs-3">
                        About Sobha Victoria Park
                      </h2>
                      <p>
                        This project is a newly launched residential project by
                        the renowned real estate group – Sobha Developers. This
                        upcoming project offers beautiful 2 & 3 BHK houses and 3
                        bhk row houses that provide you the benefits of
                        community living in vast 6.5 acres of green landscape.
                        The residential development includes a vast array of
                        amenities and a mega clubhouse that make your stay
                        lively & exciting all time. Now take care of your health
                        in a modern gymnasium, take a leisure walk in the green
                        pathways, create long-lasting memories in the
                        mesmerizing gardens or cherish your time with loved ones
                        in the fascinating facilities provided here.
                        Strategically located At Off Hennur, Bangalore, the
                        project is seamlessly connected to the city with
                        multiple commute options and has easy access to all
                        basic pre-requisites. Nonetheless, Sobha Victoria Park
                        offers you a vibrant lifestyle in an exclusive
                        eco-friendly environment that is meant for a few.
                      </p>
                      <h6>VICTORIAN ARCHITECTURE CHARACTERISTICS</h6>
                      <p>
                        This is a style that emerged during the reign of Queen
                        Victoria
                      </p>
                      <p>
                        Victorian style is an eclectic style of architecture
                        which combines different styles as that of French,
                        Italian and Tudor.
                      </p>
                    </Col>
                  </Row>
                </Container>
                <Info />
              </section>
              <section id="master-plan" className="py-3 py-md-5 bg-light">
                <Container fluid>
                  <Row>
                    <Col md={12}>
                      <MasterPlan />
                    </Col>
                  </Row>
                </Container>
              </section>

              <section className="py-3 py-md-5" id="amenites">
                <Container fluid className="ps-0 pe-0">
                  <Row className="justify-content-center">
                    <h2 className="text-center py-2 py-md-3 fs-3">Amenities</h2>
                    <Col md={4} xs={6} className="align-self-center">
                      <ul>
                        <li>Entrance Plaza</li>
                        <li>Jogging / Cycling Path</li>
                        <li>Leisure & Kid's Pool</li>
                        <li>Victoria Court</li>
                        <li>Amphitheatre</li>

                        <li>Courtyard</li>
                        <li>Half BasketBall Court</li>
                      </ul>
                    </Col>
                    <Col md={4} xs={6}>
                      <ul>
                        <li>Celebration Plaza</li>
                        <li>Reflexology Deck</li>
                        <li>Skating Rink</li>
                        <li>Play Field</li>
                        <li>Skating Rink</li>
                        <li>Outdoor Fitness Deck</li>
                        <li>Natures Trail</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section id="pricing" className="py-3 py-md-3 bg-light">
                <Container fluid>
                  <Row className="justify-content-center">
                    <Col md={12} xs={12}>
                      <div className="">
                        <h2 className="text-center py-3 fs-3">Pricing</h2>
                        <Table
                          responsive="sm"
                          className="align-middle text-center border-transparent"
                          striped
                          bordered
                          hover
                        >
                          <thead>
                            <tr>
                              <th>Plot Size</th>
                              <th>Area (Sq.ft)</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2BHK </td>
                              <td>1425</td>
                              <td>
                                <Button
                                  variant="dark"
                                  size="sm"
                                  onClick={handleShow}
                                  className="my-3 custom-button"
                                >
                                  <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                                  Price Sheet
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>3BHK</td>
                              <td>2646</td>
                              <td>
                                <Button
                                  variant="dark"
                                  size="sm"
                                  onClick={handleShow}
                                  className="my-3 custom-button"
                                >
                                  <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                                  Price Sheet
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section className="py-3 py-md-3">
                <Info />
              </section>
              <section id="location" className="py-3 py-md-3">
                <Container fluid>
                  <h2 className="text-center py-md-3">Location</h2>
                  <Row className=" justify-content-center">
                    <Col md={8}>
                      {/* <div className="text-center">
              <Image src={Location} className="img-fluid" alt="" />
            </div> */}
                      <div className="text-center">
                        {/* <h2 className="text-center">Location Map</h2> */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31092.928402921723!2d77.65976792911378!3d13.060094002640108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0c3f89570f208b2!2sSobha%20Victoria%20Park!5e0!3m2!1sen!2sin!4v1652853748297!5m2!1sen!2sin"
                          width="100%"
                          height="450"
                        ></iframe>
                      </div>
                    </Col>
                    {/* <Col md={6}>
                      <div className="text-center">
                        <Image src={Location} className="img-fluid" alt="" />
                      </div>
                    </Col> */}
                  </Row>
                </Container>
              </section>
            </Col>
            <Col md={3}>
              <Contact />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="virtual-tour" className="py-3 py-md-5 bg-light">
        <Container fluid>
          <Row className="justify-content-center">
            <h2 className="text-center py-3">Virtual Tour</h2>
            <Col md={6}>
              <iframe
                width="100%"
                height="330"
                src="https://www.youtube.com/embed/tZ8XuJRzAR4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Col>
            {/* <Gallery /> */}
          </Row>
        </Container>
      </div>
      {/* <Gallery /> */}
      <section id="faq" className="py-3 py-md-5">
        <Container>
          <Row className="justify-content-center">
            <h2 className="text-center py-3"> Frequently Asked Questions </h2>
            <Col md={6}>
              <Accordion>
                <Accordion.Item eventKey="0" className="mb-3 shadow-sm">
                  <Accordion.Header>
                  What is the price of a 2BHK Apartments in Sobha Victoria Park?
                  </Accordion.Header>
                  <Accordion.Body>
                    The price of a 2BHK Apartments in this project starts 1.27 Crore Onwards..
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-3 shadow-sm">
                  <Accordion.Header>
                  What is the price of a 3BHK Apartments in Sobha Victoria Park?
                  </Accordion.Header>
                  <Accordion.Body>
                  The price of a 3BHK Apartments in this project starts 3.88 Crore Onwards.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mb-3 shadow-sm">
                  <Accordion.Header>
                  Which banks have approved loans for Sobha Victoria Park?
                  </Accordion.Header>
                  <Accordion.Body>
                  Loan Approved by Bank - HDFC Bank, Icici Bank, Kotak Bank, SBI Bank, Canara Bank
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6}>
              <Accordion>
                <Accordion.Item eventKey="0" className="mb-3 shadow-sm">
                  <Accordion.Header>
                  Is Sobha Victoria Park registered RERA?
                  </Accordion.Header>
                  <Accordion.Body>
                  Sobha Victoria Park is registered RERA id: PRM/KA/RERA/1251/309/PR/310322/004800.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-3 shadow-sm">
                  <Accordion.Header>
                  What are the different sizes of Sobha Victoria Park?
                  </Accordion.Header>
                  <Accordion.Body>
                  Sobha Victoria Park Offers sizes ranging 1425 sq.ft to 2646 sq.ft.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mb-3 shadow-sm">
                  <Accordion.Header>
                  Where is Sobha Victoria Park of located in Bangalore?
                  </Accordion.Header>
                  <Accordion.Body>
                  Sobha Victoria Park is located at Kyalashanahalli, Bangalore.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      <FixedIcons />
      <Modals
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
        message="Please Fill in your details & Download the Complete Brochure"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </>
  );
};

export default Home;
