<script lang="ts">
   import {cart, removeFromCart } from '$lib/store/cart';
   import { slide } from 'svelte/transition';

   let cartItems = $cart.items;
</script>

<style>
   .cart-items-container {
      padding: 1rem;
      max-width: 350px;
      width: 100%;
      position: absolute;
      right: 1.5rem;
      top: 80px;
      background-color: white;
      box-shadow: var(--box-shadow);
      border-radius: 8px;
      z-index: 2;
   }

   .cart-items-container > p {
      font-weight: 700;
      padding: 1rem;
      padding-top: 0;
      border-bottom: 1px solid rgb(var(--color-black), 0.5);
   }

   .cart-items-container > button {
      width: 100%;
      background-color: rgb(var(--color-primary));
      color: white;
      text-align: center;
      padding: 1rem;
      margin-top: 1.5rem;
   }

   .cart-item-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
   }

   .cart-item-image-container {
      width: 3rem;
      height: 3rem;
      border-radius: 5px;
      overflow: hidden;
   }

   .cart-item-image-container > img {
      object-fit: contain;
   }

   .cart-item-data-container {
      flex: 1;
   }

   .empty-cart-container {
      text-align: center;
      display: grid;
      place-items: center;
      height: 100px;
   }
</style>

<div class="cart-items-container" transition:slide>

   <p>Cart</p>

   {#if $cart.count <= 0}
      <div class="empty-cart-container">
         <p>Your cart is empty.</p>
      </div>

      {:else}
      
      {#each cartItems as cartItem }
         <div class="cart-item-wrapper">
            <div class="cart-item-image-container">
               <img src={cartItem.image} alt="product-thumbnail">
            </div>
            <div class="cart-item-data-container">
               <p>{cartItem.title}</p>
               <p>
                  <span>${cartItem.price} x {$cart.count}</span> 
                  <span><strong>${(cartItem.price * $cart.count).toLocaleString()}</strong></span> </p>
            </div>
            <button 
               aria-label="remove item from cart button"
               on:click={removeFromCart}
            >
               <img src="./icon-delete.svg" alt="delete-icon">
            </button>
         </div>
      {/each}
      <button>Checkout</button>
   {/if}
   

</div>