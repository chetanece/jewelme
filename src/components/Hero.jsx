import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero.jpg"; // Export from Figma or crop from screenshot

const HeroSection = styled.section`
  background: url(${heroImage}) center/cover no-repeat;
  height: 500px;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.6);
`;

export default function Hero() {
  return <HeroSection>FOREVER TOGETHER</HeroSection>;
}
