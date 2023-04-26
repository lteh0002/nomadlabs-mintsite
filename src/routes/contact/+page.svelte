<script>
  import NormalHeader from "../NormalHeader.svelte";
  import {navigation} from "./../../utils/nav.js"
  navigation.reset()
  navigation.contact()
</script>

<NormalHeader />
<div class="flex min-h-screen items-center bg-[#111111] min-w-[100vw]">
  <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-[#111111] min-w-[100vw] min-h-screen landing-container">
    <div class="flex flex-col lg:min-w-[50%] lg:items-stretch lg:flex-row lg:min-h-[50%] min-h-full w-full landing-title sm:px-[100px] px-[20px] flex-1 justify-center">
      <div>
        <div class="flex flex-1 flex-col justify-center text-white gap-[10px] lg:min-h-[50%]">
          <h1 class="sm:text-[48px] text-[36px] mb-[12px]">Talk to Us</h1>
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
          <p class="sm:text-[18px] text-[14px] desc mb-[24px]">
            Let us help you bring your digital vision to life
          </p>
          <ul>
              <li><a class="desc sm:text-[18px] text-[14px] email" href="mailto:contact@nomadlabs.space">contact@nomadlabs.space</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex min-w-[50%] sm:mt-[100px] mt-[50px] lg:mt-[0px] landing-img">
      <img src="/astronaut5.jpeg" class="min-w-full lg:min-w-[50%]" alt="" />
    </div>
  </div>
</div>

<style>
  .desc {
    font-family: "Open Sans", sans-serif;
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

  .email {
    transition: all 0.2s ease-in-out;
  }

  .email:hover {
    color: #BBBBBB;
  }

  @media (max-width: 1024px) {
    .landing-container {
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
    -webkit-align-items: flex-start;
    align-items: flex-start;
  }

  .landing-title {
    -webkit-box-ordinal-group: 2;
    -moz-box-ordinal-group: 2;
    -ms-flex-order: 2;
    -webkit-order: 2;
    order: 2;
  }

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
}
</style>
