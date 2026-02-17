'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { LayoutDashboard, TrendingUp, Users, Package, ArrowUpRight, Zap } from 'lucide-react'

export default function Dashboard() {

    const stats = [
        { label: 'Active Pieces', value: '12', icon: Package, trend: '+2 this month' },
        { label: 'Community', value: '2.4k', icon: Users, trend: '+150 this week' },
        { label: 'Forge Velocity', value: '88%', icon: Zap, trend: 'Optimal' },
    ]

    const dashboardImages = [
        '/products/architect.jpg',
        '/products/chrome-pac.jpg',
        '/products/demon-drop.jpg',
        '/products/dharma-force.jpg',
        '/products/human-routine.jpg',
        '/products/inferno-match.jpg',
        '/products/shiva-essence.jpg',
        '/products/skate-out.jpg',
    ]

    return (
        <div className="min-h-screen bg-forge-bg pt-24 pb-12 subtle-grain">
            {/* Sliding Product Marquee */}
            <div className="bg-forge-surface border-y border-white/5 py-8 overflow-hidden relative">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-8 items-center w-max pl-8"
                >
                    {[...dashboardImages, ...dashboardImages].map((src, i) => (
                        <div key={i} className="relative w-48 h-32 flex-shrink-0 bg-forge-card border border-white/5 overflow-hidden group">
                            <Image
                                src={src}
                                alt="Dashboard Preview"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-luxury"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Overlay Vignette */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-forge-surface to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-forge-surface to-transparent z-10"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-forge-accent">
                            <LayoutDashboard size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Command Center</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                            DASHBOARD
                        </h1>
                    </div>
                    <div className="bg-forge-card px-6 py-4 border border-white/5 flex items-center gap-4">
                        <span className="text-[10px] font-bold text-forge-grey uppercase tracking-widest">Forge Status:</span>
                        <span className="text-[10px] font-black uppercase tracking-widest bg-green-500/10 text-green-400 px-3 py-1">Operational</span>
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
                            className="bg-forge-card p-8 border border-white/5 shadow-sm hover:shadow-xl transition-luxury group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <stat.icon size={80} />
                            </div>
                            <div className="relative z-10 space-y-4">
                                <p className="text-[10px] font-black text-forge-grey uppercase tracking-widest">{stat.label}</p>
                                <div className="flex items-baseline gap-3">
                                    <h3 className="text-4xl font-black text-white">{stat.value}</h3>
                                    <span className="text-[10px] font-bold text-forge-accent flex items-center gap-1">
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
                    <div className="bg-forge-dark p-10 space-y-8">
                        <h3 className="text-white text-xl font-black uppercase tracking-tight">Rapid Deployment</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-white/10 hover:bg-forge-accent hover:text-forge-bg p-6 text-left transition-luxury group">
                                <ArrowUpRight className="text-white group-hover:text-forge-bg mb-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                <span className="text-[10px] font-black text-white group-hover:text-forge-bg uppercase tracking-widest">New Drop</span>
                            </button>
                            <button className="bg-white/10 hover:bg-forge-accent hover:text-forge-bg p-6 text-left transition-luxury group">
                                <ArrowUpRight className="text-white group-hover:text-forge-bg mb-4" />
                                <span className="text-[10px] font-black text-white group-hover:text-forge-bg uppercase tracking-widest">Inventory</span>
                            </button>
                        </div>
                    </div>

                    {/* Activity Feed Placeholder */}
                    <div className="bg-forge-card p-10 border border-white/5 flex flex-col justify-center items-center text-center space-y-4">
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center text-white/20">
                            <LayoutDashboard size={20} />
                        </div>
                        <p className="text-[10px] font-black text-forge-grey uppercase tracking-widest">Forge pulse initializing...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
