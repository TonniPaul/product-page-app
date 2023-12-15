<script lang="ts">
   import CartItems from '$lib/component/cart-item-card/cart-item-card.svelte';
   import {cart } from '$lib/store/cart'
   let showCart = false;
   
   let cartCount = $cart.count 

   const navItems = [
      {
         label: 'Collections',
         path: '#'
      },
      {
         label: 'Men',
         path: '#'
      },
      {
         label: 'Women',
         path: '#'
      },
      {
         label: 'About',
         path: '#'
      },
      {
         label: 'Contact',
         path: '#'
      },
   ];
</script>

<style>
   header {
      box-shadow: var(--box-shadow);
      position: sticky;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 3;
   }
   
   nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--app-padding);
      gap: 2rem;
      max-width: var(--max-width);
      margin: 0 auto;
   }

   .menu-btn {

      @media screen and (min-width: 56.25em) {
         display: none;
      }
   }

   .nav-items {
      display: flex;
      flex: 1;
      gap: 1rem;
   }

   .nav-item {
      padding: 1rem;
      font-weight: 500;
      display: block;
   }

   .profile-btn {
      width: 3.15rem;
      height: 3.15rem;
      border-radius: 50%;
      overflow: hidden;
   }   
</style>


<header>
   <nav>
      <button class="menu-btn">
         <img src="./icon-menu.svg" alt="menu icon">
      </button>

      <a href="/">
         <img src="./logo.svg" alt="">
      </a>
      
      <ul class="nav-items">
         {#each navItems as item }
            <li>
               <a href={item.path} class="nav-item">{item.label}</a>
            </li>     
         {/each}

      </ul>
      
      <button 
         aria-label="view cart items button"
         class="cart-btn"
         on:click={() => showCart = !showCart}
      >
         <img src="./icon-cart.svg" alt="cart-icon">
      </button>

      <button 
         aria-label="user profile icon" 
         class="profile-btn"
      >
         <img src="./image-avatar.png" alt="cart-icon">
      </button>

      {#if showCart}
         <CartItems />
      {/if}
   </nav>
</header>

<main>
   <slot />
</main>