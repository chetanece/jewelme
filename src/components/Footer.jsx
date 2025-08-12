import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// Import all payment logos from your assets folder
import mastercardIcon from "../assets/mastercard.svg";
import visaIcon from "../assets/visa.svg";       
import rupayIcon from "../assets/rupay.svg";
import iciciIcon from "../assets/icici.svg";
import gpayIcon from "../assets/gpay.svg";
import paypalIcon from "../assets/paypal.svg";
import paytmIcon from "../assets/paytm.svg";

const FooterContainer = styled.footer`
  background-color: #192537;
  color: #fff;
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-between;
  padding: 40px;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;

  h4 {
    font-size: 1rem;
    margin-bottom: 20px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      font-size: 0.9rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Newsletter = styled.div`
  max-width: 250px;

 input {
  background-color: #192537;
  color: #fff;
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  margin-bottom: 10px;

  /* Remove default underline */
  text-decoration: none;

  /* Create custom underline with spacing */
  border-bottom: 1px solid #fff;
  padding-bottom: 5px; /* adjust this for more or less spacing */
}


  p {
    font-size: 0.8rem;
    margin-bottom: 15px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.2rem;

  a {
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #ccc;
    }
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 15px 40px;
  flex-wrap: wrap;
  font-size: 0.8rem;
`;

const WhiteBottomBar = styled.div`
  background-color: #fff;
  color: #000;
`;

const PaymentIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    height: 25px;
    object-fit: contain;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <TopSection>
        <Newsletter>
          <h4>STAY CONNECTED</h4>
          <input type="email" placeholder="Enter Email Address    →" />
          <p>
            By subscribing to our newsletter you agree to our privacy policy.
            (*restrictions and exclusions apply)
          </p>
          <SocialIcons>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </SocialIcons>
        </Newsletter>

        <Column>
          <h4>EXPLORE</h4>
          <ul>
            <li>Rings</li>
            <li>Earrings</li>
            <li>Pendants</li>
            <li>Necklaces</li>
            <li>Bangles</li>
            <li>Solitaires</li>
            <li>My Jewel Plan</li>
          </ul>
        </Column>

        <Column>
          <h4>JEWEL GUIDE</h4>
          <ul>
            <li>Authenticity</li>
            <li>Diamond</li>
            <li>Gem Stone</li>
            <li>Metal</li>
          </ul>
        </Column>

        <Column>
          <h4>POLICIES</h4>
          <ul>
            <li>Exchange Policy</li>
            <li>Buy back policy</li>
            <li>Resizing & Repairs</li>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </Column>

        <Column>
          <h4>QUERY</h4>
          <ul>
            <li>FAQs</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </Column>
      </TopSection>

      <WhiteBottomBar>
        <BottomBar>
          <span>
            Corporate Identity Number: U36999PB2021PTC054075 | Jewelme Private Limited 2022, All Rights Reserved.
          </span>
          <PaymentIcons>
            <img src={mastercardIcon} alt="MasterCard" />
            <img src={visaIcon} alt="VISA" />
            <img src={rupayIcon} alt="RuPay" />
            <img src={iciciIcon} alt="ICICI" />
            <img src={gpayIcon} alt="Google Pay" />
            <img src={paypalIcon} alt="PayPal" />
            <img src={paytmIcon} alt="Paytm" />
          </PaymentIcons>
        </BottomBar>
      </WhiteBottomBar>
    </FooterContainer>
  );
}
