import React from 'react';
export interface InputProps {
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
export declare const Input: React.FC<InputProps>;
