import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import FloorButtons from "./FloorButtons";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

const FloorState = () => {
  const { state } = useContext(GlobalContext);
  console.log(state);
  return (
    <>
      <Row>
        <Col>
          <Card className="text-center">
            <CardTitle>
              <h1>Lift Position</h1>
            </CardTitle>
            <CardBody>
              <Row>
                <Col>
                  <Card color={state.LevelTwo ? "danger" : ""}>
                    <CardBody>
                      <h1>2</h1>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card color={state.LevelOne ? "danger" : ""}>
                    <CardBody>
                      <h1>1</h1>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card color={state.LevelZero ? "danger" : ""}>
                    <CardBody>
                      <h1>0</h1>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <CardTitle>
              <h1>Lift Buttons</h1>
            </CardTitle>
            <CardBody>
              <FloorButtons />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Card className="text-center" body outline color="info">
        <CardBody>
          <h1>
            Level
            {state.LevelZero
              ? "zero"
              : state.LevelOne
              ? "One"
              : state.LevelTwo
              ? "Two"
              : ""}
          </h1>
        </CardBody>
      </Card>
    </>
  );
};

export default FloorState;
