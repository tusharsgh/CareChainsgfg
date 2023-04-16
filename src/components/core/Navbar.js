import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { useAuth } from "../../services/authorization";

import MedblockLogo from "../../assets/icons/MedblockLogo.png";

const CustomNavbar = () => {
  const location = useLocation();
  console.log(location);

  const auth = useAuth();
  useEffect(() => {
    console.log("Auth status updated:", auth);
  }, [auth]);

  return location.pathname === "/" ? (
    <></>
  ) : (
    <Navbar  bg="dark"  collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={MedblockLogo}
            width="30"
            className="d-inline-block align-top"
          />{" "}
          &nbsp; CareChains
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="text-center" >
          <Nav className="me-auto" ></Nav>

          {/* <Nav   className="nav-link"  style={{   columnGap: "30px", alignItems: "flex-end"  }}> */}
          <Nav   className="nav nav-pills">
            <Nav.Link   as={Link} to="/about"  >
             About
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            {auth.loggedIn ? (
              <Button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "40px",
                }}
                variant="light"
                onClick={auth.logout}
              >
                Logout
              </Button>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
