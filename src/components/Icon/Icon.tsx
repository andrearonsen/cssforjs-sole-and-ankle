import styled from "styled-components";
import { Search, Menu, ShoppingBag, ChevronDown } from "react-feather";
import { ComponentProps } from "react";

const icons = {
  search: Search,
  menu: Menu,
  "shopping-bag": ShoppingBag,
  "chevron-down": ChevronDown,
} as const;

export type IconId = keyof typeof icons;

export type IconProps = {
  id: IconId;
  color?: string;
  size: number;
  strokeWidth: number;
  delegated?: ComponentProps<"div">;
};

export const Icon = ({
  id,
  color,
  size,
  strokeWidth,
  ...delegated
}: IconProps) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ strokeWidth: number }>`
  & > svg {
    display: block;
    stroke-width: ${(p) => p.strokeWidth}px;
  }
`;
