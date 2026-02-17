'use client'

import { motion } from 'framer-motion'
import { Instagram, Mail, MapPin, Send, MessageSquare } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-40 pb-32 bg-forge-bg subtle-grain">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-16"
                    >
                        <div className="space-y-8">
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                                CONNECT <br /> <span className="text-forge-accent">WITH THE FORGE</span>
                            </h1>
                            <p className="text-forge-grey text-xl font-light italic max-w-md bg-forge-card px-4 py-2 border-l-4 border-forge-accent">
                                &quot;Size query, tracking help, or a vision for a custom piece—we forge it with you.&quot;
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <a
                                href="https://instagram.com/forgepiece"
                                target="_blank"
                                className="flex items-center gap-8 group bg-forge-card p-6 border border-white/5 hover:border-forge-accent/30 transition-luxury shadow-sm hover:shadow-xl"
                            >
                                <div className="w-16 h-16 bg-forge-accent text-forge-bg flex items-center justify-center shadow-lg group-hover:scale-110 transition-luxury">
                                    <Instagram size={32} />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-sm uppercase tracking-[0.2em]">DM to Claim Yours</h3>
                                    <p className="text-forge-grey text-[10px] font-bold uppercase tracking-widest mt-1">@forgepiece on Instagram</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-8 p-6 bg-forge-card border border-white/5 shadow-sm">
                                <div className="w-16 h-16 bg-forge-surface text-white flex items-center justify-center shadow-lg">
                                    <Mail size={32} />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-sm uppercase tracking-[0.2em]">Email Support</h3>
                                    <p className="text-forge-grey text-[10px] font-bold uppercase tracking-widest mt-1">support@forgepiece.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 p-6 bg-forge-card border border-white/5 shadow-sm">
                                <div className="w-16 h-16 bg-forge-card text-white flex items-center justify-center border border-white/5 shadow-sm">
                                    <MapPin size={32} />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-sm uppercase tracking-[0.2em]">The Mumbai Hub</h3>
                                    <p className="text-forge-grey text-[10px] font-bold uppercase tracking-widest mt-1">402, Urban Forge House, Mumbai - 400001</p>
                                </div>
                            </div>
                        </div>

                        {/* Support Categories */}
                        <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/5">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-forge-accent uppercase tracking-[0.3em]">Custom Pieces</h4>
                                <p className="text-xs text-forge-grey leading-relaxed font-light">LIMITED CUSTOM PRINTING ON EXCLUSIVE DROPS AVAILABLE UPON SPECIAL REQUEST.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Bulk Orders</h4>
                                <p className="text-xs text-forge-grey leading-relaxed font-light">PLANNING A TEAM DROP? CONNECT FOR SPECIALIZED BATCH PRICING AND FORGED QUALITY.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-forge-card p-10 md:p-16 border border-white/5 relative shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-forge-accent/5 -m-16 rounded-full blur-3xl"></div>

                        <form className="relative space-y-10">
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-px flex-1 bg-white/10"></div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Send a Pulse</h2>
                                    <div className="h-px flex-1 bg-white/10"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] text-white font-black uppercase tracking-[0.2em]">Full Name</label>
                                        <input type="text" className="w-full bg-forge-surface border border-white/5 p-5 text-sm font-bold text-white focus:border-forge-accent outline-none transition-luxury shadow-sm placeholder:text-white/20" placeholder="NAME" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] text-white font-black uppercase tracking-[0.2em]">Email Address</label>
                                        <input type="email" className="w-full bg-forge-surface border border-white/5 p-5 text-sm font-bold text-white focus:border-forge-accent outline-none transition-luxury shadow-sm placeholder:text-white/20" placeholder="EMAIL" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] text-white font-black uppercase tracking-[0.2em]">Reason for Contact</label>
                                    <select className="w-full bg-forge-surface border border-white/5 p-5 text-sm font-bold text-white/60 focus:border-forge-accent outline-none transition-luxury shadow-sm appearance-none">
                                        <option>Size & Fit Guide</option>
                                        <option>Order Tracking</option>
                                        <option>Custom Forge Request</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] text-white font-black uppercase tracking-[0.2em]">Your Message</label>
                                    <textarea rows={6} className="w-full bg-forge-surface border border-white/5 p-5 text-sm font-bold text-white focus:border-forge-accent outline-none transition-luxury shadow-sm resize-none placeholder:text-white/20" placeholder="WHAT'S YOUR STORY?"></textarea>
                                </div>
                            </div>

                            <button className="w-full bg-forge-accent text-forge-bg py-6 flex items-center justify-center gap-4 text-xs font-black tracking-[0.4em] uppercase hover:bg-forge-accent-hover transition-luxury shadow-xl active:scale-95 group">
                                <Send size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                Submit to the Forge
                            </button>

                            <div className="flex items-center justify-center gap-4 text-white/20 pt-6">
                                <MessageSquare size={14} />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Response: 2-4 Hours</span>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
