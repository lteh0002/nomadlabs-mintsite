<script>
  import { navigation } from "./../utils/nav.js";
  let isNavOpen = false;
  function toggleNav() {
    isNavOpen = !isNavOpen;
  }
</script>

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
      <li>
        <a class={$navigation == "home" ? "text-[white]" : "text-[grey]"} href="/"
          >Home <span class="{$navigation == "home" ? 'inline-block' : "hidden"}">•</span></a
        >
      </li>
      <li>
        <a
          class={$navigation == "about" ? "text-[white]" : "text-[grey]"}
          href="/">About <span class="{$navigation == "about" ? 'inline-block' : "hidden"}">•</span></a
        >
      </li>
      <li>
        <a
          class={$navigation == "service" ? "text-[white]" : "text-[grey]"}
          href="/ourservices">Services <span class="{$navigation == "service" ? 'inline-block' : "hidden"}">•</span></a
        >
      </li>
      <li>
        <a
          class={$navigation == "mint" ? "text-[white]" : "text-[grey]"}
          href="/mint">Mint <span class="{$navigation == "mint" ? 'inline-block' : "hidden"}">•</span></a
        >
      </li>
      <li>
        <a
          class={$navigation == "contact" ? "text-[white]" : "text-[grey]"}
          href="/contact">Contact <span class="{$navigation == "contact" ? 'inline-block' : "hidden"}">•</span></a
        >
      </li>
    </ul>
  </div>
</nav>

<header
  id="nav"
  class="h-[100px] flex items-center justify-around px-[70px] z-50 sticky-nav background"
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

<style>
  nav {
    position: fixed;
    top: 0;
    right: -50%;
    width: 50%;
    height: 100%;
    background-color: #333;
    transition: all 0.5s ease-in-out;
    z-index: 100;
  }

  nav.open {
    right: 0;
  }

  .sticky-nav {
    position: relative;
    width: 100vw;
    top: 0;
    transition: all 0.5s ease-in-out;
  }

  .background {
    background-color: #111111;
  }
</style>
