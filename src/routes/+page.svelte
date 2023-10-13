<script>
import { user } from "$lib/store";
import { goto } from "$app/navigation";
import { onMount } from "svelte";
import { db } from '../lib/firebase.js';
import { getDocs, collection } from "firebase/firestore";

export let products = [
    {
        name : "Tupperware Bottle",
        price : 100,
        description : "Color Color Bottle",
        img : "https://cdn.discordapp.com/attachments/1080892669313699881/1086561873882787840/LTEtMGZhNTguanBn.png",
        seller_name : "cupcake",
        seller_upi : "cupcake@upi",
        seller_email : "cupcake@gmail.com",
        seller_number : 1234567890,
        rating: 5,
        buy_link: "#",
        community: "Prestige Banana",

    },
    {
        name : "Tupperware Bottles",
        price : 399,
        description : "Five Color Color Bottles",
        img : "https://cdn.discordapp.com/attachments/1080892669313699881/1086544590171025448/Zw.png",
        seller_name : "cupcake",
        seller_upi : "cupcake@upi",
        seller_email : "cupcake@gmail.com",
        seller_number : 1234567890,    
        rating: 4,
        buy_link: "#",
        community: "Prestige Banana",
    },
    {
        name : "Earrings",
        price : 100,
        description : "Color Color Earrings",
        img : "https://cdn.discordapp.com/attachments/1080892669313699881/1086547508739715072/54083516_2173371206245982_6392621714255291357_n.png",
        seller_name : "banana",
        seller_upi : "banana@upi",
        seller_email : "banana@gmail.com",
        seller_number : 1239567890,
        rating: 4,
        buy_link: "#",
        community: "Prestige Banana",
    },
    {
        name : "Necklace",
        price : 150,
        description : "Color Color Necklace",
        img : "https://cdn.discordapp.com/attachments/1080892669313699881/1086548465716301915/a177d4f5ab78c36bc44d216d6ab271b4.png",
        seller_name : "apple101",
        seller_upi : "apple101@upi",
        seller_email : "apple101@gmail.com",
        seller_number : 1230567890,
        rating: 3,
        buy_link: "#",
        community: "Prestige Banana",
    },
    {
        name : "Rings",
        price : 75,
        description : "Color Color Rings",
        img : "https://cdn.discordapp.com/attachments/1080892669313699881/1086544590171025448/Zw.png",
        seller_name : "cupcake",
        seller_upi : "cupcake@upi",
        seller_email : "cupcake@gmail.com",
        seller_number : 1234567890,    
        rating: 4,
        buy_link: "#",
        community: "Prestige Banana",
    },
  ];

onMount(async () => {
    if (!$user) {
        goto("/login");
    } else {
        // Read from Firestore and update products
        const productsRef = collection(db, "products");
        const productsSnapshot = await getDocs(productsRef);
        products = productsSnapshot.docs.map((doc) => doc.data());
    }
});


</script>


<body>

<h1 class="text-center mt-10 pb-10 text-white md:text-3xl text-xl "> Hey! {$user?.displayName}. Welcome to GrowPal
<button class="border-4 rounded-md p-3 px-5 text-white text-xl m-3" on:click={() => {
    $user = null;
    goto("/login");
}}>Logout</button>
</h1>

<div class="card-wrapper ml-5 mr-5">
    {#each products as product}
    <div
    class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md text-center inline-block p-8 pt-4 prose prose-invert">
        
    <div class="flex justify-center">
        <img src={product.img} alt="" class="w-11/12 h-auto rounded-md max-w-md" />
    </div>

    <div class="card-content">
        <h1 class="pr-10 pl-10">
            
            {product.name}
            
        </h1>
        <h3 class="pl-10 pr-10"> {product.description}</h3>
        
        <h3 class="pl-10 pr-10"> ₹{product.price}</h3>
        
        <button class="buy-button text-blue-200 hover:border-blue-200" onclick="window.open('{product.buy_link}', '_blank')">
            BUY NOW
        </button>
    </div>
</div>
{/each}

</div>

</body>
<style>
    *{
        font-family: 'Oxygen', sans-serif;
    }
    body {
        background-color: rgb(30, 30, 30);
    }
    
    .buy-button{
        width:80%;
        padding: 8px;
        font-size:x-large;
        font-weight: bold;
        background-color: var(--button-color);
        border-radius: 6px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transition: 0.5s;
        background-color: #292A35;
        border: 5px solid;
    }


    .card {
        /* Add shadows to create the "card" effect */
        box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
        transition: 0.5s;
        margin-bottom: 30px;
        margin-left: 10px;
        margin-right: 10px;
        border: 5px solid #202c40;
        cursor: pointer;
        display: flex;
        background-color: #292A35;
        justify-content: center;
        flex-direction: column;
        border: 5px solid var(--body-slate);
    }
    .card:hover {
        border: 5px solid var(--munsoc-gold);
        box-shadow: 0 32px 64px rgba(0,0,0,0.5);
    }
    .card-content {
        padding-bottom: 10px;
    }

    .buy-button:hover{
        border-color: #FFFFFF;
        box-shadow: 0 16px 32px rgba(0,0,0,0.5);
    }

    .card-wrapper { 
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 20px;
    }

    @media (max-width: 420px) {
        .card-wrapper {
        display:block;
        align-items: center;
        }
        .card{
        display:block;
        }
    } 

</style>
