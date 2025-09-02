import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?: 'filled' | 'outlined' | 'text' | 'link' | 'icon';
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    iconLocation?: 'start' | 'end';
    style?: React.CSSProperties;
    className?: string;
}
declare const Button: React.FC<ButtonProps>;

interface InputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    type?: 'text' | 'email' | 'password' | 'number';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    helperText?: string;
    required?: boolean;
    style?: React.CSSProperties;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;

declare const colors: {
    primary: {
        main: string;
        hover: string;
        light: string;
    };
    secondary: {
        main: string;
        hover: string;
        light: string;
    };
    error: {
        main: string;
        hover: string;
        light: string;
    };
    success: {
        main: string;
        hover: string;
        light: string;
    };
    warning: {
        main: string;
        hover: string;
        light: string;
    };
    info: {
        main: string;
        hover: string;
        light: string;
    };
    danger: {
        main: string;
        hover: string;
        light: string;
    };
    text: {
        primary: string;
        secondary: string;
    };
    border: {
        default: string;
        focus: string;
        error: string;
    };
    background: {
        white: string;
        gray: string;
    };
};

declare const typography: {
    fontSize: {
        sm: string;
        md: string;
        lg: string;
    };
    fontWeight: {
        normal: number;
        medium: number;
        semibold: number;
    };
    lineHeight: {
        normal: number;
        tight: number;
    };
};

export { Button, Input, colors, typography };
export type { ButtonProps, InputProps };
