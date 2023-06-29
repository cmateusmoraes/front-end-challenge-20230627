import styled from "styled-components";

type ContainerProps = {
  bgBlue?: boolean;
};

export const Container = styled.section<ContainerProps>`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  background-color: ${props =>
    props.bgBlue ? "var(--bgColorSecondary)" : "var(--bgColorPrimary)"};
`;
