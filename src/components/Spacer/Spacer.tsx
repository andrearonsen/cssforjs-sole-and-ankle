import styled from "styled-components";

export type SpacerProps = {
  size: number;
};

export const Spacer = ({ size }: SpacerProps) => (
  <Wrapper $size={size}></Wrapper>
);

const Wrapper = styled.div<{ $size: number }>`
  padding: ${(props) => props.$size};
`;
