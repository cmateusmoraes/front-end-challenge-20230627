import styled from "styled-components";

import { device } from "@/styles/BreakPoints";

type ModalProps = {
  isOpen: boolean;
};

export const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 80.8rem;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 2.5rem 3.5rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  margin: 0 2rem;

  @media ${device.sm} {
    padding: 4rem 5rem;
  }

  @media ${device.xs} {
    padding: 3rem 3rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 2.2rem;
  height: 2.2rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primaryColor);
    transform: translateY(-50%);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const CloseIcon = styled.svg`
  width: 100%;
  height: 100%;
  fill: var(--primaryColor);
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
`;
