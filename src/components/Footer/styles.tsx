import Image from "next/image";
import styled from "styled-components";

import { device } from "@/styles/BreakPoints";

export const Footer = styled.footer`
  padding: 5rem 0;

  p {
    margin-bottom: 1.5rem;

    @media ${device.sm} {
      text-align: center;
    }
  }
`;

export const Social = styled.ul`
  display: flex;
  align-items: center;

  @media ${device.sm} {
    margin-top: 3.5rem;
    justify-content: center;
  }

  li {
    border-radius: 50%;
    width: 4.6rem;
    height: 4.6rem;
    background-color: #f7f8fb;
    margin: 0 0.5rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      margin-left: 0;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Logo = styled(Image)`
  display: block;
  margin: 0 auto 0.5rem;
`;

export const WrapperSiteMap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0 8rem;
  border-bottom: 1px solid #d5d9dd;

  @media ${device.sm} {
    display: block;
    padding-bottom: 2rem;
  }
`;

export const WrapperCol = styled.div`
  h3 {
    margin-bottom: 3.5rem;

    @media ${device.sm} {
      display: block;
      width: 100%;
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  li {
    a {
      text-decoration: none;
      line-height: 4rem;
      color: #848eab;
      transition: all 0.2s ease-out;

      &:hover {
        color: var(--primaryColor);
        text-decoration: underline;
      }

      @media ${device.md} {
        font-size: 1.8rem;
      }

      @media ${device.sm} {
        display: block;
        width: 100%;
        text-align: center;
      }
    }
  }

  @media ${device.sm} {
    margin-bottom: 5rem;
    width: 100%;
  }
`;

export const WrapperCopy = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.sm} {
    display: block;
    padding-bottom: 0;
  }

  p {
    @media ${device.sm} {
      margin-bottom: 2rem;
      line-height: 2.5rem;
      text-align: center;
    }
  }
`;
