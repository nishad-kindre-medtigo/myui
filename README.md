# 🎨 MyUI Component Library

A simple, beginner-friendly React UI component library built with TypeScript. Perfect for learning component development and building consistent user interfaces.

## ✨ Features

- **🧩 Simple Components** - Button and Input components ready to use
- **📘 TypeScript Support** - Full type safety and IntelliSense
- **♿ Accessible** - Built with accessibility best practices
- **🧪 Well Tested** - Comprehensive test coverage with 37+ test cases
- **📚 Storybook Ready** - Interactive documentation
- **🎨 Customizable** - Easy to customize with design tokens and style prop
- **🌱 Beginner Friendly** - Extensive comments and clear code structure
- **🔥 Enhanced Button** - Icon support, new variants, size boolean props
- **🎯 Custom Styling** - Override any default styles with the style prop

## 🆕 What's New in v1.0.0

### Enhanced Button Component
- **🎯 Size Boolean Props** - Use `<Button small>` instead of `<Button size="small">`
- **🎨 New Variants** - Added `error`, `success`, `warning`, `text`, and `link` variants
- **🔥 Icon Support** - Add icons with configurable positioning (`start` or `end`)
- **✨ Custom Styling** - Override any default styles with the `style` prop
- **🔄 Backward Compatible** - All existing code continues to work

### Enhanced Input Component
- **✨ Custom Styling** - Override default styles with the `style` prop

### Expanded Design System
- **🎨 New Color Tokens** - Added success and warning color palettes
- **📚 Comprehensive Tests** - 37+ test cases covering all functionality

## 📦 Installation

```bash
npm install myui
```

## 🚀 Quick Start

```javascript
import { Button, Input } from 'myui';

function App() {
  return (
    <div>
      {/* Enhanced Button with new features */}
      <Button 
        variant="success" 
        large 
        icon={<span>✓</span>}
        onClick={() => alert('Success!')}
      >
        Save Changes
      </Button>
      
      {/* Button with custom styling */}
      <Button 
        style={{backgroundColor: 'purple', color: 'white'}}
        icon={<span>🚀</span>}
        iconLocation="end"
      >
        Launch
      </Button>
      
      {/* Input with custom styling */}
      <Input 
        label="Email"
        type="email"
        placeholder="Enter your email"
        style={{borderColor: 'blue', borderWidth: '2px'}}
      />
    </div>
  );
}
```

## 📚 Complete Documentation

Comprehensive documentation is available in the `docs/` folder:

- **[📖 Getting Started](./docs/getting-started.md)** - Installation and basic usage guide
- **[🔘 Button Component](./docs/button.md)** - Complete Button component guide with examples
- **[📝 Input Component](./docs/input.md)** - Complete Input component guide with forms
- **[🎨 Theme System](./docs/theme.md)** - Colors, typography, and customization
- **[🔧 How It Works](./docs/how-it-works.md)** - Technical architecture and project structure
- **[🌟 Examples](./docs/examples.md)** - Real-world usage examples and patterns

> **New to React or TypeScript?** Start with the [Getting Started guide](./docs/getting-started.md) for step-by-step instructions with explanations!

## 🎯 Components

### Button

A versatile button component with multiple variants, sizes, icon support, and full customization options.

```jsx
import { Button } from 'myui';

// Basic usage
<Button>Click me</Button>

// Size using boolean props (NEW!)
<Button small>Small Button</Button>
<Button medium>Medium Button</Button>
<Button large>Large Button</Button>

// Traditional size prop (still supported)
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// All variants including new ones
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="error">Error</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="text">Text Button</Button>
<Button variant="link">Link Button</Button>

// Icon support (NEW!)
<Button icon={<span>🔥</span>} />  {/* Icon only */}
<Button icon={<span>🔥</span>}>Start Icon</Button>  {/* Icon at start */}
<Button icon={<span>🔥</span>} iconLocation="end">End Icon</Button>

// Custom styling (NEW!)
<Button style={{backgroundColor: 'purple', color: 'white'}}>
  Custom Styled
</Button>

// Complex combinations
<Button 
  variant="success" 
  large 
  icon={<span>✓</span>} 
  iconLocation="start"
  onClick={() => console.log('Success!')}
>
  Save Changes
</Button>
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content inside the button (optional for icon-only) |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'error' \| 'success' \| 'warning' \| 'text' \| 'link'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size (traditional way) |
| `small` | `boolean` | `false` | **NEW:** Boolean prop for small size (overrides size prop) |
| `medium` | `boolean` | `false` | **NEW:** Boolean prop for medium size (overrides size prop) |
| `large` | `boolean` | `false` | **NEW:** Boolean prop for large size (overrides size prop) |
| `icon` | `React.ReactNode` | - | **NEW:** Icon element to display |
| `iconLocation` | `'start' \| 'end'` | `'start'` | **NEW:** Position of icon relative to text |
| `style` | `React.CSSProperties` | - | **NEW:** Custom styles to override defaults |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `onClick` | `(event: MouseEvent) => void` | - | Click event handler |

### Input

A flexible input component with label, validation, and helper text support.

```jsx
import { Input } from 'myui';

// Basic usage
<Input placeholder="Enter text..." />

// With label
<Input label="Username" placeholder="Enter username" />

// With validation
<Input 
  label="Email"
  type="email"
  error={true}
  errorMessage="Please enter a valid email"
/>

// With helper text
<Input 
  label="Password"
  type="password"
  helperText="Must be at least 8 characters"
  required
