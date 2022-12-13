import Stylenavbar from "../Navbar/Stylenavbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img1 from "../asssets/IMG_2572.PNG";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container
        style={{
          maxHeight: "100px",
        }}
        fluid
      >
        {/* <Navbar.Brand href="#">
          <img style={{ width: "10%" }} src={img1} alt="" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{
              maxHeight: "100px",
              // display: "flex",
              // justifyContent: "space-between",
            }}
            navbarScroll
          >
            <img src={img1} style={{ width: "10%" }} alt="" />
            <Link
              className="link"
              to="/"
              style={{
                color: "white",
                // marginRight: "1%",
                marginLeft: "10%",
                marginTop: "8px",
              }}
            >
              Home
            </Link>
            <Link
              className="link"
              to="/edu"
              style={{
                color: "white",

                marginRight: "10%",
                marginLeft: "10%",
                marginTop: "8px",
              }}
            >
              Education
            </Link>
            <Link
              className="link"
              to="/awards"
              style={{
                color: "white",
                // marginRight: "10%",
                // marginLeft: "10%",
                marginTop: "8px",
              }}
            >
              Awards
            </Link>
          </Nav>
          <Form className="d-flex search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{ backgroundColor: "hotpink" }}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
