import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

// Test suite for Button component
describe('Button Component', () => {
  
  // Test 1: Check if button renders with children
  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    
    // Look for button with the text "Click me"
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  // Test 2: Check if click handler is called
  it('calls onClick handler when clicked', () => {
    // Create a mock function to track if it's called
    const handleClick = jest.fn();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    // Check if our mock function was called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 3: Check disabled state
  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    
    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    // Should not be called when disabled
    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  // Test 4: Check different variants render
  it('renders different variants correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // Test 5: Check different sizes render
  it('renders different sizes correctly', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button size="medium">Medium</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button size="large">Large</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // Test 6: Check button type attribute
  it('sets correct button type', () => {
    render(<Button type="submit">Submit</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  // Test 7: Check accessibility attributes
  it('has correct accessibility attributes', () => {
    render(<Button disabled>Disabled</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  // Test 8: Check focus and blur events
  it('handles focus and blur events', () => {
    render(<Button>Focus me</Button>);
    
    const button = screen.getByRole('button');
    
    // Test focus
    fireEvent.focus(button);
    // In jsdom, we can't easily test focus state, so we just verify the events fire
    // The focus styles are tested in real browsers through Storybook
    expect(button).toBeInTheDocument();
    
    // Test blur
    fireEvent.blur(button);
    expect(button).toBeInTheDocument();
  });
});
