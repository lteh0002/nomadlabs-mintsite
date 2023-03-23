<script>
  import { onMount } from "svelte";
  import About from "./About.svelte";
  import Contact from "./Contact.svelte";
  import Footer from "./Footer.svelte";
  let isNavOpen = false;

  function toggleNav() {
    isNavOpen = !isNavOpen;
  }

  onMount(async () => {
    const header = document.getElementById("nav");
    console.log(header)
    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        header.classList.add("background");
      } else {
        header.classList.remove("background");
      }
    };
  });
</script>

<div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <nav class={isNavOpen ? "open" : ""}>
    <div
      id="sidebar"
      on:click={toggleNav}
      class="flex items-center justify-end gap-[16px] text-white cursor-pointer pt-[35px] pr-[70px]"
    >
      <h1 id="menu">CLOSE</h1>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.1749 0.0249939L0.0249023 1.17499L13.8499 15L0.0249023 28.825L1.1749 29.975L14.9999 16.15L28.8249 29.975L29.9749 28.825L16.1499 15L29.9749 1.17499L28.8249 0.0249939L14.9999 13.85L1.1749 0.0249939Z"
          fill="#BBBBBB"
        />
      </svg>
    </div>
    <div class="pl-[60px]">
      <ul class="text-white pt-[100px] text-[48px]">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Mint</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>

  <div>
    <header
      id="nav"
      class="h-[100px] flex items-center justify-between px-[70px] z-50 sticky-nav background"
    >
      <img
        id="logo"
        class="max-w-[40px] max-h-[40px]"
        src="NL-BW.png"
        alt="nomad-logo"
      />

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={toggleNav}
        class="flex items-center gap-[16px] text-white cursor-pointer"
      >
        <h1 id="menu">MENU</h1>
        <svg
          width="40"
          height="14"
          viewBox="0 0 40 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6_258)">
            <path
              d="M0 0.483328C0.170715 0.303867 0.412765 0.162671 0.696778 0.0768756C0.980791 -0.00891991 1.29456 -0.0356271 1.6 -4.90062e-06H38.48C38.7854 -0.0356271 39.0992 -0.00891991 39.3832 0.0768756C39.6672 0.162671 39.9093 0.303867 40.08 0.483328V0.799995C39.9093 0.979457 39.6672 1.12065 39.3832 1.20645C39.0992 1.29224 38.7854 1.31895 38.48 1.28333C26.16 1.27222 13.8667 1.27222 1.6 1.28333C1.29456 1.31895 0.980791 1.29224 0.696778 1.20645C0.412765 1.12065 0.170715 0.979457 0 0.799995L0 0.483328Z"
              fill="white"
            />
            <path
              d="M40 7.21049C39.8283 7.38894 39.5858 7.52902 39.3018 7.61381C39.0179 7.69859 38.7047 7.72446 38.4 7.68827H1.6C1.29535 7.72446 0.982125 7.69859 0.698186 7.61381C0.414247 7.52902 0.171749 7.38894 0 7.21049V6.88827C0.170715 6.7088 0.412765 6.56761 0.696778 6.48181C0.980791 6.39602 1.29456 6.36931 1.6 6.40493C13.8987 6.40493 26.192 6.40493 38.48 6.40493C38.7854 6.36931 39.0992 6.39602 39.3832 6.48181C39.6672 6.56761 39.9093 6.7088 40.08 6.88827L40 7.21049Z"
              fill="white"
            />
            <path
              d="M40 13.6104C39.8293 13.7899 39.5872 13.9311 39.3032 14.0169C39.0192 14.1027 38.7054 14.1294 38.4 14.0938C26.1333 14.0826 13.8667 14.0826 1.6 14.0938C1.29456 14.1294 0.980791 14.1027 0.696778 14.0169C0.412765 13.9311 0.170715 13.7899 0 13.6104L0 13.2938C0.170715 13.1143 0.412765 12.9731 0.696778 12.8873C0.980791 12.8015 1.29456 12.7748 1.6 12.8104H38.48C38.7854 12.7748 39.0992 12.8015 39.3832 12.8873C39.6672 12.9731 39.9093 13.1143 40.08 13.2938L40 13.6104Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_258">
              <rect width="40" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </header>
    <div id="landingpage" class="flex flex-col justify-between sticky">
      <div class="flex flex-col items-center justify-center flex-1 gap-[48px]">
        <img class="w-[362px] h-[88px]" src="nl-fulllogo.png" alt="" />
        <h1 id="desc">Navigating the Web 3 Universe</h1>
      </div>

      <div class="flex flex-col items-center gap-[16px] mb-[24px]">
        <svg
          class="jump"
          width="24"
          height="50"
          viewBox="0 0 24 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6_267)">
            <path
              d="M13.6669 44.3031L20.9502 37.2321C21.2464 36.9084 21.6604 36.708 22.1056 36.6729C22.5508 36.6378 22.9928 36.7705 23.3393 37.0435C23.6857 37.3165 23.9099 37.7085 23.9649 38.1377C24.0199 38.567 23.9015 39.0002 23.6345 39.3469C23.5238 39.4819 23.3939 39.6031 23.2689 39.7288L13.4216 49.2593C12.4018 50.2468 11.4974 50.2468 10.5064 49.2593L0.58697 39.6636C-0.40401 38.6994 -0.0961325 37.2228 1.18829 36.8222C1.51254 36.7151 1.86254 36.7049 2.19283 36.793C2.52311 36.881 2.81842 37.0632 3.04037 37.3159C5.27729 39.4913 7.52864 41.6573 9.77518 43.8373C9.89486 43.9673 10.0042 44.1059 10.1023 44.2518L10.2466 44.1773V1.82589C10.2466 0.680002 10.9826 -0.0373445 12.0891 -7.97192e-05C12.5023 0.0279802 12.8912 0.199303 13.1845 0.482485C13.4779 0.765667 13.656 1.14173 13.6862 1.54175C13.6862 1.73273 13.6862 1.92371 13.6862 2.1147V44.3031H13.6669Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_267">
              <rect width="24" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <h1 id="scroll-prompt" class="text-white">SCROLL DOWN</h1>
      </div>
    </div>
    <About />
    <Contact />
    <Footer />
  </div>
</div>

<style>
  #landingpage {
    min-height: 100vh;
    height: 100%;
    background-image: url("/landing-bg.jpeg");
    background-position: center;
    background-size: cover;
  }

  #desc {
    font-family: "Oswald", sans-serif;
    color: white;
    font-size: 48px;
  }

  #scroll-prompt {
    font-family: "Oswald", sans-serif;
  }

  .jump {
    animation: jump 0.5s infinite alternate;
  }

  @keyframes jump {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-10px);
    }
  }

  #menu {
    font-family: "Oswald", sans-serif;
    cursor: pointer;
    font-size: 16px;
  }

  nav {
    position: fixed;
    top: 0;
    right: -60%;
    width: 60%;
    height: 100%;
    background-color: #333;
    transition: all 0.5s ease-in-out;
    z-index: 100;
  }

  nav.open {
    right: 0;
  }

  .sticky-nav {
    position: fixed;
    width: 100vw;
    top: 0;
    transition: all 0.5s ease-in-out;
  }

  .background {
    background-color: #111111;
  }

  /* #background {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    margin: auto;
    background-position: center;
    background-repeat: no-repeat;
  } */
</style>
