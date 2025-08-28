import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