/>
```

#### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the input |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Default value for uncontrolled usage |
| `type` | `'text' \| 'email' \| 'password' \| 'number'` | `'text'` | HTML input type |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Input size |
| `style` | `React.CSSProperties` | - | **NEW:** Custom styles to override defaults |
| `disabled` | `boolean` | `false` | Whether input is disabled |
| `error` | `boolean` | `false` | Whether input has error state |
| `errorMessage` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text below input |
| `required` | `boolean` | `false` | Whether input is required |
| `onChange` | `(event: ChangeEvent) => void` | - | Change event handler |
| `onFocus` | `(event: FocusEvent) => void` | - | Focus event handler |
| `onBlur` | `(event: FocusEvent) => void` | - | Blur event handler |

## 🎨 Design Tokens

You can also import design tokens for custom styling:

```jsx
import { colors, typography } from 'myui';

const customStyle = {
  color: colors.primary.main,
  fontSize: typography.fontSize.lg,
  fontWeight: typography.fontWeight.semibold
};
```

### Available Colors

```typescript
colors.primary.main     // #2563eb
colors.primary.hover    // #1d4ed8
colors.primary.light    // #dbeafe
colors.secondary.main   // #64748b
colors.error.main       // #dc2626
colors.error.hover      // #b91c1c (NEW!)
colors.success.main     // #16a34a (NEW!)
colors.success.hover    // #15803d (NEW!)
colors.success.light    // #f0fdf4 (NEW!)
colors.warning.main     // #d97706 (NEW!)
colors.warning.hover    // #b45309 (NEW!)
colors.warning.light    // #fffbeb (NEW!)
colors.text.primary     // #1f2937
colors.border.default   // #d1d5db
// ... and more
```

### Available Typography

```typescript
typography.fontSize.sm    // 14px
typography.fontSize.md    // 16px
typography.fontSize.lg    // 18px
typography.fontWeight.normal   // 400
typography.fontWeight.medium   // 500
typography.fontWeight.semibold // 600
```

## 🔧 Development

### Prerequisites

- Node.js 16+ 
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start Storybook for development
npm run storybook

# Run tests
npm test

# Build the library
npm run build

# Type checking
npm run typecheck
```

### Building

The build process creates:
- `dist/index.js` - CommonJS build
- `dist/index.esm.js` - ES Modules build  
- `dist/index.d.ts` - TypeScript declarations

### Testing

Tests are written with Jest and React Testing Library:

```bash
npm test
```

### Storybook

Interactive component documentation:

```bash
npm run storybook
```

## 📝 Code Structure

```
src/
├── components/           # All UI components
│   ├── Button/          # Button component
│   │   ├── Button.tsx   # Main component
│   │   ├── Button.test.tsx    # Tests
│   │   ├── Button.stories.tsx # Storybook stories
│   │   └── index.ts     # Exports
│   └── Input/           # Input component
│       └── ...          # Same structure
├── tokens/              # Design system tokens
│   ├── colors.ts        # Color palette
│   ├── typography.ts    # Typography scale
│   └── index.ts         # Token exports
└── index.ts             # Main library export
```

## 🎯 Usage Examples

### Simple Form

```jsx
import { Button, Input } from 'myui';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        style={{borderRadius: '8px'}}
        required
      />
      
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
      />
      
      <Button 
        type="submit" 
        variant="primary"
        large
        icon={<span>🔐</span>}
        iconLocation="start"
      >
        Sign In
      </Button>
    </form>
  );
}
```

### Action Buttons Example

```jsx
import { Button } from 'myui';

function ActionButtons() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {/* Success actions */}
      <Button variant="success" icon={<span>✓</span>}>
        Approve
      </Button>
      
      <Button variant="success" small icon={<span>💾</span>} iconLocation="end">
        Save
      </Button>
      
      {/* Warning actions */}
      <Button variant="warning" icon={<span>⚠️</span>}>
        Warning
      </Button>
      
      {/* Error actions */}
      <Button variant="error" icon={<span>🗑️</span>} iconLocation="end">
        Delete
      </Button>
      
      {/* Minimal actions */}
      <Button variant="text" icon={<span>📝</span>}>
        Edit
      </Button>
      
      <Button variant="link" icon={<span>🔗</span>} iconLocation="end">
        View Details
      </Button>
      
      {/* Custom styled */}
      <Button 
        style={{
          background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: '20px'
        }}
        icon={<span>🚀</span>}
      >
        Launch
      </Button>
    </div>
  );
}
```

### Button Grid

```jsx
import { Button } from 'myui';

function ButtonShowcase() {
  return (
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {/* Traditional variants */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      
      {/* New variants */}
      <Button variant="error">Error</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="text">Text</Button>
      <Button variant="link">Link</Button>
      
      {/* Size boolean props */}
      <Button small>Small</Button>
      <Button medium>Medium</Button>
      <Button large>Large</Button>
      
      {/* Icon examples */}
      <Button icon={<span>🔥</span>} />
      <Button icon={<span>📧</span>}>Email</Button>
      <Button icon={<span>💾</span>} iconLocation="end">Save</Button>
      
      {/* Custom styling */}
      <Button style={{backgroundColor: 'purple', color: 'white'}}>Custom</Button>
      <Button disabled>Disabled</Button>
      <Button type="submit">Submit</Button>
    </div>
  );
}
```

## 🤝 Contributing

This is a learning project! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for learning and development!

## 📚 Learning Resources

This library is built with:
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Rollup](https://rollupjs.org/) - Module bundler
- [Jest](https://jestjs.io/) - Testing framework
- [Storybook](https://storybook.js.org/) - Component documentation
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testing utilities

Perfect for learning modern React development practices!
