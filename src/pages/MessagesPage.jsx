import React, { useState } from 'react'
import ConversationList from '../components/messages/ConversationList'
import ChatThread from '../components/messages/ChatThread'
import { SearchIcon } from 'lucide-react'
import Header from '../components/basic/Header'
// Mock data for conversations
const mockConversations = [
    {
        id: 1,
        user: {
            id: 101,
            name: 'Alexander',
            avatar:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop',
            online: true,
            verified: true,
        },
        lastMessage: {
            text: "I'm looking forward to our meeting on Friday.",
            time: '10:45 AM',
            isRead: true,
            sender: 'them',
        },
        unreadCount: 0,
    },
    {
        id: 2,
        user: {
            id: 102,
            name: 'Michael',
            avatar:
                'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop',
            online: false,
            verified: true,
        },
        lastMessage: {
            text: 'The opera was magnificent. Thank you for suggesting it.',
            time: 'Yesterday',
            isRead: false,
            sender: 'them',
        },
        unreadCount: 3,
    },
    {
        id: 3,
        user: {
            id: 103,
            name: 'David',
            avatar:
                'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1470&auto=format&fit=crop',
            online: true,
            verified: true,
        },
        lastMessage: {
            text: "I've sent you the details for the charity gala.",
            time: 'Yesterday',
            isRead: true,
            sender: 'you',
        },
        unreadCount: 0,
    },
    {
        id: 4,
        user: {
            id: 104,
            name: 'James',
            avatar:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop',
            online: false,
            verified: true,
        },
        lastMessage: {
            text: 'Would you prefer the theater or a private dinner?',
            time: 'Monday',
            isRead: true,
            sender: 'them',
        },
        unreadCount: 0,
    },
    {
        id: 5,
        user: {
            id: 105,
            name: 'Robert',
            avatar:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop',
            online: false,
            verified: false,
        },
        lastMessage: {
            text: "I'm available next weekend if you'd like to meet.",
            time: 'Aug 15',
            isRead: true,
            sender: 'them',
        },
        unreadCount: 0,
    },
]

const MessagesPage = () => {
    const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);
    const [searchQuery, setSearchQuery] = useState("");

    const handleConversationSelect = (conversation) => {
        setSelectedConversation(conversation);
    };

    const filteredConversations = searchQuery
        ? mockConversations.filter((conv) =>
            conv.user.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : mockConversations;

    return (
        <div className="flex flex-col min-h-screen bg-dark text-white">
            <Header />
            <main className="flex-grow">
                <div className="bg-gradient-to-b from-[#0b0b0d] via-[#0f1113] to-[#0a0a0c] text-white font-sans">
                    <div className="container mx-auto py-8 px-4">
                        <h1 className="text-3xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFE9B3] via-[#FFD27A] to-[#E6BA3D]">
                            Messages
                        </h1>

                        <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[calc(100vh-200px)]">
                            {/* Conversation List - Left Side */}
                            <div className="w-full md:w-1/3 border-r border-gray-800 flex flex-col">
                                <div className="p-4 border-b border-gray-800">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <SearchIcon size={18} className="text-gray-500" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Search conversations"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="bg-black/40 border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] block w-full pl-10 p-2.5"
                                        />
                                    </div>
                                </div>
                                <div className="overflow-y-auto flex-1">
                                    <ConversationList
                                        conversations={filteredConversations}
                                        selectedId={selectedConversation?.id}
                                        onSelect={handleConversationSelect}
                                    />
                                </div>
                            </div>

                            {/* Chat Area - Right Side */}
                            <div className="w-full md:w-2/3 flex flex-col">
                                {selectedConversation ? (
                                    <ChatThread conversation={selectedConversation} />
                                ) : (
                                    <div className="flex-grow flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <div className="bg-black/40 p-6 rounded-full inline-block mb-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-10 w-10 text-gray-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-medium text-gray-300 mb-1">
                                                No Conversation Selected
                                            </h3>
                                            <p className="text-gray-500">
                                                Choose a conversation to start messaging
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MessagesPage;
