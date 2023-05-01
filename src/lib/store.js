import { writable } from "svelte/store";
export var products = writable('products');

products.set([
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
]);

