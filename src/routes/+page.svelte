<script lang="ts">
   import {updateCart} from '$lib/store/cart'
   
   const images = [
      'image-product-1.jpg',
      'image-product-2.jpg', 
      'image-product-3.jpg', 
      'image-product-4.jpg'
   ]

   const productData = {
      id: 'ABC123',
      title: 'Fall Limited Edition Sneakers',
      description: "These low-profile sneakers are your perfect casual wear companion, Featuring durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 500.00,
      image: 'image-product-1.jpg'
   }

   
   let count = 1;
   let src = images[0];
   
   const addToCart = () => {
      updateCart(
         count,
         [
            {
               id: productData.price,
               title: productData.title,
               price: productData.price,
               image: productData.image
            }
         ]
      )
   }
</script>

<style global>
   @import '../styles/app.css';

   .main-container {
      max-width: var(--max-width);
      margin: 3rem auto;
      padding: var(--app-padding);
   }

   .flex-container {
      display: flex;
      align-items: center;
      gap: 5%;
      width: 80%;
      margin: 0 auto;
   }

   .preview-container {
      width: 25rem;
      border-radius: 2rem;
      aspect-ratio: 1;
      overflow: hidden;
   }

   .preview-container > img {
      object-fit: cover;
   }

   .product-images-flex-container {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 1rem;
   }

   .product-images-flex-container > button {
      width: 5rem;
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: 1rem;

      &:disabled {
      opacity: 0.5;
      border: 5px solid rgb(var(--color-primary));
      cursor: not-allowed;
   }
   }

   .brand {
      font-weight: 700;
      color: rgb(var(--color-primary));
   }

   .product-name {
      font-weight: 700;
      margin-bottom: 1rem;
      font-size: 3rem;
   }

   .price-flex-container {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 1.5rem;
      margin-top: 1rem;
   }

   .percentage-off {
      background-color: rgb(var(--color-primary), 0.2);
      border: rgb(var(--color-primary));
      color: rgb(var(--color-primary));
      font-size: 0.85rem;
      padding: 0 5px;
      border-radius: 5px;
   }

   .slashed-price {
      color: rgb(var(--color-black), 0.5);
      text-decoration: line-through;
   }

   .counter {
      display: flex;
      align-items: center;
      padding: 8px;
      background-color: rgb(var(--color-black),0.05);
      width: max-content;
      border-radius: 10px;
   }

   .actions-container {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
   }

   .counter > * {
      padding: 10px 1rem;
   }

   .counter > input {
      background-color: transparent;
      outline: none;
      border: none;
      width: 100%;
      max-width: 100px;
      font-size: 1rem;
      font-weight: 700;
      text-align: center;

      &[type='number']::-webkit-inner-spin-button,
      &[type='number']::-webkit-outer-spin-button {
       display: none;
     }
   }

   .add-to-cart-btn {
      background-color: rgb(var(--color-primary));
      color: white;
      padding: 10px 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex: 1;
      width: 100%;
      border-radius: 10px;
      border: none;
   }

</style>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Product Page Description" />
</svelte:head>

<main class="main-container">
   <div class="flex-container">
   <div>
      <div class="preview-container">
         <img {src} alt='product preview'>
      </div>

      <div class="product-images-flex-container">

         {#each images as productImage }
         <button 
            disabled={src === productImage}
            on:click={() => src = productImage}
         >
            <img src={productImage} alt="product">
         </button>
         
         {/each}
      </div>
</div>
      <div>
   <p class="brand">SNEAKER COMPANY</p>
   <p class="product-name">{productData.title}</p>
   <p>{productData.description}</p>

   <div class="price-flex-container">
      <p>${productData.price}</p>
      <p class="percentage-off">50%</p>
   </div>
   <p class="slashed-price">$1000.00</p>

   <div class="actions-container">
      <div class="counter">
         <button 
            disabled={count <= 1}
            on:click={() => count -= 1}   
         >
            <img src="./icon-minus.svg" alt="minus-icon">
         </button>

         <input type="number" min={1} bind:value={count}>

         <button on:click={() => count += 1} >
            <img src="./icon-plus.svg" alt="plus-icon">
         </button>
      </div>

      <button class="add-to-cart-btn" on:click={addToCart}>
         <img src="./icon-cart-white.svg" alt="cart-icon">
         <p>Add to cart</p>
      </button>
   </div>
</div>
   </div>
</main>
