<script>
  import Header from "./Header.svelte";
  import { navigation } from "./../utils/nav.js";
  import GenesisCollection from "./GenesisCollection.svelte";
  import Roadmap from "./Roadmap.svelte";
  import Utility from "./Utility.svelte";
  import Explore from "./Explore.svelte";
  import Contact from "./Contact.svelte";

  navigation.reset();
  navigation.home();
</script>

<div>
  <div>
    <div id="landingpage" class="flex flex-col justify-between sticky z-50">
      <Header />
      <div class="flex flex-col items-center justify-center flex-1 gap-[48px]">
        <img class="w-[200px] h-[48px] sm:w-[362px] sm:h-[88px]" src="nl-fulllogo.png" alt="background" draggable="false" />
        <h1 id="desc" class="text-[30px] sm:text-[48px]">Navigating the Web 3 Universe</h1>
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

        <h1 id="scroll-prompt" class="text-white text-[16px] sm:text-[24px]">Explore the Genesis Collection</h1>
      </div>
    </div>
    <GenesisCollection />
    <Roadmap class="z-10" />
    <Utility />
    <Explore />
    <Contact />
  </div>
</div>

<style>
  #landingpage {
    min-height: 100vh;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("/background.jpg");
    background-position: center;
    background-size: cover;
  }

  #desc {
    font-family: "Oswald", sans-serif;
    color: white;
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
</style>
