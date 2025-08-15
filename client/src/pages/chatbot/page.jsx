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

} from "lucide-react"
>>>>>>> 082f4526c731f59d70b2cff66452c3d89814260f

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "🌱 Hello! I'm your DigiGreen waste management assistant. I can help you with waste sorting, composting, upcycling ideas, and finding the best ways to reduce your environmental impact. What would you like to know?",
      timestamp: new Date(),
    },
<<<<<<< HEAD
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);
=======
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
>>>>>>> 082f4526c731f59d70b2cff66452c3d89814260f

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Only scroll to bottom if user has interacted (sent a message)
    if (hasInteracted) {
      scrollToBottom();
    }
  }, [messages, hasInteracted]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

<<<<<<< HEAD
    // Mark that user has interacted
    setHasInteracted(true);

=======
>>>>>>> 082f4526c731f59d70b2cff66452c3d89814260f
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        content: getBotResponse(inputMessage),
        timestamp: new Date(),
        category: getBotCategory(inputMessage),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);

    setInputMessage("");
  };

  const getBotResponse = (message) => {
<<<<<<< HEAD
    const lowerMessage = message.toLowerCase();
=======
    const lowerMessage = message.toLowerCase()
>>>>>>> 082f4526c731f59d70b2cff66452c3d89814260f

    if (lowerMessage.includes("plastic") || lowerMessage.includes("bottle")) {
      return "🔄 Great question about plastic! Here's what you need to know:\n\n• **PET bottles (#1)**: Rinse thoroughly, remove caps, and place in recycling bin\n• **HDPE containers (#2)**: Excellent for recycling - clean and recycle\n• **Other plastics**: Check the number on the bottom - 1, 2, and 5 are most recyclable\n\n💡 **Pro tip**: Reuse plastic containers for storage before recycling!";
    } else if (lowerMessage.includes("compost") || lowerMessage.includes("organic")) {
      return "🌱 Composting is fantastic for the environment! Here's how to get started:\n\n**Green materials (nitrogen-rich):**\n• Fruit and vegetable scraps\n• Coffee grounds and tea bags\n• Fresh grass clippings\n\n**Brown materials (carbon-rich):**\n• Dry leaves\n• Paper and cardboard\n• Sawdust\n\n**Avoid**: Meat, dairy, oils, and pet waste\n\n🏠 Start with a simple bin in your backyard or try indoor worm composting!";
    } else if (lowerMessage.includes("upcycl") || lowerMessage.includes("reuse")) {
      return "♻️ Upcycling is creative and eco-friendly! Here are some popular ideas:\n\n**Glass jars**: Storage containers, planters, candle holders\n**Old t-shirts**: Cleaning rags, tote bags, plant ties\n**Cardboard boxes**: Organizers, kids' playhouses, seedling trays\n**Wine corks**: Drawer pulls, plant markers, trivets\n\n🎨 **Challenge**: Before throwing anything away, ask 'How can I give this a second life?'";
    } else if (lowerMessage.includes("food waste") || lowerMessage.includes("kitchen")) {
      return "🍽️ Food waste reduction is crucial! Here's your action plan:\n\n**Prevention:**\n• Plan meals and make shopping lists\n• Store produce properly (apples with potatoes = faster spoiling!)\n• Use 'first in, first out' rotation\n\n**Creative uses:**\n• Vegetable scraps → homemade broth\n• Overripe bananas → banana bread\n• Citrus peels → natural cleaner\n\n📊 **Impact**: Reducing food waste by 50% saves the average family $1,500/year!";
    } else if (lowerMessage.includes("electronic") || lowerMessage.includes("e-waste")) {
      return "📱 E-waste requires special handling! Here's what to do:\n\n**Before disposal:**\n• Back up important data\n• Factory reset devices\n• Remove batteries if possible\n\n**Where to recycle:**\n• Best Buy, Staples (accept most electronics)\n• Manufacturer take-back programs\n• Municipal e-waste collection events\n\n⚠️ **Never** put electronics in regular trash - they contain toxic materials that can harm the environment!";
    } else if (lowerMessage.includes("paper") || lowerMessage.includes("cardboard")) {
      return "📄 Paper and cardboard are highly recyclable! Guidelines:\n\n**Recyclable:**\n• Clean cardboard boxes (remove tape)\n• Office paper, newspapers, magazines\n• Paper bags and envelopes\n\n**Not recyclable:**\n• Greasy pizza boxes (compost clean parts)\n• Wax-coated paper\n• Tissues and paper towels\n\n🌳 **Impact**: Recycling one ton of paper saves 17 trees, 7,000 gallons of water, and enough energy to power a home for 6 months!";
    } else if (lowerMessage.includes("battery") || lowerMessage.includes("batteries")) {
      return "🔋 Batteries need special recycling! Here's how:\n\n**Types & disposal:**\n• **Alkaline**: Many stores accept them (Home Depot, Lowe's)\n• **Rechargeable**: Best Buy, battery retailers\n• **Car batteries**: Auto parts stores (often give credit)\n\n**Never** put batteries in regular trash - they can leak toxic chemicals!\n\n🔍 Find locations: Call2Recycle.org has a location finder for battery recycling near you.";
    } else if (lowerMessage.includes("reduce") || lowerMessage.includes("minimize")) {
      return "🎯 The best waste is no waste! Here's how to reduce:\n\n**Shopping:**\n• Bring reusable bags and containers\n• Buy in bulk to reduce packaging\n• Choose products with minimal packaging\n\n**Daily habits:**\n• Use a refillable water bottle\n• Go paperless with bills\n• Repair instead of replace when possible\n\n**The 5 R's**: Refuse → Reduce → Reuse → Recycle → Rot (compost)";
    } else {
      return "🤔 That's an interesting question! I'd love to help you with waste management. Here are some topics I can assist with:\n\n• **Recycling guidelines** for different materials\n• **Composting** setup and maintenance\n• **Upcycling ideas** for common items\n• **Food waste reduction** strategies\n• **E-waste disposal** options\n• **Zero waste** lifestyle tips\n\nWhat specific area would you like to explore? Feel free to ask about any waste-related challenge you're facing!";
    }
  };

  const getBotCategory = (message) => {
<<<<<<< HEAD
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("compost") || lowerMessage.includes("organic")) return "composting";
    if (lowerMessage.includes("plastic") || lowerMessage.includes("recycle")) return "recycling";
    if (lowerMessage.includes("upcycl") || lowerMessage.includes("reuse")) return "upcycling";
    if (lowerMessage.includes("food")) return "food-waste";
    return "general";
  };
