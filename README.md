# Quantum - AI-Powered PDF Chat Application

Quantum is a modern web application that allows users to upload PDF documents and have intelligent conversations with them using AI. Built with Next.js, TypeScript, and a comprehensive tech stack, Quantum provides an intuitive interface for document analysis and chat-based interactions.

## 🚀 Features

- **PDF Upload & Processing**: Upload PDF documents and have them processed for AI analysis
- **AI-Powered Chat**: Ask questions about your documents and get intelligent responses
- **User Authentication**: Secure authentication using Kinde Auth
- **Subscription Management**: Pro plan with Stripe integration
- **Real-time Chat Interface**: Interactive chat with your documents
- **File Management**: Upload, view, and delete your documents
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI
- **Type Safety**: Full TypeScript support with tRPC for type-safe APIs

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form handling
- **React Query** - Data fetching and caching

### Backend & Database
- **tRPC** - End-to-end typesafe APIs
- **Prisma** - Database ORM
- **MySQL** - Database (configurable)
- **Next.js API Routes** - Server-side API endpoints

### AI & External Services
- **OpenAI** - AI chat capabilities
- **Pinecone** - Vector database for document embeddings
- **LangChain** - AI framework integration
- **UploadThing** - File upload service

### Authentication & Payments
- **Kinde Auth** - Authentication provider
- **Stripe** - Payment processing and subscriptions

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Prisma Studio** - Database management

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quantum
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run studio` - Open Prisma Studio
- `npm run local` - Kill port 3000 and start dev server

## 🔧 Configuration

### Database
The application uses Prisma with MySQL. You can configure the database connection in `prisma/schema.prisma`.

### Authentication
Kinde Auth is used for authentication.

### File Upload
UploadThing handles file uploads.

### AI Integration
- **OpenAI**: Configure your OpenAI API key for chat functionality
- **Pinecone**: Set up Pinecone for vector storage of document embeddings

## 🎯 Usage

1. **Sign Up/Login**: Create an account or sign in using Kinde Auth
2. **Upload PDF**: Upload a PDF document from your dashboard
3. **Start Chatting**: Click on your uploaded document to start a conversation
4. **Ask Questions**: Ask questions about your document and get AI-powered responses

## 💳 Subscription Plans

- **Free Plan**: Basic features with limited usage
- **Pro Plan**: Advanced features with higher limits (managed via Stripe)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [Issues](https://github.com/your-repo/quantum/issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

Built with ❤️ using Next.js, TypeScript, and modern web technologies.