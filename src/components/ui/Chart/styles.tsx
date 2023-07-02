import styled from "styled-components";
import Image from "next/image";

import imgPlus from "@/assets/img/bg-plus.png";

import { device } from "@/styles/BreakPoints";

export const WrapperChart = styled.div`
  position: relative;
  width: 740px;
  height: 688px;
  transition: all 0.3s ease-out;

  @media ${device.xl} {
    transform: scale(0.88) translateX(4rem);
  }

  @media ${device.lg} {
    transform: scale(0.8) translateX(8rem);
  }

  @media (max-width: 1100px) {
    transform: scale(0.7) translateX(15rem);
  }

  @media ${device.md} {
    transform: scale(1) translateX(0);
  }

  @media ${device.sm} {
    width: 100vw;
    height: 100vw;
    transform: scale(0.64) translateX(20rem) translateY(20rem);
  }

  @media (max-width: 390px) {
    transform: scale(0.59) translateX(22rem) translateY(20rem);
  }

  @media ${device.xs} {
    transform: scale(0.58) translateX(26rem) translateY(22rem);
  }

  @media ${device.xxs} {
    transform: scale(0.58) translateX(30rem) translateY(26rem);
  }

  @media ${device.xxxs} {
    transform: scale(0.52) translateX(32rem) translateY(30rem);
  }
`;

export const Background = styled.div`
  position: absolute;
  bottom: 58px;
  right: 74px;
  width: 515px;
  height: 466px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: -1px 4px 54px 0px rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

export const Plus = styled.div`
  position: absolute;
  width: 295px;
  height: 245px;
  bottom: 310px;
  right: 444px;
  background: url(${String(imgPlus.src)}) repeat;
  z-index: 0;
`;

export const Free = styled.div`
  position: absolute;
  width: 230px;
  height: 68px;
  bottom: 400px;
  right: 444px;
  border-radius: 30px;
  background-color: #00d59f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 22px;
  z-index: 2;

  @media ${device.sm} {
    right: 430px;
    width: 200px;
    font-size: 26px;
  }

  @media (max-width: 390px) {
    right: 420px;
    width: 190px;
    font-size: 24px;
  }
`;

type WrapperBarProps = {
  bottom: string;
  right: string;
};

export const WrapperBar = styled.div<WrapperBarProps>`
  width: 110px;
  position: absolute;
  bottom: ${props => props.bottom ?? "0"};
  right: ${props => props.right ?? "0"};
  z-index: 3;
`;

type BarProps = {
  leadster?: boolean;
  height: string;
};

export const Bar = styled.div<BarProps>`
  position: relative;
  height: ${props => props.height ?? "0"};
  width: 110px;
  border-radius: 20px;
  background-color: ${props =>
    props.leadster ? "var(--primaryColor)" : "#e9ecee"};
  transform-origin: bottom;
`;

type NumberLeadsProps = {
  leadster?: boolean;
};

export const NumberLeads = styled.div<NumberLeadsProps>`
  position: absolute;
  top: 20px;
  right: 0;
  left: 0;
  text-align: center;
  font-size: 22px;
  color: ${props => (props.leadster ? "#ffffff" : "var(--tertiaryColor)")};

  strong {
    font-size: 36px;
    font-weight: 600;
    display: block;
  }
`;

type SolutionProps = {
  $pxToCenter: string;
};

export const Solution = styled(Image)<SolutionProps>`
  display: block;
  max-width: unset;
  margin-left: ${props => props.$pxToCenter ?? "0"};
  margin-bottom: 5px;
`;

export const Smile = styled(Image)`
  position: absolute;
  width: 35px;
  height: 35px;
  bottom: -17px;
  right: calc(50% - 17px);
  z-index: 2;
`;

export const Detail = styled(Image)`
  position: absolute;
  width: 170px;
  height: 170px;
  bottom: 430px;
  right: 0;
`;
