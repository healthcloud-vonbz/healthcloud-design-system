# Shadcn Design System

A customizable design system built with React, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Fully customizable components
- 🌙 Dark mode support
- 🧩 Modular architecture
- 📦 Easy to install and use
- 🔍 TypeScript support
- 🎯 Accessible components
- 📚 Comprehensive documentation
- 🧪 Storybook integration

## Installation

```bash
npm install shadcn-design-system
```

## Usage

```jsx
import { Button, ThemeProvider } from 'shadcn-design-system';

function App() {
  return (
    <ThemeProvider>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
```

## Documentation

Comprehensive documentation for each component is available in the `src/docs` directory:

- [Input Documentation](src/docs/input.mdx)
- [Combobox Documentation](src/docs/combobox.mdx)
- [Modal Documentation](src/docs/modal.mdx)

## Storybook

This design system includes Storybook for interactive component development and documentation.

To run Storybook:

```bash
npm run storybook
```

This will start the Storybook server at http://localhost:6006.

## Available Components

- Accordion
- Alert
- Alert Dialog
- Aspect Ratio
- Avatar
- Badge
- Button
- Calendar
- Card
- Checkbox
- Collapsible
- Command
- Context Menu
- Dialog
- Dropdown Menu
- Form
- Hover Card
- Input
- Label
- Menubar
- Navigation Menu
- Popover
- Progress
- Radio Group
- Scroll Area
- Select
- Separator
- Sheet
- Skeleton
- Slider
- Switch
- Tabs
- Textarea
- Toast
- Toggle
- Tooltip

## Theming

The design system supports light and dark modes out of the box. You can customize the theme by modifying your Tailwind CSS configuration.

```jsx
import { ThemeProvider } from 'shadcn-design-system';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

## Publishing to npm

To publish a new version to npm:

1. Make sure you're logged in to npm:
   ```bash
   npm login
   ```

2. Choose one of the following commands based on the type of update:
   ```bash
   # For patch updates (bug fixes)
   npm run publish:patch
   
   # For minor updates (new features, backward compatible)
   npm run publish:minor
   
   # For major updates (breaking changes)
   npm run publish:major
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT