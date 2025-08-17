import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Lightbulb,
  Recycle,
  TreePine,
  Zap,
  Home,
  Building,
  Plane,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "🌱 Hello! I'm your DigiGreen waste management assistant. I can help you with waste sorting, composting, upcycling ideas, and finding the best ways to reduce your environmental impact. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (hasInteracted) {
      scrollToBottom();
    }
  }, [messages, hasInteracted]);

  // 🔹 Call Python backend
  const getBotResponse = async (message) => {
    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (data.reply) {
        return data.reply;
      } else {
        return "⚠️ Sorry, something went wrong with the server.";
      }
    } catch (err) {
      return "⚠️ Error connecting to backend.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    setHasInteracted(true);

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    const botReply = await getBotResponse(inputMessage);

    const botResponse = {
      id: messages.length + 2,
      type: "bot",
      content: botReply,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botResponse]);
    setIsTyping(false);
    setInputMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    { text: "How do I start composting at home?", icon: TreePine },
    { text: "What plastics can I recycle?", icon: Recycle },
    { text: "Creative upcycling ideas for glass jars", icon: Lightbulb },
    { text: "How to reduce food waste?", icon: UtensilsCrossed },
    { text: "Where to recycle electronics?", icon: Zap },
    { text: "Best practices for paper recycling", icon: Recycle },
  ];

  const categories = [
    { name: "Household", icon: Home, color: "bg-green-100 text-green-800" },
    { name: "Office", icon: Building, color: "bg-blue-100 text-blue-800" },
    { name: "Travel", icon: Plane, color: "bg-purple-100 text-purple-800" },
    { name: "Food Waste", icon: UtensilsCrossed, color: "bg-orange-100 text-orange-800" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex">
      {/* Sidebar */}
      <div className="hidden lg:block w-80 bg-white border-r border-green-100 p-6 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-green-900 mb-4">Quick Questions</h3>
            <div className="space-y-2">
              {quickQuestions.map((question, index) => {
                const IconComponent = question.icon;
                return (
                  <button
                    key={index}
                    className="w-full text-left justify-start h-auto p-3 hover:bg-green-50 text-green-700 rounded-md border-none bg-transparent cursor-pointer transition-colors flex items-start"
                    onClick={() => setInputMessage(question.text)}
                  >
                    <IconComponent className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{question.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-900 mb-4">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-3 rounded-lg border border-green-100 hover:bg-green-50 transition-colors cursor-pointer"
                  >
                    <IconComponent className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                      {category.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-start space-x-3">
              <Sparkles className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-green-900 mb-2">Today's Eco Tip</h4>
                <p className="text-green-700 text-sm">
                  Start a "Buy Nothing New" challenge for one month. You'll be amazed at how creative you become with
                  reusing and upcycling!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-green-100 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-900">Waste Management Assistant</h2>
              <p className="text-green-600 text-sm">Online • Ready to help with recycling, composting & more</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex items-start space-x-3 max-w-2xl ${
                  message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === "user" ? "bg-green-600" : "bg-gradient-to-r from-green-500 to-emerald-500"
                  }`}
                >
                  {message.type === "user" ? (
                    <User className="h-5 w-5 text-white" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </div>
                <div
                  className={`p-4 rounded-2xl shadow-sm ${
                    message.type === "user"
                      ? "bg-green-600 text-white rounded-br-md"
                      : "bg-white text-gray-900 rounded-bl-md border border-green-100"
                  }`}
                >
                  <div className="whitespace-pre-line text-sm leading-relaxed">{message.content}</div>
                  <div className={`text-xs mt-2 ${message.type === "user" ? "text-green-100" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-2xl">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-green-500 to-emerald-500">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-bl-md border border-green-100 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="bg-white border-t border-green-100 p-4">
          <div className="flex space-x-3">
            <input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about waste sorting, composting, recycling, or upcycling..."
              className="flex-1 px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!inputMessage.trim() || isTyping}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-green-600 mt-2 text-center">
            Get personalized advice on waste management, recycling, and sustainable living
          </p>
        </div>
      </div>
    </div>
  );
}
