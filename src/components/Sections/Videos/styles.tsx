import Image from "next/image";
import Select from "react-select";
import styled from "styled-components";

import { device } from "@/styles/BreakPoints";
import { Text } from "@/components/ui/Text";

export const FilterWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8.5rem 0;
`;

export const FilterList = styled.ul`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

type filterProp = {
  active?: boolean;
};

export const Filter = styled.li<filterProp>`
  position: relative;
  overflow: hidden;
  padding: 0.4rem 1.5rem;
  border-radius: 2.5rem;
  border: 0.1px solid var(--tertiaryColor);
  margin: 0 0.5rem;
  transition: all 0.15s ease-out;
  border-color: ${props =>
    props.active ? "var(--primaryColor)" : "var(--tertiaryColor)"};

  &::before {
    content: " ";
    position: absolute;
    background-color: var(--primaryColor);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transform-origin: center center;
    top: calc(50% - 0.5rem);
    right: 0;
    bottom: 0;
    left: calc(50% - 0.5rem);
    transform: ${props => (props.active ? "scale(20)" : "scale(0)")};
    transition: all 0.25s ease-out;
  }

  button {
    position: relative;
    transition: all 0.25s ease-out;
    color: ${props => (props.active ? "#FFFFFF" : "var(--tertiaryColor)")};
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border-color: var(--primaryColor);

    button {
      color: ${props => (props.active ? "#FFFFFF" : "var(--primaryColor)")};
    }
  }
`;

export const SelectWrapper = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VideosWrapper = styled.div``;

export const CardVideo = styled.div``;

export const PaginationWrapper = styled.div``;

export const PaginationList = styled.ul``;

export const PaginationItem = styled.li``;

export const PaginationButton = styled.button``;
