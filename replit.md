# Overview

This is an interactive hydrogen education tool built with React and Express.js featuring an animated quadrant navigation system optimized for iFrame embedding. The application presents hydrogen education content through four main quadrants (Process, Transport, Storage, Product) with smooth animations and detailed content sections. It includes integrated interactive components like the Hydrogen Rainbow visualization and Oxygen Level Chart for comprehensive educational experiences.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 using Vite as the build tool and development server. The application features an interactive quadrant-based design optimized for educational content:

- **Main Interface**: Four-quadrant grid layout (Process, Transport, Storage, Product) with animated transitions
- **Interactive Components**: Custom React components for Hydrogen Rainbow and Oxygen Level Chart
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessibility and customization
- **Styling**: Tailwind CSS with custom hydrogen-themed color variables and animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: Local React state for quadrant selection and content display
- **iFrame Optimization**: Large fonts and responsive design optimized for embedding
- **TypeScript**: Full TypeScript implementation with strict type checking

## Backend Architecture
The server-side uses Express.js with a clean separation of concerns:

- **API Layer**: Express.js with middleware for JSON parsing, CORS, and request logging
- **Storage Interface**: Abstract storage interface (`IStorage`) allowing for pluggable storage implementations
- **Current Implementation**: In-memory storage (`MemStorage`) for development with user CRUD operations
- **Database Ready**: Drizzle ORM configured with PostgreSQL schema for production deployment
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
The application is designed with database flexibility in mind:

- **Development**: In-memory storage using JavaScript Maps for rapid prototyping
- **Production Ready**: Drizzle ORM with PostgreSQL configuration already set up
- **Schema Management**: Shared schema definitions using Drizzle with Zod validation
- **Migrations**: Drizzle Kit configured for database schema migrations

## Authentication and Authorization
Basic user management infrastructure is in place:

- **User Schema**: Username/password based user model with UUID primary keys
- **Storage Interface**: User creation, retrieval by ID, and username lookup methods
- **Validation**: Zod schemas for input validation on user data

## Build and Development
The application uses modern build tooling optimized for both development and production:

- **Development**: Vite dev server with hot module replacement and React Fast Refresh
- **Production Build**: Optimized Vite build with esbuild for server bundling
- **Type Safety**: TypeScript compilation with strict checking across client, server, and shared code
- **Code Quality**: ESM modules throughout with proper import/export patterns

# Recent Changes (January 2025)

## Hydrogen Quadrant Education Tool Implementation
- **Interactive Quadrant System**: Four-quadrant layout with animated transitions between grid and detail views
- **Process Section Content**: Safe Hydrogen Practices with Ventilation, Leak Detection, and Flame Detection safety protocols
- **Transport Section Content**: Comprehensive transportation methods guide with pros/cons analysis and key factors
- **Storage Section Content**: PPE Safety Selection Tool and Hydrogen Legislation dropdown  
- **Product Section Content**: Integrated Hydrogen Rainbow and Oxygen Level Chart components
- **Process Safety**: Interactive scroll-triggered animations showcasing three key safety practices with circular image displays
- **Hydrogen Rainbow**: Interactive visualization of 12 different hydrogen production methods with color-coded pills
- **Oxygen Chart**: Interactive oxygen level visualization showing health effects at different concentrations
- **Transport Methods**: Interactive cards showing Pipeline, Road, Tankers, and Other transport methods with detailed analysis
- **PPE Safety Tool**: Interactive environmental condition selector with 3D flip cards for PPE equipment details
- **Legislation Component**: Expandable dropdown with Australian Commonwealth and State hydrogen legislation
- **Design Optimization**: iFrame-optimized layout with large, readable text and responsive design
- **Animation System**: Smooth transitions, hover effects, content reveal animations, 3D card flips, and scroll-triggered focus effects
- **Vertical Dividers**: Elegant content separation using gradient dividers instead of boxes

# External Dependencies

## Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Components**: Radix UI primitives, Lucide React icons, shadcn/ui
- **Interactive Components**: Custom HydrogenRainbow and OxygenChart components
- **Styling**: Tailwind CSS with custom hydrogen theme, class-variance-authority, clsx
- **Animations**: Custom CSS animations for smooth quadrant transitions
- **Utilities**: date-fns for date manipulation, Zod for validation

## Backend Dependencies
- **Server Framework**: Express.js with standard middleware
- **Database**: Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)
- **Validation**: Drizzle-Zod integration for schema validation
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, esbuild for bundling

## Development Tools
- **Build Tools**: Vite with React plugin, esbuild for server bundling
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Styling Tools**: PostCSS with Tailwind CSS and Autoprefixer
- **Replit Integration**: Vite plugins for Replit development environment