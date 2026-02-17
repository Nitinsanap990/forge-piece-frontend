'use client'

import { motion } from 'framer-motion'
import { Instagram, Mail, MapPin, Send, MessageSquare } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none">
                                CONNECT <br /> <span className="text-forge-teal text-outline">WITH THE FORGE</span>
                            </h1>
                            <p className="text-white/40 text-lg font-light italic max-w-md">
                                &quot;Whether it&apos;s a size query, tracking help, or a vision for a custom piece—we&apos;re here to forge it with you.&quot;
                            </p>
                        </div>

                        <div className="space-y-8">
                            <a
                                href="https://instagram.com/forgepiece"
                                target="_blank"
                                className="flex items-center gap-6 group hover:bg-white/5 p-4 rounded-xl transition-all border border-transparent hover:border-white/10"
                            >
                                <div className="w-14 h-14 rounded-full bg-forge-magenta/10 flex items-center justify-center text-forge-magenta border border-forge-magenta/20 group-hover:scale-110 transition-transform">
                                    <Instagram size={28} />
                                </div>
                                <div>
                                    <h3 className="text-white font-display text-sm uppercase tracking-widest">DM to Claim Yours</h3>
                                    <p className="text-white/40 text-xs">@forgepiece on Instagram</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 p-4">
                                <div className="w-14 h-14 rounded-full bg-forge-teal/10 flex items-center justify-center text-forge-teal border border-forge-teal/20">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h3 className="text-white font-display text-sm uppercase tracking-widest">Email Support</h3>
                                    <p className="text-white/40 text-xs">support@forgepiece.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-4">
                                <div className="w-14 h-14 rounded-full bg-forge-purple/10 flex items-center justify-center text-forge-purple border border-forge-purple/20">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h3 className="text-white font-display text-sm uppercase tracking-widest">The Mumbai Hub</h3>
                                    <p className="text-white/40 text-xs">402, Urban Forge House, Mumbai - 400001</p>
                                </div>
                            </div>
                        </div>

                        {/* Support Categories */}
                        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
                            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-sm">
                                <h4 className="text-[10px] font-display text-forge-teal mb-2 uppercase tracking-widest">Custom Pieces</h4>
                                <p className="text-[10px] text-white/30 leading-relaxed uppercase">Got a specific vision? We offer limited custom printing on exclusive drops.</p>
                            </div>
                            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-sm">
                                <h4 className="text-[10px] font-display text-forge-magenta mb-2 uppercase tracking-widest">Bulk Orders</h4>
                                <p className="text-[10px] text-white/30 leading-relaxed uppercase">Planning a team drop? Connect for bulk forged quality.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#080808] p-8 md:p-12 rounded-2xl border border-white/5 forged-metal relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-forge-teal/5 to-transparent pointer-events-none"></div>

                        <form className="relative space-y-6">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-display font-bold uppercase tracking-widest">Send a Pulse</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-sm text-white focus:border-forge-teal outline-none transition-colors text-sm" placeholder="Enter your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] ml-2">Email Address</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-sm text-white focus:border-forge-teal outline-none transition-colors text-sm" placeholder="Enter your email" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] ml-2">Reason for Contact</label>
                                    <select className="w-full bg-white/5 border border-white/10 p-4 rounded-sm text-white/60 focus:border-forge-teal outline-none transition-colors text-sm">
                                        <option>Size & Fit Guide</option>
                                        <option>Order Tracking</option>
                                        <option>Custom Forge Request</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] ml-2">Your Message</label>
                                    <textarea rows={6} className="w-full bg-white/5 border border-white/10 p-4 rounded-sm text-white focus:border-forge-teal outline-none transition-colors text-sm resize-none" placeholder="What&apos;s your story?"></textarea>
                                </div>
                            </div>

                            <button className="w-full btn-primary py-5 rounded-sm flex items-center justify-center gap-3 text-sm font-display font-bold tracking-widest uppercase group">
                                <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                Submit to the Forge
                            </button>

                            <div className="flex items-center justify-center gap-4 text-white/20 pt-4">
                                <MessageSquare size={16} />
                                <span className="text-[10px] uppercase tracking-[0.3em]">Estimated reply: 2-4 Hours</span>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
