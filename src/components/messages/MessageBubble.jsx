import React, { useState } from 'react'
import { CheckIcon, CheckCheckIcon, SmileIcon } from 'lucide-react'
const MessageBubble = ({ message, onReaction }) => {
    const [showReactions, setShowReactions] = useState(false)
    const isOwnMessage = message.sender === 'you'
    const reactions = ['❤️', '👍', '😊', '😂', '🙏', '👏']
    const renderStatus = () => {
        if (isOwnMessage) {
            switch (message.status) {
                case 'sent':
                    return <span className="text-gray-500 ml-1">✓</span>
                case 'delivered':
                    return <CheckIcon size={14} className="text-gray-500 ml-1" />
                case 'read':
                    return <CheckCheckIcon size={14} className="text-primary ml-1" />
                default:
                    return null
            }
        }
        return null
    }
    return (
        <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
            <div className="relative max-w-[80%] lg:max-w-[60%]">
                <div
                    className={`rounded-2xl px-4 py-3 ${isOwnMessage ? 'bg-primary text-dark' : 'bg-dark-light text-white'}`}
                >
                    {message.text && <p>{message.text}</p>}
                    {message.image && (
                        <div className="mt-2 rounded-lg overflow-hidden">
                            <img
                                src={message.image}
                                alt="Shared media"
                                className="w-full h-auto max-h-60 object-cover"
                            />
                        </div>
                    )}
                    {message.reactions.length > 0 && (
                        <div
                            className={`absolute ${isOwnMessage ? 'left-0' : 'right-0'} bottom-0 transform ${isOwnMessage ? 'translate-x-[-30%]' : 'translate-x-[30%]'} translate-y-[40%]`}
                        >
                            <div className="bg-dark-light border border-gray-700 rounded-full px-2 py-0.5 flex">
                                {message.reactions.map((reaction, index) => (
                                    <span key={index} className="text-sm">
                                        {reaction.emoji}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className={`flex items-center mt-1 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
                >
                    <span className="text-xs text-gray-500">{message.time}</span>
                    {renderStatus()}
                </div>
                {/* Reaction button */}
                <button
                    className={`absolute top-1/2 transform -translate-y-1/2 ${isOwnMessage ? 'left-0 -translate-x-[125%]' : 'right-0 translate-x-[125%]'} opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100 p-1 rounded-full bg-dark-light text-gray-400 hover:text-primary transition-all`}
                    onClick={() => setShowReactions(!showReactions)}
                >
                    <SmileIcon size={16} />
                </button>
                {/* Reaction picker */}
                {showReactions && (
                    <div
                        className={`absolute z-10 ${isOwnMessage ? 'right-0' : 'left-0'} bottom-full mb-2`}
                    >
                        <div className="bg-dark-light border border-gray-700 rounded-full px-2 py-1 flex space-x-1 shadow-lg">
                            {reactions.map((emoji) => (
                                <button
                                    key={emoji}
                                    className="hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                                    onClick={() => {
                                        onReaction(emoji)
                                        setShowReactions(false)
                                    }}
                                >
                                    <span className="text-lg">{emoji}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default MessageBubble
