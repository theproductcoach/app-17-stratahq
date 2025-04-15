# StrataHQ - Strata Management Portal

StrataHQ is a modern web application built with Next.js and Tailwind CSS that helps strata committees manage their properties efficiently. It provides a centralized platform for lot owners, committee members, and residents to access important information and resources.

## Features

### 📋 Lot Directory

- Complete listing of all units/lots
- Owner and resident information
- Status tracking (owner-occupied or tenanted)
- Responsive table view with sorting capabilities

### 👥 Committee Management

- Committee member profiles and contact information
- Role-based organization (Chairperson, Secretary, Treasurer, etc.)
- Direct email links to committee members

### 📢 Noticeboard

- Important announcements and updates
- Priority-based categorization
- Audience targeting (all residents or owners only)
- Date-stamped notifications

### 📅 Meetings

- Schedule of upcoming meetings
- Meeting minutes archive
- AGM documentation
- Calendar integration

### 📄 Documents

- Strata plans and bylaws
- Forms and templates
- Meeting minutes
- Financial reports

### 🔧 Maintenance

- Maintenance request tracking
- Service schedules
- Contractor information
- Work order management

## Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Typography**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-org/stratahq.git
   cd stratahq
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory:

   ```env
   # Add any required environment variables here
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
stratahq/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── committee/      # Committee member management
│   │   ├── documents/      # Document repository
│   │   ├── lots/          # Lot directory
│   │   ├── maintenance/    # Maintenance management
│   │   ├── meetings/      # Meeting schedules and minutes
│   │   └── noticeboard/   # Announcements and notices
│   └── components/         # Reusable UI components
├── public/                 # Static assets
│   └── data/              # JSON data files
└── package.json           # Project dependencies
```

## Development

### Code Style

- Uses ESLint for JavaScript/TypeScript linting
- Prettier for code formatting
- TypeScript for type safety

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running Tests

```bash
npm run test
# or
yarn test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please contact the development team or raise an issue in the GitHub repository.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for hosting and deployment
- All contributors who have helped shape this project
