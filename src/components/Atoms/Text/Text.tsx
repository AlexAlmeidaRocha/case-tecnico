import React, { type PropsWithChildren, useMemo } from "react";
import type {
  TextProps,
  TextType,
  TextSize,
  TextWeight,
  TextColor,
} from "./Text.interfaces";
import { TEXT_SIZES, TEXT_WEIGHTS, TEXT_COLORS } from "./Text.interfaces";
import {
  H1Styled,
  H2Styled,
  H3Styled,
  H4Styled,
  H5Styled,
  LabelStyled,
  PStyled,
  SpanStyled,
} from "./Text.styles";

const COMPONENT_MAP: Record<TextType, React.ElementType> = {
  h1: H1Styled,
  h2: H2Styled,
  h3: H3Styled,
  h4: H4Styled,
  h5: H5Styled,
  p: PStyled,
  span: SpanStyled,
  label: LabelStyled,
} as const;

const DEFAULT_VALUES = {
  size: "medium" as TextSize,
  weight: "normal" as TextWeight,
  color: "primary" as TextColor,
} as const;

const Text = React.memo<PropsWithChildren<TextProps>>(
  ({
    type,
    error = false,
    children,
    color = DEFAULT_VALUES.color,
    size = DEFAULT_VALUES.size,
    weight = DEFAULT_VALUES.weight,
    disabled = false,
    customColor,
    ...props
  }) => {
    const computedProps = useMemo(
      () => ({
        $error: error,
        $weight: TEXT_WEIGHTS[weight],
        $fontSize: TEXT_SIZES[size],
        $color: TEXT_COLORS[color],
        $customColor: customColor,
        $disabled: disabled,
      }),
      [error, weight, size, color, customColor, disabled]
    );

    const Component = COMPONENT_MAP[type] || COMPONENT_MAP.span;

    return (
      <Component {...computedProps} disabled={disabled} {...props}>
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

export default Text;
