# YSSE Main Portal

A responsive and modern web portal developed as part of the **Week 8 Assignment – Tailwind CSS: Styling & Responsive Design for the YSSE Main Portal**.

The project builds upon the Week 7 React application and focuses on improving the user interface, responsive layouts, reusable components, and overall user experience using Tailwind CSS.

## Project Overview

The YSSE Main Portal is designed to present information about YSSE, its programs, notices, and community activities through a clean, accessible, and responsive interface.

The design follows a green-inspired visual identity with modern layouts, interactive elements, and responsive components.

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React Icons
- JavaScript
- CSS

## Key Features

### 1. Home Page
- Hero section with introductory content
- About YSSE preview
- Featured programs
- Latest notices
- Upcoming events section
- Call-to-action section

### 2. About Page
- Introduction to YSSE
- Mission and vision
- What We Do
- Impact and achievements section
- Get Involved section

### 3. Notices Page
- Notice cards with titles and descriptions
- Publication dates and categories
- Search and category filtering
- Read More links
- Empty-state handling

### 4. Programs Page
- Program listing with visual cards
- Program descriptions and categories
- Duration information
- Search and filtering options
- Program details navigation

### 5. Program Details Page
- Dynamic program details
- Back to Programs navigation
- Invalid program ID handling

### 6. Contact Page
- Contact form with Full Name, Email, Subject, and Message fields
- Form validation
- Success and error feedback

### 7. Responsive Design
- Responsive navigation bar
- Mobile-friendly layouts
- Responsive grids and sections
- Hover and transition effects
- Consistent footer across pages

## Installation and Setup

Follow these steps to run the project locally.

### Prerequisites
- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/wasifahoque9-create/ysse-main-portal.git
```

### 2. Navigate to the Project Folder

```bash
cd ysse-main-portal
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

### 5. Build for Production

```bash
npm run build
```

## Project Structure

```text
ysse-main-portal/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   ├── ImpactJournal.css
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Design Approach

The portal uses a forest-green, jade, and mint-inspired color palette to maintain a consistent visual identity.

The interface focuses on:
- Clean typography and visual hierarchy
- Modern card-based layouts
- Consistent spacing and alignment
- Responsive design for different screen sizes
- Interactive hover and transition effects

Tailwind CSS is used as the primary styling approach, while existing CSS is retained where needed for project-specific styling and animations.

## Important Notes

- This is a frontend project.
- The contact