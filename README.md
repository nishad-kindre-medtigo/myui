# 🎨 MyUI Component Library

A simple, beginner-friendly React UI component library built with TypeScript. Perfect for learning component development and building consistent user interfaces.

## ✨ Features

- **🧩 Simple Components** - Button and Input components ready to use
- **📘 TypeScript Support** - Full type safety and IntelliSense
- **♿ Accessible** - Built with accessibility best practices
- **🧪 Well Tested** - Comprehensive test coverage
- **📚 Storybook Ready** - Interactive documentation
- **🎨 Customizable** - Easy to customize with design tokens
- **🌱 Beginner Friendly** - Extensive comments and clear code structure

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
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Click me!
      </Button>
      
      <Input 
        label="Email"
        type="email"
        placeholder="Enter your email"
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

A versatile button component with multiple variants and sizes.

```jsx
import { Button } from 'myui';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>

// With sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// With click handler
<Button onClick={() => console.log('Clicked!')}>
  Handle Click
</Button>
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content inside the button |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
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
      
      <Button type="submit" variant="primary">
        Sign In
      </Button>
    </form>
  );
}
```

### Button Grid

```jsx
import { Button } from 'myui';

function ButtonShowcase() {
  return (
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      
      <Button disabled>Disabled</Button>
      <Button onClick={() => alert('Clicked!')}>With Handler</Button>
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
