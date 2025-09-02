import React from 'react';
import { colors, typography } from '../../tokens';

// Define the props that our Input component accepts
export interface InputProps {
  label?: string; // Optional label text
  placeholder?: string; // Placeholder text
  value?: string; // Controlled value
  defaultValue?: string; // Default value for uncontrolled usage
  type?: 'text' | 'email' | 'password' | 'number'; // HTML input type
  size?: 'small' | 'medium' | 'large'; // Input size
  disabled?: boolean; // Whether input is disabled
  error?: boolean; // Whether input has error state
  errorMessage?: string; // Error message to display
  helperText?: string; // Helper text below input
  required?: boolean; // Whether input is required
  style?: React.CSSProperties; // Custom styles to override defaults
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void; // Focus handler
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; // Blur handler
}

// Helper function to get input styles based on size and state
const getInputStyles = (size: string, error: boolean, disabled: boolean) => {
  // Base styles that apply to all inputs
  const baseStyles: React.CSSProperties = {
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
    color: colors.text.primary
  };

  // Size-specific styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      height: '32px',
      padding: '0 12px',
      fontSize: typography.fontSize.sm
    },
    medium: {
      height: '40px',
      padding: '0 16px',
      fontSize: typography.fontSize.md
    },
    large: {
      height: '48px',
      padding: '0 20px',
      fontSize: typography.fontSize.lg
    }
  };

  return {
    ...baseStyles,
    ...sizeStyles[size]
  };
};

// Helper function to get label styles
const getLabelStyles = (): React.CSSProperties => ({
  display: 'block',
  marginBottom: '4px',
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.medium,
  color: colors.text.primary
});

// Helper function to get helper/error text styles
const getTextStyles = (isError: boolean): React.CSSProperties => ({
  marginTop: '4px',
  fontSize: typography.fontSize.sm,
  color: isError ? colors.error.main : colors.text.secondary
});

// Helper function to get container styles
const getContainerStyles = (): React.CSSProperties => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

// Main Input component
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  defaultValue,
  type = 'text', // Default to text input
  size = 'medium', // Default to medium size
  disabled = false, // Default to not disabled
  error = false, // Default to no error
  errorMessage,
  helperText,
  required = false, // Default to not required
  style, // Custom styles
  onChange,
  onFocus,
  onBlur,
  ...props // Spread any additional props
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
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      e.currentTarget.style.borderColor = error ? colors.border.error : colors.border.focus;
      e.currentTarget.style.boxShadow = `0 0 0 2px ${error ? colors.error.light : colors.primary.light}`;
    }
    onFocus?.(e);
  };

  // Handle blur event
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = error ? colors.border.error : colors.border.default;
    e.currentTarget.style.boxShadow = 'none';
    onBlur?.(e);
  };

  // Determine what text to show below the input
  const displayText = error && errorMessage ? errorMessage : helperText;

  return (
    <div style={containerStyles}>
      {/* Label (if provided) */}
      {label && (
        <label htmlFor={inputId} style={labelStyles}>
          {label}
          {required && <span style={{ color: colors.error.main, marginLeft: '2px' }}>*</span>}
        </label>
      )}

      {/* Input field */}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        style={finalInputStyles}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // Accessibility attributes
        aria-invalid={error}
        aria-describedby={displayText ? `${inputId}-text` : undefined}
        aria-required={required}
        {...props}
      />

      {/* Helper text or error message */}
      {displayText && (
        <span
          id={`${inputId}-text`}
          style={textStyles}
          // Accessibility attributes
          role={error ? 'alert' : undefined}
          aria-live={error ? 'polite' : undefined}>
          {displayText}
        </span>
      )}
    </div>
  );
};
