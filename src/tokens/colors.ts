// Color tokens for our design system
// These colors ensure consistency across all components

export const colors = {
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
