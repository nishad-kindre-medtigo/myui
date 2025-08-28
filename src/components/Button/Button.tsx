import React from 'react';
import { colors, typography } from '../../tokens';

// Define the props that our Button component accepts
export interface ButtonProps {
  children: React.ReactNode;                                        // Content inside the button
  variant?: 'primary' | 'secondary' | 'outline';                   // Button style variant
  size?: 'small' | 'medium' | 'large';                            // Button size
  disabled?: boolean;                                               // Whether button is disabled
  type?: 'button' | 'submit' | 'reset';                           // HTML button type
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;  // Click handler
}

// Helper function to get styles based on variant and size
const getButtonStyles = (variant: string, size: string, disabled: boolean) => {
  // Base styles that apply to all buttons
  const baseStyles: React.CSSProperties = {
    border: 'none',
    borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'inherit',
    fontWeight: typography.fontWeight.medium,
    transition: 'all 0.2s ease-in-out',
    opacity: disabled ? 0.5 : 1,
    outline: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // Size-specific styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      height: '32px',
      padding: '0 12px',
      fontSize: typography.fontSize.sm,
    },
    medium: {
      height: '40px',
      padding: '0 16px',
      fontSize: typography.fontSize.md,
    },
    large: {
      height: '48px',
      padding: '0 20px',
      fontSize: typography.fontSize.lg,
    },
  };

  // Variant-specific styles
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: colors.primary.main,
      color: colors.background.white,
      border: `1px solid ${colors.primary.main}`,
    },
    secondary: {
      backgroundColor: colors.secondary.light,
      color: colors.text.primary,
      border: `1px solid ${colors.border.default}`,
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.primary.main,
      border: `1px solid ${colors.primary.main}`,
    },
  };

  // Combine all styles
  return {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };
};

// Helper function to get hover styles
const getHoverStyles = (variant: string) => {
  const hoverStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: colors.primary.hover,
      borderColor: colors.primary.hover,
    },
    secondary: {
      backgroundColor: colors.secondary.light,
      borderColor: colors.border.focus,
    },
    outline: {
      backgroundColor: colors.primary.light,
    },
  };

  return hoverStyles[variant];
};

// Main Button component
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',     // Default to primary variant
  size = 'medium',         // Default to medium size
  disabled = false,        // Default to not disabled
  type = 'button',         // Default to button type
  onClick,
  ...props                 // Spread any additional props
}) => {
  // Get the base styles for this button configuration
  const buttonStyles = getButtonStyles(variant, size, disabled);
  const hoverStyles = getHoverStyles(variant);

  // Handle mouse enter (hover) event
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      Object.assign(e.currentTarget.style, hoverStyles);
    }
  };

  // Handle mouse leave event
  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      // Reset to original styles
      Object.assign(e.currentTarget.style, getButtonStyles(variant, size, false));
    }
  };

  // Handle focus event for accessibility
  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary.light}`;
    }
  };

  // Handle blur event
  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <button
      type={type}
      style={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      // Accessibility attributes
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
