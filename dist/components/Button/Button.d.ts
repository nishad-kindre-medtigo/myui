import React from 'react';
export interface ButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'error' | 'success' | 'warning' | 'text' | 'link';
    size?: 'small' | 'medium' | 'large';
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    icon?: React.ReactNode;
    iconLocation?: 'start' | 'end';
    style?: React.CSSProperties;
}
export declare const Button: React.FC<ButtonProps>;