=======
    const lowerMessage = message.toLowerCase()
    if (lowerMessage.includes("compost") || lowerMessage.includes("organic")) return "composting"
    if (lowerMessage.includes("plastic") || lowerMessage.includes("recycle")) return "recycling"
    if (lowerMessage.includes("upcycl") || lowerMessage.includes("reuse")) return "upcycling"
    if (lowerMessage.includes("food")) return "food-waste"
    return "general"
  }
>>>>>>> 082f4526c731f59d70b2cff66452c3d89814260f

  const quickQuestions = [
    { text: "How do I start composting at home?", icon: TreePine, category: "composting" },
    { text: "What plastics can I recycle?", icon: Recycle, category: "recycling" },
    { text: "Creative upcycling ideas for glass jars", icon: Lightbulb, category: "upcycling" },
    { text: "How to reduce food waste?", icon: UtensilsCrossed, category: "food-waste" },
    { text: "Where to recycle electronics?", icon: Zap, category: "e-waste" },
    { text: "Best practices for paper recycling", icon: Recycle, category: "recycling" },
  ];

  const categories = [
    { name: "Household", icon: Home, color: "bg-green-100 text-green-800" },
    { name: "Office", icon: Building, color: "bg-blue-100 text-blue-800" },
    { name: "Travel", icon: Plane, color: "bg-purple-100 text-purple-800" },
    { name: "Food Waste", icon: UtensilsCrossed, color: "bg-orange-100 text-orange-800" },
  ];

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex">
      {/* Sidebar with Quick Actions */}
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
<<<<<<< HEAD
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
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
                    <div
                      className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
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
=======

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
                      <div
                        className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-green-100 p-4">
            <div className="flex space-x-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about waste sorting, composting, recycling, or upcycling..."
                className="flex-1 border-green-200 focus:border-green-500 focus:ring-green-500"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-green-600 hover:bg-green-700 text-white px-6"
                disabled={!inputMessage.trim() || isTyping}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-green-600 mt-2 text-center">
              Get personalized advice on waste management, recycling, and sustainable living
            </p>
          </div>
>>>>>>> 082f4526c731f59d70b2cff66452c3d89814260f
        </div>
      </div>
    </div>
  );
}