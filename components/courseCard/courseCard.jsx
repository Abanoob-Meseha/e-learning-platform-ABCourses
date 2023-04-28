import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const CourseCard = (props) => (
  <Card css={{ w: "35vw", h: "50vh" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Text h3 color="black" weight='bold' css={{backgroundColor: 'White' , borderRadius:'10px' , padding:'1%'}}>
            {props.category || 'Category Name'}
        </Text>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={props.img || "/assets/TLOGO.png"}
        objectFit="fill"
        autoResize
        alt="Relaxing app background"
      />
    </Card.Body>
    
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        // bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row align="center">
            <Col span={3}>
              <Card.Image
                src={props.providerImg || "https://nextui.org/images/breathing-app-icon.jpeg"}
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text color="black" size={16} weight={"bold"}>
                {props.name || 'Course Name'}              
                </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Enroll
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
