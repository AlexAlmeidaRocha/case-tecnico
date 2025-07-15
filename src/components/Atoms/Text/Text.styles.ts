import styled, { css } from "styled-components";

interface StyledTextProps {
  $error?: boolean;
  $fontSize?: string;
  $weight?: string;
  $color?: string;
  $customColor?: string;
  $disabled?: boolean;
}

const baseTextStyles = css<StyledTextProps>`
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-weight: ${(props) => props.$weight || "400"};
  font-size: ${(props) => props.$fontSize || "1rem"};
  color: ${(props) => {
    if (props.$disabled) return "#95a5a6";
    if (props.$error) return "#e74c3c";
    return props.$customColor || props.$color || "inherit";
  }};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "inherit")};
  transition: color 0.2s ease, opacity 0.2s ease;

  &:focus-visible {
    outline: 2px solid #3498db;
    outline-offset: 2px;
  }
`;

const headingStyles = css`
  line-height: 1.2;
  font-weight: 600;
`;

export const H1Styled = styled.h1<StyledTextProps>`
  ${baseTextStyles}
  ${headingStyles}
  font-size: 2.25rem; /* 36px */
  font-weight: 700;
`;

export const H2Styled = styled.h2<StyledTextProps>`
  ${baseTextStyles}
  ${headingStyles}
  font-size: 1.875rem; /* 30px */
  font-weight: 600;
`;

export const H3Styled = styled.h3<StyledTextProps>`
  ${baseTextStyles}
  ${headingStyles}
  font-size: 1.5rem; /* 24px */
`;

export const H4Styled = styled.h4<StyledTextProps>`
  ${baseTextStyles}
  ${headingStyles}
  font-size: 1.25rem; /* 20px */
`;

export const H5Styled = styled.h5<StyledTextProps>`
  ${baseTextStyles}
  ${headingStyles}
  font-size: 1.125rem; /* 18px */
`;

export const PStyled = styled.p<StyledTextProps>`
  ${baseTextStyles}
  line-height: 1.6;
`;

export const SpanStyled = styled.span<StyledTextProps>`
  ${baseTextStyles}
`;

export const LabelStyled = styled.label<StyledTextProps>`
  ${baseTextStyles}
  display: inline-block;
`;
