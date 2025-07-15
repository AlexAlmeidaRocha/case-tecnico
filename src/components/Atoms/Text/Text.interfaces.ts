import type { HTMLAttributes } from "react";
export type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | "span"
  | "label";
export type TextSize = "verySmall" | "small" | "medium" | "large";
export type TextWeight = "light" | "normal" | "medium" | "semiBold" | "bold";
export type TextColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "disabled"
  | "white"
  | "inherit";

export const TEXT_SIZES: Record<TextSize, string> = {
  verySmall: "0.75rem", // 12px
  small: "0.875rem", // 14px
  medium: "1rem", // 16px
  large: "1.25rem", // 20px
} as const;

export const TEXT_WEIGHTS: Record<TextWeight, string> = {
  light: "300",
  normal: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
} as const;

export const TEXT_COLORS: Record<TextColor, string> = {
  primary: "#2c3e50",
  secondary: "#34495e",
  success: "#27ae60",
  warning: "#f39c12",
  danger: "#e74c3c",
  info: "#3498db",
  disabled: "#95a5a6",
  inherit: "inherit",
  white: "#ffffff",
} as const;

export interface TextProps extends HTMLAttributes<HTMLElement> {
  type: TextType;
  error?: boolean;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  disabled?: boolean;
  customColor?: string;
}
