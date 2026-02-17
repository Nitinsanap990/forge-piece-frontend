'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2, Plus, Minus, Send, ShoppingBag } from 'lucide-react'
import { useCart } from '@/store/useCart'
import { generateWhatsAppLink } from '@/lib/whatsapp-checkout'
import { useState } from 'react'
import Image from 'next/image'

interface CartDrawerProps {
    isOpen: boolean
    onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, updateQuantity, removeItem, getTotalPrice, getItemCount } = useCart()
    const [userDetails, setUserDetails] = useState({ name: '', email: '', phone: '' })
    const [showCheckoutForm, setShowCheckoutForm] = useState(false)

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault()
        if (!userDetails.name || !userDetails.phone || !userDetails.email) {
            alert('Please fill in all details')
            return
        }
        const link = generateWhatsAppLink(items, userDetails)
        window.open(link, '_blank')
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-screen w-full sm:w-[500px] bg-[#080808] border-l border-white/10 z-[101] flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="text-forge-teal" size={24} />
                                <h2 className="text-xl font-display font-bold uppercase tracking-widest text-white">Your Cart ({getItemCount()})</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors text-white/40 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-white/20">
                                        <ShoppingBag size={40} />
                                    </div>
                                    <p className="text-white/20 font-display uppercase tracking-widest">The Forge is Empty.</p>
                                    <button onClick={onClose} className="text-forge-teal text-xs uppercase font-bold tracking-[0.2em] border-b border-forge-teal pb-1">Start Forging</button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-sm group relative">
                                        <div className="w-20 h-20 bg-white/5 rounded-sm overflow-hidden flex items-center justify-center relative border border-white/5">
                                            {item.product.images[0] ? (
                                                <Image
                                                    src={item.product.images[0]}
                                                    alt={item.product.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="80px"
                                                />
                                            ) : (
                                                <span className="font-display text-white/20 italic text-[10px] uppercase">{item.product.name.split(' ')[0]}</span>
                                            )}
                                        </div>

                                        <div className="flex-1 space-y-1">
                                            <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white group-hover:text-forge-teal transition-colors">
                                                {item.product.name}
                                            </h3>
                                            <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest">
                                                <span>{item.size}</span>
                                                <span>•</span>
                                                <span>{item.color}</span>
                                            </div>
                                            <div className="flex items-center gap-4 mt-3">
                                                <div className="flex items-center border border-white/10 rounded-sm">
                                                    <button
                                                        onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                                                        className="p-1 hover:text-forge-teal transition-colors"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="w-10 text-center text-xs font-bold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                                                        className="p-1 hover:text-forge-teal transition-colors"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <span className="text-xs font-bold">₹{item.product.price * item.quantity}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => removeItem(item.product.id, item.size, item.color)}
                                            className="absolute top-4 right-4 text-white/20 hover:text-forge-magenta transition-colors"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-8 bg-white/[0.02] border-t border-white/5 space-y-6">
                                {!showCheckoutForm ? (
                                    <>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-display text-white/40 uppercase tracking-widest">Order Total</span>
                                            <span className="text-2xl font-display font-bold text-white tracking-widest">₹{getTotalPrice()}</span>
                                        </div>
                                        <button
                                            onClick={() => setShowCheckoutForm(true)}
                                            className="w-full btn-primary py-5 rounded-sm flex items-center justify-center gap-3 text-sm font-display font-bold tracking-widest uppercase transition-transform active:scale-95"
                                        >
                                            Process Order
                                        </button>
                                    </>
                                ) : (
                                    <form onSubmit={handleCheckout} className="space-y-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xs font-display font-bold uppercase tracking-widest text-forge-teal">Customer Info</h3>
                                            <button onClick={() => setShowCheckoutForm(false)} className="text-[10px] text-white/40 uppercase underline">Back to items</button>
                                        </div>
                                        <div className="space-y-3">
                                            <input
                                                required
                                                type="text"
                                                placeholder="Full Name"
                                                value={userDetails.name}
                                                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                                className="w-full bg-black/50 border border-white/10 p-4 rounded-sm text-sm focus:border-forge-teal outline-none transition-all"
                                            />
                                            <input
                                                required
                                                type="email"
                                                placeholder="Email Address"
                                                value={userDetails.email}
                                                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                                className="w-full bg-black/50 border border-white/10 p-4 rounded-sm text-sm focus:border-forge-teal outline-none transition-all"
                                            />
                                            <input
                                                required
                                                type="tel"
                                                placeholder="WhatsApp Number"
                                                value={userDetails.phone}
                                                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                                className="w-full bg-black/50 border border-white/10 p-4 rounded-sm text-sm focus:border-forge-teal outline-none transition-all"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full btn-primary py-5 rounded-sm flex items-center justify-center gap-3 text-sm font-display font-bold tracking-widest uppercase active:scale-95 transition-all"
                                        >
                                            <Send size={18} />
                                            Forge on WhatsApp
                                        </button>
                                        <p className="text-[10px] text-white/20 text-center uppercase tracking-widest">Orders are fulfilled via WhatsApp Mumbai Hub</p>
                                    </form>
                                )}
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
