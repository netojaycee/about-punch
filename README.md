# PUNCH Nigeria Limited - Corporate Website

This is the official corporate website for PUNCH Nigeria Limited, built with Next.js, Tailwind CSS, and shadcn/ui.

## About The Project

This project is a modern, responsive, and performant corporate website that showcases PUNCH's history, values, team, and services. It's designed to be a central hub for information about the company, serving stakeholders, potential employees, and the general public.

### Built With

*   [Next.js](https://nextjs.org/) - The React Framework for Production
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
*   [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS.
*   [TypeScript](https://www.typescriptlang.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   npm, yarn, or pnpm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/netojaycee/about-punch.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

The project follows a feature-based folder structure within the Next.js App Router.

-   `app/`: Contains all the routes and pages.
    -   `app/[route]/(components)/`: Each page has a dedicated `(components)` folder for its specific components.
-   `components/`: Contains global and reusable components.
    -   `components/ui/`: shadcn/ui components.
    -   `components/layout/`: Global layout components like `Header` and `Footer`.
-   `lib/`: Utility functions.
-   `public/`: Static assets like images and fonts.

## Copyright

© 2025 PUNCH Nigeria Limited. All Rights Reserved.
