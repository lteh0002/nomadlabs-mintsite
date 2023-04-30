<script>
  import { onMount } from "svelte";
  import { onDestroy } from 'svelte';
  import {updateBtnContainerStyles} from './../../utils/screen'
  import { navigation } from "./../../utils/nav.js";
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  import NormalHeader from "../NormalHeader.svelte";
  import Contact from "../Contact.svelte";
  let carousel; // for calling methods of the carousel instance
  let btnContainer

  function goToNextPage() {
    carousel.goToNext();
  }

  function goToPreviousPage() {
    carousel.goToPrev();
  }



  onMount(async () => {
    const indicatorActive = Array.from(
      document.getElementsByClassName("sc-carousel-dot__dot_active")
    );
    const indicatorContainer = Array.from(
      document.getElementsByClassName("sc-carousel-dots__container")
    );
    btnContainer = Array.from(document.getElementsByClassName("sc-carousel__arrow-container"))
    updateBtnContainerStyles();
    indicatorActive[0].classList.add("indicator-size");
    indicatorContainer[0].classList.add("testing");
  });

  navigation.reset();
  navigation.service();
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
        <div class="flex flex-col sm:gap-[20px] gap-[15px] text-white c-desc">
          <h1 class="lg:text-[48px] text-[36px] mb-[12px]">Services</h1>
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
          <ul class="list-disc list-inside flex flex-col lg:gap-[24px] gap-[0px]">
            <li class="lg:text-[18px] sm:text-[16px] text-[12px] list">UI/UX Design</li>
            <li class="lg:text-[18px] sm:text-[16px] text-[12px] list">Web3 Solutions</li>
            <li class="lg:text-[18px] sm:text-[16px] text-[12px] list">Branding & Identity</li>
            <li class="lg:text-[18px] sm:text-[16px] text-[12px] list">Custom Development</li>
            <li class="lg:text-[18px] sm:text-[16px] text-[12px] list">Website Design & Development</li>
            <li class="lg:text-[18px] sm:text-[16px] text-[12px] list">Launchpad (Coming Soon)</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex min-w-[50%] sm:mt-[100px] mt-[50px] lg:mt-[0px] landing-img">
      <img src="/staring.jpeg" class="min-w-full lg:min-w-[50%]" alt="" />
    </div>
  </div>
  <div class="flex flex-col items-center gap-[20px] pt-[100px]">
    <h1 class="text-white sm:text-[48px] text-[30px]">What We Do</h1>
    <svg
      width="141"
      height="9"
      viewBox="0 0 141 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_21_334)">
        <path
          d="M140.19 3.89562V5.48228H84.13C83.98 6.38009 83.58 7.03023 83.13 7.03023C82.68 7.03023 82.27 6.38783 82.13 5.48228H72.33C72.13 7.34756 71.21 8.76394 70.12 8.76394C69.03 8.76394 68.12 7.34756 67.91 5.48228H58.12C57.97 6.38009 57.57 7.03023 57.12 7.03023C56.67 7.03023 56.26 6.38783 56.12 5.48228H0V3.93432H56.11C56.26 3.04425 56.65 2.38637 57.11 2.38637C57.57 2.38637 57.96 3.01329 58.11 3.93432H67.89C68.09 2.0226 69 0.621704 70.1 0.621704C71.2 0.621704 72.1 2.0226 72.31 3.89562H82.12C82.27 3.00555 82.66 2.34767 83.12 2.34767C83.58 2.34767 83.97 2.97459 84.12 3.89562H140.19Z"
          fill="#666666"
        />
      </g>
      <defs>
        <clipPath id="clip0_21_334">
          <rect
            width="140.19"
            height="8.14223"
            fill="white"
            transform="translate(0 0.621704)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
  <div class="carousel w-full flex items-center bg-[#111111] mt-[60px]">
    {#if browser}
      <Carousel
        arrows={true}
        dots={true}
        swiping={true}
        infinite={true}
        bind:this={carousel}
      >
        <div id="slide1" class="carousel-item relative w-full h-full">
          <div
            class="flex flex-col p-[10px] sm:p-[30px] lg:flex-row justify-around sm:justify-center items-center border w-full lg:gap-[10px] rounded-2xl"
          >
            <div
              class="w-full lg:w-[50%]"
            >
              <img
                src="/astronaut1.jpeg"
                class="w-full h-auto rounded-3xl"
                alt="astronaut"
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <div
                class="text-white flex flex-col gap-[15px] sm:px-[0px] pt-[20px] lg:ml-[30px] mb-[20px]"
              >
                <h1 class="lg:text-[32px] sm:text-[28px] text-[24px]">
                  UI/UX Design
                </h1>
                <svg
                  width="160"
                  height="13"
                  viewBox="0 0 160 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_21_280)">
                    <path
                      d="M160 5.60042V7.88179H31.7627C31.5687 8.55479 31.215 9.02247 30.8043 9.02247C30.3936 9.02247 30.0285 8.5776 29.8346 7.88179H18.2544C18.0833 9.20498 17.6269 10.1632 17.1135 10.1632C16.6001 10.1632 16.1323 9.22779 15.9726 7.88179H5.09982C4.87164 10.6308 3.83342 12.7183 2.57843 12.7183C1.32344 12.7183 0.285218 10.6765 0.0570374 7.92741V5.64605C0.285218 2.85137 1.32344 0.763916 2.57843 0.763916C3.83342 0.763916 4.86023 2.85137 5.09982 5.60042H15.9726C16.1437 4.27722 16.6001 3.31905 17.1135 3.31905C17.6269 3.31905 18.0947 4.25441 18.2544 5.60042H29.8346C30.0285 4.92741 30.3936 4.45973 30.8043 4.45973C31.215 4.45973 31.5687 4.9046 31.7627 5.60042H160Z"
                      fill="#666666"
                    />
                    <path
                      d="M0.0576749 5.60046V7.88183C0.0344453 7.50193 0.0344453 7.12105 0.0576749 6.74115C0.0344453 6.36125 0.0344453 5.98036 0.0576749 5.60046Z"
                      fill="#666666"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_21_280">
                      <rect
                        width="160"
                        height="12"
                        fill="white"
                        transform="translate(0 0.763916)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p class="lg:text-[18px] text-[12px] min-h-[54px] description">
                  A great user experience starts with great design. Our team of
                  UI/UX experts will work with you to create an intuitive,
                  seamless experience for your users.
                </p>
                <a class="sm:w-full lg:w-[180px] w-[160px] h-[50px]" href="mailto:contact@nomadlabs.space"
                  ><button
                    class="border sm:w-full lg:w-[180px] w-[160px] h-[50px] contact-btn"
                  >
                    Get In Touch
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full h-full">
          <div
            class="flex flex-col p-[10px] sm:p-[30px] lg:flex-row justify-around sm:justify-center items-center border w-full lg:gap-[10px] rounded-2xl"
          >
            <div
              class="w-full lg:w-[50%]"
            >
              <img
                src="/astronaut2.jpeg"
                class="w-full h-auto rounded-3xl"
                alt="astronaut"
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <div
                class="text-white flex flex-col gap-[15px] sm:px-[0px] pt-[20px] lg:ml-[30px] mb-[20px]"
              >
                <h1 class="lg:text-[32px] sm:text-[28px] text-[24px]">
                  Custom Development
                </h1>
                <svg
                  width="160"
                  height="13"
                  viewBox="0 0 160 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_21_280)">
                    <path
                      d="M160 5.60042V7.88179H31.7627C31.5687 8.55479 31.215 9.02247 30.8043 9.02247C30.3936 9.02247 30.0285 8.5776 29.8346 7.88179H18.2544C18.0833 9.20498 17.6269 10.1632 17.1135 10.1632C16.6001 10.1632 16.1323 9.22779 15.9726 7.88179H5.09982C4.87164 10.6308 3.83342 12.7183 2.57843 12.7183C1.32344 12.7183 0.285218 10.6765 0.0570374 7.92741V5.64605C0.285218 2.85137 1.32344 0.763916 2.57843 0.763916C3.83342 0.763916 4.86023 2.85137 5.09982 5.60042H15.9726C16.1437 4.27722 16.6001 3.31905 17.1135 3.31905C17.6269 3.31905 18.0947 4.25441 18.2544 5.60042H29.8346C30.0285 4.92741 30.3936 4.45973 30.8043 4.45973C31.215 4.45973 31.5687 4.9046 31.7627 5.60042H160Z"
                      fill="#666666"
                    />
                    <path
                      d="M0.0576749 5.60046V7.88183C0.0344453 7.50193 0.0344453 7.12105 0.0576749 6.74115C0.0344453 6.36125 0.0344453 5.98036 0.0576749 5.60046Z"
                      fill="#666666"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_21_280">
                      <rect
                        width="160"
                        height="12"
                        fill="white"
                        transform="translate(0 0.763916)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p class="lg:text-[18px] text-[12px] description">
                  <span class="hidden sm:inline description lg:hidden xl:inline"
                    >Our team of developers has the skills and experience to
                    tackle any custom development project, from simple
                    applications to complex solutions.</span
                  >
                  We work closely with our clients to ensure that the final product
                  meets their needs and exceeds their expectations.
                </p>
                <a class="sm:w-full lg:w-[180px] w-[160px] h-[50px]" href="mailto:contact@nomadlabs.space"
                  ><button
                    class="border sm:w-full lg:w-[180px] w-[160px] h-[50px] contact-btn"
                  >
                    Get In Touch
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full h-full">
          <div
            class="flex flex-col p-[10px] sm:p-[30px] lg:flex-row justify-around sm:justify-center items-center border w-full lg:gap-[10px] rounded-2xl"
          >
            <div
              class="w-full lg:w-[50%]"
            >
              <img
                src="/astronaut3.jpeg"
                class="w-full h-auto rounded-3xl"
                alt="astronaut"
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <div
                class="text-white flex flex-col gap-[15px] sm:px-[0px] pt-[20px] lg:ml-[30px] mb-[20px]"
              >
                <h1 class="lg:text-[32px] sm:text-[28px] text-[24px]">
                  Website Design & Development
                </h1>
                <svg
                  width="160"
                  height="13"
                  viewBox="0 0 160 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_21_280)">
                    <path
                      d="M160 5.60042V7.88179H31.7627C31.5687 8.55479 31.215 9.02247 30.8043 9.02247C30.3936 9.02247 30.0285 8.5776 29.8346 7.88179H18.2544C18.0833 9.20498 17.6269 10.1632 17.1135 10.1632C16.6001 10.1632 16.1323 9.22779 15.9726 7.88179H5.09982C4.87164 10.6308 3.83342 12.7183 2.57843 12.7183C1.32344 12.7183 0.285218 10.6765 0.0570374 7.92741V5.64605C0.285218 2.85137 1.32344 0.763916 2.57843 0.763916C3.83342 0.763916 4.86023 2.85137 5.09982 5.60042H15.9726C16.1437 4.27722 16.6001 3.31905 17.1135 3.31905C17.6269 3.31905 18.0947 4.25441 18.2544 5.60042H29.8346C30.0285 4.92741 30.3936 4.45973 30.8043 4.45973C31.215 4.45973 31.5687 4.9046 31.7627 5.60042H160Z"
                      fill="#666666"
                    />
                    <path
                      d="M0.0576749 5.60046V7.88183C0.0344453 7.50193 0.0344453 7.12105 0.0576749 6.74115C0.0344453 6.36125 0.0344453 5.98036 0.0576749 5.60046Z"
                      fill="#666666"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_21_280">
                      <rect
                        width="160"
                        height="12"
                        fill="white"
                        transform="translate(0 0.763916)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p class="lg:text-[18px] text-[12px] description">
                  <span class="hidden sm:inline description lg:hidden xl:inline"
                    >A well-designed website can make all the difference.</span
                  >
                  Our team of experts will work with you to create a website that
                  not only looks great but is also user-friendly, fast, and optimized
                  for search engines.
                </p>
                <a class="sm:w-full lg:w-[180px] w-[160px] h-[50px]" href="mailto:contact@nomadlabs.space"
                  ><button
                    class="border sm:w-full lg:w-[180px] w-[160px] h-[50px] contact-btn"
                  >
                    Get In Touch
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full h-full">
          <div
            class="flex flex-col p-[10px] sm:p-[30px] lg:flex-row justify-around sm:justify-center items-center border w-full lg:gap-[10px] rounded-2xl"
          >
            <div
              class="w-full lg:w-[50%]"
            >
              <img
                src="/astronaut4.jpeg"
                class="w-full h-auto rounded-3xl"
                alt="astronaut"
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <div
                class="text-white flex flex-col gap-[15px] sm:px-[0px] pt-[20px] lg:ml-[30px] mb-[20px]"
              >
                <h1 class="lg:text-[32px] sm:text-[28px] text-[24px]">
                  Custom Development
                </h1>
                <svg
                  width="160"
                  height="13"
                  viewBox="0 0 160 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_21_280)">
                    <path
                      d="M160 5.60042V7.88179H31.7627C31.5687 8.55479 31.215 9.02247 30.8043 9.02247C30.3936 9.02247 30.0285 8.5776 29.8346 7.88179H18.2544C18.0833 9.20498 17.6269 10.1632 17.1135 10.1632C16.6001 10.1632 16.1323 9.22779 15.9726 7.88179H5.09982C4.87164 10.6308 3.83342 12.7183 2.57843 12.7183C1.32344 12.7183 0.285218 10.6765 0.0570374 7.92741V5.64605C0.285218 2.85137 1.32344 0.763916 2.57843 0.763916C3.83342 0.763916 4.86023 2.85137 5.09982 5.60042H15.9726C16.1437 4.27722 16.6001 3.31905 17.1135 3.31905C17.6269 3.31905 18.0947 4.25441 18.2544 5.60042H29.8346C30.0285 4.92741 30.3936 4.45973 30.8043 4.45973C31.215 4.45973 31.5687 4.9046 31.7627 5.60042H160Z"
                      fill="#666666"
                    />
                    <path
                      d="M0.0576749 5.60046V7.88183C0.0344453 7.50193 0.0344453 7.12105 0.0576749 6.74115C0.0344453 6.36125 0.0344453 5.98036 0.0576749 5.60046Z"
                      fill="#666666"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_21_280">
                      <rect
                        width="160"
                        height="12"
                        fill="white"
                        transform="translate(0 0.763916)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p class="lg:text-[18px] text-[12px] description">
                  Our team of developers has the skills and experience to tackle
                  any custom development project, from simple applications to
                  complex solutions.
                  <span class="hidden sm:inline description lg:hidden xl:inline">
                    We work closely with our clients to ensure that the final
                    product meets their needs and exceeds their expectations.</span
                  >
                </p>
                <a class="sm:w-full lg:w-[180px] w-[160px] h-[50px]" href="mailto:contact@nomadlabs.space"
                  ><button
                    class="border sm:w-full lg:w-[180px] w-[160px] h-[50px] contact-btn"
                  >
                    Get In Touch
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
        <div id="slide5" class="carousel-item relative w-full h-full">
          <div
            class="flex flex-col p-[10px] sm:p-[30px] lg:flex-row justify-around sm:justify-center items-center border w-full lg:gap-[10px] rounded-2xl"
          >
            <div
              class="w-full lg:w-[50%]"
            >
              <img
                src="/astronaut5.jpeg"
                class="w-full h-auto rounded-3xl"
                alt="astronaut"
              />
            </div>
            <div class="w-full lg:w-[50%]">
              <div
                class="text-white flex flex-col gap-[15px] sm:px-[0px] pt-[20px] lg:ml-[30px] mb-[20px]"
              >
                <h1 class="lg:text-[32px] sm:text-[28px] text-[24px]">
                  Web3 Solutions
                </h1>
                <svg
                  width="160"
                  height="13"
                  viewBox="0 0 160 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_21_280)">
                    <path
                      d="M160 5.60042V7.88179H31.7627C31.5687 8.55479 31.215 9.02247 30.8043 9.02247C30.3936 9.02247 30.0285 8.5776 29.8346 7.88179H18.2544C18.0833 9.20498 17.6269 10.1632 17.1135 10.1632C16.6001 10.1632 16.1323 9.22779 15.9726 7.88179H5.09982C4.87164 10.6308 3.83342 12.7183 2.57843 12.7183C1.32344 12.7183 0.285218 10.6765 0.0570374 7.92741V5.64605C0.285218 2.85137 1.32344 0.763916 2.57843 0.763916C3.83342 0.763916 4.86023 2.85137 5.09982 5.60042H15.9726C16.1437 4.27722 16.6001 3.31905 17.1135 3.31905C17.6269 3.31905 18.0947 4.25441 18.2544 5.60042H29.8346C30.0285 4.92741 30.3936 4.45973 30.8043 4.45973C31.215 4.45973 31.5687 4.9046 31.7627 5.60042H160Z"
                      fill="#666666"
                    />
                    <path
                      d="M0.0576749 5.60046V7.88183C0.0344453 7.50193 0.0344453 7.12105 0.0576749 6.74115C0.0344453 6.36125 0.0344453 5.98036 0.0576749 5.60046Z"
                      fill="#666666"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_21_280">
                      <rect
                        width="160"
                        height="12"
                        fill="white"
                        transform="translate(0 0.763916)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p class="lg:text-[18px] text-[12px] description">
                  <span class="hidden sm:inline description lg:hidden xl:inline"
                    >Our team of developers has the skills and experience to
                    tackle any custom development project, from simple
                    applications to complex solutions.
                  </span>
                  We work closely with our clients to ensure that the final product
                  meets their needs and exceeds their expectations.
                </p>
                <a class="sm:w-full lg:w-[180px] w-[160px] h-[50px]" href="mailto:contact@nomadlabs.space"
                  ><button
                    class="border sm:w-full lg:w-[180px] w-[160px] h-[50px] contact-btn"
                  >
                    Get In Touch
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    {/if}
  </div>
  <Contact />
</div>

<style>
  .carousel-item {
    position: relative;
    overflow: hidden;
  }

  .description {
    text-align: justify;
  }

  .list, .description {
    font-family: "Open Sans", sans-serif;
  }

  .contact-btn {
    transition: all 0.3s ease-in-out;
  }

  .contact-btn:hover {
    color: #bbbbbb;
    border-color: #bbbbbb;
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

  @media (width: 1024px) and (height: 768px) {
    .c-title {
      justify-content: unset;
    }

   .landing-img img {
    padding-top: 100px;
    max-height: none !important;
    min-width: 100vh !important;
   }

   .c-desc {
    margin-top: 50px;
   }
  }

    @media (max-height: 428px) {
      .landing-img {
        margin-top: 70px;
        margin-bottom: 50px;
      }
    }
</style>
