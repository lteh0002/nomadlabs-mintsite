<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { navigation, hideAccordionButton } from "./../utils/nav.js";
  let isPageTop = true;
  let isNavOpen = false;

  function toggleNav() {
    const overlay = document.getElementById("overlay");
    isNavOpen = !isNavOpen;
    if (isNavOpen == true) {
      hideAccordionButton.hide()
      overlay.style.display = "block";
    } else if (isNavOpen == false) {
      hideAccordionButton.default()
      overlay.style.display = "none";
    }
    closeOverlay();
  }

  function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
      isNavOpen = false;
    });
  }

  function backHome() {
    goto("/");
  }

  onMount(async () => {
    const header = document.getElementById("nav");
    if (window.pageYOffset > 0) {
      header.classList.add("background");
    } else {
      header.classList.remove("background");
    }

    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        isPageTop = false;
      } else {
        isPageTop = true;
      }

      if (isPageTop) {
        header.classList.remove("background");
      } else {
        header.classList.add("background");
      }
    };
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={closeOverlay} id="overlay" />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav class='{isNavOpen ? "open" : ""} relative'>
  <div class="absolute top-[30px] sm:right-[70px] right-[30px] inline">
    <div
    id="sidebar"
    on:click={toggleNav}
    class="flex items-center justify-end gap-[16px] text-white cursor-pointer"
  >
    <h1 id="menu">CLOSE</h1>
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.1749 0.0249939L0.0249023 1.17499L13.8499 15L0.0249023 28.825L1.1749 29.975L14.9999 16.15L28.8249 29.975L29.9749 28.825L16.1499 15L29.9749 1.17499L28.8249 0.0249939L14.9999 13.85L1.1749 0.0249939Z"
        fill="#BBBBBB"
      />
    </svg>
  </div>

  </div>

  <div class="sm:pl-[60px] pl-[30px]">
    <ul class="text-white sm:mt-[100px] mt-[80px] sm:text-[48px] text-[30px] flex flex-col gap-[10px]">
      <li>
        <a
          class='{$navigation == "home" ? "text-[white]" : "text-[grey]"} nav-selection'
          href="/"
          >Home <span class={$navigation == "home" ? "inline-block" : "hidden"}
            >•</span
          ></a
        >
      </li>
      <li>
        <a
          class='{$navigation == "about" ? "text-[white]" : "text-[grey]"} nav-selection'
          href="/about"
          >About <span
            class={$navigation == "about" ? "inline-block" : "hidden"}>•</span
          ></a
        >
      </li>
      <li>
        <a
          class='{$navigation == "service" ? "text-[white]" : "text-[grey]"} nav-selection'
          href="/ourservices"
          >Services <span
            class={$navigation == "service" ? "inline-block" : "hidden"}>•</span
          ></a
        >
      </li>
      <li>
        <a
          class='{$navigation == "mint" ? "text-[white]" : "text-[grey]"} nav-selection'
          href="/mint"
          >Mint <span class={$navigation == "mint" ? "inline-block" : "hidden"}
            >•</span
          ></a
        >
      </li>
      <li>
        <a
          class='{$navigation == "contact" ? "text-[white]" : "text-[grey]"} nav-selection'
          href="/contact"
          >Contact <span
            class={$navigation == "contact" ? "inline-block" : "hidden"}>•</span
          ></a
        >
      </li>
    </ul>
  </div>

  <div class="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] sm:ml-[60px] ml-[30px] absolute bottom-[120px] sm:bottom-[150px]">
    <a href="https://discord.com/invite/PQqmXUYYfD" target="_blank">
      <div class="flex justify-center gap-[20px] items-center border min-w-[180px] min-h-[50px] h-[50px] social-button">
        <svg width="28" height="21" viewBox="0 0 28 21" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.3788 2.98999C23.9732 2.37739 23.399 1.90879 22.718 1.63639C21.2396 1.04359 19.9682 0.647589 18.8306 0.424389C18.0326 0.268389 17.2424 0.660789 16.8626 1.39999L16.7678 1.58479C15.9254 1.49179 15.0308 1.46059 14.012 1.48639C12.9674 1.46119 12.0698 1.49179 11.2262 1.58479L11.132 1.39999C10.7522 0.660789 9.96078 0.268989 9.16458 0.424989C8.02698 0.647589 6.75498 1.04359 5.27718 1.63699C4.59678 1.90939 4.02258 2.37739 3.61638 2.99059C0.783779 7.26919 -0.326221 11.8844 0.223379 17.1008C0.242579 17.2838 0.344579 17.4476 0.499979 17.5454C2.67918 18.9194 4.56498 19.8602 6.43458 20.507C7.21638 20.78 8.08338 20.4746 8.54478 19.7696L9.36738 18.509C8.71218 18.2618 8.07258 17.969 7.45938 17.6192C7.17198 17.4554 7.07178 17.0888 7.23558 16.8014C7.39938 16.5128 7.76598 16.4114 8.05398 16.5776C9.87858 17.618 11.9414 18.1682 14.0192 18.1682C16.097 18.1682 18.1598 17.618 19.9844 16.5776C20.2718 16.4114 20.6384 16.5128 20.8028 16.8014C20.9666 17.0888 20.8664 17.4554 20.579 17.6192C19.9454 17.981 19.283 18.2822 18.6044 18.5336L19.451 19.7948C19.7996 20.3138 20.375 20.609 20.9678 20.609C21.161 20.609 21.356 20.5772 21.5456 20.5124C23.4206 19.865 25.31 18.923 27.494 17.546C27.6494 17.4482 27.7514 17.2838 27.7706 17.1014C28.3214 11.8844 27.2114 7.26859 24.3788 2.98999ZM10.1648 13.3898C9.00918 13.3898 8.05818 12.1724 8.05818 10.6928C8.05818 9.21319 9.00918 7.99579 10.1648 7.99579C11.3204 7.99579 12.2714 9.21319 12.2714 10.6928C12.2714 12.1724 11.3204 13.3898 10.1648 13.3898ZM17.9606 13.3742C16.8158 13.3742 15.8738 12.1496 15.8738 10.661C15.8738 9.17239 16.8158 7.94779 17.9606 7.94779C19.1054 7.94779 20.0474 9.17239 20.0474 10.661C20.0474 12.1496 19.1054 13.3742 17.9606 13.3742Z" fill="#BBBBBB"/>
        </svg>
        <svg class="nav-socials" width="2" height="30" viewBox="0 0 2 30" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0L0.999999 15L0.999999 30" stroke="#BBBBBB" stroke-width="1.5"/>
        </svg>
        <p class="socials">Discord</p>  
      </div>
    </a>
    <a href="https://twitter.com/SpaceNomadsNFT" target="_blank">
      <div class="flex justify-center gap-[20px] items-center border min-w-[180px] min-h-[50px] h-[50px] social-button">
        <svg width="30" height="31" viewBox="0 0 30 31" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 7.45803C27.043 7.88303 26.015 8.16903 24.936 8.29803C26.038 7.63803 26.883 6.59303 27.281 5.34703C26.251 5.95803 25.109 6.40203 23.893 6.64203C22.92 5.60503 21.534 4.95703 20 4.95703C17.054 4.95703 14.666 7.34603 14.666 10.291C14.666 10.709 14.714 11.117 14.804 11.506C10.371 11.284 6.44102 9.16003 3.80902 5.93203C3.35102 6.72003 3.08802 7.63603 3.08802 8.61503C3.08802 10.465 4.02902 12.098 5.46002 13.054C4.58602 13.026 3.76302 12.786 3.04402 12.387C3.04402 12.41 3.04402 12.431 3.04402 12.454C3.04402 15.039 4.88202 17.195 7.32302 17.684C6.87602 17.806 6.40402 17.871 5.91702 17.871C5.57402 17.871 5.23902 17.837 4.91402 17.776C5.59302 19.895 7.56302 21.438 9.89702 21.481C8.07202 22.912 5.77202 23.765 3.27202 23.765C2.84202 23.765 2.41702 23.74 1.99902 23.69C4.36002 25.203 7.16302 26.086 10.176 26.086C19.988 26.086 25.352 17.958 25.352 10.909C25.352 10.678 25.347 10.448 25.337 10.219C26.38 9.46603 27.285 8.52703 28 7.45803Z" fill="#BBBBBB"/>
        </svg>               
        <svg class="nav-socials" width="2" height="30" viewBox="0 0 2 30" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0L0.999999 15L0.999999 30" stroke="#BBBBBB" stroke-width="1.5"/>
        </svg>
        <p class="socials">Twitter</p>  
      </div>
    </a>
  </div>

  <div class="footer-container gap-[15px] flex flex-col justify-center sm:flex-row text-[#BBBBBB] min-h-[100px] items-center px-[70px] sm:justify-between sm:gap-[0px] absolute bottom-0">
    <div class="first_div">
      <p class="text-[16px] min-w-[320px]">Copyright © 2023 Nomad Labs. All Rights Reserved.</p>
    </div>
    <div class="flex gap-[25px] second_div">
      <svg class="nav-socials" width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99992 18V10H5.33325V7.33333H7.99992V5.90133C7.99992 3.19 9.32059 2 11.5739 2C12.6533 2 13.2239 2.08 13.4939 2.11667V4.66667H11.9573C11.0006 4.66667 10.6666 5.17133 10.6666 6.194V7.33333H13.4699L13.0893 10H10.6666V18H7.99992Z" fill="#BBBBBB"/>
      </svg>
      <a href="https://twitter.com/SpaceNomadsNFT" target="_blank">
        <svg class="nav-socials" width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.6668 4.62467C18.0288 4.908 17.3434 5.09867 16.6241 5.18467C17.3588 4.74467 17.9221 4.048 18.1874 3.21734C17.5008 3.62467 16.7394 3.92067 15.9288 4.08067C15.2801 3.38934 14.3561 2.95734 13.3334 2.95734C11.3694 2.95734 9.77743 4.55 9.77743 6.51334C9.77743 6.792 9.80943 7.064 9.86943 7.32334C6.9141 7.17534 4.2941 5.75934 2.53943 3.60734C2.2341 4.13267 2.05876 4.74334 2.05876 5.396C2.05876 6.62934 2.6861 7.718 3.6401 8.35534C3.05743 8.33667 2.50876 8.17667 2.02943 7.91067C2.02943 7.926 2.02943 7.94 2.02943 7.95534C2.02943 9.67867 3.25476 11.116 4.8821 11.442C4.5841 11.5233 4.26943 11.5667 3.94476 11.5667C3.7161 11.5667 3.49276 11.544 3.2761 11.5033C3.72876 12.916 5.0421 13.9447 6.5981 13.9733C5.38143 14.9273 3.8481 15.496 2.18143 15.496C1.89476 15.496 1.61143 15.4793 1.33276 15.446C2.90676 16.4547 4.77543 17.0433 6.7841 17.0433C13.3254 17.0433 16.9014 11.6247 16.9014 6.92534C16.9014 6.77134 16.8981 6.618 16.8914 6.46534C17.5868 5.96334 18.1901 5.33734 18.6668 4.62467Z" fill="#BBBBBB"/>
        </svg>
      </a>
      <a  href="https://instagram.com/nomadlabs.space?igshid=YmMyMTA2M2Y=" target="_blank">
        <svg class="nav-socials" width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66536 2C4.0927 2 2 4.09464 2 6.66797V13.3346C2 15.9073 4.09464 18 6.66797 18H13.3346C15.9073 18 18 15.9054 18 13.332V6.66536C18 4.0927 15.9054 2 13.332 2H6.66536ZM14.6667 4.66667C15.0347 4.66667 15.3333 4.96533 15.3333 5.33333C15.3333 5.70133 15.0347 6 14.6667 6C14.2987 6 14 5.70133 14 5.33333C14 4.96533 14.2987 4.66667 14.6667 4.66667ZM10 6C12.206 6 14 7.794 14 10C14 12.206 12.206 14 10 14C7.794 14 6 12.206 6 10C6 7.794 7.794 6 10 6ZM10 7.33333C9.29276 7.33333 8.61448 7.61428 8.11438 8.11438C7.61428 8.61448 7.33333 9.29276 7.33333 10C7.33333 10.7072 7.61428 11.3855 8.11438 11.8856C8.61448 12.3857 9.29276 12.6667 10 12.6667C10.7072 12.6667 11.3855 12.3857 11.8856 11.8856C12.3857 11.3855 12.6667 10.7072 12.6667 10C12.6667 9.29276 12.3857 8.61448 11.8856 8.11438C11.3855 7.61428 10.7072 7.33333 10 7.33333Z" fill="#BBBBBB"/>
        </svg>
      </a>
      <a href="https://youtube.com" target="_blank">
        <svg class="nav-socials" width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.99992 2.66666C7.20925 2.66666 3.58716 3.36588 3.58716 3.36588L3.57804 3.37629C2.30703 3.57957 1.33325 4.67174 1.33325 5.99999V9.99999V10.0013V14V14.0013C1.33449 14.6356 1.56183 15.2488 1.97445 15.7306C2.38707 16.2124 2.95794 16.5314 3.58455 16.6302L3.58716 16.6341C3.58716 16.6341 7.20925 17.3346 9.99992 17.3346C12.7906 17.3346 16.4127 16.6341 16.4127 16.6341L16.414 16.6328C17.0413 16.5342 17.6128 16.215 18.0257 15.7326C18.4387 15.2502 18.6659 14.6363 18.6666 14.0013V14V10.0013V9.99999V5.99999C18.6657 5.36541 18.4385 4.75196 18.0258 4.26986C17.6132 3.78777 17.0421 3.46862 16.4153 3.36978L16.4127 3.36588C16.4127 3.36588 12.7906 2.66666 9.99992 2.66666ZM7.99992 6.93228L13.3333 9.99999L7.99992 13.0677V6.93228Z" fill="#BBBBBB"/>
        </svg>
      </a>
      <svg class="nav-socials" width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7695 2.65626C16.5528 2.66582 16.3509 2.72894 16.1732 2.80079C16.0067 2.86777 15.3705 3.14062 14.3685 3.57032C13.3656 4.0004 12.0377 4.57053 10.6211 5.1797C7.78798 6.39803 4.60281 7.76946 2.97135 8.47136C2.91001 8.49775 2.69595 8.56613 2.46875 8.7435C2.24155 8.92087 2 9.2884 2 9.69793C2 10.0282 2.15738 10.3562 2.35547 10.5521C2.55356 10.748 2.76316 10.8447 2.94271 10.918C3.59415 11.1838 5.61456 12.0106 5.99609 12.1667C6.13036 12.578 6.86166 14.815 7.03125 15.3633C7.14304 15.7251 7.24946 15.9517 7.38802 16.1315C7.4573 16.2214 7.53783 16.3002 7.63542 16.362C7.67442 16.3867 7.71719 16.4057 7.76042 16.4232L7.76302 16.4245C7.77298 16.4285 7.78157 16.4353 7.79167 16.4388C7.81072 16.4455 7.82347 16.4463 7.84896 16.4518C7.95051 16.4846 8.05303 16.5052 8.14453 16.5052C8.53464 16.5052 8.77344 16.2904 8.77344 16.2904L8.78776 16.28L10.7943 14.5443L13.2279 16.8464C13.2621 16.8948 13.5817 17.3333 14.2865 17.3333C14.7049 17.3333 15.0369 17.1234 15.25 16.8997C15.4631 16.6761 15.5959 16.4412 15.6523 16.1458V16.1445C15.7051 15.8654 17.9479 4.35157 17.9479 4.35157L17.944 4.3672C18.0097 4.06752 18.0269 3.78844 17.9544 3.51303C17.882 3.23762 17.6911 2.97394 17.4544 2.83204C17.2178 2.69018 16.9862 2.6467 16.7695 2.65626ZM16.6445 4.04949C16.6413 4.06895 16.6469 4.05916 16.6419 4.08204L16.6406 4.08985L16.6393 4.09767C16.6393 4.09767 14.4243 15.4643 14.3424 15.8971C14.3484 15.8645 14.321 15.9295 14.293 15.9688C14.2533 15.9414 14.1719 15.9063 14.1719 15.9063L14.1589 15.8919L10.8346 12.7474L8.48437 14.7787L9.18359 11.9792C9.18359 11.9792 13.5544 7.45475 13.8177 7.19142C14.0297 6.98075 14.0742 6.90731 14.0742 6.83465C14.0742 6.73731 14.0235 6.66668 13.9102 6.66668C13.8082 6.66668 13.671 6.76584 13.5977 6.81251C12.6423 7.42154 8.44788 9.8661 6.56771 10.9596C6.26892 10.8374 4.19311 9.98766 3.48958 9.70053C3.49491 9.6982 3.49316 9.69903 3.4987 9.69662C5.13058 8.99453 8.31442 7.62312 11.1471 6.40496C12.5635 5.79588 13.8924 5.22532 14.8945 4.79558C15.8812 4.37247 16.5667 4.08127 16.6445 4.04949Z" fill="#BBBBBB"/>
      </svg>
    </div>
  </div>
