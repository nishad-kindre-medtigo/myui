import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
export declare const Button: React.FC<ButtonProps>;
