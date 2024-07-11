# MUD-App: Maps, Users, and Deliveries Application

## Overview

MUD-App is a Next.js application designed to manage maps, users, and deliveries. It provides a robust platform for tracking and coordinating delivery operations with an intuitive user interface and powerful mapping capabilities.

## Features

- Interactive maps using Leaflet
- User authentication and management
- Delivery tracking and routing
- Responsive design for both desktop and mobile use

## Tech Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Jotai
- **Form Handling**: React Hook Form with Zod validation
- **API Requests**: Axios, TanStack Query
- **UI Components**: Shadcn/UI
- **Mapping**: Leaflet, React Leaflet
- **Authentication**: Backend with cookies.js
- **Image Handling**: Next Cloudinary

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Run the development server:
   ```
   pnpm dev
   ```
4. Open [http://localhost:3001](http://localhost:3001) in your browser

## Scripts

- `pnpm dev`: Runs the app in development mode
- `pnpm build`: Builds the app for production
- `pnpm start`: Runs the built app in production mode
- `pnpm lint`: Runs the linter

## Testing Strategy

I am implementing a comprehensive testing strategy using Cypress for end-to-end testing. This will ensure the reliability and stability of our application as we continue to develop and scale.

### Cypress Integration (TODO)

- [ ] Set up Cypress for end-to-end testing
- [ ] Write tests for critical user flows
- [ ] Implement component testing for reusable UI elements

## Continuous Integration and Deployment

I am setting up a robust CI/CD pipeline using GitHub Actions to automate our build, test, and deployment processes.

### GitHub Actions (TODO)

- [ ] Implement automated builds on push and pull requests
- [ ] Run Cypress tests as part of the CI pipeline
- [ ] Set up automated deployments to staging and production environments

## Future Enhancements

- Implement real-time updates for delivery tracking
- Add performance optimizations for map rendering
- Enhance accessibility features
- Implement internationalization (i18n) support

## License

[MIT License](LICENSE)
