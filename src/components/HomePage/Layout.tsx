import React, { SyntheticEvent } from "react";
import { useShoppingCart } from "./../UserContext";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import basket from "./../../images/basket.png";
import "./../../index.css";
import SliderScreen from "../Slider/SliderScreen";

const NavButton = styled.li`
  padding: 10px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 550;
  border: none;
`;

const Navbar= styled.ul`
display: flex;
align-items:center;
  letter-spacing: 2px;
  height:inherit;
  margin: 0 10vh;
`;

const Nav = styled.nav`
  height:8vh;
  width:100%;
  `;

const Container= styled.div`
  height: 100vh;
`


const Layout = () => {
  const { firstName,setFirstName, total } = useShoppingCart();

  const handleLogout = async function (e: SyntheticEvent) {
    e.preventDefault();
    setFirstName("")
  };

  return (
    <Container >
      <Nav className="gradient__bg">
        <Navbar>
          <NavButton style={{ flex: 1, fontSize: 28 }}>
            <Link to="/" className="link">
              Home
            </Link>
          </NavButton>

          {firstName ? (
            <>
              <NavButton>
                <Link
                  to="/basket"
                  className="link"
                  style={{ position: "relative"}}
                >
                  <img
                    src={basket}
                    alt="basket"
                    style={{
                      width:"40px",
                      backgroundColor: "white",
                      borderRadius: 50,
                      padding: "8px"
                    }}
                  />
                  <div className="quantity">{total}</div>
                </Link>
              </NavButton>
              <NavButton>
                <Link to="" onClick={handleLogout} className="link">
                  Logout
                </Link>
              </NavButton>
            </>
          ) : (
            <>
              <NavButton>
                <Link to="/register" className="link">
                  Register
                </Link>
              </NavButton>
              <NavButton>
                <Link to="/login" className="link">
                  Login
                </Link>
              </NavButton>
            </>
          )}
        </Navbar>
      </Nav>
      <SliderScreen />
      <Outlet />
    </Container>
  );
};

export default Layout;
