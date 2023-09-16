import { defineStore } from 'pinia';

export const useShopStore = defineStore('shop', {
    state: () => ({
        products: [],
        cart: [],
    }),
    actions: {
        addToCart(product) {
            const existingProduct = this.cart.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
        },
        resetCart() {
            this.cart = []
        }
    },
});