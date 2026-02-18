import { CartItem } from '@/types'

const WHATSAPP_NUMBER = '7020862006' // Placeholder for Forge Piece Mumbai Hub

export const generateWhatsAppLink = (items: CartItem[], userDetails: { name: string; email: string; phone: string }) => {
    const itemDetails = items
        .map(
            (item) =>
                `• ${item.product.name} (${item.size}, ${item.color}) x${item.quantity} - ₹${item.product.price * item.quantity}`
        )
        .join('\n')

    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

    const message = `
*NEW FORGE PIECE ORDER* 🕊️

*Customer Details:*
Name: ${userDetails.name}
Email: ${userDetails.email}
Phone: ${userDetails.phone}

*Order Summary:*
${itemDetails}

*Total:* ₹${total}

---
"Forging a mindset, not just a fit."
`.trim()

    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}
