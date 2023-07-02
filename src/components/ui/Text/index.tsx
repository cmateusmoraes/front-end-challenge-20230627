import styled, { css } from "styled-components";

import { device } from "@/styles/BreakPoints";

type TextProps = {
  color?: string | "var(--tertiaryColor)";
  fontSize: "xxs" | "xs" | "sm" | "md" | "lg" | string;
  fontWeight?: "bold" | string;
  letterSpacing?: string | number;
  textAlign?: "left" | "center" | "right";
  margin?: string;
};

export const Text = styled.p<TextProps>`
  color: ${props => props.color ?? "var(--tertiaryColor)"};
  text-align: ${props => props.textAlign ?? "left"};
  font-weight: ${props => props.fontWeight ?? "normal"};
  letter-spacing: ${props => props.letterSpacing ?? "0"};
  margin: ${props => props.margin ?? props.margin};
  ${props => {
    switch (props.fontSize) {
      case "xxs":
        return css`
          font-size: 1.4rem;
          line-height: 1.5rem;

          @media ${device.xs} {
            font-size: 2rem;
          }
        `;
      case "xs":
        return css`
          font-size: 1.6rem;

          @media ${device.lg} {
            font-size: 1.6rem;
          }

          @media ${device.sm} {
            font-size: 2rem;
          }
        `;

      case "sm":
        return css`
          font-size: 1.8rem;
          line-height: 1.9rem;

          @media ${device.lg} {
            font-size: 1.6rem;
            line-height: 1.7rem;
          }
          @media ${device.sm} {
            font-size: 2.2rem;
            line-height: 2.5rem;
          }
          @media ${device.xs} {
            font-size: 2.4rem;
            line-height: 2.8rem;
          }
        `;
      case "md":
        return css`
          font-size: 3.2rem;
          line-height: 3.4rem;
        `;
      case "lg":
        return css`
          font-size: 5rem;
          line-height: 5.2.rem;
        `;
      default:
        return css`
          font-size: ${props.fontSize};
        `;
    }
  }}

  strong {
    font-weight: 700;
  }
`;
