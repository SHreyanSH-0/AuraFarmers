import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Lightbulb, Code, Leaf, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  category?: 'farming' | 'technical' | 'general';
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your FarmQuest AI assistant. I can help you with sustainable farming practices, technical questions about the platform, or answer any agricultural queries you have. How can I assist you today?',
      timestamp: new Date(),
      category: 'general'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const farmingResponses = {
    'organic farming': 'Organic farming focuses on natural methods without synthetic chemicals. Start with composting, use neem oil for pest control, and practice crop rotation. Our platform has specific missions for organic transition!',
    'water conservation': 'Water conservation is crucial for sustainable farming. Try drip irrigation, mulching, and rainwater harvesting. Check out our Water Conservation Mission for step-by-step guidance.',
    'soil health': 'Healthy soil is the foundation of sustainable farming. Test your soil pH, add organic matter, practice cover cropping, and avoid over-tilling. Our Soil Health Booster mission can guide you through this process.',
    'pest control': 'Integrated Pest Management (IPM) combines biological, cultural, and mechanical methods. Use beneficial insects, companion planting, and organic pesticides like neem oil. Avoid broad-spectrum chemicals.',
    'crop rotation': 'Crop rotation prevents soil depletion and reduces pest buildup. Rotate between nitrogen-fixing legumes, heavy feeders like corn, and light feeders like herbs. Plan 3-4 year rotation cycles.',
    'composting': 'Composting turns organic waste into nutrient-rich soil amendment. Mix green materials (nitrogen) with brown materials (carbon) in a 3:1 ratio. Turn regularly and maintain moisture.',
    'intercropping': 'Intercropping maximizes land use and improves soil health. Plant complementary crops together - like corn with beans and squash (Three Sisters method). This reduces pests and increases yield.',
    'mulching': 'Mulching conserves water, suppresses weeds, and improves soil. Use organic materials like straw, leaves, or grass clippings. Apply 2-4 inches around plants, keeping mulch away from stems.'
  };

  const technicalResponses = {
    'technical stack': `Our platform uses modern web technologies:

**Frontend:**
- React 18 with TypeScript for type safety
- Tailwind CSS for responsive design
- Lucide React for consistent icons
- Vite for fast development and builds

**Backend:**
- Supabase for database and authentication
- PostgreSQL for robust data storage
- Real-time subscriptions for live updates
- Row-level security for data protection

**Features:**
- Progressive Web App (PWA) capabilities
- Mobile-first responsive design
- Offline functionality with service workers
- Real-time community features

**Deployment:**
- Vercel/Netlify for frontend hosting
- Supabase for backend infrastructure
- CI/CD with GitHub Actions
- CDN for global performance`,

    'database': 'We use PostgreSQL with Supabase for our database. It includes tables for users, missions, badges, community posts, and progress tracking. All data is secured with Row-Level Security (RLS) policies.',
    
    'api': 'Our API follows RESTful principles with endpoints for user management, missions, community features, and real-time updates. We use Supabase for authentication and real-time subscriptions.',
    
    'mobile': 'The platform is built as a Progressive Web App (PWA) with mobile-first design. It works offline, can be installed on mobile devices, and provides native app-like experience.',
    
    'security': 'We implement multiple security layers: Supabase authentication, Row-Level Security policies, input validation, rate limiting, and HTTPS encryption for all communications.',
    
    'performance': 'Performance optimizations include code splitting, lazy loading, image optimization, caching strategies, and CDN usage for global content delivery.'
  };

  const generateResponse = (userMessage: string): { content: string; category: 'farming' | 'technical' | 'general' } => {
    const message = userMessage.toLowerCase();
    
    // Check for farming-related queries
    for (const [key, response] of Object.entries(farmingResponses)) {
      if (message.includes(key)) {
        return { content: response, category: 'farming' };
      }
    }
    
    // Check for technical queries
    for (const [key, response] of Object.entries(technicalResponses)) {
      if (message.includes(key) || message.includes('tech') || message.includes('code') || message.includes('development')) {
        return { content: response, category: 'technical' };
      }
    }
    
    // Check for platform-specific queries
    if (message.includes('mission') || message.includes('quest')) {
      return {
        content: 'Missions are sustainable farming challenges tailored to your crop, location, and farm size. Complete missions to earn points, badges, and improve your sustainability score. Check the Missions tab to see available challenges!',
        category: 'general'
      };
    }
    
    if (message.includes('badge') || message.includes('achievement')) {
      return {
        content: 'Badges are achievements you earn by completing missions and adopting sustainable practices. Each badge represents mastery of specific farming techniques. View your earned badges in your Profile section!',
        category: 'general'
      };
    }
    
    if (message.includes('leaderboard') || message.includes('rank')) {
      return {
        content: 'The leaderboard shows how you rank against other farmers in your community based on sustainability score, completed missions, and earned badges. Compete with fellow farmers and climb the ranks!',
        category: 'general'
      };
    }
    
    if (message.includes('community')) {
      return {
        content: 'The Community Hub lets you share your farming successes, ask questions, and learn from other farmers. Post photos of your progress, celebrate achievements, and build connections with sustainable farmers!',
        category: 'general'
      };
    }
    
    // Default response
    return {
      content: 'I can help you with sustainable farming practices, technical questions about our platform, or general agricultural guidance. Try asking about organic farming, water conservation, soil health, or our platform features like missions and badges!',
      category: 'general'
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.content,
        timestamp: new Date(),
        category: response.category
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    { text: 'How to start organic farming?', icon: Leaf },
    { text: 'Water conservation tips', icon: MessageSquare },
    { text: 'Technical stack details', icon: Code },
    { text: 'Platform features', icon: Lightbulb }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">FarmQuest AI Assistant</h3>
              <p className="text-sm text-green-100">Always here to help</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-green-600 text-white' 
                    : message.category === 'farming' 
                      ? 'bg-green-100 text-green-600'
                      : message.category === 'technical'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-600'
                }`}>
                  {message.type === 'user' ? (
                    <User className="h-4 w-4" />
                  ) : message.category === 'farming' ? (
                    <Leaf className="h-4 w-4" />
                  ) : message.category === 'technical' ? (
                    <Code className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <div className={`rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-gray-600" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="p-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickQuestions.map((question, index) => {
                const Icon = question.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setInputValue(question.text)}
                    className="flex items-center space-x-2 p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left"
                  >
                    <Icon className="h-3 w-3 text-gray-600" />
                    <span className="text-gray-700">{question.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about farming practices or technical details..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;