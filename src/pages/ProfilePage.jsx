import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon, FilterIcon, MapPinIcon, StarIcon } from 'lucide-react'
// Mock data for profiles
const mockProfiles = [
    {
        id: 1,
        name: 'Alexander',
        age: 28,
        location: 'Berlin, Germany',
        bio: 'Charming companion with a background in fine arts. I enjoy meaningful conversations and can accompany you to any cultural event.',
        rating: 4.9,
        reviewCount: 24,
        imageUrl:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop',
        blurred: false,
        verified: true,
        premium: true,
    },
    {
        id: 2,
        name: 'Michael',
        age: 32,
        location: 'Paris, France',
        bio: 'Former model with a passion for fine dining and travel. Fluent in English, French, and Italian.',
        rating: 4.7,
        reviewCount: 18,
        imageUrl:
            'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop',
        blurred: true,
        verified: true,
        premium: false,
    },
    {
        id: 3,
        name: 'David',
        age: 29,
        location: 'London, UK',
        bio: 'Sophisticated companion with experience in high-society events. I can provide engaging conversation and elegant company.',
        rating: 4.8,
        reviewCount: 15,
        imageUrl:
            'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1470&auto=format&fit=crop',
        blurred: true,
        verified: true,
        premium: false,
    },
    {
        id: 4,
        name: 'James',
        age: 34,
        location: 'Vienna, Austria',
        bio: 'Classical musician and arts enthusiast. I can accompany you to operas, galleries, or provide a relaxing evening of conversation.',
        rating: 4.9,
        reviewCount: 27,
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop',
        blurred: false,
        verified: true,
        premium: true,
    },
    {
        id: 5,
        name: 'Robert',
        age: 31,
        location: 'Amsterdam, Netherlands',
        bio: 'Adventurous spirit with a background in international business. I can offer stimulating conversation and companionship.',
        rating: 4.6,
        reviewCount: 12,
        imageUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop',
        blurred: true,
        verified: true,
        premium: false,
    },
    {
        id: 6,
        name: 'Thomas',
        age: 27,
        location: 'Zurich, Switzerland',
        bio: 'Fitness enthusiast and former athlete. I enjoy active outings as well as quiet evenings with good conversation.',
        rating: 4.8,
        reviewCount: 19,
        imageUrl:
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop',
        blurred: false,
        verified: true,
        premium: true,
    },
]
const ProfileCard = ({ profile }) => {
    return (
        <Link to={`/profile/${profile.id}`} className="block">
            <div className="bg-dark-light rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                <div className="relative">
                    <div
                        className={`h-64 bg-cover bg-center ${profile.blurred ? 'blur-sm' : ''}`}
                        style={{
                            backgroundImage: `url(${profile.imageUrl})`,
                        }}
                    ></div>
                    {profile.blurred && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className="bg-dark-light px-3 py-1.5 rounded text-sm font-medium">
                                Upgrade to view
                            </div>
                        </div>
                    )}
                    {profile.premium && (
                        <div className="absolute top-3 right-3 bg-primary text-dark px-2 py-0.5 rounded text-xs font-bold">
                            PREMIUM
                        </div>
                    )}
                </div>
                <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold">
                            {profile.name}, {profile.age}
                            {profile.verified && (
                                <span
                                    className="ml-2 inline-block w-4 h-4 bg-primary rounded-full text-dark text-xs flex items-center justify-center"
                                    title="Verified"
                                >
                                    ✓
                                </span>
                            )}
                        </h3>
                        <div className="flex items-center">
                            <StarIcon size={16} className="text-primary mr-1" />
                            <span className="text-sm">{profile.rating}</span>
                        </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                        <MapPinIcon size={14} className="mr-1" />
                        <span>{profile.location}</span>
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-3">{profile.bio}</p>
                </div>
            </div>
        </Link>
    )
}
const ProfilesPage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [showFilters, setShowFilters] = useState(false)
    const [filters, setFilters] = useState({
        ageMin: 18,
        ageMax: 45,
        verified: true,
        premium: false,
        distance: 50,
    })
    return (
        <div className="bg-dark min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-serif font-bold mb-8">
                    Browse Companions
                </h1>
                {/* Search and Filter Bar */}
                <div className="bg-dark-light rounded-lg p-4 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon size={18} className="text-gray-500" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by name, location, or interests"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md focus:ring-primary focus:border-primary block w-full pl-10 p-2.5"
                            />
                        </div>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center justify-center bg-dark border border-gray-700 hover:border-primary text-white px-4 py-2.5 rounded-md transition-colors"
                        >
                            <FilterIcon size={18} className="mr-2" />
                            Filters
                        </button>
                    </div>
                    {showFilters && (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Age Range
                                </label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="number"
                                        min="18"
                                        max="99"
                                        value={filters.ageMin}
                                        onChange={(e) =>
                                            setFilters({
                                                ...filters,
                                                ageMin: parseInt(e.target.value),
                                            })
                                        }
                                        className="bg-dark border border-gray-700 text-white text-sm rounded-md focus:ring-primary focus:border-primary block w-full p-2.5"
                                    />
                                    <span>to</span>
                                    <input
                                        type="number"
                                        min="18"
                                        max="99"
                                        value={filters.ageMax}
                                        onChange={(e) =>
                                            setFilters({
                                                ...filters,
                                                ageMax: parseInt(e.target.value),
                                            })
                                        }
                                        className="bg-dark border border-gray-700 text-white text-sm rounded-md focus:ring-primary focus:border-primary block w-full p-2.5"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Distance (km)
                                </label>
                                <input
                                    type="range"
                                    min="5"
                                    max="500"
                                    step="5"
                                    value={filters.distance}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            distance: parseInt(e.target.value),
                                        })
                                    }
                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>5 km</span>
                                    <span>{filters.distance} km</span>
                                    <span>500 km</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <input
                                        id="verified"
                                        type="checkbox"
                                        checked={filters.verified}
                                        onChange={(e) =>
                                            setFilters({
                                                ...filters,
                                                verified: e.target.checked,
                                            })
                                        }
                                        className="h-4 w-4 text-primary focus:ring-primary border-gray-700 rounded bg-dark"
                                    />
                                    <label
                                        htmlFor="verified"
                                        className="ml-2 block text-sm text-gray-300"
                                    >
                                        Verified profiles only
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="premium"
                                        type="checkbox"
                                        checked={filters.premium}
                                        onChange={(e) =>
                                            setFilters({
                                                ...filters,
                                                premium: e.target.checked,
                                            })
                                        }
                                        className="h-4 w-4 text-primary focus:ring-primary border-gray-700 rounded bg-dark"
                                    />
                                    <label
                                        htmlFor="premium"
                                        className="ml-2 block text-sm text-gray-300"
                                    >
                                        Premium profiles only
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Profile Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockProfiles.map((profile) => (
                        <ProfileCard key={profile.id} profile={profile} />
                    ))}
                </div>
                {/* Pagination */}
                <div className="flex justify-center mt-12">
                    <nav className="flex items-center space-x-2">
                        <button className="px-3 py-1 rounded-md bg-dark-light text-gray-400 hover:bg-gray-800">
                            Previous
                        </button>
                        <button className="px-3 py-1 rounded-md bg-primary text-dark font-medium">
                            1
                        </button>
                        <button className="px-3 py-1 rounded-md bg-dark-light text-gray-400 hover:bg-gray-800">
                            2
                        </button>
                        <button className="px-3 py-1 rounded-md bg-dark-light text-gray-400 hover:bg-gray-800">
                            3
                        </button>
                        <span className="px-3 py-1 text-gray-400">...</span>
                        <button className="px-3 py-1 rounded-md bg-dark-light text-gray-400 hover:bg-gray-800">
                            10
                        </button>
                        <button className="px-3 py-1 rounded-md bg-dark-light text-gray-400 hover:bg-gray-800">
                            Next
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default ProfilesPage
