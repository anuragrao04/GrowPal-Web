<script>
    // import products from './../+page.svelte';
    //import { getContext, setContext } from 'svelte';

    // let products = getContext('products');
    // console.log(typeof products);
    // console.log(products);
    import { addDoc, collection } from "firebase/firestore";
    import { db } from '../../lib/firebase.js';
    import { storage } from "../../lib/firebase";
    import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
    let products = [
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
];
    
    async function onSubmit(e) {
        const formData = new FormData(e.target);
        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        const file = e.target[0].files[0];
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                });
            }
        );
        data['img'] = await getDownloadURL(uploadTask.snapshot.ref);
        // add to database
        await addDoc(collection(db, "products"), data);

        
        document.getElementById("SellForm").reset();
        window.open('/');
        // setContext('products', products);
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet">

<body>
    <h1>SELL YOUR PRODUCT</h1>
  
    <form id="SellForm" on:submit|preventDefault={onSubmit}>
        <div class="form-control">
            <label for="name" id="label-name">
                Name:
            </label>
            <input type="text" id="name" name = "name"
                placeholder="Enter your product's name" />
        </div>
  
        <div class="form-control">
            <label for="price" id="label-price">
                Price:
            </label>
            <input type="number" id="price" name = "price"
                placeholder="Enter your listing price for the product" />
        </div>

        <div class="form-control">
            <label for="details">
                A brief description of your product:
            </label>
            <textarea name="description" id="details" placeholder="Enter your product details here"/>
        
        </div>

        <div class="form-control">
            <label for="details">
                URL of the image of your product:
            </label>
            <input name="img" id="img" type = "file"/>
        </div>
  
        <div class="form-control">
            <label for="seller" id="label-seller"> 
                Now, for a few details about the seller - you!
            </label>
        </div>

        <div class="form-control">
            <label for="seller" id="label-seller">
                Your Name:
            </label>
            <input type="text" id="seller_name" name = "seller_name"
                placeholder="Enter your name"
                required/>
        </div>

        <div class="form-control">
            <label for="seller" id="label-seller">
                Phone Number:
            </label>
            <input type="tel" id="phone number" name = "seller_number"
                placeholder="Enter your phone number"
                required/>
        </div>

        <div class="form-control">
            <label for="seller" id="label-seller">
                Email ID:
            </label>
            <input type="email" id="Email" name = "seller_email"
                placeholder="Enter your email ID"
                required/>
        </div>
        
        <div class="form-control">
            <label for="seller" id="label-seller">
                Your Community Name:
            </label>
            <input type="text" id="community" name = "community"
                placeholder="Enter the name of your community"
                required/>
        </div>

        <div class="form-control">
            <label for="seller" id="label-seller">
                Payment Details:
            </label>
            <input type="text" id="UPI" name = "seller-upi"
                placeholder="Enter your UPI ID"
                required/>
        </div>

        <button type="submit" value="submit">
            Submit
        </button>
    </form>
</body>

<style>
    h1{
        font-size: x-large;
    }

    body {
        background-color: rgb(30,30,30);
        /* #0B1320; */
        font-family: Oxygen;
        color: #FFFFFF;
        text-align: center;
    }

    form {
        background-color: #292A35;
            /* #2C3955; */
        max-width: 500px;
        margin: 50px auto;
        padding: 30px 20px;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
    }

    .form-control {
        text-align: left;
        margin-bottom: 25px;
    }

    .form-control label {
        display: block;
        margin-bottom: 10px;
    }

    .form-control input, .form-control textarea {
        background-color: #c0c0c0;
        border: 1px solid #777;
        border-radius: 2px;
        font-family: inherit;
        padding: 10px;
        display: block;
        width: 95%;
        color: #000000;
    }

    .form-control input::placeholder, .form-control textarea::placeholder {
        color: #000000;
        opacity: 1;
    }

    button {
        background-color: #2C3955;
        color: #FFFFFF;
        border: 1px solid #777;
        border-radius: 2px;
        font-family: inherit;
        font-size: 21px;
        display: block;
        width: 100px;
        margin-top: 50px;
        margin-bottom: 20px;
        position: relative;
        left: 40%;
        transition: all 0.5s ease-in-out;
    }

    button:hover {
        background-color: #0B1320;
        transition: all 0.5s ease-in-out;
    }

    input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
  
        input[type=number] {
            -moz-appearance: textfield;
        }
</style>