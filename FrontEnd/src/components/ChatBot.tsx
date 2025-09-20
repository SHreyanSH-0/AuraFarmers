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
      content: "Hello! I'm your FarmQuest AI assistant. I can help you with sustainable farming practices, technical questions about the platform, or answer any agricultural queries you have. How can I assist you today?",
      timestamp: new Date(),
      category: 'general',
    },
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

  // Responses
  const farmingResponses = {
    'organic farming': 'Organic farming focuses on natural methods without synthetic chemicals. Start with composting, use neem oil for pest control, and practice crop rotation.',
    'water conservation': 'Try drip irrigation, mulching, and rainwater harvesting.',
    'soil health': 'Test soil pH, add organic matter, use cover cropping, avoid over-tilling.',
  };

  const technicalResponses = {
    'technical stack': 'Frontend: React 18 + TypeScript, Tailwind CSS, Vite. Backend: Supabase + PostgreSQL. Hosting: Vercel/Netlify.',
    'database': 'We use PostgreSQL with Supabase and Row-Level Security policies.',
    'api': 'Our API is RESTful with Supabase authentication and real-time subscriptions.',
  };

  const generateResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(farmingResponses)) {
      if (message.includes(key)) return { content: response, category: 'farming' as const };
    }
    for (const [key, response] of Object.entries(technicalResponses)) {
      if (message.includes(key)) return { content: response, category: 'technical' as const };
    }
    return {
      content: 'I can help you with farming practices, technical questions, or platform features like missions and badges!',
      category: 'general' as const,
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(userMessage.content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.content,
        timestamp: new Date(),
        category: response.category,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-xl">
          <div className="flex items-center space-x-3">
            <Bot className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">FarmQuest AI Assistant</h3>
              <p className="text-sm text-green-100">Always here to help</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded-lg">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-[80%]">
                <div
                  className={`rounded-lg p-3 ${
                    m.type === 'user' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{m.content}</p>
                </div>
              </div>
            </div>
          ))}
          {isTyping && <p className="text-gray-500 text-sm">AI is typing...</p>}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask something..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-green-600 text-white px-3 py-2 rounded-lg"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
