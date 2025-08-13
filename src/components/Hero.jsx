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

	@media (max-width: 1024px) {
		height: 420px;
		font-size: 2.4rem;
	}

	@media (max-width: 768px) {
		height: 320px;
		font-size: 1.8rem;
		padding: 0 16px;
		text-align: center;
	}

	@media (max-width: 480px) {
		height: 260px;
		font-size: 1.4rem;
	}
`;

export default function Hero() {
  return <HeroSection>FOREVER TOGETHER</HeroSection>;
}
