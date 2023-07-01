import Image from "next/image";
import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 12.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`;

export const Logo = styled(Image)`
    height: auto;
    width: 20.0rem;
`;