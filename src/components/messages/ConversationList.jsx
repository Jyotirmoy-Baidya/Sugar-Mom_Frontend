import React from 'react'
import { CheckIcon, CheckCheckIcon } from 'lucide-react'
const ConversationList = ({ conversations, selectedId, onSelect }) => {
    return (
        <div className="divide-y divide-gray-800">
            {conversations.map((conversation) => (
                <div
                    key={conversation.id}
                    className={`flex items-center p-4 cursor-pointer hover:bg-dark ${selectedId === conversation.id ? 'bg-dark' : ''}`}
                    onClick={() => onSelect(conversation)}
                >
                    <div className="relative">
                        <img
                            src={conversation.user.avatar}
                            alt={conversation.user.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        {conversation.user.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-dark-light rounded-full"></span>
                        )}
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="flex justify-between items-center">
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
                            <span className="text-xs text-gray-500">
                                {conversation.lastMessage.time}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                            <p
                                className={`text-sm truncate max-w-[180px] ${conversation.unreadCount > 0 ? 'text-white font-medium' : 'text-gray-400'}`}
                            >
                                {conversation.lastMessage.sender === 'you' && (
                                    <span className="flex items-center">
                                        {conversation.lastMessage.isRead ? (
                                            <CheckCheckIcon
                                                size={14}
                                                className="text-primary mr-1 inline"
                                            />
                                        ) : (
                                            <CheckIcon
                                                size={14}
                                                className="text-gray-500 mr-1 inline"
                                            />
                                        )}
                                    </span>
                                )}
                                {conversation.lastMessage.text}
                            </p>
                            {conversation.unreadCount > 0 && (
                                <span className="bg-primary text-dark text-xs font-bold px-2 py-0.5 rounded-full">
                                    {conversation.unreadCount}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ConversationList
