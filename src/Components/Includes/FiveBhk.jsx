import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
// import Image1 from "../../images/floor-plans/west-facing-10x15-ground-floor.png";
// import Image2 from "../../images/floor-plans/west-facing-10x15-first-floor.png";
// import Image3 from "../../images/floor-plans/west-facing-10x15-second-floor.png";

const FiveBhk = () => {
  const images = [
      // { id: 1, imgName: Image1, alt: "", tag: "West Face - 10x15 - Ground Floor" },
      // { id: 2, imgName: Image2, alt: "", tag: "West Face - 10x15 - First Floor" },
      // { id: 3, imgName: Image3, alt: "", tag: "West Face - 10x15 - Second Floor" }
    ];
  return (
    <div>
      <Container fluid className="ps-0 pe-0">
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {images.map((item) => (
                <Col md={4} xs={4} sm={4} key={item.id}>
                  <div className="m-1 text-center border border-dark p-1 rounded">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                    <h6 className="text-center"> {item.tag} </h6>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </div>
  );
};

export default FiveBhk;
