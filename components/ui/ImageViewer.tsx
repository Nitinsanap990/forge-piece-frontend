'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import Image from 'next/image'

interface ImageViewerProps {
    images: string[]
    initialIndex?: number
    isOpen: boolean
    onClose: () => void
    productName: string
}

export default function ImageViewer({
    images,
    initialIndex = 0,
    isOpen,
    onClose,
    productName,
}: ImageViewerProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)
    const [scale, setScale] = useState(1)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    // Reset when opening or changing image
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex)
            setScale(1)
            setPosition({ x: 0, y: 0 })
            // Lock body scroll
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, initialIndex])

    // Keyboard controls
    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') handlePrevious()
            if (e.key === 'ArrowRight') handleNext()
            if (e.key === '+' || e.key === '=') handleZoomIn()
            if (e.key === '-' || e.key === '_') handleZoomOut()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, currentIndex, scale])

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setScale(1)
        setPosition({ x: 0, y: 0 })
    }, [images.length])

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        setScale(1)
        setPosition({ x: 0, y: 0 })
    }, [images.length])

    const handleZoomIn = () => {
        setScale((prev) => Math.min(prev + 0.5, 3))
    }

    const handleZoomOut = () => {
        setScale((prev) => {
            const newScale = Math.max(prev - 0.5, 1)
            if (newScale === 1) {
                setPosition({ x: 0, y: 0 })
            }
            return newScale
        })
    }

    const handleDragEnd = (_: any, info: PanInfo) => {
        if (scale === 1) {
            // Swipe to change images
            if (Math.abs(info.offset.x) > 100) {
                if (info.offset.x > 0) {
                    handlePrevious()
                } else {
                    handleNext()
                }
            }
        } else {
            // Update pan position when zoomed
            setPosition({
                x: position.x + info.offset.x,
                y: position.y + info.offset.y,
            })
        }
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] bg-white/98 backdrop-blur-sm"
                onClick={onClose}
            >
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-10 p-6 flex items-center justify-between">
                    <div className="space-y-1">
                        <h2 className="text-black font-black text-lg uppercase tracking-tighter">{productName}</h2>
                        <p className="text-forge-grey text-xs font-bold uppercase tracking-widest">
                            {currentIndex + 1} / {images.length}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-3 bg-black/5 hover:bg-black hover:text-white text-black transition-luxury"
                        aria-label="Close viewer"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Main Image */}
                <div
                    className="absolute inset-0 flex items-center justify-center p-20"
                    onClick={(e) => e.stopPropagation()}
                >
                    <motion.div
                        drag={scale > 1}
                        dragConstraints={{
                            left: scale > 1 ? -200 : 0,
                            right: scale > 1 ? 200 : 0,
                            top: scale > 1 ? -200 : 0,
                            bottom: scale > 1 ? 200 : 0,
                        }}
                        dragElastic={0.1}
                        onDragEnd={handleDragEnd}
                        animate={{
                            scale,
                            x: position.x,
                            y: position.y,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="relative w-full h-full cursor-grab active:cursor-grabbing"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`${productName} - Image ${currentIndex + 1}`}
                            fill
                            className="object-contain pointer-events-none select-none"
                            sizes="100vw"
                            priority
                        />
                    </motion.div>
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handlePrevious()
                            }}
                            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/80 backdrop-blur-md border border-black/5 hover:bg-black hover:text-white text-black transition-luxury disabled:opacity-30 shadow-xl"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleNext()
                            }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/80 backdrop-blur-md border border-black/5 hover:bg-black hover:text-white text-black transition-luxury shadow-xl"
                            aria-label="Next image"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </>
                )}

                {/* Zoom Controls */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            handleZoomOut()
                        }}
                        disabled={scale <= 1}
                        className="p-3 bg-white border border-black/5 hover:bg-black hover:text-white text-black transition-luxury disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
                        aria-label="Zoom out"
                    >
                        <ZoomOut size={20} />
                    </button>
                    <div className="px-4 py-3 bg-black text-white text-xs font-black uppercase tracking-widest shadow-lg">
                        {Math.round(scale * 100)}%
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            handleZoomIn()
                        }}
                        disabled={scale >= 3}
                        className="p-3 bg-white border border-black/5 hover:bg-black hover:text-white text-black transition-luxury disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
                        aria-label="Zoom in"
                    >
                        <ZoomIn size={20} />
                    </button>
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentIndex(idx)
                                    setScale(1)
                                    setPosition({ x: 0, y: 0 })
                                }}
                                className={`w-16 h-16 relative border-2 transition-luxury overflow-hidden shadow-sm ${idx === currentIndex
                                    ? 'border-forge-accent ring-2 ring-forge-accent scale-110 shadow-xl'
                                    : 'border-black/10 hover:border-black/20'
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    fill
                                    className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                                    sizes="64px"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    )
}
