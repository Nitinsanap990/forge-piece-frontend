'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2, Plus, Minus, Send, ShoppingBag, ShoppingCart } from 'lucide-react'
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
                        className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-screen w-full sm:w-[500px] bg-forge-bg border-l border-white/5 z-[101] flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-black tracking-tighter text-white uppercase">Cart</h2>
                                <span className="px-3 py-1 bg-forge-accent text-forge-bg text-[10px] font-black tracking-widest uppercase shadow-md">
                                    {getItemCount()} Pieces
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/5 transition-luxury text-white/40 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-10 subtle-grain">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                                    <div className="w-20 h-20 bg-forge-card flex items-center justify-center rounded-none border border-white/5 shadow-inner">
                                        <ShoppingCart size={32} className="text-white/10" />
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-white text-lg font-black tracking-widest uppercase">Your selection is empty</p>
                                        <p className="text-forge-grey text-xs tracking-widest uppercase max-w-[250px] mx-auto">Build your mindset with Forge Piece essentials.</p>
                                        <button onClick={onClose} className="mt-8 px-10 py-4 bg-forge-accent text-forge-bg text-[10px] uppercase font-black tracking-[0.2em] shadow-lg hover:bg-forge-accent-hover transition-luxury">Explore Shop</button>
                                    </div>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-6 group">
                                        <div className="w-24 h-32 bg-forge-card relative overflow-hidden border border-white/5 shadow-sm">
                                            {item.product.images[0] ? (
                                                <Image
                                                    src={item.product.images[0]}
                                                    alt={item.product.name}
                                                    fill
                                                    className="object-cover transition-luxury"
                                                    sizes="96px"
                                                />
                                            ) : (
                                                <span className="font-black text-white/5 uppercase text-[10px]">Piece</span>
                                            )}
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div className="space-y-1">
                                                <div className="flex justify-between items-start">
                                                    <h3 className="text-xs font-black tracking-widest text-white uppercase group-hover:text-forge-accent transition-colors">
                                                        {item.product.name}
                                                    </h3>
                                                    <button
                                                        onClick={() => removeItem(item.product.id, item.size, item.color)}
                                                        className="text-white/20 hover:text-white transition-colors"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-forge-grey font-bold tracking-widest uppercase">
                                                    <span className="text-forge-accent">Size: {item.size}</span>
                                                    <span>{item.color}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center border border-white/10 bg-forge-surface shadow-sm">
                                                    <button
                                                        onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                                                        className="p-1.5 hover:bg-white/5 text-white transition-colors"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="w-4 text-center text-xs font-black text-white">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                                                        className="p-1.5 hover:bg-white/5 text-white transition-colors"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <span className="text-sm font-black text-white uppercase tracking-widest">₹{item.product.price * item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-10 border-t border-white/5 bg-forge-card shadow-2xl space-y-8">
                                {!showCheckoutForm ? (
                                    <>
                                        <div className="space-y-4">
                                            <div className="flex justify-between text-[10px] tracking-[0.3em] uppercase font-black text-white/40">
                                                <span>Subtotal</span>
                                                <span>₹{getTotalPrice()}</span>
                                            </div>
                                            <div className="flex justify-between text-lg tracking-[0.2em] font-black text-white uppercase pt-4 border-t border-white/5">
                                                <span>Total</span>
                                                <span className="text-forge-accent">₹{getTotalPrice()}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setShowCheckoutForm(true)}
                                            className="w-full bg-forge-accent text-forge-bg py-6 text-xs font-black tracking-[0.3em] uppercase hover:bg-forge-accent-hover transition-luxury active:scale-[0.98] shadow-xl flex items-center justify-center gap-4"
                                        >
                                            Process Checkout <Send size={14} />
                                        </button>
                                    </>
                                ) : (
                                    <form onSubmit={handleCheckout} className="space-y-8">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Checkout Details</h3>
                                            <button
                                                type="button"
                                                onClick={() => setShowCheckoutForm(false)}
                                                className="text-[10px] text-forge-accent uppercase border-b-2 border-forge-accent font-black hover:text-white hover:border-white transition-luxury"
                                            >
                                                Back to items
                                            </button>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="relative">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="FULL NAME"
                                                    value={userDetails.name}
                                                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                                    className="w-full bg-forge-surface border border-white/10 p-5 text-[10px] font-black tracking-widest text-white outline-none focus:border-forge-accent transition-all placeholder:text-white/20 uppercase"
                                                />
                                            </div>
                                            <div className="relative">
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="EMAIL ADDRESS"
                                                    value={userDetails.email}
                                                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                                    className="w-full bg-forge-surface border border-white/10 p-5 text-[10px] font-black tracking-widest text-white outline-none focus:border-forge-accent transition-all placeholder:text-white/20 uppercase"
                                                />
                                            </div>
                                            <div className="relative">
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="WHATSAPP NUMBER"
                                                    value={userDetails.phone}
                                                    onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                                    className="w-full bg-forge-surface border border-white/10 p-5 text-[10px] font-black tracking-widest text-white outline-none focus:border-forge-accent transition-all placeholder:text-white/20 uppercase"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-forge-accent text-forge-bg py-6 text-xs font-black tracking-[0.3em] uppercase hover:bg-forge-accent-hover transition-luxury shadow-xl flex items-center justify-center gap-4"
                                        >
                                            Complete on WhatsApp <Send size={14} />
                                        </button>
                                        <p className="text-[9px] text-white/40 text-center uppercase tracking-widest font-black">
                                            Mumbai Delivery: 24-48 Hours
                                        </p>
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
