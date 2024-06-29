# BCLabs_Assignment
[Live Demo](https://tewodros-bclabs-assignment.vercel.app/)

An assignment given by BCLabs.



## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- You must have  Node.js version >= v18.17.0 installed on your machine.
- Set up a database and configure the connection URL (`DATABASE_URL`) in your environment variables.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Environment Setup

Create a `.env` file in the root directory and configure your PostgreSQL database URL:

```
DATABASE_URL=" "
```

### Database Seeding

To seed the database with initial data, run the following command:

```bash
npm run seed
# or
yarn seed
# or
pnpm seed
# or
bun seed
```

This command will populate your PostgreSQL database using Prisma with predefined data. Make sure your database is properly configured and accessible before running this command.

### Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page will auto-updates as you edit the file.

### Recommended Scripts

This project uses TypeScript with ESLint and Prettier for clean code architecture and formatting. To run TypeScript, linting, and start the development server in one command, use:

```bash
npm run dev
```


