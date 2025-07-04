# Contributing to Sikits

Thank you for your interest in contributing to Sikits! This document provides guidelines and information for contributors.

## 🚀 Quick Start

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/sikits.git`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/amazing-feature`
5. Make your changes
6. Run tests: `npm test`
7. Commit your changes: `git commit -m 'Add amazing feature'`
8. Push to your branch: `git push origin feature/amazing-feature`
9. Open a Pull Request

## 📋 Development Setup

### Prerequisites

- Node.js 14 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/asruldev/sikits.git
cd sikits

# Install dependencies
npm install

# Install playground dependencies
cd playground && npm install && cd ..
```

### Available Scripts

```bash
# Build the library
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Generate documentation
npm run docs

# Start development mode
npm run dev

# Build playground
npm run playground:build

# Start playground development server
npm run playground:dev
```

## 🧪 Testing

### Writing Tests

- Tests should be written in TypeScript
- Use Jest as the testing framework
- Place test files next to the source files with `.test.ts` or `.spec.ts` extension
- Aim for at least 80% code coverage

### Test Structure

```typescript
import { functionName } from '../path/to/function';

describe('functionName', () => {
  it('should handle normal cases', () => {
    expect(functionName('input')).toBe('expected');
  });

  it('should handle edge cases', () => {
    expect(functionName('')).toBe('');
  });

  it('should handle invalid input', () => {
    expect(() => functionName(null)).toThrow();
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests for specific file
npm test -- string/capitalize.test.ts

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📝 Code Style

### TypeScript

- Use TypeScript for all new code
- Provide proper type annotations
- Use interfaces for object shapes
- Prefer `const` over `let`
- Use arrow functions for consistency

### Naming Conventions

- Use camelCase for functions and variables
- Use PascalCase for types and interfaces
- Use UPPER_SNAKE_CASE for constants
- Use descriptive names that explain the purpose

### Documentation

- Add JSDoc comments for all exported functions
- Include parameter types and return types
- Provide usage examples
- Document edge cases and limitations

Example:

```typescript
/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The string with the first letter capitalized
 * @example
 * ```typescript
 * capitalize('hello world') // 'Hello world'
 * capitalize('HELLO') // 'Hello'
 * ```
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
```

## 🏗️ Adding New Functions

### Function Guidelines

1. **Single Responsibility**: Each function should do one thing well
2. **Pure Functions**: Functions should be pure when possible (no side effects)
3. **Type Safety**: Provide proper TypeScript types
4. **Error Handling**: Handle edge cases and invalid inputs gracefully
5. **Performance**: Consider performance implications
6. **Testing**: Write comprehensive tests

### File Structure

```
src/
├── string/
│   ├── functionName.ts
│   └── index.ts
├── number/
│   ├── functionName.ts
│   └── index.ts
├── array/
│   ├── functionName.ts
│   └── index.ts
├── object/
│   ├── functionName.ts
│   └── index.ts
└── index.ts
```

### Export Guidelines

1. Export functions from their respective module files
2. Re-export from the main index.ts file
3. Use named exports (not default exports)
4. Avoid naming conflicts by using aliases when necessary

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Step-by-step instructions
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Environment**: Node.js version, OS, etc.
6. **Code Example**: Minimal code to reproduce the issue

## 💡 Feature Requests

When requesting features, please include:

1. **Description**: Clear description of the feature
2. **Use Case**: Why this feature would be useful
3. **Proposed API**: How you envision the function signature
4. **Examples**: Usage examples
5. **Alternatives**: Any existing workarounds

## 🔄 Pull Request Process

1. **Fork and Clone**: Fork the repository and clone your fork
2. **Create Branch**: Create a feature branch from `main`
3. **Make Changes**: Implement your changes
4. **Test**: Run tests and ensure they pass
5. **Lint**: Run linter and fix any issues
6. **Document**: Update documentation if needed
7. **Commit**: Write clear commit messages
8. **Push**: Push your changes to your fork
9. **Pull Request**: Create a pull request with a clear description

### Pull Request Guidelines

- **Title**: Clear, descriptive title
- **Description**: Detailed description of changes
- **Tests**: Include tests for new functionality
- **Documentation**: Update README or docs if needed
- **Breaking Changes**: Clearly mark any breaking changes

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build or tool changes

Examples:
```
feat(string): add toSlug function
fix(array): handle empty arrays in unique function
docs: update README with new examples
```

## 📚 Documentation

### Updating Documentation

- Update README.md for new functions
- Add examples to the playground
- Update TypeDoc comments
- Update CHANGELOG.md for new features

### Documentation Guidelines

- Use clear, concise language
- Include code examples
- Explain parameters and return values
- Document edge cases
- Keep examples simple and practical

## 🤝 Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the project's code of conduct
- Celebrate contributions and achievements

## 📞 Getting Help

- **Issues**: Use GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub discussions for questions and ideas
- **Email**: Contact the maintainer directly if needed

## 🙏 Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- GitHub contributors page
- Project documentation

Thank you for contributing to Sikits! 🚀 