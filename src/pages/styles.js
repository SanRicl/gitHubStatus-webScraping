import styled from "styled-components";
import { BsGithub, BsCheck, BsExclamation } from "react-icons/bs";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid lightgrey;
  background: #fff;
  box-shadow: 30px 30px 50px 10px lightgray inset;
`;

export const GitHubIcon = styled(BsGithub)`
  width: 40px;
  height: 40px;
`;

export const CheckIcon = styled(BsCheck)`
  color: #fff;
  width: 30px;
  height: 30px;
`;

export const AttentionIcon = styled(BsExclamation)`
  color: #fff;
  width: 30px;
  height: 30px;
`;

export const ContentContainer = styled.div`
  background-image: url("https://user-images.githubusercontent.com/19292210/60553863-044dd200-9cea-11e9-987e-7db84449f215.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  display: flex;
  padding-top: 10%;
  padding-left: 10px;
  padding-right: 10px;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    padding-top: 20%;
  }
`;

export const HeaderStatusOperational = styled.div`
  background: #28a745;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;
export const HeaderStatusInoperational = styled.div`
  background: gold;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 500;
`;

export const GitStatusContainer = styled.div`
  padding-top: 5%;
`;

export const Title = styled.div`
  font-size: 2rem;
  color: #000;
  font-weight: 500;
`;

export const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid lightgrey;
  margin-top: 2%;
  background: #fff;
  height: 100%;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StatusItem = styled.div`
  height: 50px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 20px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TextStatus = styled.p`
  flex: 1;
`;

export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${(props) =>
    props.operational === "Operational" ? "green" : "gold"};
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const OperationalIcon = styled(BsCheck)`
  width: 25px;
  height: 25px;
  color: #fff;
`;

export const InoperationalIcon = styled(BsExclamation)`
  width: 25px;
  height: 25px;
  color: #fff;
`;

export const Footer = styled.div`
  padding: 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  text-align: center;
  margin-top: 10%;
  background: #fff;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  color: #000;
  font-weight: lighter;
`;

