import React from "react";
import styled from "styled-components";
import jewelPlanImage from "../assets/4.png"; // adjust path to where you saved the image

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 40px;
  background: #fff;
  border: 2.5px solid #192537;
  gap: 40px;
  flex-wrap: wrap;

	@media (max-width: 1024px) {
		padding: 40px 24px;
	}

	@media (max-width: 768px) {
		padding: 28px 16px;
		gap: 24px;
	}
`;

const ImageArea = styled.div`
  flex: 1;
  min-width: 300px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

	@media (max-width: 768px) {
		height: 280px;
		min-width: 260px;
	}
`;

const Content = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;

	@media (max-width: 768px) {
		min-width: 260px;
	}
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #192537;
  margin-bottom: 15px;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

const LinkText = styled.a`
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #192537;
  text-decoration: none;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

	@media (max-width: 768px) {
		font-size: 0.85rem;
	}
`;

const SubHeading = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  margin: 20px 0 15px;

	@media (max-width: 768px) {
		font-size: 0.85rem;
	}
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

	@media (max-width: 768px) {
		gap: 10px;
	}
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1.5px solid #192537;
  background: ${(props) => (props.primary ? "#192537" : "transparent")};
  color: ${(props) => (props.primary ? "#fff" : "#192537")};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.primary ? "#0f1823" : "#192537")};
    color: #fff;
  }

	@media (max-width: 768px) {
		font-size: 0.85rem;
		padding: 9px 16px;
	}
`;

export default function MyJewelPlan() {
  return (
    <Section>
      <ImageArea>
        <img src={jewelPlanImage} alt="My Jewel Plan" />
      </ImageArea>
      <Content>
        <Title>My Jewel Plan (MJP)</Title>
        <Description>
          Acknowledging the true spirit of making fine jewelry accessible to
          everyone, Jewelme launched My Jewel Plan (MJP), an economical and
          seamless method to ensure its customers own every single jewel from
          their Wishlist.
        </Description>
        <LinkText>Know more →</LinkText>
        <SubHeading>Consult With Our Sales Representative</SubHeading>
        <ButtonGroup>
          <Button>Book an Appointment →</Button>
          <Button primary>Start MJP Now →</Button>
        </ButtonGroup>
      </Content>
    </Section>
  );
}