</nav>

<header
  id="nav"
  class="h-[100px] flex items-center justify-between px-[20px] sm:px-[13vw] lg:px-[9vw] z-50 sticky-nav background"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <img
    on:click={backHome}
    id="logo"
    class="max-w-[40px] max-h-[40px] cursor-pointer"
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
      fill="white"
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
  .nav-socials:hover path {
    fill: white;
    cursor: pointer;
  }


  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
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
    /* transition: all 0.5s ease-in-out; */
  }

  .background {
    background-color: #111111;
  }

  #overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
  }

  .socials {
    color: #BBBBBB;
  }

  .social-button {
    border: 1px solid #BBBBBB;
  }

  .social-button:hover {
    border: 1px solid #FFFFFF;
  }

  .social-button:hover svg path {
    fill: white;
  }

  .social-button:hover p {
    color: white;
  }

  .footer-container {
    border-top: 1px solid white;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .nav-selection {
    transition: 0.3s ease-in-out;
  }

  .nav-selection:hover {
    color: #FFFFFF;
  }

  @media (min-width: 1024px) {
    nav {
      right: -50%;
      width: 50%;
    }
  }

  @media (max-width: 640px) {
    .footer-container {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      /* optional */
      -webkit-box-align: start;
      -moz-box-align: start;
      -ms-flex-align: start;
    }

    .footer-container .first_div {
    -webkit-box-ordinal-group: 2;
    -moz-box-ordinal-group: 2;
    -ms-flex-order: 2;
    -webkit-order: 2;
    order: 2;
    }

    .footer-container .second_div {
    -webkit-box-ordinal-group: 1;
    -moz-box-ordinal-group: 1;
    -ms-flex-order: 1;
    -webkit-order: 1;
    order: 1;
  } 
}
</style>
