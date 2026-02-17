import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product } from '@/types'

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, size: string, color: string, quantity?: number) => void
  removeItem: (productId: string, size: string, color: string) => void
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, size, color, quantity = 1) => {
        const items = get().items
        const existingItemIndex = items.findIndex(
          item => item.product.id === product.id &&
                  item.size === size &&
                  item.color === color
        )

        if (existingItemIndex > -1) {
          const newItems = [...items]
          newItems[existingItemIndex].quantity += quantity
          set({ items: newItems })
        } else {
          set({ items: [...items, { product, size, color, quantity }] })
        }
      },

      removeItem: (productId, size, color) => {
        set({
          items: get().items.filter(
            item => !(item.product.id === productId &&
                     item.size === size &&
                     item.color === color)
          )
        })
      },

      updateQuantity: (productId, size, color, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, size, color)
          return
        }

        const items = get().items
        const itemIndex = items.findIndex(
          item => item.product.id === productId &&
                  item.size === size &&
                  item.color === color
        )

        if (itemIndex > -1) {
          const newItems = [...items]
          newItems[itemIndex].quantity = quantity
          set({ items: newItems })
        }
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) =>
          total + (item.product.price * item.quantity), 0
        )
      },
    }),
    {
      name: 'forge-cart-storage',
    }
  )
)
