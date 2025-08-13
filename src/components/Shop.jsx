import React from "react";
import styled from "styled-components";

// Import SVGs from assets folder
import Round from "../assets/round.svg";
import Oval from "../assets/oval.svg";
import Cushion from "../assets/cushion.svg";
import Pear from "../assets/pear.svg";
import Princess from "../assets/princess.svg";
import Emerald from "../assets/emarald.svg";
import Marquise from "../assets/Marquise.svg";
import Asscher from "../assets/asssher.svg";
import Radiant from "../assets/radiant.svg";
import Heart from "../assets/heart.svg";

const shapes = [
  { name: "Round", img: Round },
  { name: "Oval", img: Oval },
  { name: "Cushion", img: Cushion },
  { name: "Pear", img: Pear },
  { name: "Princess", img: Princess },
  { name: "Emerald", img: Emerald },
  { name: "Marquise", img: Marquise },
  { name: "Asscher", img: Asscher },
  { name: "Radiant", img: Radiant },
  { name: "Heart", img: Heart },
];

const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #f8f9fb;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #192537;
  margin-bottom: 40px;

	@media (max-width: 768px) {
		font-size: 1.4rem;
		margin-bottom: 24px;
	}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;

	@media (max-width: 768px) {
		gap: 14px;
		grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
		max-width: 560px;
	}
`;

const ShapeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShapeImage = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 10px;

	@media (max-width: 768px) {
		width: 60px;
		margin-bottom: 8px;
	}
`;

const ShapeName = styled.p`
  font-size: 1rem;
  color: #192537;

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

export default function Shop() {
  return (
    <Section>
      <Title>Shop Solitaires by Shape</Title>
      <Grid>
        {shapes.map((shape, index) => (
          <ShapeCard key={index}>
            <ShapeImage src={shape.img} alt={shape.name} />
            <ShapeName>{shape.name}</ShapeName>
          </ShapeCard>
        ))}
      </Grid>
    </Section>
  );
}
