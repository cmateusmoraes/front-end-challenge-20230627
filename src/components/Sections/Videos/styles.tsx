import styled from "styled-components";

import { device } from "@/styles/BreakPoints";
import { Container } from "@/components/ui/Container";

export const SectionVideos = styled(Container)`
  padding: 9.5rem 0 4rem;
  min-height: 1334px;

  @media ${device.lg} {
    min-height: 1270px;
  }

  @media ${device.lg} {
    min-height: 1004px;
  }

  @media ${device.sm} {
    min-height: 1600px;
    padding-top: 0;
  }

  @media (max-width: 600px) {
    height: 440rem;
  }

  @media (max-width: 430px) {
    height: 390rem;
  }

  @media ${device.xs} {
    height: 445rem;
  }

  @media ${device.xxxs} {
    height: 425rem;
  }
`;

export const FilterWrapper = styled.header`
  padding: 0 0 2.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #d5d9dd;
  opacity: 0;
  transform: translateY(20px);
  z-index: 10;

  @media (max-width: 820px) {
    padding: 5.5rem 0 2.5rem;
  }

  @media ${device.sm} {
    display: block;
    padding: 2.7rem 0 2.5rem;
  }
`;

export const FilterList = styled.ul`
  width: 72%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media ${device.lg} {
    width: 68%;
  }

  @media (max-width: 820px) {
    width: 77%;
  }

  @media ${device.sm} {
    width: 100%;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
  }

  li {
    &:last-child {
      display: none;

      @media ${device.sm} {
        display: block;
      }
    }
  }
`;

export const SelectWrapper = styled.div`
  width: 28%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transform: translateY(20px);

  @media ${device.lg} {
    width: 30%;
  }

  @media (max-width: 820px) {
    display: block;
  }

  @media ${device.sm} {
    width: 100%;
  }

  label {
    width: 35%;

    @media (max-width: 820px) {
      display: none;
    }

    @media ${device.sm} {
      width: 25%;
      display: block;
    }

    @media ${device.xs} {
      width: 100%;
      font-size: 2.5rem;
    }
  }
`;

export const VideosWrapper = styled.div`
  position: relative;
  padding: 6rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  border-bottom: 1px solid #d5d9dd;
  opacity: 0;
  transform: translateY(20px);

  @media ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PaginationWrapper = styled.div`
  padding: 3.6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    @media ${device.lg} {
      font-size: 2rem;
    }
  }
`;

export const PaginationList = styled.ul`
  display: flex;
  align-items: flex-start;
  margin-left: 10px;
`;

export const PaginationItem = styled.li`
  margin: 0 2px;
`;

type PaginationButtonProps = {
  isActive: boolean;
};

export const PaginationButton = styled.button<PaginationButtonProps>`
  font-size: 2.5rem;
  font-weight: 600;
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 8px;
  transition: all 0.2s ease-out;
  border: 1px solid transparent;
  border: ${props => (props.isActive ? "1px solid var(--primaryColor)" : "")};
  color: ${props =>
    props.isActive ? "var(--primaryColor)" : "var(--tertiaryColor)"};

  @media ${device.lg} {
    font-size: 2rem;
  }

  &:hover {
    border: 1px solid var(--primaryColor);
    color: var(--primaryColor);
  }
`;
