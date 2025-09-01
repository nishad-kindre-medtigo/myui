import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

// Mock icon component for testing
const MockIcon = () => <span data-testid="mock-icon">🔥</span>;

describe('Button Component', () => {
  
  // Test 1: Basic rendering
  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  // Test 2: Click handler
  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 3: Disabled state
  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    
    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  // Test 4: Size boolean props
  describe('Size Props', () => {
    it('applies small size correctly', () => {
      render(<Button small>Small Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ height: '32px' });
    });

    it('applies medium size correctly', () => {
      render(<Button medium>Medium Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ height: '40px' });
    });

    it('applies large size correctly', () => {
      render(<Button large>Large Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ height: '48px' });
    });

    it('defaults to medium size when no size prop is provided', () => {
      render(<Button>Default Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ height: '40px' });
    });

    it('prioritizes boolean props over size prop', () => {
      render(<Button size="large" small>Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ height: '32px' }); // Should be small, not large
    });

    it('uses size prop when no boolean props are provided', () => {
      render(<Button size="large">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ height: '48px' });
    });
  });

  // Test 5: Button variants
  describe('Button Variants', () => {
    it('renders primary variant correctly', () => {
      render(<Button variant="primary">Primary Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundColor: '#2563eb' });
    });

    it('renders secondary variant correctly', () => {
      render(<Button variant="secondary">Secondary Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundColor: '#f1f5f9' });
    });

    it('renders outline variant correctly', () => {
      render(<Button variant="outline">Outline Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ 
        backgroundColor: 'transparent',
        border: '1px solid #2563eb'
      });
    });

    it('renders error variant correctly', () => {
      render(<Button variant="error">Error Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundColor: '#dc2626' });
    });

    it('renders success variant correctly', () => {
      render(<Button variant="success">Success Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundColor: '#16a34a' });
    });

    it('renders warning variant correctly', () => {
      render(<Button variant="warning">Warning Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundColor: '#d97706' });
    });

    it('renders text variant correctly', () => {
      render(<Button variant="text">Text Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ 
        backgroundColor: 'transparent',
        border: '1px solid transparent'
      });
    });

    it('renders link variant correctly', () => {
      render(<Button variant="link">Link Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ 
        backgroundColor: 'transparent',
        color: '#2563eb',
        textDecoration: 'none'
      });
    });
  });

  // Test 6: Icon functionality
  describe('Icon Support', () => {
    it('renders icon-only button', () => {
      render(<Button icon={<MockIcon />} />);
      
      const icon = screen.getByTestId('mock-icon');
      expect(icon).toBeInTheDocument();
      
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ minWidth: '40px' }); // Default medium size icon button
    });

    it('renders icon-only button with correct size for small', () => {
      render(<Button icon={<MockIcon />} small />);
      
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ minWidth: '32px' });
    });

    it('renders icon-only button with correct size for large', () => {
      render(<Button icon={<MockIcon />} large />);
      
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ minWidth: '48px' });
    });

    it('renders icon with text at start position (default)', () => {
      render(<Button icon={<MockIcon />}>Button Text</Button>);
      
      const button = screen.getByRole('button');
      const icon = screen.getByTestId('mock-icon');
      const text = screen.getByText('Button Text');
      
      expect(button).toContainElement(icon);
      expect(button).toContainElement(text);
      expect(button).toHaveStyle({ gap: '8px' });
    });

    it('renders icon with text at start position explicitly', () => {
      render(<Button icon={<MockIcon />} iconLocation="start">Button Text</Button>);
      
      const button = screen.getByRole('button');
      const icon = screen.getByTestId('mock-icon');
      const text = screen.getByText('Button Text');
      
      expect(button).toContainElement(icon);
      expect(button).toContainElement(text);
    });

    it('renders icon with text at end position', () => {
      render(<Button icon={<MockIcon />} iconLocation="end">Button Text</Button>);
      
      const button = screen.getByRole('button');
      const icon = screen.getByTestId('mock-icon');
      const text = screen.getByText('Button Text');
      
      expect(button).toContainElement(icon);
      expect(button).toContainElement(text);
    });

    it('renders button without icon when no icon prop is provided', () => {
      render(<Button>Just Text</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Just Text');
      expect(screen.queryByTestId('mock-icon')).not.toBeInTheDocument();
    });
  });

  // Test 7: Custom styling
  describe('Custom Styling', () => {
    it('applies custom styles correctly', () => {
      const customStyle = { 
        backgroundColor: 'purple', 
        color: 'white',
        borderRadius: '20px'
      };
      render(<Button style={customStyle}>Styled Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveStyle(customStyle);
    });

    it('custom styles override default styles', () => {
      const customStyle = { backgroundColor: 'purple' };
      render(<Button variant="primary" style={customStyle}>Custom Primary</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundColor: 'purple' });
    });

    it('works without custom styles', () => {
      render(<Button variant="primary">Normal Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundColor: '#2563eb' });
    });
  });

  // Test 8: Button types
  describe('Button Types', () => {
    it('renders submit button type', () => {
      render(<Button type="submit">Submit</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('renders reset button type', () => {
      render(<Button type="reset">Reset</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'reset');
    });

    it('defaults to button type', () => {
      render(<Button>Default Type</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  // Test 9: Accessibility
  describe('Accessibility', () => {
    it('has proper accessibility attributes when disabled', () => {
      render(<Button disabled>Disabled Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('has proper accessibility attributes when enabled', () => {
      render(<Button>Enabled Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'false');
    });
  });

  // Test 10: Event handling
  describe('Event Handling', () => {
    it('handles focus events', () => {
      render(<Button>Focus Test</Button>);
      
      const button = screen.getByRole('button');
      
      fireEvent.focus(button);
      expect(button).toBeInTheDocument();
    });

    it('handles blur events', () => {
      render(<Button>Blur Test</Button>);
      
      const button = screen.getByRole('button');
      
      fireEvent.blur(button);
      expect(button).toBeInTheDocument();
    });

    it('handles mouse enter and leave events', () => {
      render(<Button>Hover Test</Button>);
      
      const button = screen.getByRole('button');
      
      fireEvent.mouseEnter(button);
      fireEvent.mouseLeave(button);
      expect(button).toBeInTheDocument();
    });
  });

  // Test 11: Combined features
  describe('Combined Features', () => {
    it('works with icon, custom size, variant, and style together', () => {
      const customStyle = { borderRadius: '20px' };
      render(
        <Button 
          icon={<MockIcon />} 
          variant="success" 
          large 
          style={customStyle}
          iconLocation="end"
        >
          Complex Button
        </Button>
      );
      
      const button = screen.getByRole('button');
      const icon = screen.getByTestId('mock-icon');
      
      expect(button).toContainElement(icon);
      expect(button).toHaveStyle({ 
        height: '48px', // large size
        backgroundColor: '#16a34a', // success variant
        borderRadius: '20px' // custom style
      });
      expect(button).toHaveTextContent('Complex Button');
    });

    it('handles disabled state with all features', () => {
      const handleClick = jest.fn();
      render(
        <Button 
          icon={<MockIcon />} 
          variant="error" 
          small 
          disabled
          onClick={handleClick}
        >
          Disabled Complex
        </Button>
      );
      
      const button = screen.getByRole('button');
      
      fireEvent.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
      expect(button).toBeDisabled();
      expect(button).toHaveStyle({ opacity: '0.5' });
    });
  });
});
