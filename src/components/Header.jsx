import React from "react";
import styled from "styled-components";
import {
  FiBell,
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiSearch,
  FiCalendar,
  FiHeadphones
} from "react-icons/fi";
import { PiCrownSimpleLight } from "react-icons/pi";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: white;
`;

const TopBanner = styled.div`
  background: #192537;
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 16px;
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

	@media (max-width: 768px) {
		font-size: 14px;
		padding: 8px;
	}

	@media (max-width: 480px) {
		font-size: 12px;
		padding: 6px;
	}
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 60px; /* space below banner */
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
	flex-wrap: wrap;

	@media (max-width: 1024px) {
		margin-top: 30px;
	}

	@media (max-width: 768px) {
		width: 95%;
		margin-top: 20px;
		padding: 6px 0;
		border-bottom: none;
		justify-content: center;
		gap: 12px;
	}
`;

const SideIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 1.6rem;

  svg {
    cursor: pointer;
    stroke-width: 1.5;
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
      transform: scale(1.15);
      color: #a3834c;
    }
  }
    
    @media (max-width: 768px) {
        gap: 12px;
        font-size: 1.2rem;
    }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stack crown, brand, tagline */
  align-items: center;
  text-align: center;
  gap: 5px;

  h1 {
    font-family: "Playfair Display", serif;
    font-size: 28px;
    margin: 0;
    color: #192537;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 2px;
    color: #a3834c;
  }

	@media (max-width: 768px) {
		gap: 4px;

		 h1 {
			font-size: 22px;
		}

		 span {
			font-size: 10px;
			letter-spacing: 1.5px;
		}
	}
`;

const BellWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const NotificationDot = styled.span`
  position: absolute;
  top: 2px; /* Adjust for alignment */
  right: -3px;
  width: 8px;
  height: 8px;
  background: red;
  border-radius: 50%;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;

	@media (max-width: 1024px) {
		gap: 20px;
	}

    @media (max-width: 768px) {
		gap: 10px 16px;
		font-size: 12px;
		width: 100%;
		justify-content: center;
		flex-wrap: wrap;
		row-gap: 8px;
		padding: 8px 12px;
		white-space: normal;
    }

    @media (max-width: 480px) {
        gap: 10px;
        span { padding-right: 16px; }
    }
`;


const navItems = [
	"RINGS",
	"EARINGS",
	"PENDANTS",
	"NECKLACES",
	"BANGLES",
	"SOLITAIRES",
	"MY JEWEL PLAN",
];

export default function Header() {
  return (
    <HeaderWrapper>
      <TopBanner>
        Live gold Price. Special Offer. Start My Jewel Plan Today ᐅ
      </TopBanner>

      <Heading>
				{/* Left Icons */}
        <SideIcons>
          <FiHeadphones />
          <FiCalendar />
          <FiSearch />
        </SideIcons>

        {/* Logo with crown on top */}
        <LogoWrapper>
          <PiCrownSimpleLight size={28} color="#a3834c" />
          <h1>JEWELNME</h1>
          <span>FOREVER TOGETHER</span>
        </LogoWrapper>

        {/* Right Icons */}
        <SideIcons>
          <BellWrapper>
            <FiBell />
            <NotificationDot />
          </BellWrapper>
          <FiUser />
          <FiHeart />
          <FiShoppingBag />
        </SideIcons>
      </Heading>

			<NavBar>
				{navItems.map((item) => (
					<span key={item}>{item}</span>
				))}
			</NavBar>
    </HeaderWrapper>
  );
}
