# User Profile System & Gig Marketplace Implementation Plan

## 1. Project Overview
A mobile-first, data-light UI featuring a User Profile System and a Gig Marketplace.
- **Goal**: Optimize bandwidth for emerging markets.
- **Aesthetic**: Minimalist, high contrast, SVG-focused.

## 2. Technical Stack
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide-React (SVG)
- **Animation**: Framer Motion (subtle interactions)
- **UI Components**: Shadcn UI (Card, Badge, Button, Input, Progress, Avatar)
- **Notifications**: Sonner

## 3. Component Architecture

### 3.1. Main Layout (`App.tsx`)
- Navigation state management (Tab switching: Marketplace, Profile).
- Responsive container (centered mobile view on desktop).
- Bottom Navigation bar.

### 3.2. User Profile System (`ProfileView.tsx`)
- **ProfileHeader**: User name, bio, and avatar icon.
- **VerifiedSkills**: Section displaying skills as tag-based badges with "Verified" indicators.
- **PortfolioGallery**: Interactive grid of items. Since it is data-light, items will use SVG icons + project titles instead of thumbnails.

### 3.3. Gig Marketplace (`MarketplaceView.tsx`)
- **SearchBar**: Input field for filtering jobs.
- **GigFeed**: List of gig cards.
- **GigFeedCard**:
    - Title, Company, Pay, Location.
    - **Match Score Logic**: Calculated based on mock user skills.
    - Visual Match Score indicator (circular progress or prominent badge).

## 4. Design Details (Data-Light)
- **Fonts**: `system-ui, -apple-system, sans-serif` (Default in CSS).
- **Assets**: 0 PNG/JPG/WebP usage. All visual weight comes from `lucide-react` SVG paths and Tailwind utility classes.
- **Colors**: Blue/Slate theme for professional trust.

## 5. Development Steps
1. Create mock data for User Profile and Gigs.
2. Implement `BottomNav` for navigation.
3. Build `GigFeedCard` with match logic.
4. Build `MarketplaceView` with search functionality.
5. Build `ProfileView` with skills and portfolio sections.
6. Assemble everything in `App.tsx`.
7. Final polish with Sonner and Framer Motion.
