import React from "react";
import styled from "styled-components";
import { FaShippingFast } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
import { TbArrowBackUp } from "react-icons/tb";
import { GiLifeInTheBalance } from "react-icons/gi";
import { FiShield } from "react-icons/fi";

const PromiseWrapper = styled.section`
  padding: 40px;
  text-align: center;
  background: #f9f9f9;

	@media (max-width: 768px) {
		padding: 28px 16px;
	}
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-family: "Playfair Display", serif;
  color: #192537;

	@media (max-width: 768px) {
		font-size: 1.25rem;
		margin-bottom: 20px;
	}
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;

	@media (max-width: 768px) {
		gap: 20px;
	}
`;

const Card = styled.div`
  max-width: 180px;
  text-align: center;
  font-family: Arial, sans-serif;

  svg {
    font-size: 2rem;
    color: #192537;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 10px 0 5px;
  }

  p {
    font-size: 0.85rem;
    color: #555;
    line-height: 1.4;
  }

	@media (max-width: 768px) {
		max-width: 160px;

		 svg { font-size: 1.6rem; }
		 h4 { font-size: 0.95rem; }
		 p { font-size: 0.8rem; }
	}
`;

export default function PromiseSection() {
  const promises = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      desc: "We will get your jewellery delivered free of cost.",
    },
    {
      icon: <PiCertificateLight />,
      title: "100% Hallmarked & Certified",
      desc: "JEWELNME jewellery always carries a certificate of authenticity.",
    },
    {
      icon: <TbArrowBackUp />,
      title: "21 Days Money-Back",
      desc: "Get 100% refund if you don't like your jewellery.",
    },
    {
      icon: <GiLifeInTheBalance />,
      title: "Lifetime Exchange",
      desc: "Exchange your old designs with new ones, whenever you want.",
    },
    {
      icon: <FiShield />,
      title: "JEWELNME Warranty",
      desc: "If there is an issue with your jewellery, we'll fix it.",
    },
  ];

  return (
    <PromiseWrapper>
      <Title>Our Promise To You</Title>
      <Grid>
        {promises.map((p, i) => (
          <Card key={i}>
            {p.icon}
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </Card>
        ))}
      </Grid>
    </PromiseWrapper>
  );
}
