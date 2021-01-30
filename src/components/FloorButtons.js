import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
} from "reactstrap";

const FloorButtons = () => {
  const { state, updateFloorZero, updateFloorOne, updateFloorTwo } = useContext(
    GlobalContext
  );

  const handleButtonPress = (floor_no, Up, Down) => {
    switch (floor_no) {
      case 0:
        if (state.LevelZero)
          setTimeout(() => {
            updateFloorTwo();
          }, 10000);
        else
          setTimeout(() => {
            updateFloorZero();
          }, 5000);
        break;
      case 1:
        if (Up && state.LevelZero)
          setTimeout(() => {
            updateFloorOne();
          }, 5000);
        else if (Down && state.LevelTwo)
          setTimeout(() => {
            updateFloorOne();
          }, 5000);
        else if (Down && state.LevelOne)
          setTimeout(() => {
            updateFloorZero();
          }, 5000);
        else break;
        break;
      case 2:
        if (state.LevelTwo)
          setTimeout(() => {
            updateFloorZero();
          }, 10000);
        else if (state.LevelZero)
          setTimeout(() => {
            updateFloorTwo();
          }, 10000);
        else
          setTimeout(() => {
            updateFloorTwo();
          }, 5000);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Row ml="1" xs="1">
        <Col>
          <Card>
            <CardBody>
              <h1>2</h1>
            </CardBody>
            <CardFooter>
              <ButtonGroup>
                {/* <Button>UP</Button> */}
                <Button
                  onClick={() => {
                    handleButtonPress(2, false, false);
                  }}
                  outline
                  color="danger"
                >
                  Down
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      <Row ml="1" xs="1">
        <Col>
          <Card>
            <CardBody>
              <h1>1</h1>
            </CardBody>
            <CardFooter>
              <ButtonGroup>
                <Button
                  onClick={() => {
                    handleButtonPress(1, true, false);
                  }}
                  outline
                  color="danger"
                >
                  UP
                </Button>
                <Button
                  onClick={() => {
                    handleButtonPress(1, false, true);
                  }}
                  outline
                  color="danger"
                >
                  Down
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      <Row ml="1" xs="1">
        <Col>
          <Card>
            <CardBody>
              <h1>0</h1>
            </CardBody>
            <CardFooter>
              <ButtonGroup>
                <Button
                  onClick={() => {
                    handleButtonPress(0, false, false);
                  }}
                  outline
                  color="danger"
                >
                  UP
                </Button>
                {/* <Button>Down</Button> */}
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FloorButtons;
