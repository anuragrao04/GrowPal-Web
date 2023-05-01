<script>
    import "../app.css";

    const logoAddress = "/images/logo.png";

    let showMenu = false;

    function toggleNavbar() {
      showMenu = !showMenu;
    }

    function navBarItemClicked(){
      if(showMenu){
        toggleNavbar()
      }
    }
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet">

<nav class="md:flex md:justify-between md:items-center bg-navbar-slate pr-5 pl-5">

    <div class="flex items-center justify-between pt-5 pb-5 text-xl text-blue-200">
        <a
        class=""
        href="/">
        GrowPal
        </a>

        
        <!-- Mobile menu button -->
        <div on:click={toggleNavbar} on:keydown={toggleNavbar} class="flex md:hidden">
        
        <button
            type="button"
            class="text-white hover:text-munsoc-gold focus:outline-none focus:text-munsoc-gold"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </button>
        </div>
    </div>

    <!-- Mobile Menu open: "flex", Menu closed: "hidden" -->
    <div
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 font-semibold {showMenu
        ? 'flex pb-5'
        : 'hidden'}"
    >
        <a class="text-white hover:text-blue-200 text-center inline-block no-underline" href="/" on:click={navBarItemClicked}>HOME</a>
        <a class="text-white hover:text-blue-200 text-center inline-block no-underline {showMenu ? 'pt-5' : ''}" href="/sell" on:click={navBarItemClicked}>SELL</a>
        <a class="text-white hover:text-blue-200 text-center inline-block no-underline {showMenu ? 'pt-5' : ''}" href="/about" on:click={navBarItemClicked}>ABOUT</a>
    </div>
</nav>



<slot />



<style>
    *{
        font-family: 'Oxygen', sans-serif;
    }
    nav{
        background-color: rgb(30,30,30);
        margin-bottom: 10px;
    }
    
</style>