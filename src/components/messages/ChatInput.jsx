import React, { useState, useRef } from 'react'
import {
    SendIcon,
    ImageIcon,
    SmileIcon,
    PaperclipIcon,
    MicIcon,
} from 'lucide-react'
const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('')
    const [selectedImage, setSelectedImage] = useState(null)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const fileInputRef = useRef(null)
    const emojis = [
        '😊',
        '😂',
        '❤️',
        '👍',
        '🎉',
        '🔥',
        '😍',
        '🙏',
        '👏',
        '🤔',
        '😎',
        '🥂',
        '🌹',
        '✨',
        '🥰',
    ]
    const handleSubmit = (e) => {
        e.preventDefault()
        if ((message.trim() || selectedImage) && onSendMessage) {
            onSendMessage(message, selectedImage)
            setMessage('')
            setSelectedImage(null)
        }
    }
    const handleImageSelect = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setSelectedImage(e.target.result)
            }
            reader.readAsDataURL(file)
        }
    }
    const handleEmojiClick = (emoji) => {
        setMessage((prev) => prev + emoji)
        setShowEmojiPicker(false)
    }
    return (
        <div className="border-t border-gray-800 p-4 bg-dark-light">
            {selectedImage && (
                <div className="mb-3 relative">
                    <div className="relative inline-block">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="h-20 rounded-lg border border-gray-700"
                        />
                        <button
                            className="absolute top-1 right-1 bg-dark-light rounded-full w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <div className="relative">
                    <button
                        type="button"
                        className="text-gray-400 hover:text-primary p-2 rounded-full hover:bg-dark transition-colors"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                        <SmileIcon size={20} />
                    </button>
                    {showEmojiPicker && (
                        <div className="absolute bottom-full left-0 mb-2 p-2 bg-dark-light border border-gray-700 rounded-lg shadow-lg z-10">
                            <div className="grid grid-cols-5 gap-1">
                                {emojis.map((emoji) => (
                                    <button
                                        key={emoji}
                                        type="button"
                                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded transition-colors"
                                        onClick={() => handleEmojiClick(emoji)}
                                    >
                                        {emoji}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <button
                    type="button"
                    className="text-gray-400 hover:text-primary p-2 rounded-full hover:bg-dark transition-colors"
                    onClick={() => fileInputRef.current.click()}
                >
                    <ImageIcon size={20} />
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageSelect}
                    />
                </button>
                <button
                    type="button"
                    className="text-gray-400 hover:text-primary p-2 rounded-full hover:bg-dark transition-colors"
                >
                    <PaperclipIcon size={20} />
                </button>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-grow bg-dark border border-gray-700 text-white placeholder-gray-500 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                    type="button"
                    className="text-gray-400 hover:text-primary p-2 rounded-full hover:bg-dark transition-colors"
                >
                    <MicIcon size={20} />
                </button>
                <button
                    type="submit"
                    className={`p-2 rounded-full ${message.trim() || selectedImage ? 'bg-primary text-dark' : 'bg-gray-700 text-gray-400'} transition-colors`}
                >
                    <SendIcon size={20} />
                </button>
            </form>
        </div>
    )
}
export default ChatInput
