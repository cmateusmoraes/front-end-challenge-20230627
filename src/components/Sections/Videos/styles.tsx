import styled from "styled-components";

import { device } from "@/styles/BreakPoints";

export const FilterWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8.5rem 0 2.5rem;
`;

export const FilterList = styled.ul`
  width: 72%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SelectWrapper = styled.div`
  width: 28%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    width: 35%;
  }
`;

export const VideosWrapper = styled.div`
  padding: 6rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  border-top: 1px solid #d5d9dd;
  border-bottom: 1px solid #d5d9dd;
`;

export const PaginationWrapper = styled.div`
  padding: 3.6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationList = styled.ul`
  display: flex;
  align-items: flex-start;
  margin-left: 10px;
`;

export const PaginationItem = styled.li`
  margin: 0 2px;
`;

export const PaginationButton = styled.button`
  font-size: 2.5rem;
  font-weight: 600;
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 8px;
  transition: all 0.2s ease-out;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--primaryColor);
    color: var(--primaryColor);
  }
`;
