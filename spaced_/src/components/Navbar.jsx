import {BsFillSunFill} from 'react-icons/bs';
import React, { useState } from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiHappyBeaming } from 'react-icons/bi';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { AiOutlineForm } from 'react-icons/ai';

//all the svg files
import PowerOff from '../assets/power-off-solid.svg'

const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 65vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  padding: 1rem 0;
  position: absolute;
  top: 2rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  padding: 0.5rem 0rem;
  border: 2px solid var(--white);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
  background-color: var(--black);
  color: var(--white);
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Button = styled.button`
    background-color: var(--black);
    border: none;
    width: 2.5rem;
    height:2.5rem;
    border-radius: 50%;
    margin: 0.5rem 0 0 0.5rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before,
    &::after {
      content: "";
      background-color: var(--white);
      height: 2px;
      width: 1rem;
      position: absolute;
      transition: all 0.3s ease;
    }
    &::before {
      top: ${(props) => (props.clicked ? "1.5" : "1rem")};
      transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }
    &::after {
      top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
      transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Navbar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

const [profileClick, setprofileClick] = useState(false);
const handleProfileClick = () => setprofileClick(!profileClick);

    return (
        <Container className='z-10'>
            <Button clicked={click} onClick={() => handleClick()}>
            </Button>
            <SidebarContainer>
                <BsFillSunFill className='text-xl'/>
                
                <SlickBar clicked={click}>
                    <Item
                    onClick={() => setClick(false)}
                    exact
                    activeClassName="active"
                    to="/dashboard"
                    >
                    < FaHome className='text-xl' />
                    <Text clicked={click}>Home</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/todolist"
                        >
                        <BsFillCalendarCheckFill className='text-xl'/>
                        <Text clicked={click}>To-Do List</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/moodtracker"
                        >
                        <BiHappyBeaming className='text-xl'/>
                        <Text clicked={click}>Mood Tracker</Text>
                    </Item>
                    <Item
                      onClick={() => setClick(false)}
                      activeClassName="active"
                      to="/moodform"
                      >
                      <AiOutlineForm className='text-xl'/>
                      <Text clicked={click}>Daily Mood</Text>
                    </Item>
                </SlickBar>


                <Profile clicked={profileClick}>
                <img
                    onClick={() => handleProfileClick()}
                    src="https://picsum.photos/200"
                    alt="Profile"
                />
                <Details clicked={profileClick}>
                    <Name>
                    <h4>John Doe</h4>
                    <a href="/#">view profile</a>
                    </Name>

                    <Logout>
                        <img src={PowerOff} alt="logout" />
                    </Logout>
                </Details>
                </Profile>
            </SidebarContainer>
        </Container>
    );
};

export default Navbar;