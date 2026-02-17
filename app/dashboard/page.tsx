'use client'

import { motion } from 'framer-motion'
import { LayoutDashboard, TrendingUp, Users, Package, ArrowUpRight, Zap } from 'lucide-react'

export default function Dashboard() {
    const slidingText = [
        "FORGING A MINDSET",
        "ESTABLISHED 2024",
        "STREETWEAR ENGINEERING",
        "MUMBAI HUB",
        "100% PREMIUM COTTON",
        "HEAVYWEIGHT SERIES",
    ]

    const stats = [
        { label: 'Active Pieces', value: '12', icon: Package, trend: '+2 this month' },
        { label: 'Community', value: '2.4k', icon: Users, trend: '+150 this week' },
        { label: 'Forge Velocity', value: '88%', icon: Zap, trend: 'Optimal' },
    ]

    return (
        <div className="min-h-screen bg-white pt-24 pb-12 subtle-grain">
            {/* Sliding Animation Banner */}
            <div className="bg-black py-4 overflow-hidden relative border-y border-black/5">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    className="flex whitespace-nowrap gap-12 items-center"
                >
                    {[...slidingText, ...slidingText].map((text, i) => (
                        <span
                            key={i}
                            className="text-[10px] font-black tracking-[0.6em] text-white uppercase italic"
                        >
                            {text}
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-forge-red">
                            <LayoutDashboard size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Command Center</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none">
                            DASHBOARD
                        </h1>
                    </div>
                    <div className="bg-forge-bone px-6 py-4 border border-black/5 flex items-center gap-4">
                        <span className="text-[10px] font-bold text-forge-grey uppercase tracking-widest">Forge Status:</span>
                        <span className="text-[10px] font-black text-black uppercase tracking-widest bg-green-500/10 text-green-600 px-3 py-1">Operational</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 border border-black/5 shadow-sm hover:shadow-xl transition-luxury group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <stat.icon size={80} />
                            </div>
                            <div className="relative z-10 space-y-4">
                                <p className="text-[10px] font-black text-forge-grey uppercase tracking-widest">{stat.label}</p>
                                <div className="flex items-baseline gap-3">
                                    <h3 className="text-4xl font-black text-black">{stat.value}</h3>
                                    <span className="text-[10px] font-bold text-forge-red flex items-center gap-1">
                                        <TrendingUp size={12} /> {stat.trend}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Main Content Areas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Quick Actions */}
                    <div className="bg-black p-10 space-y-8">
                        <h3 className="text-white text-xl font-black uppercase tracking-tight">Rapid Deployment</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-white/10 hover:bg-forge-red p-6 text-left transition-luxury group">
                                <ArrowUpRight className="text-white mb-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">New Drop</span>
                            </button>
                            <button className="bg-white/10 hover:bg-white hover:text-black p-6 text-left transition-luxury">
                                <ArrowUpRight className="text-white group-hover:text-black mb-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Inventory</span>
                            </button>
                        </div>
                    </div>

                    {/* Activity Feed Placeholder */}
                    <div className="bg-forge-bone p-10 border border-black/5 flex flex-col justify-center items-center text-center space-y-4">
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-black/10 flex items-center justify-center text-black/20">
                            <LayoutDashboard size={20} />
                        </div>
                        <p className="text-[10px] font-black text-forge-grey uppercase tracking-widest">Forge pulse initializing...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
