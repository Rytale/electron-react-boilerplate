# Renderer Process Documentation

This directory contains the frontend application code for the Electron app. The application is built with React, TypeScript, and React Router.

## Directory Structure

```
renderer/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout component with navigation
│   └── Navigation/     # Navigation bar component
│
├── pages/              # Application pages/routes
│   ├── Home/          # Home page component
│   ├── About/         # About page component
│   └── NotFound/      # 404 page component
│
├── styles/            # Global styles and CSS modules
│   ├── global.css    # Global styles
│   └── loading.css   # Loading state styles
│
├── constants/         # Constants and configuration
│   └── routes.ts     # Route definitions
│
├── types/            # TypeScript type definitions
│   └── common.ts     # Shared interfaces and types
│
├── App.tsx           # Main application component
└── index.tsx         # Application entry point
```

## Key Features

- Multi-page support with React Router
- Shared layout with navigation
- TypeScript for type safety
- CSS modules for component styling
- Loading states with React Suspense
- 404 page handling
- Consistent routing with route constants

## Component Organization

Each component and page follows a similar structure:
- Component file (TSX)
- Styles file (CSS)
- Types (if needed)
- Tests (if needed)

## Styling Approach

- Global styles in `styles/`
- Component-specific styles alongside components
- CSS modules for scoped styling
- Consistent naming conventions

## Type Safety

- TypeScript for all components
- Shared interfaces in `types/`
- Strict type checking enabled
- Route type definitions

## Navigation

- React Router for routing
- MemoryRouter for Electron
- Centralized route definitions
- Active link highlighting

## Best Practices

- Component composition
- Proper type definitions
- Consistent file structure
- Clear naming conventions
- Modular CSS
- Error boundaries
- Loading states
