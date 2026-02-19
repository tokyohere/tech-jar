document.addEventListener('DOMContentLoaded', () => {
    // Inject Chatbot HTML structure if not present
    if (!document.getElementById('chatbot-container')) {
        const chatbotHTML = `
            <div id="chatbot-container">
                <div id="chat-window">
                    <div class="chat-header">
                        <h3>Tech Assistant</h3>
                        <button id="close-chat" class="close-btn">&times;</button>
                    </div>
                    <div class="chat-messages" id="chat-messages">
                        <div class="message bot">
                            Hello! 🤖 I'm your AI assistant. Ask me about our services, team, pricing, or contact info!
                        </div>
                    </div>
                    <form class="chat-input-area" id="chat-form">
                        <input type="text" id="chat-input" placeholder="Type a message..." autocomplete="off">
                        <button type="submit">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </form>
                </div>
                <!-- Robot Icon -->
                <button id="chatbot-toggle">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                        <circle cx="12" cy="5" r="2"></circle>
                        <path d="M12 7v4"></path>
                        <line x1="8" y1="16" x2="8" y2="16"></line>
                        <line x1="16" y1="16" x2="16" y2="16"></line>
                    </svg>
                </button>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    const chatToggle = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle Chat Window
    function toggleChat() {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            setTimeout(() => chatInput.focus(), 300);
        }
    }

    chatToggle.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', toggleChat);

    // Handle User Input
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';

            // Simulate bot thinking delay
            const delay = 400 + Math.random() * 400;
            setTimeout(() => {
                const response = getBotResponse(message);
                addMessage(response, 'bot');
            }, delay);
        }
    });

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);

        // Allow HTML for bot messages (for links), but text only for user (security)
        if (sender === 'bot') {
            messageDiv.innerHTML = text; // Enable HTML rendering
        } else {
            messageDiv.innerText = text;
        }

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Enhanced "Smart" Logic
    function getBotResponse(input) {
        const lowerInput = input.toLowerCase();

        // Knowledge Base
        const knowledgeBase = [
            {
                keywords: ['hello', 'hi', 'hey', 'greetings', 'sup', 'morning', 'evening'],
                response: "Hi there! 👋 How can I help you with your software needs today?"
            },
            {
                keywords: ['service', 'offer', 'product', 'what do you do', 'capabilities'],
                response: "We specialize in:<br>🔹 Mobile App Development<br>🔹 Web Development<br>🔹 AI & Machine Learning<br>🔹 Staff Augmentation<br><br>Which one interests you?"
            },
            {
                keywords: ['contact', 'email', 'phone', 'call', 'reach', 'address', 'number', 'mail', 'gmail', 'touch'],
                response: "You can reach us continuously via:<br>📧 <a href='mailto:info@techjar.com.np' style='color: var(--primary-color); text-decoration: underline;'>info@techjar.com.np</a><br>📞 <a href='tel:+9779844630173' style='color: var(--primary-color); text-decoration: underline;'>+977 9844630173</a><br>📍 Kathmandu, Nepal<br><br>Or simply fill out the <b>Contact Form</b> on this page."
            },
            {
                keywords: ['mobile', 'app', 'android', 'ios', 'flutter'],
                response: "We build top-tier mobile apps! 📱 Whether you need iOS, Android, or cross-platform solutions with Flutter, we deliver seamless experiences."
            },
            {
                keywords: ['web', 'website', 'react', 'next', 'frontend', 'backend'],
                response: "Our web solutions are scalable and modern. 💻 We use React, Next.js for frontend and Python/Node.js for backend. Do you have a project in mind?"
            },
            {
                keywords: ['ai', 'ml', 'machine learning', 'artificial', 'intelligence'],
                response: "We build intelligent systems! 🤖 From predictive analytics to automation, our AI solutions help you make data-driven decisions."
            },
            {
                keywords: ['team', 'staff', 'hire', 'developer', 'engineer'],
                response: "Our team consists of top-tier talent in the region. 🚀 You can hire our dedicated experts to work as an extension of your own team."
            },
            {
                keywords: ['price', 'cost', 'quote', 'money', 'budget', 'rate', 'pricing'],
                response: "Pricing is tailored to your specific project scope. 💰 Please use the Contact form or email us for a detailed quote."
            },
            {
                keywords: ['location', 'where', 'address', 'city', 'country'],
                response: "We are proudly based in <b>Kathmandu, Nepal 🇳🇵</b>, but we serve clients globally!"
            },
            {
                keywords: ['tech jar', 'agency', 'company', 'about you', 'who are you'],
                response: "Tech Jar is a premier software development partner. We bridge the gap between ambitious business goals and technical execution."
            },
            {
                keywords: ['thank', 'thanks', 'cool', 'great', 'awesome'],
                response: "You're welcome! Let me know if there's anything else. 😊"
            },
            {
                keywords: ['bye', 'goodbye', 'cya'],
                response: "Goodbye! Have a great day! 👋"
            }
        ];

        // Matching Logic
        for (const entry of knowledgeBase) {
            for (const keyword of entry.keywords) {
                if (lowerInput.includes(keyword)) {
                    return entry.response;
                }
            }
        }

        // Fallback
        return "I'm still learning! 🤔 For complex queries, please fill out our Contact form, and a human expert will get back to you shortly.";
    }
});
