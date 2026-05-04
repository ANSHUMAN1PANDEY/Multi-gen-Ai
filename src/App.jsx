import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import DashboardLayout from './components/DashboardLayout.jsx';

// Public pages
import Home from './pages/Home.jsx';
import Tools from './pages/Tools.jsx';
import Pricing from './pages/Pricing.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Contact from './pages/Contact.jsx';

// Dashboard Tool Pages
import DashboardOverview from './pages/Dashboard.jsx';
import EmojiConverter from './pages/tools/EmojiConverter.jsx';
import TextSummarizer from './pages/tools/TextSummarizer.jsx';
import Translator from './pages/tools/Translator.jsx';
import ChatBot from './pages/tools/ChatBot.jsx';
import AIWriter from './pages/tools/AIWriter.jsx';
import EmailGenerator from './pages/tools/EmailGenerator.jsx';
import CodeExplainer from './pages/tools/CodeExplainer.jsx';
import GrammarCorrector from './pages/tools/GrammarCorrector.jsx';
import UsernameGenerator from './pages/tools/UsernameGenerator.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />

            {/* Dashboard Sub-routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="emoji-converter" element={<EmojiConverter />} />
              <Route path="text-summarizer" element={<TextSummarizer />} />
              <Route path="translator" element={<Translator />} />
              <Route path="chatbot" element={<ChatBot />} />
              <Route path="ai-writer" element={<AIWriter />} />
              <Route path="email-generator" element={<EmailGenerator />} />
              <Route path="code-explainer" element={<CodeExplainer />} />
              <Route path="grammar-corrector" element={<GrammarCorrector />} />
              <Route path="username-generator" element={<UsernameGenerator />} />
            </Route>
          </Routes>
        </main>
        
        {/* We only render Footer for paths outside the Dashboard if we want a full vertical sidebar, 
            but keeping it inside app-container usually works fine. 
            For a more accurate internal dashboard feel, let's keep it generally visible at the bottom.
        */}
        <Routes>
          <Route path="/dashboard/*" element={null} />  {/* Hide footer on Dashboard routes for a full-height app look */}
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
