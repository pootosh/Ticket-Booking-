import React from "react";
import { Nav, Form, Row, Col, Badge, Navbar } from "react-bootstrap";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";

import "../stylesheet/Header.css";

const Header = ({ word, setWord, handleSearch }) => {
  return (
    <div id="header" className="rootDiv">
      <Row>
        <Navbar>
          <Col>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/home">Pootosh</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/home">Offers</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col lg="6">
            <Nav.Item>
              <Nav.Link color="white">
                <Form onSubmit={handleSearch}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      value={word}
                      onChange={(e) => setWord(e.target.value)}
                      placeholder="Search"
                    />
                  </Form.Group>
                </Form>
              </Nav.Link>
            </Nav.Item>
          </Col>

          <Col>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Nav.Link href="/home" color="black">
                  Profile
                </Nav.Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Col>
          <Col>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Nav.Link href="/home">
                  <FontAwesomeIcon icon={faCartFlatbed} color="black" />
                  <Badge bg="black">0</Badge>
                </Nav.Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Col>
        </Navbar>
      </Row>
    </div>
  );
};

export default Header;
