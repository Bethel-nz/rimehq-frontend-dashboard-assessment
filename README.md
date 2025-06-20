# Dashboard Components - Responsive Course Platform

## Overview

This project features a modern, responsive dashboard for an online course platform built with Next.js, TypeScript, and Framer Motion. The approach focused on breaking down monolithic components into smaller, reusable pieces while maintaining clean code architecture. Each component is enhanced with subtle animations and micro-interactions to create an engaging user experience. The design implements a mobile-first responsive strategy with careful attention to component composition, state management, and smooth transitions. Components are organized in a modular structure under `/components/dashboard/elements/` for better maintainability and reusability.

## Known Limitations & Future Improvements

- **Data Management**: Currently uses static mock data; would benefit from integration with a proper data fetching solution (React Query/SWR)
- **Accessibility**: Could be enhanced with better ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Image optimization and lazy loading could be implemented for better performance
- **Testing**: Component and integration tests need to be added
- **State Management**: Complex state interactions would benefit from a proper state management solution (Zustand/Redux)
- **Chart Responsiveness**: The statistics chart could be more responsive on very small screens
- **Animation Performance**: Some animations could be optimized with `will-change` CSS property for better performance
- **Theme System**: A proper theme system could be implemented for dark/light mode support

## Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the dashboard.

## Key Features

- 📱 Fully responsive design (mobile-first approach)
- ✨ Smooth animations and micro-interactions with Framer Motion
- 🎨 Modern UI components with shadcn/ui
- 📊 Interactive charts and statistics
- 🔧 Modular component architecture
- 🎯 TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Language**: TypeScript
