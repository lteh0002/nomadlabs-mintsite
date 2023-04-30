<script>
  import NormalHeader from "../NormalHeader.svelte";
  import Contact from "../Contact.svelte";
  import { navigation } from "./../../utils/nav.js";
  navigation.reset();
  navigation.about();
</script>

<NormalHeader />
<div class="bg-[#111111] min-w-[100vw]">
  <div
    class="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-[#111111] min-w-[100vw] min-h-screen landing-container"
  >
    <div
      class="flex flex-col lg:min-w-[50%] lg:items-stretch lg:flex-row lg:min-h-[50%] min-h-full w-full landing-title sm:px-[100px] px-[20px] flex-1 justify-center c-title"
    >
      <div>
        <div
          class="flex flex-1 flex-col justify-center text-white lg:min-h-[50%] c-container"
        >
          <h1 class="sm:text-[48px] text-[36px] mb-[24px]">About Us</h1>
          <svg
            class="mb-[24px]"
            width="160"
            height="12"
            viewBox="0 0 160 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_21_234)">
              <path
                d="M160 4.8365V7.11787H31.7627C31.5687 7.79087 31.215 8.25855 30.8043 8.25855C30.3936 8.25855 30.0285 7.81369 29.8345 7.11787H18.2544C18.0832 8.44106 17.6269 9.39924 17.1135 9.39924C16.6001 9.39924 16.1323 8.46388 15.9726 7.11787H5.09979C4.87161 9.86692 3.83339 11.9544 2.5784 11.9544C1.32341 11.9544 0.285187 9.91255 0.0570068 7.1635V4.88213C0.285187 2.08745 1.32341 0 2.5784 0C3.83339 0 4.8602 2.08745 5.09979 4.8365H15.9726C16.1437 3.51331 16.6001 2.55513 17.1135 2.55513C17.6269 2.55513 18.0947 3.49049 18.2544 4.8365H29.8345C30.0285 4.1635 30.3936 3.69582 30.8043 3.69582C31.215 3.69582 31.5687 4.14068 31.7627 4.8365H160Z"
                fill="#666666"
              />
              <path
                d="M0.0577054 4.8365V7.11787C0.0344758 6.73797 0.0344758 6.35709 0.0577054 5.97719C0.0344758 5.59729 0.0344758 5.2164 0.0577054 4.8365Z"
                fill="#666666"
              />
            </g>
            <defs>
              <clipPath id="clip0_21_234">
                <rect width="160" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p class="sm:text-[18px] text-[14px] desc">
            Let us help you bring your digital vision to life
          </p>
        </div>
      </div>
    </div>
    <div class="flex min-w-[50%] mt-[100px] lg:mt-[0px] landing-img">
      <img src="/spaceship.jpeg" class="min-w-full lg:min-w-[50%]" alt="" />
    </div>
  </div>
  <div class="lg:pt-[150px] lg:px-[350px] sm:px-[100px] px-[20px] mt-[50px]">
    <div class="flex flex-col c-wedo-container">
      <div class="flex flex-col lg:flex-row sm:items-center justify-center wedo-container">
        <div class="wedo-img">
          <img
            class="lg:min-w-[600px] lg:min-h-[600px] max-h-[400px] w-[620px] rounded-[50px]"
            src="ufo.jpeg"
            alt=""
          />
        </div>
        <div class="flex flex-col sm:min-w-[510px] wedo-desc">
          <h1 class="text-white sm:text-[48px] text-[30px] mb-[12px] mt-[50px] lg:mt-[0px]">
            Welcome to Nomad Labs
          </h1>
          <svg class="sm:w-[261px] sm:h-[12px] w-[112px] h-[12px] my-[12px]" viewBox="0 0 261 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_166_71)">
            <path d="M260.042 4.75843V6.85355H52.3211C52.0069 7.47161 51.434 7.90111 50.7687 7.90111C50.1034 7.90111 49.5121 7.49257 49.1979 6.85355H30.4402C30.163 8.06872 29.4238 8.94868 28.5922 8.94868C27.7606 8.94868 27.0029 8.08968 26.7441 6.85355H9.13224C8.76263 9.37818 7.0809 11.2952 5.04805 11.2952C3.0152 11.2952 1.33348 9.42008 0.963867 6.89546V4.80033C1.33348 2.23381 3.0152 0.316772 5.04805 0.316772C7.0809 0.316772 8.74415 2.23381 9.13224 4.75843H26.7441C27.0213 3.54326 27.7606 2.66331 28.5922 2.66331C29.4238 2.66331 30.1815 3.52231 30.4402 4.75843H49.1979C49.5121 4.14037 50.1034 3.71087 50.7687 3.71087C51.434 3.71087 52.0069 4.11942 52.3211 4.75843H260.042Z" fill="#666666"/>
            <path d="M0.964744 4.75842V6.85354C0.927117 6.50466 0.927117 6.15487 0.964744 5.80598C0.927117 5.4571 0.927117 5.10731 0.964744 4.75842Z" fill="#666666"/>
            </g>
            <defs>
            <clipPath id="clip0_166_71">
            <rect width="259.17" height="11.0203" fill="white" transform="translate(0.871338 0.316772)"/>
            </clipPath>
            </defs>
            </svg>
          <div class="flex flex-col">
            <p
              class="text-white desc sm:text-[18px] text-[14px] text-justify max-w-full sm:max-w-full mt-[24px]"
            >
              We are a forward-thinking Web-as-a-Service (WaaS) studio based in
              Asia, dedicated to pushing the boundaries of what's possible in
              the digital world. Our team of experts in design, development, and
              strategy are committed to delivering innovative solutions that
              meet your needs and exceed your expectations.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row sm:items-center justify-center wedo-container">
        <div class="flex flex-col sm:min-w-[510px] wedo-desc">
          <h1
            class="text-white sm:text-[48px] text-[30px] mb-[12px] mt-[50px] lg:mt-[0px]"
          >
            What We Do
          </h1>
          <svg class="sm:w-[261px] sm:h-[12px] w-[112px] h-[12px] my-[12px]" viewBox="0 0 261 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_166_71)">
            <path d="M260.042 4.75843V6.85355H52.3211C52.0069 7.47161 51.434 7.90111 50.7687 7.90111C50.1034 7.90111 49.5121 7.49257 49.1979 6.85355H30.4402C30.163 8.06872 29.4238 8.94868 28.5922 8.94868C27.7606 8.94868 27.0029 8.08968 26.7441 6.85355H9.13224C8.76263 9.37818 7.0809 11.2952 5.04805 11.2952C3.0152 11.2952 1.33348 9.42008 0.963867 6.89546V4.80033C1.33348 2.23381 3.0152 0.316772 5.04805 0.316772C7.0809 0.316772 8.74415 2.23381 9.13224 4.75843H26.7441C27.0213 3.54326 27.7606 2.66331 28.5922 2.66331C29.4238 2.66331 30.1815 3.52231 30.4402 4.75843H49.1979C49.5121 4.14037 50.1034 3.71087 50.7687 3.71087C51.434 3.71087 52.0069 4.11942 52.3211 4.75843H260.042Z" fill="#666666"/>
            <path d="M0.964744 4.75842V6.85354C0.927117 6.50466 0.927117 6.15487 0.964744 5.80598C0.927117 5.4571 0.927117 5.10731 0.964744 4.75842Z" fill="#666666"/>
            </g>
            <defs>
            <clipPath id="clip0_166_71">
            <rect width="259.17" height="11.0203" fill="white" transform="translate(0.871338 0.316772)"/>
            </clipPath>
            </defs>
            </svg>
          <div class="flex flex-col">
            <p
              class="text-white description sm:text-[18px] text-[14px] max-w-full sm:max-w-full"
            >
              Are you looking to launch your next big project? Bring your
              website to the next level? Or explore new frontiers in Web3?
            </p>
            <p
              class="text-white description sm:text-[18px] text-[14px] max-w-full sm:max-w-full"
            >
              We have the skills and expertise to make it happen.
            </p>
            <p
              class="text-white description sm:text-[18px] text-[14px] max-w-full sm:max-w-full"
            >
              Our team of experts in design, development, and strategy are
              committed to delivering innovative solutions that meet your needs
              and exceed your expectations.
            </p>
            <a class="mt-[36px]" href="/ourservices">
              <div
                class="border text-white h-[50px] w-[180px] flex justify-center items-center button-hover"
              >
                Our Services
              </div>
            </a>
          </div>
        </div>
        <div class="wedo-img">
          <img
            class="lg:min-w-[600px] lg:min-h-[600px] max-h-[400px] w-[620px] rounded-[50px]"
            src="bluesky.jpeg"
            alt=""
          />
        </div>
      </div>

      <div class="flex justify-center">
        <div class="flex flex-col items-center gap-[25px]">
          <h1 class="text-white sm:text-[48px] text-[30px]">Why Choose Us?</h1>
          <svg
            width="141"
            height="9"
            viewBox="0 0 141 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M140.19 3.32275V4.93235H84.13C83.98 5.84315 83.58 6.5027 83.13 6.5027C82.68 6.5027 82.27 5.85101 82.13 4.93235H72.33C72.13 6.82462 71.21 8.26149 70.12 8.26149C69.03 8.26149 68.12 6.82462 67.91 4.93235H58.12C57.97 5.84315 57.57 6.5027 57.12 6.5027C56.67 6.5027 56.26 5.85101 56.12 4.93235H0V3.36201H56.11C56.26 2.45906 56.65 1.79166 57.11 1.79166C57.57 1.79166 57.96 2.42765 58.11 3.36201H67.89C68.09 1.42263 69 0.00146484 70.1 0.00146484C71.2 0.00146484 72.1 1.42263 72.31 3.32275H82.12C82.27 2.4198 82.66 1.7524 83.12 1.7524C83.58 1.7524 83.97 2.38839 84.12 3.32275H140.19Z"
              fill="#666666"
            />
          </svg>
          <div class="sm:mt-[65px] mt-[30px]">
            <div
              class="lg:flex lg:gap-[70px] grid sm:grid-cols-2 sm:grid-rows-2 grid-rows-4 grid-cols-1 mb-[150px] sm:gap-[60px] gap-[30px] c-chooseus"
            >
              <div
                class="text-white min-w-[250px] w-[250px] max-h-[300px] h-[300px] border flex flex-col pt-[30px] border-round px-[25px] lg:mb-[40px] c-desc"
              >
                <h1 class="text-[24px]">01 - Hassle Free</h1>
                <p class="description-about-us">
                  Allow us to take the wheel and guide you through the new found
                  world of Web3 technology. From contract development to web
                  design and advisory. We have everything you need to take your
                  first steps into the blockchain.
                </p>
              </div>
              <div
                class="text-white min-w-[250px] w-[250px] max-h-[300px] h-[300px] border flex flex-col pt-[30px] lg:pt-[40px] m-[auto] border-round px-[25px]"
              >
                <h1 class="text-[24px]">02 - Innovative</h1>
                <p class="description-about-us">
                  We are constantly exploring new technologies and solutions to
                  provide our community with the most innovative and
                  cutting-edge products and services.
                </p>
              </div>
              <div
                class="text-white min-w-[250px] w-[250px] max-h-[300px] h-[300px] border flex flex-col pt-[30px] m-[auto] border-round px-[25px] lg:mb-[40px] c-desc"
              >
                <h1 class="text-[24px]">03 - Communication</h1>
                <p class="description-about-us">
                  We believe in open and honest communication with our community
                  and clients, ensuring that everyone is informed and engaged
                  every step of the way.
                </p>
              </div>
              <div
                class="text-white min-w-[250px] w-[250px] max-h-[300px] h-[300px] border flex flex-col pt-[30px] m-[auto] border-round px-[25px]"
              >
                <h1 class="text-[24px]">04 - Transparency</h1>
                <p class="description-about-us">
                  We pride ourselves on being transparent in everything we do,
                  from our development process to our business practices. We
                  believe that transparency builds trust and strengthens our
                  relationships with our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Contact />
