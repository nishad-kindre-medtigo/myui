import React from 'react';
import { colors, typography } from '../../tokens';

// Define the props that our Button component accepts
export interface ButtonProps {
  children?: React.ReactNode;                                       // Content inside the button (optional for icon-only buttons)
  variant?: 'primary' | 'secondary' | 'outline' | 'error' | 'success' | 'warning' | 'text' | 'link'; // Button style variant
  size?: 'small' | 'medium' | 'large';                            // Button size
  small?: boolean;                                                  // Shorthand for small size
  medium?: boolean;                                                 // Shorthand for medium size
  large?: boolean;                                                  // Shorthand for large size
  disabled?: boolean;                                               // Whether button is disabled
  type?: 'button' | 'submit' | 'reset';                           // HTML button type
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;  // Click handler
  icon?: React.ReactNode;                                          // Icon element
  iconLocation?: 'start' | 'end';                                 // Icon position relative to text
  style?: React.CSSProperties;                                     // Custom styles to override defaults
}

// Helper function to determine the actual size based on props
const getActualSize = (size?: string, small?: boolean, medium?: boolean, large?: boolean): string => {
  // Priority: explicit boolean props > size prop > default medium
  if (small) return 'small';
  if (large) return 'large';
  if (medium) return 'medium';
  return size || 'medium';
};

// Helper function to get styles based on variant and size
const getButtonStyles = (variant: string, size: string, disabled: boolean, hasIcon: boolean, hasText: boolean) => {
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
    textDecoration: 'none',
    gap: hasIcon && hasText ? '8px' : '0',
  };

  // Size-specific styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      height: hasIcon && !hasText ? '32px' : '32px',
      padding: hasIcon && !hasText ? '0' : '0 12px',
      fontSize: typography.fontSize.sm,
      minWidth: hasIcon && !hasText ? '32px' : 'auto',
    },
    medium: {
      height: hasIcon && !hasText ? '40px' : '40px',
      padding: hasIcon && !hasText ? '0' : '0 16px',
      fontSize: typography.fontSize.md,
      minWidth: hasIcon && !hasText ? '40px' : 'auto',
    },
    large: {
      height: hasIcon && !hasText ? '48px' : '48px',
      padding: hasIcon && !hasText ? '0' : '0 20px',
      fontSize: typography.fontSize.lg,
      minWidth: hasIcon && !hasText ? '48px' : 'auto',
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
    error: {
      backgroundColor: colors.error.main,
      color: colors.background.white,
      border: `1px solid ${colors.error.main}`,
    },
    success: {
      backgroundColor: colors.success.main,
      color: colors.background.white,
      border: `1px solid ${colors.success.main}`,
    },
    warning: {
      backgroundColor: colors.warning.main,
      color: colors.background.white,
      border: `1px solid ${colors.warning.main}`,
    },
    text: {
      backgroundColor: 'transparent',
      color: colors.text.primary,
      border: '1px solid transparent',
    },
    link: {
      backgroundColor: 'transparent',
      color: colors.primary.main,
      border: '1px solid transparent',
      textDecoration: 'none',
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
    error: {
      backgroundColor: colors.error.hover,
      borderColor: colors.error.hover,
    },
    success: {
      backgroundColor: colors.success.hover,
      borderColor: colors.success.hover,
    },
    warning: {
      backgroundColor: colors.warning.hover,
      borderColor: colors.warning.hover,
    },
    text: {
      backgroundColor: colors.secondary.light,
    },
    link: {
      textDecoration: 'underline',
    },
  };

  return hoverStyles[variant];
};

// Main Button component
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',     // Default to primary variant
  size,                    // Size prop (can be overridden by boolean props)
  small,                   // Boolean prop for small size
  medium,                  // Boolean prop for medium size
  large,                   // Boolean prop for large size
  disabled = false,        // Default to not disabled
  type = 'button',         // Default to button type
  onClick,
  icon,                    // Icon element
  iconLocation = 'start',  // Default icon location
  style,                   // Custom styles
  ...props                 // Spread any additional props
}) => {
  // Determine the actual size to use
  const actualSize = getActualSize(size, small, medium, large);
  
  // Check if we have icon and/or text
  const hasIcon = !!icon;
  const hasText = !!children;
  
  // Get the base styles for this button configuration
  const buttonStyles = getButtonStyles(variant, actualSize, disabled, hasIcon, hasText);
  const hoverStyles = getHoverStyles(variant);

  // Merge custom styles with default styles (custom styles override defaults)
  const finalStyles = style ? { ...buttonStyles, ...style } : buttonStyles;

  // Handle mouse enter (hover) event
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      const combinedHoverStyles = style ? { ...hoverStyles, ...style } : hoverStyles;
      Object.assign(e.currentTarget.style, combinedHoverStyles);
    }
  };

  // Handle mouse leave event
  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      // Reset to original styles
      Object.assign(e.currentTarget.style, finalStyles);
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

  // Render icon and text based on iconLocation
  const renderContent = () => {
    if (!hasIcon) {
      return children;
    }
    
    if (!hasText) {
      return icon;
    }
    
    if (iconLocation === 'end') {
      return (
        <>
          {children}
          {icon}
        </>
      );
    }
    
    // Default: start position
    return (
      <>
        {icon}
        {children}
      </>
    );
  };

  return (
    <button
      type={type}
      style={finalStyles}
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
      {renderContent()}
    </button>
  );
};
