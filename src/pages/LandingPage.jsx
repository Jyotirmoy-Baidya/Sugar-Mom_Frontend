import React from 'react'
import { Link } from 'react-router-dom'
// import { ShieldIcon, LockIcon, CreditCardIcon, CheckIcon } from 'lucide-react'
import Header from '../components/basic/Header'
import Footer from '../components/basic/Footer'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
    ShieldCheckIcon,
    LockClosedIcon,
    CreditCardIcon,
    CheckIcon,
} from "@heroicons/react/24/outline";


// LuxuryLanding.jsx
// A modern, interactive, luxury-style landing page using Tailwind CSS + Framer Motion
// Instructions: Save this file and import into your app. See usage notes below the component.


const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};
const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-dark text-white">
            <Header />
            <main className="flex-grow">
                <div className="min-h-screen bg-gradient-to-b from-[#0b0b0d] via-[#0f1113] to-[#0a0a0c] text-white font-sans">
                    {/* Decorative background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596510914841-40074a91f90d?q=80&w=2070')] bg-center bg-cover opacity-10 filter blur-sm" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    </div>

                    {/* Container */}
                    <div className="container mx-auto px-6 lg:px-12 py-20">
                        {/* HERO */}
                        <motion.header
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            <motion.div variants={fadeInUp} className="max-w-2xl">
                                <div className="inline-flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#B78B2E] to-[#D4AF37] text-black font-semibold text-sm tracking-wide">
                                        Exclusive
                                    </span>
                                    <span className="text-sm text-gray-400">Elite membership</span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFE9B3] via-[#FFD27A] to-[#E6BA3D]">Premium</span>
                                    <span className="ml-3">Connections,</span>
                                    <br />
                                    <span className="text-gray-300 font-medium">Discreet. Curated. Memorable.</span>
                                </h1>

                                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                                    My Sugar Mom connects successful women with attractive men for meaningful
                                    companionship—designed with privacy-first infrastructure, premium verification,
                                    and concierge matching.
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <Link
                                        to="/signup"
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B78B2E] text-black font-semibold px-6 py-3 rounded-lg shadow-xl transform hover:scale-[1.02] transition"
                                    >
                                        Join Now
                                    </Link>

                                    <Link
                                        to="/membership-plans"
                                        className="inline-flex items-center justify-center gap-2 border border-gray-600 text-gray-200 px-6 py-3 rounded-lg backdrop-blur-sm bg-white/3 hover:bg-white/5 transition"
                                    >
                                        View Plans
                                    </Link>
                                </div>

                                <div className="mt-6 flex items-center gap-6 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5 text-[#D4AF37]" />
                                        <span>Verified members</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LockClosedIcon className="w-5 h-5 text-[#D4AF37]" />
                                        <span>End-to-end privacy</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Visual Card / mock profile */}
                            <motion.div
                                variants={fadeInUp}
                                className="relative mx-auto w-full max-w-md"
                            >
                                <div className="rounded-3xl p-1 bg-gradient-to-tr from-white/6 via-transparent to-white/5 shadow-2xl">
                                    <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <div className="text-xs text-gray-400">Featured Member</div>
                                                <div className="text-lg font-semibold">Sophia R.</div>
                                                <div className="text-sm text-gray-400">London · 35</div>
                                            </div>
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFD27A] to-[#D4AF37] flex items-center justify-center text-black font-bold">S</div>
                                        </div>

                                        <div className="rounded-xl overflow-hidden bg-gradient-to-b from-black/20 to-black/10 mb-4">
                                            <img
                                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1400"
                                                alt="profile"
                                                className="w-full h-44 object-cover blur-md"
                                            />
                                        </div>

                                        <div className="flex items-center justify-between text-sm text-gray-300">
                                            <div className="space-y-1">
                                                <div className="font-medium">Concierge Review</div>
                                                <div className="text-xs">Verified · Discreet · Top-rated</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-semibold">€299</div>
                                                <div className="text-xs text-gray-400">/month (VIP)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </motion.div>
                        </motion.header>

                        {/* FEATURES */}
                        <motion.section
                            className="mt-20"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl font-serif font-bold text-center mb-8">
                                Why <span className="text-[#D4AF37]">Choose Us</span>
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Verified Members",
                                        body:
                                            "Thorough identity verification and background checks for a trusted community.",
                                        Icon: ShieldCheckIcon,
                                    },
                                    {
                                        title: "Complete Privacy",
                                        body: "End-to-end encryption and GDPR-compliant handling of personal data.",
                                        Icon: LockClosedIcon,
                                    },
                                    {
                                        title: "Secure Payments",
                                        body: "Escrow-based transactions and transparent billing with discreet statements.",
                                        Icon: CreditCardIcon,
                                    },
                                    // eslint-disable-next-line no-unused-vars
                                ].map((f, idx) => (
                                    <motion.div
                                        key={f.title}
                                        variants={fadeInUp}
                                        className="relative rounded-2xl p-6 bg-gradient-to-b from-white/2 to-white/3 backdrop-blur-md border border-gray-800 shadow-lg"
                                        style={{
                                            boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                                        }}
                                    >
                                        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                            <f.Icon className="w-7 h-7 text-[#D4AF37]" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                                        <p className="text-gray-300 text-sm">{f.body}</p>

                                        <div className="absolute -top-4 -right-4 opacity-10 text-6xl font-serif text-[#D4AF37]">☆</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* HOW IT WORKS / Steps */}
                        <motion.section
                            className="mt-20"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl font-serif font-bold text-center mb-8">
                                How <span className="text-[#D4AF37]">It Works</span>
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {[
                                    { title: "Create Profile", body: "Add photos & preferences" },
                                    { title: "Verify Identity", body: "Secure KYC approval" },
                                    { title: "Connect", body: "Browse and message matches" },
                                    { title: "Arrange Meeting", body: "Select package & schedule" },
                                ].map((s, i) => (
                                    <motion.div
                                        key={s.title}
                                        variants={fadeInUp}
                                        className="text-center p-6 rounded-2xl bg-white/3 border border-gray-800"
                                    >
                                        <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD27A] to-[#D4AF37] text-black font-bold flex items-center justify-center mb-4">
                                            {i + 1}
                                        </div>
                                        <h4 className="font-semibold mb-2">{s.title}</h4>
                                        <p className="text-sm text-gray-300">{s.body}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="text-center mt-8">
                                <Link to="/signup" className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B78B2E] text-black font-semibold">
                                    Get Started
                                </Link>
                            </div>
                        </motion.section>

                        {/* PLANS */}
                        <motion.section
                            className="mt-20"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl font-serif font-bold text-center mb-6">
                                Membership <span className="text-[#D4AF37]">Plans</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-center text-gray-300 max-w-2xl mx-auto mb-8">
                                Choose a plan tailored to your lifestyle. All plans include identity verification and access to our
                                secure platform.
                            </motion.p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Basic */}
                                <motion.div variants={fadeInUp} className="rounded-2xl p-6 bg-white/3 border border-gray-800">
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-semibold">Basic</h3>
                                        <div className="text-2xl font-bold text-[#D4AF37] mt-2">€49 <span className="text-sm text-gray-400">/month</span></div>
                                    </div>

                                    <ul className="space-y-3 text-sm text-gray-300 mb-6">
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 mr-2 text-[#D4AF37]" /> Browse up to 10 profiles/day
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 mr-2 text-[#D4AF37]" /> Send up to 20 messages/day
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 mr-2 text-[#D4AF37]" /> Standard verification badge
                                        </li>
                                    </ul>
                                    <Link to="/membership-plans" className="block text-center py-2 rounded-lg border border-[#B78B2E] text-[#D4AF37]">
                                        Select Plan
                                    </Link>
                                </motion.div>

                                {/* Premium - highlighted */}
                                <motion.div variants={fadeInUp} className="rounded-3xl p-6 bg-gradient-to-br from-white/5 to-white/6 border-2 border-[#B78B2E] shadow-2xl transform hover:scale-[1.018] transition">
                                    <div className="absolute -mt-10 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black px-3 py-1 rounded-full font-semibold text-sm">Most Popular</div>
                                    <div className="text-center mb-6 pt-4">
                                        <h3 className="text-xl font-semibold">Premium</h3>
                                        <div className="text-3xl font-bold text-[#D4AF37] mt-2">€149 <span className="text-sm text-gray-400">/month</span></div>
                                    </div>

                                    <ul className="space-y-3 text-sm text-gray-300 mb-6">
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 mr-2 text-[#D4AF37]" /> Unlimited profile browsing
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 mr-2 text-[#D4AF37]" /> Unlimited messaging
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 mr-2 text-[#D4AF37]" /> Video & audio calls
                                        </li>
                                    </ul>

                                    <Link to="/membership-plans" className="block text-center py-3 rounded-lg bg-[#D4AF37] text-black font-semibold">
                                        Select Plan
                                    </Link>
                                </motion.div>

                                {/* VIP */}
                                <motion.div variants={fadeInUp} className="rounded-2xl p-6 bg-white/3 border border-gray-800">
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-semibold">VIP</h3>
                                        <div className="text-2xl font-bold text-[#D4AF37] mt-2">€299 <span className="text-sm text-gray-400">/month</span></div>
                                    </div>

                                    <ul className="space-y-3 text-sm text-gray-300 mb-6">
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 mr-2 text-[#D4AF37]" /> Priority profile visibility
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 mr-2 text-[#D4AF37]" /> Concierge service
                                        </li>
                                        <li className="flex items-start">
                                            <CheckIcon className="w-5 h-5 mr-2 text-[#D4AF37]" /> Discreet billing
                                        </li>
                                    </ul>

                                    <Link to="/membership-plans" className="block text-center py-2 rounded-lg border border-[#B78B2E] text-[#D4AF37]">
                                        Select Plan
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.section>

                        {/* TESTIMONIALS */}
                        <motion.section
                            className="mt-20"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl font-serif font-bold text-center mb-8">
                                What Our <span className="text-[#D4AF37]">Members Say</span>
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    {
                                        name: "Sarah M.",
                                        since: "Member since 2022",
                                        text: "I've been extremely pleased with the quality of companionship I've found. The verification process makes me feel safe.",
                                    },
                                    {
                                        name: "James T.",
                                        since: "Member since 2021",
                                        text: "The escrow system ensures I'm compensated fairly while maintaining privacy for everyone involved.",
                                    },
                                    {
                                        name: "Lisa K.",
                                        since: "Member since 2022",
                                        text: "My Sugar Mom stands out for its professionalism and discretion. The monthly arrangement option has been perfect for my busy lifestyle.",
                                    },
                                ].map((t) => (
                                    <motion.div variants={fadeInUp} key={t.name} className="rounded-2xl p-6 bg-white/3 border border-gray-800">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD27A] to-[#D4AF37] flex items-center justify-center text-black font-bold">{t.name[0]}</div>
                                            <div>
                                                <div className="font-semibold">{t.name}</div>
                                                <div className="text-xs text-gray-400">{t.since}</div>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 italic">“{t.text}”</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* CTA */}
                        <motion.section variants={fadeInUp} className="mt-20 bg-gradient-to-r from-[#0f1113] to-[#0b0b0d] p-10 rounded-3xl border border-gray-800">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold">Ready to Find Your Perfect Match?</h3>
                                    <p className="text-gray-300 mt-2 max-w-xl">Join thousands of members already enjoying meaningful, private connections.</p>
                                </div>
                                <div className="flex gap-3">
                                    <Link to="/signup" className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B78B2E] text-black font-semibold">
                                        Create Account
                                    </Link>
                                    <Link to="/membership-plans" className="px-6 py-3 rounded-lg border border-gray-700 text-gray-200">
                                        Plans
                                    </Link>
                                </div>
                            </div>
                        </motion.section>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default LandingPage
