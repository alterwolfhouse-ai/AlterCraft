import React, { useState } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';

type ChatRole = 'user' | 'bot';

type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'bot',
    text: 'Hi, I am the AlterCraft concierge. This is a template assistant for now.',
  },
  {
    id: 'prompt',
    role: 'bot',
    text: 'Ask about rentals, custom builds, pricing, or timelines.',
  },
];

const templates: Array<{ match: RegExp; reply: string }> = [
  {
    match: /price|cost|quote|budget/i,
    reply: 'Pricing depends on size, material, and finish. Share your requirements and we will send a quote.',
  },
  {
    match: /rent|rental|lease/i,
    reply: 'We offer premium furniture on rent. Tell us the items, duration, and delivery city.',
  },
  {
    match: /buy|purchase|order|custom/i,
    reply: 'Custom builds start with a quick call and measurements. Share your space details.',
  },
  {
    match: /time|timeline|deliver|delivery/i,
    reply: 'Typical timelines vary by scope. Share your deadline and we will confirm feasibility.',
  },
  {
    match: /visit|consult|measure|site/i,
    reply: 'We can arrange a visit after an initial briefing. Let us know your city and availability.',
  },
  {
    match: /location|address|where|city/i,
    reply: 'Tell us your city and we will confirm service availability.',
  },
];

const fallbackReply =
  'Thanks for reaching out. This is a template assistant for now. Share details and we will follow up.';

const quickPrompts = [
  'Need a quote for a custom wardrobe',
  'Looking to rent furniture',
  'What is the delivery timeline?',
  'Can we schedule a visit?',
];

const makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const getBotReply = (input: string) => {
  const template = templates.find((item) => item.match.test(input));
  return template ? template.reply : fallbackReply;
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }
    const userMessage: ChatMessage = { id: makeId(), role: 'user', text: trimmed };
    const botMessage: ChatMessage = { id: makeId(), role: 'bot', text: getBotReply(trimmed) };
    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!draft.trim()) {
      return;
    }
    sendMessage(draft);
    setDraft('');
  };

  const handleQuickPrompt = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-panel" role="dialog" aria-label="AlterCraft concierge">
          <div className="chat-panel-header">
            <div className="chat-panel-title">
              <Sparkles className="chat-panel-icon" />
              <div>
                <div className="chat-panel-heading">AlterCraft Concierge</div>
                <div className="chat-panel-subtitle">Template chat bot</div>
              </div>
            </div>
            <button
              type="button"
              className="chat-close"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>
          </div>

          <div className="chat-panel-body">
            <div className="chat-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`chat-message ${
                    message.role === 'user' ? 'chat-message-user' : 'chat-message-bot'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="chat-quick">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="chat-quick-button"
                  onClick={() => handleQuickPrompt(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form className="chat-input-row" onSubmit={handleSubmit}>
              <input
                type="text"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Type your question here"
                className="chat-input"
              />
              <button type="submit" className="chat-send">
                Send
              </button>
            </form>
            <div className="chat-disclaimer">
              Template assistant for now. Call 6206108923 or email ranjeet@altercraft.in.
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        className="chat-trigger"
        aria-label="Open chat"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MessageCircle className="chat-trigger-icon" />
      </button>
    </div>
  );
}
