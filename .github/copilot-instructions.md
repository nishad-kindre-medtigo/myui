# MyUI React Component Library - GitHub Copilot Instructions

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Repository Overview

MyUI is a modern React UI component library built with TypeScript. It provides Button and Input components with comprehensive features including icon support, multiple variants, custom styling, and complete accessibility support.

**Technology Stack**: React 18.2, TypeScript 5.2, Rollup bundler, Jest testing, Storybook documentation
**Build System**: Rollup with CommonJS and ES Module outputs
**Package Size**: ~30KB total build output (reasonable for component library)

## Bootstrap and Development Setup

**REQUIRED: Node.js 16+ and npm are prerequisites**

Install dependencies and verify setup:
```bash
npm install
# Takes ~60 seconds. NEVER CANCEL - includes 1142 packages
# Expect deprecation warnings (these are harmless)
```

Verify TypeScript compilation:
```bash
npm run typecheck
# Takes ~2 seconds, should complete with no errors
```

## Build and Test Commands

**Build the library:**
```bash
npm run build
# Takes ~3 seconds. NEVER CANCEL
# Creates: dist/index.js (CommonJS), dist/index.esm.js (ES Module), dist/index.d.ts (TypeScript definitions)
# Expected output size: ~14KB each for JS files, ~2KB for types
```

**Run all tests:**
```bash
npm test
# Takes ~3 seconds. NEVER CANCEL - Set timeout to 30+ seconds
# Runs 49 tests covering Button and Input components
# Expect: All tests pass with some deprecation warnings (harmless)
```

**Development with watch mode:**
```bash
npm run dev
# Runs Rollup in watch mode for continuous building during development
```

## Storybook Documentation

**Start Storybook development server:**
```bash
npm run storybook
# Takes ~3 seconds to start. NEVER CANCEL - Set timeout to 30+ seconds
# Starts on http://localhost:6006
# Expect: "Storybook 7.6.20 for react-vite started" message
```

**Build static Storybook:**
```bash
npm run build-storybook
# Takes ~17 seconds. NEVER CANCEL - Set timeout to 60+ seconds
# Creates storybook-static/ directory with deployable documentation
```

## Manual Validation Requirements

**CRITICAL**: After making any changes to components, ALWAYS run these validation scenarios:

### Basic Component Validation
```bash
# 1. Build and test the package
npm run build && npm test

# 2. Start Storybook and verify components render
npm run storybook
# Navigate to Button and Input stories
# Test all variants: primary, secondary, outline, error, success, warning, text, link
# Test all sizes: small, medium, large
# Test icon functionality and positioning
```

### Integration Testing Scenario
```javascript
// Test this exact code works in a React environment:
import { Button, Input } from 'myui';

// Button with all features
<Button 
  variant="success" 
  large 
  icon={<span>✓</span>}
  iconLocation="start"
  style={{borderRadius: '8px'}}
  onClick={() => console.log('Clicked')}
>
  Save Changes
</Button>

// Input with validation
<Input
  label="Email"
  type="email"
  error={true}
  errorMessage="Please enter a valid email"
  style={{borderColor: 'red'}}
/>
```

### Package Testing
```bash
# Create a test package and verify it installs correctly
npm pack
# Creates myui-*.tgz file (~13KB)
# Test installation: npm install ./myui-*.tgz in a fresh React project
```

## Component Architecture

### Button Component (`src/components/Button/`)
- **File structure**: Button.tsx (main), Button.test.tsx (49 comprehensive tests), Button.stories.tsx (Storybook), index.ts (exports)
- **Features**: 8 variants, 3 sizes, icon support, custom styling, boolean size props
- **Key props**: variant, size, small/medium/large booleans, icon, iconLocation, style, disabled, onClick

### Input Component (`src/components/Input/`)
- **File structure**: Input.tsx (main), Input.test.tsx (comprehensive tests), Input.stories.tsx, index.ts
- **Features**: Label, validation, helper text, error states, custom styling
- **Key props**: label, type, error, errorMessage, helperText, required, style, value, onChange

### Design Tokens (`src/tokens/`)
- **Colors**: Primary, secondary, error, success, warning with hover states
- **Typography**: Font sizes (sm, md, lg) and weights (normal, medium, semibold)
- **Usage**: `import { colors, typography } from 'myui'`

## Development Workflow

### Making Changes to Components
1. **ALWAYS** run tests first to ensure current state: `npm test`
2. Make your changes to component files in `src/components/`
3. Update tests in `*.test.tsx` files if adding new functionality
4. **ALWAYS** run `npm run build` after changes
5. **ALWAYS** run `npm test` to verify changes don't break existing functionality
6. **ALWAYS** test in Storybook: `npm run storybook`
7. Manually validate using the scenarios above

### File Locations for Common Tasks
- **Component logic**: `src/components/[Button|Input]/[Component].tsx`
- **Tests**: `src/components/[Button|Input]/[Component].test.tsx`
- **Stories**: `src/components/[Button|Input]/[Component].stories.tsx`
- **Design tokens**: `src/tokens/colors.ts` and `src/tokens/typography.ts`
- **Main exports**: `src/index.ts`
- **Type definitions**: Generated in `dist/index.d.ts` after build

## Important Notes

### What Works
- ✅ Build system is fast and reliable (~3 seconds)
- ✅ Test suite is comprehensive (49 tests) and fast (~3 seconds)
- ✅ Components export correctly with full TypeScript support
- ✅ Storybook provides interactive documentation
- ✅ Package installs correctly in React applications
- ✅ All component features (icons, variants, styling) function properly

### Limitations
- ❌ No linting tools configured (ESLint/Prettier not available)
- ❌ No GitHub Actions CI/CD configured yet
- ⚠️ Some deprecation warnings in tests (React Testing Library - harmless)
- ⚠️ Some deprecation warnings during npm install (harmless)

### Timeout Guidelines
- **npm install**: Use 300+ second timeout
- **npm run build**: Use 30+ second timeout
- **npm test**: Use 30+ second timeout  
- **npm run storybook**: Use 30+ second timeout
- **npm run build-storybook**: Use 60+ second timeout

### Common File Outputs
After successful build, expect these files in `dist/`:
```
dist/
├── index.js (14.1KB) - CommonJS build
├── index.esm.js (14.0KB) - ES Module build  
├── index.d.ts (2.2KB) - TypeScript definitions
└── components/ and tokens/ subdirectories
```

## Troubleshooting

### Build Fails
- Ensure `npm install` completed successfully
- Run `npm run typecheck` to verify TypeScript compilation
- Check for syntax errors in component files

### Tests Fail
- Run tests in isolation: `npm test -- --testNamePattern="Button"`
- Check for syntax errors in test files
- Verify component imports are correct

### Storybook Won't Start
- Ensure build completed: `npm run build`
- Check for port conflicts on 6006
- Verify Storybook config in `.storybook/`

### Components Don't Export
- Run `npm run build` to regenerate dist/
- Check `src/index.ts` for proper exports
- Verify component files export correctly

## Documentation
- **Comprehensive README**: Root README.md with examples and API docs
- **Detailed guides**: docs/ folder with 11 markdown files
- **Interactive demos**: Storybook stories for all components  
- **Live examples**: demo.html showcases all functionality