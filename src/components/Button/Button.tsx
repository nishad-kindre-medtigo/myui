import React from 'react';
import { colors, typography } from '../../tokens';

// Loading spinner component
const LoadingSpinner: React.FC<{ size: string }> = ({ size }) => {
  const spinnerSize = size === 'small' ? '16px' : size === 'large' ? '20px' : '18px';

  return (
    <svg
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        animation: 'spin 1s linear infinite'
      }}>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="31.416"
        strokeDashoffset="31.416"
        style={{
          animation: 'spin-circle 1.5s ease-in-out infinite'
        }}
      />
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-circle {
          0% { stroke-dasharray: 0 31.416; }
          50% { stroke-dasharray: 15.708 15.708; }
          100% { stroke-dasharray: 31.416 0; }
        }
      `}</style>
    </svg>
  );
};

// Define the props that our Button component accepts
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;

  // Styling
  variant?: 'filled' | 'outlined' | 'text' | 'link' | 'icon';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';

  // States
  disabled?: boolean;
  loading?: boolean;

  // Icons
  icon?: React.ReactNode;
  iconLocation?: 'start' | 'end';

  // Utilities
  style?: React.CSSProperties;
  className?: string;
}

// Helper function to get styles based on variant, color, and size
const getButtonStyles = (variant: string, color: string, size: string, disabled: boolean, loading: boolean, hasIcon: boolean, hasText: boolean) => {
  // Base styles that apply to all buttons
  const baseStyles: React.CSSProperties = {
    border: 'none',
    borderRadius: '6px',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    fontFamily: 'inherit',
    fontWeight: typography.fontWeight.medium,
    transition: 'all 0.2s ease-in-out',
    opacity: disabled ? 0.5 : 1,
    outline: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    gap: hasIcon && hasText ? '8px' : '0'
  };

  // Size-specific styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      height: hasIcon && !hasText ? '32px' : '32px',
      padding: hasIcon && !hasText ? '0' : '0 12px',
      fontSize: typography.fontSize.sm,
      minWidth: hasIcon && !hasText ? '32px' : 'auto'
    },
    medium: {
      height: hasIcon && !hasText ? '40px' : '40px',
      padding: hasIcon && !hasText ? '0' : '0 16px',
      fontSize: typography.fontSize.md,
      minWidth: hasIcon && !hasText ? '40px' : 'auto'
    },
    large: {
      height: hasIcon && !hasText ? '48px' : '48px',
      padding: hasIcon && !hasText ? '0' : '0 20px',
      fontSize: typography.fontSize.lg,
      minWidth: hasIcon && !hasText ? '48px' : 'auto'
    }
  };

  // Color mappings for each semantic color
  const colorMap: Record<string, { main: string; hover: string; light: string }> = {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    danger: colors.danger,
    warning: colors.warning,
    info: colors.info
  };

  const currentColor = colorMap[color] || colorMap.primary;

  // Variant-specific styles
  const variantStyles: Record<string, React.CSSProperties> = {
    filled: {
      backgroundColor: currentColor.main,
      color: colors.background.white,
      border: `1px solid ${currentColor.main}`
    },
    outlined: {
      backgroundColor: 'transparent',
      color: currentColor.main,
      border: `1px solid ${currentColor.main}`
    },
    text: {
      backgroundColor: 'transparent',
      color: currentColor.main,
      border: '1px solid transparent'
    },
    link: {
      backgroundColor: 'transparent',
      color: currentColor.main,
      border: '1px solid transparent',
      textDecoration: 'none'
    },
    icon: {
      backgroundColor: 'transparent',
      color: currentColor.main,
      border: '1px solid transparent',
      borderRadius: '50%' // Make icon buttons circular
    }
  };

  // Combine all styles
  return {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant]
  };
};

// Helper function to get hover styles
const getHoverStyles = (variant: string, color: string) => {
  // Color mappings for each semantic color
  const colorMap: Record<string, { main: string; hover: string; light: string }> = {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    danger: colors.danger,
    warning: colors.warning,
    info: colors.info
  };

  const currentColor = colorMap[color] || colorMap.primary;

  const hoverStyles: Record<string, React.CSSProperties> = {
    filled: {
      backgroundColor: currentColor.hover,
      borderColor: currentColor.hover
    },
    outlined: {
      backgroundColor: currentColor.light
    },
    text: {
      backgroundColor: currentColor.light
    },
    link: {
      textDecoration: 'underline'
    },
    icon: {
      backgroundColor: currentColor.light
    }
  };

  return hoverStyles[variant];
};

// Main Button component
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled', // Default to filled variant
  color = 'primary', // Default to primary color
  size = 'medium', // Default to medium size
  disabled = false, // Default to not disabled
  loading = false, // Default to not loading
  icon, // Icon element
  iconLocation = 'start', // Default icon location
  style, // Custom styles
  className, // CSS class name
  ...props // Spread any additional props (including type, onClick, etc.)
}) => {
  // Check if we have icon and/or text
  const hasIcon = !!icon;
  const hasText = !!children;

  // Get the base styles for this button configuration
  const buttonStyles = getButtonStyles(variant, color, size, disabled, loading, hasIcon, hasText);
  const hoverStyles = getHoverStyles(variant, color);

  // Merge custom styles with default styles (custom styles override defaults)
  const finalStyles = style ? { ...buttonStyles, ...style } : buttonStyles;

  // Handle mouse enter (hover) event
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      const combinedHoverStyles = style ? { ...hoverStyles, ...style } : hoverStyles;
      Object.assign(e.currentTarget.style, combinedHoverStyles);
    }
  };

  // Handle mouse leave event
  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      // Reset to original styles
      Object.assign(e.currentTarget.style, finalStyles);
    }
  };

  // Handle focus event for accessibility
  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary.light}`;
    }
  };

  // Handle blur event
  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    e.currentTarget.style.boxShadow = 'none';
  };

  // Render icon and text based on iconLocation and loading state
  const renderContent = () => {
    // Show loading spinner when loading
    if (loading) {
      return (
        <>
          <LoadingSpinner size={size} />
          {children && <span style={{ opacity: 0.7 }}>{children}</span>}
        </>
      );
    }

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
      style={finalStyles}
      disabled={disabled || loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={className}
      // Accessibility attributes
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}>
      {renderContent()}
    </button>
  );
};
