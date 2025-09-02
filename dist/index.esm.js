import React from 'react';

// Color tokens for our design system
// These colors ensure consistency across all components
const colors = {
    // Primary colors - used for main actions and highlights
    primary: {
        main: '#2563eb', // Blue - main primary color
        hover: '#1d4ed8', // Darker blue for hover states
        light: '#dbeafe' // Light blue for backgrounds
    },
    // Secondary colors - used for less important actions
    secondary: {
        main: '#64748b', // Gray - main secondary color
        hover: '#475569', // Darker gray for hover states
        light: '#f1f5f9' // Light gray for backgrounds
    },
    // Error colors - used for error states and validation
    error: {
        main: '#dc2626', // Red - main error color
        hover: '#b91c1c', // Darker red for hover states
        light: '#fef2f2' // Light red for error backgrounds
    },
    // Success colors - used for success states and confirmations
    success: {
        main: '#16a34a', // Green - main success color
        hover: '#15803d', // Darker green for hover states
        light: '#f0fdf4' // Light green for success backgrounds
    },
    // Warning colors - used for warning states and alerts
    warning: {
        main: '#d97706', // Orange - main warning color
        hover: '#b45309', // Darker orange for hover states
        light: '#fffbeb' // Light orange for warning backgrounds
    },
    // Info colors - used for informational states and messages
    info: {
        main: '#0ea5e9', // Light blue - main info color
        hover: '#0284c7', // Darker light blue for hover states
        light: '#f0f9ff' // Very light blue for info backgrounds
    },
    // Danger colors - alias for error colors to match API requirements
    danger: {
        main: '#dc2626', // Red - main danger color (same as error)
        hover: '#b91c1c', // Darker red for hover states (same as error)
        light: '#fef2f2' // Light red for danger backgrounds (same as error)
    },
    // Text colors - used for all text content
    text: {
        primary: '#1f2937', // Dark gray for main text
        secondary: '#6b7280' // Medium gray for secondary text
    },
    // Border colors - used for component borders
    border: {
        default: '#d1d5db', // Light gray for default borders
        focus: '#2563eb', // Blue for focused elements
        error: '#dc2626' // Red for error borders
    },
    // Background colors - used for component backgrounds
    background: {
        white: '#ffffff', // Pure white
        gray: '#f9fafb' // Very light gray
    }
};

// Typography tokens for our design system
// These ensure consistent text sizing and styling
const typography = {
    // Font sizes for different component sizes
    fontSize: {
        sm: '14px', // Small text (used in small components)
        md: '16px', // Medium text (default size)
        lg: '18px' // Large text (used in large components)
    },
    // Font weights for different text emphasis
    fontWeight: {
        normal: 400, // Regular text weight
        medium: 500, // Medium text weight
        semibold: 600 // Bold text weight
    },
    // Line heights for better readability
    lineHeight: {
        normal: 1.5, // Standard line height (1.5x font size)
        tight: 1.25 // Tighter line height for headings
    }
};