</div>

<style>
  * {
    color: white;
  }

  .c-wedo-container {
      gap: 50px;
    }

  .description {
    font-family: "Open Sans", sans-serif;
    padding-top: 24px;
    text-align: justify;
  }

  .desc {
    font-family: "Open Sans", sans-serif;
  }

  .description-about-us {
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    padding-top: 10px;
    text-align: justify;
    max-width: 190px;
  }

  .border-round {
    border-radius: 25px;
  }

  .landing-container {
    max-width: 100vw;
  }

  .landing-img {
    min-width: 100%;
    max-height: 100vh;
  }

  .landing-img img {
    max-width: 100%;
    max-height: 100vh;
    object-fit: cover;
  }

  .button-hover:hover {
    transition: 0.3s ease-in-out;
  }

  .button-hover:hover {
    color: #bbbbbb;
    border-color: #bbbbbb;
  }

  @media (max-width: 1024px) {
    .landing-container,
    .wedo-container {
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

    .landing-title,
    .wedo-desc {
      -webkit-box-ordinal-group: 2;
      -moz-box-ordinal-group: 2;
      -ms-flex-order: 2;
      -webkit-order: 2;
      order: 2;
    }

    .wedo-img,
    .landing-img {
      -webkit-box-ordinal-group: 1;
      -moz-box-ordinal-group: 1;
      -ms-flex-order: 1;
      -webkit-order: 1;
      order: 1;
    }

    .landing-img {
      max-height: 50vh;
    }

    @media (max-height: 428px) {
      .landing-img {
        margin-top: 70px;
        margin-bottom: 50px;
      }
    }
  }

  @media (width: 1024px) and (height: 768px) {
    .c-title {
      justify-content: unset;
    }

   .landing-img img {
    padding-top: 100px;
    max-height: none !important;
    min-width: 100vh !important;
   }
  }

  @media (width: 1180px) and (height: 820px) {
    .wedo-container {
      gap: 20px !important;
    }

    .c-chooseus {
      display: grid;
    }

    .c-desc {
      margin-bottom: 0px;
    }
  }

  @media (min-width: 1024px) {
    .wedo-container {
      gap: 110px;
    }

    .c-wedo-container {
      gap: 150px;
    }

    
  }
</style>
