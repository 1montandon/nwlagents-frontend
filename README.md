# NLW Agents - Frontend 🤖

## Description

**NLW Agents Frontend** is a modern React-based web application developed during **Next Level Week (NLW) Agents** by Rocketseat. This interactive platform allows users to create virtual rooms where they can ask questions and receive AI-powered responses. The application features voice recording capabilities and real-time question management, providing an intuitive interface for AI-assisted conversations.

The project demonstrates modern frontend development practices with TypeScript, React 19, and a comprehensive set of tools for building scalable and maintainable web applications.

## Features ✨

- 🏠 **Room Management**: Create and manage virtual question rooms
- 🎙️ **Voice Recording**: Record audio questions directly in the browser
- ❓ **Question System**: Submit and view questions with AI responses
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS
- 🎨 **Modern UI Components**: Built with Radix UI primitives
- ⚡ **Real-time Updates**: Powered by React Query for efficient data management
- 🔄 **Form Validation**: Robust form handling with React Hook Form and Zod
- 🎯 **Type Safety**: Full TypeScript implementation

## Technologies Used 🛠️

### Core Technologies

- **React 19** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variant management

### State Management & Data Fetching

- **TanStack React Query** - Server state management
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Development Tools

- **Biome** - Linter and formatter
- **Day.js** - Date manipulation library
- **Ultracite** - Development utilities

## Installation 📦

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- A modern web browser with MediaRecorder API support

### Step-by-step Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/1montandon/nwlagents-frontend.git
   cd nwlagents-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application.

## Usage 🚀

### Creating a Room

1. **Access the Home Page**: Open the application in your browser
2. **Fill the Room Form**:
   - Enter a room name (minimum 3 characters)
   - Add an optional description
   - Click "Criar Sala" (Create Room)
3. **View Active Rooms**: All created rooms appear in the room list

### Asking Questions

1. **Enter a Room**: Click on any room from the list
2. **Submit Questions**: Use the question form to ask anything
3. **View Responses**: Questions and AI responses appear in real-time

### Recording Audio

1. **Navigate to Audio Page**: Click the "Gravar Áudio" (Record Audio) button in any room
2. **Start Recording**: Click the record button to begin voice capture
3. **Stop Recording**: Click stop when finished
4. **Upload**: Audio is automatically processed and sent to the backend

### Navigation

- **Home Button**: Return to the main page from any room
- **Room Navigation**: Switch between different rooms
- **Audio Recording**: Access voice recording features

## Configuration ⚙️

### Environment Variables

Create a `.env.local` file in the root directory for any environment-specific configurations:

```env
# API Base URL (if different from localhost:3333)
VITE_API_URL=http://localhost:3333

# Other environment variables as needed
```

### Backend Integration

This frontend is designed to work with the NLW Agents backend API. Ensure your backend server is running on `http://localhost:3333` or update the API endpoints in the HTTP service files located in `src/http/`.

### Browser Requirements

- **Modern Browser**: Chrome, Firefox, Safari, or Edge (latest versions)
- **MediaRecorder API**: Required for audio recording functionality
- **JavaScript Enabled**: Essential for React application functionality

## Project Structure 📁

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, forms)
│   ├── create-room-formx.tsx
│   ├── question-form.tsx
│   └── ...
├── http/               # API integration layer
│   ├── types/          # TypeScript type definitions
│   └── use-*.ts        # React Query hooks
├── lib/                # Utility functions
├── pages/              # Route components
│   ├── create-room.tsx
│   ├── room.tsx
│   └── record-room-audio.tsx
└── app.tsx             # Main application component
```

## Contributing 🤝

We welcome contributions to the NLW Agents Frontend! Here's how you can help:

### Reporting Bugs

1. **Search Existing Issues**: Check if the bug has already been reported
2. **Create Detailed Report**: Include steps to reproduce, expected behavior, and screenshots
3. **Use Issue Templates**: Follow the provided templates for consistency

### Suggesting Features

1. **Check Roadmap**: Review existing feature requests
2. **Provide Context**: Explain the use case and potential impact
3. **Be Specific**: Include mockups or detailed descriptions when possible

### Submitting Pull Requests

1. **Fork the Repository**: Create your own copy of the project
2. **Create Feature Branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make Changes**: Implement your feature or fix
4. **Follow Code Standards**:
   - Use TypeScript for type safety
   - Follow existing code style
   - Run linting: `npm run lint`
5. **Test Thoroughly**: Ensure all functionality works as expected
6. **Commit Changes**: Use conventional commit messages
7. **Push to Branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Open Pull Request**: Provide clear description of changes

### Development Guidelines

- **Code Style**: Follow the existing patterns and use Biome for linting
- **TypeScript**: Maintain strict type checking
- **Components**: Create reusable, well-documented components
- **Testing**: Add tests for new features when possible
- **Performance**: Consider performance implications of changes

## License 📄

This project was developed as part of the **Next Level Week (NLW) Agents** educational event by **Rocketseat**.

The code is available for educational purposes and personal learning. Please check with Rocketseat for specific licensing terms regarding commercial use or redistribution.

## Contact/Support 💬

### Getting Help

- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/1montandon/nwlagents-frontend/issues)
- **Discussions**: Join community discussions in the repository
- **Documentation**: Check this README and inline code comments

### Rocketseat Community

- **Discord**: Join the [Rocketseat Discord community](https://discord.gg/rocketseat)
- **Website**: Visit [Rocketseat.com.br](https://rocketseat.com.br)
- **Social Media**: Follow [@rocketseat](https://twitter.com/rocketseat) for updates

### Project Maintainer

- **GitHub**: [@1montandon](https://github.com/1montandon)
- **Email**: Contact through GitHub for project-related inquiries

---

## Acknowledgments 🙏

- **Rocketseat Team**: For creating the NLW Agents event and educational content
- **Community**: Fellow developers who participated in NLW Agents
- **Open Source**: All the amazing libraries and tools that make this project possible

---

**Built with ❤️ during Next Level Week Agents by Rocketseat**

_Ready to take your development skills to the next level? Join the next NLW event at [Rocketseat](https://rocketseat.com.br)!_