// Loading spinner component
const LoadingSpinner = ({ size }) => {
    const spinnerSize = size === 'small' ? '16px' : size === 'large' ? '20px' : '18px';
    return (React.createElement("svg", { width: spinnerSize, height: spinnerSize, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: {
            animation: 'spin 1s linear infinite',
        } },
        React.createElement("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeDasharray: "31.416", strokeDashoffset: "31.416", style: {
                animation: 'spin-circle 1.5s ease-in-out infinite',
            } }),
        React.createElement("style", null, `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-circle {
          0% { stroke-dasharray: 0 31.416; }
          50% { stroke-dasharray: 15.708 15.708; }
          100% { stroke-dasharray: 31.416 0; }
        }
      `)));
};
// Helper function to get styles based on variant, color, and size
const getButtonStyles = (variant, color, size, disabled, loading, hasIcon, hasText) => {
    // Base styles that apply to all buttons
    const baseStyles = {
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
        gap: hasIcon && hasText ? '8px' : '0',
    };
    // Size-specific styles
    const sizeStyles = {
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
    // Color mappings for each semantic color
    const colorMap = {
        primary: colors.primary,
        secondary: colors.secondary,
        success: colors.success,
        danger: colors.danger,
        warning: colors.warning,
        info: colors.info,
    };
    const currentColor = colorMap[color] || colorMap.primary;
    // Variant-specific styles
    const variantStyles = {
        filled: {
            backgroundColor: currentColor.main,
            color: colors.background.white,
            border: `1px solid ${currentColor.main}`,
        },
        outlined: {
            backgroundColor: 'transparent',
            color: currentColor.main,
            border: `1px solid ${currentColor.main}`,
        },
        text: {
            backgroundColor: 'transparent',
            color: currentColor.main,
            border: '1px solid transparent',
        },
        link: {
            backgroundColor: 'transparent',
            color: currentColor.main,
            border: '1px solid transparent',
            textDecoration: 'none',
        },
        icon: {
            backgroundColor: 'transparent',
            color: currentColor.main,
            border: '1px solid transparent',
            borderRadius: '50%', // Make icon buttons circular
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
const getHoverStyles = (variant, color) => {
    // Color mappings for each semantic color
    const colorMap = {
        primary: colors.primary,
        secondary: colors.secondary,
        success: colors.success,
        danger: colors.danger,
        warning: colors.warning,
        info: colors.info,
    };
    const currentColor = colorMap[color] || colorMap.primary;
    const hoverStyles = {
        filled: {
            backgroundColor: currentColor.hover,
            borderColor: currentColor.hover,
        },
        outlined: {
            backgroundColor: currentColor.light,
        },
        text: {
            backgroundColor: currentColor.light,
        },
        link: {
            textDecoration: 'underline',
        },
        icon: {
            backgroundColor: currentColor.light,
        },
    };
    return hoverStyles[variant];
};
// Main Button component
const Button = ({ children, variant = 'filled', // Default to filled variant
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
    const handleMouseEnter = (e) => {
        if (!disabled && !loading) {
            const combinedHoverStyles = style ? { ...hoverStyles, ...style } : hoverStyles;
            Object.assign(e.currentTarget.style, combinedHoverStyles);
        }
    };
    // Handle mouse leave event
    const handleMouseLeave = (e) => {
        if (!disabled && !loading) {
            // Reset to original styles
            Object.assign(e.currentTarget.style, finalStyles);
        }
    };
    // Handle focus event for accessibility
    const handleFocus = (e) => {
        if (!disabled && !loading) {
            e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary.light}`;
        }
    };
    // Handle blur event
    const handleBlur = (e) => {
        e.currentTarget.style.boxShadow = 'none';
    };
    // Render icon and text based on iconLocation and loading state
    const renderContent = () => {
        // Show loading spinner when loading
        if (loading) {
            return (React.createElement(React.Fragment, null,
                React.createElement(LoadingSpinner, { size: size }),
                children && React.createElement("span", { style: { opacity: 0.7 } }, children)));
        }
        if (!hasIcon) {
            return children;
        }
        if (!hasText) {
            return icon;
        }
        if (iconLocation === 'end') {
            return (React.createElement(React.Fragment, null,
                children,
                icon));
        }
        // Default: start position
        return (React.createElement(React.Fragment, null,
            icon,
            children));
    };
    return (React.createElement("button", { style: finalStyles, disabled: disabled || loading, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onFocus: handleFocus, onBlur: handleBlur, className: className, "aria-disabled": disabled || loading, "aria-busy": loading, ...props }, renderContent()));
};

// Helper function to get input styles based on size and state
const getInputStyles = (size, error, disabled) => {
    // Base styles that apply to all inputs
    const baseStyles = {
        width: '100%',
        border: `1px solid ${error ? colors.border.error : colors.border.default}`,
        borderRadius: '6px',
        fontFamily: 'inherit',
        fontWeight: typography.fontWeight.normal,
        transition: 'all 0.2s ease-in-out',
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'text',
        outline: 'none',
        backgroundColor: disabled ? colors.background.gray : colors.background.white,
        color: colors.text.primary,
    };
    // Size-specific styles
    const sizeStyles = {
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
    return {
        ...baseStyles,
        ...sizeStyles[size],
    };
};
// Helper function to get label styles
const getLabelStyles = () => ({
    display: 'block',
    marginBottom: '4px',
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
});
// Helper function to get helper/error text styles
const getTextStyles = (isError) => ({
    marginTop: '4px',
    fontSize: typography.fontSize.sm,
    color: isError ? colors.error.main : colors.text.secondary,
});
// Helper function to get container styles
const getContainerStyles = () => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
});
// Main Input component
const Input = ({ label, placeholder, value, defaultValue, type = 'text', // Default to text input
size = 'medium', // Default to medium size
disabled = false, // Default to not disabled
error = false, // Default to no error
errorMessage, helperText, required = false, // Default to not required
style, // Custom styles
onChange, onFocus, onBlur, ...props // Spread any additional props
 }) => {
    // Generate unique ID for accessibility (label-input association)
    const inputId = React.useId();
    // Get styles for this input configuration
    const containerStyles = getContainerStyles();
    const labelStyles = getLabelStyles();
    const inputStyles = getInputStyles(size, error, disabled);
    const textStyles = getTextStyles(error);
    // Merge custom styles with default styles (custom styles override defaults)
    const finalInputStyles = style ? { ...inputStyles, ...style } : inputStyles;
    // Handle focus event
    const handleFocus = (e) => {
        if (!disabled) {
            e.currentTarget.style.borderColor = error ? colors.border.error : colors.border.focus;
            e.currentTarget.style.boxShadow = `0 0 0 2px ${error ? colors.error.light : colors.primary.light}`;
        }
        onFocus?.(e);
    };
    // Handle blur event
    const handleBlur = (e) => {
        e.currentTarget.style.borderColor = error ? colors.border.error : colors.border.default;
        e.currentTarget.style.boxShadow = 'none';
        onBlur?.(e);
    };
    // Determine what text to show below the input
    const displayText = error && errorMessage ? errorMessage : helperText;
    return (React.createElement("div", { style: containerStyles },
        label && (React.createElement("label", { htmlFor: inputId, style: labelStyles },
            label,
            required && (React.createElement("span", { style: { color: colors.error.main, marginLeft: '2px' } }, "*")))),
        React.createElement("input", { id: inputId, type: type, placeholder: placeholder, value: value, defaultValue: defaultValue, disabled: disabled, required: required, style: finalInputStyles, onChange: onChange, onFocus: handleFocus, onBlur: handleBlur, "aria-invalid": error, "aria-describedby": displayText ? `${inputId}-text` : undefined, "aria-required": required, ...props }),
        displayText && (React.createElement("span", { id: `${inputId}-text`, style: textStyles, 
            // Accessibility attributes
            role: error ? 'alert' : undefined, "aria-live": error ? 'polite' : undefined }, displayText))));
};

export { Button, Input, colors, typography };
//# sourceMappingURL=index.esm.js.map
