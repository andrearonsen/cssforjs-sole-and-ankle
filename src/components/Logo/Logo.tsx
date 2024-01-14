import styled from "styled-components";
import { WEIGHTS } from "../../constants";
import { ComponentProps } from "react";

export type LogoProps = ComponentProps<"h1">;

export const Logo = (props: LogoProps) => (
  <Link>
    <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
  </Link>
);

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
