import React, { useEffect, useState, useRef } from 'react'
import MessageBubble from './MessageBubble'
import ChatInput from './ChatInput'
import { PhoneIcon, VideoIcon, InfoIcon } from 'lucide-react'
// Mock messages for the selected conversation
const getMockMessages = (conversationId) => {
    // Different messages for different conversations
    const messagesByConversation = {
        1: [
            {
                id: 1,
                text: 'Good morning! How are you today?',
                time: '10:30 AM',
                sender: 'them',
                status: 'read',
                reactions: [],
            },
            {
                id: 2,
                text: "I'm doing well, thank you. Just finalizing some details for our meeting on Friday.",
                time: '10:32 AM',
                sender: 'you',
                status: 'read',
                reactions: [],
            },
            {
                id: 3,
                text: "Perfect. I'm looking forward to our meeting on Friday.",
                time: '10:45 AM',
                sender: 'them',
                status: 'read',
                reactions: [
                    {
                        emoji: '👍',
                        user: 'you',
                    },
                ],
            },
            {
                id: 4,
                text: "Here's the restaurant I mentioned.",
                time: '10:46 AM',
                sender: 'them',
                status: 'read',
                reactions: [],
                image:
                    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop',
            },
            {
                id: 5,
                text: "It looks amazing! I've heard great things about their chef.",
                time: '10:50 AM',
                sender: 'you',
                status: 'read',
                reactions: [],
            },
        ],
        2: [
            {
                id: 1,
                text: 'The opera was magnificent. Thank you for suggesting it.',
                time: 'Yesterday, 8:30 PM',
                sender: 'them',
                status: 'delivered',
                reactions: [],
            },
            {
                id: 2,
                image:
                    'https://images.unsplash.com/photo-1580809361436-42a7ec204889?q=80&w=1374&auto=format&fit=crop',
                time: 'Yesterday, 8:32 PM',
                sender: 'them',
                status: 'delivered',
                reactions: [
                    {
                        emoji: '❤️',
                        user: 'you',
                    },
                ],
            },
            {
                id: 3,
                text: "I'm glad you enjoyed it! Would you like to attend another performance next month?",
                time: 'Yesterday, 9:15 PM',
                sender: 'them',
                status: 'delivered',
                reactions: [],
            },
        ],
        3: [
            {
                id: 1,
                text: "I've received the invitation to the charity gala.",
                time: 'Yesterday, 4:30 PM',
                sender: 'them',
                status: 'read',
                reactions: [],
            },
            {
                id: 2,
                text: 'Great! Would you like me to arrange transportation?',
                time: 'Yesterday, 4:45 PM',
                sender: 'you',
                status: 'read',
                reactions: [],
            },
            {
                id: 3,
                text: 'That would be wonderful. Thank you for your thoughtfulness.',
                time: 'Yesterday, 5:00 PM',
                sender: 'them',
                status: 'read',
                reactions: [
                    {
                        emoji: '🙏',
                        user: 'you',
                    },
                ],
            },
            {
                id: 4,
                text: "I've sent you the details for the charity gala.",
                time: 'Yesterday, 5:15 PM',
                sender: 'you',
                status: 'read',
                reactions: [],
            },
        ],
    }
    return messagesByConversation[conversationId] || []
}
const ChatThread = ({ conversation }) => {
    const [messages, setMessages] = useState([])
    const messagesEndRef = useRef(null)
    useEffect(() => {
        // Load messages when conversation changes
        setMessages(getMockMessages(conversation.id))
    }, [conversation])
    useEffect(() => {
        // Scroll to bottom when messages change
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth',
        })
    }, [messages])
    const handleSendMessage = (text, image = null) => {
        const newMessage = {
            id: messages.length + 1,
            text: text,
            image: image,
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            }),
            sender: 'you',
            status: 'sent',
            reactions: [],
        }
        setMessages([...messages, newMessage])
        // Simulate message being delivered
        setTimeout(() => {
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === newMessage.id
                        ? {
                            ...msg,
                            status: 'delivered',
                        }
                        : msg,
                ),
            )
        }, 1000)
        // Simulate message being read
        setTimeout(() => {
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === newMessage.id
                        ? {
                            ...msg,
                            status: 'read',
                        }
                        : msg,
                ),
            )
        }, 2000)
    }
    const handleReaction = (messageId, emoji) => {
        setMessages((prev) =>
            prev.map((msg) => {
                if (msg.id === messageId) {
                    // Check if reaction already exists
                    const existingReaction = msg.reactions.find(
                        (r) => r.user === 'you' && r.emoji === emoji,
                    )
                    if (existingReaction) {
                        // Remove reaction if it exists
                        return {
                            ...msg,
                            reactions: msg.reactions.filter(
                                (r) => !(r.user === 'you' && r.emoji === emoji),
                            ),
                        }
                    } else {
                        // Add new reaction
                        return {
                            ...msg,
                            reactions: [
                                ...msg.reactions.filter((r) => r.user !== 'you'),
                                {
                                    emoji,
                                    user: 'you',
                                },
                            ],
                        }
                    }
                }
                return msg
            }),
        )
    }
    return (
        <>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <div className="flex items-center">
                    <img
                        src={conversation.user.avatar}
                        alt={conversation.user.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                        <div className="flex items-center">
                            <h3 className="font-medium text-white">
                                {conversation.user.name}
                            </h3>
                            {conversation.user.verified && (
                                <span
                                    className="ml-1 inline-block w-4 h-4 bg-primary rounded-full text-dark text-xs items-center justify-center"
                                    title="Verified"
                                >
                                    ✓
                                </span>
                            )}
                        </div>
                        <p className="text-xs text-gray-400">
                            {conversation.user.online ? 'Online' : 'Offline'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-400 hover:text-primary p-2 rounded-full hover:bg-dark transition-colors">
                        <PhoneIcon size={20} />
                    </button>
                    <button className="text-gray-400 hover:text-primary p-2 rounded-full hover:bg-dark transition-colors">
                        <VideoIcon size={20} />
                    </button>
                    <button className="text-gray-400 hover:text-primary p-2 rounded-full hover:bg-dark transition-colors">
                        <InfoIcon size={20} />
                    </button>
                </div>
            </div>
            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 bg-gradient-to-b from-dark to-dark-light">
                <div className="space-y-4">
                    {messages.map((message) => (
                        <MessageBubble
                            key={message.id}
                            message={message}
                            onReaction={(emoji) => handleReaction(message.id, emoji)}
                        />
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            {/* Input Area */}
            <ChatInput onSendMessage={handleSendMessage} />
        </>
    )
}
export default ChatThread
