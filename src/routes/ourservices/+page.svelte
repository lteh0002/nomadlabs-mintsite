<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import NormalHeader from "../NormalHeader.svelte";
  import Contact from "../Contact.svelte";
  onMount(async () => {
    const indicators = Array.from(document.getElementsByClassName("indicator"));
    const buttons = Array.from(document.getElementsByClassName("btn"));

    buttons.forEach((button, i) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        if (i == 1 || i == 4) {
          indicators[0].classList.remove("active");
          indicators[2].classList.remove("active");
          indicators[1].classList.add("active");
          goto("#slide2");
        } else if (i == 2 || i == 7) {
          indicators[1].classList.remove("active");
          indicators[3].classList.remove("active");
          indicators[0].classList.add("active");
          goto("#slide1");
        } else if (i == 3 || i == 6) {
          indicators[1].classList.remove("active");
          indicators[3].classList.remove("active");
          indicators[2].classList.add("active");
          goto("#slide3");
        } else if (i == 0 || i == 5) {
          indicators[0].classList.remove("active");
          indicators[2].classList.remove("active");
          indicators[3].classList.add("active");
          goto("#slide4")
        }
      });
    });
  });
</script>

<NormalHeader />
<div class="bg-[#111111] min-w-[100vw]">
  <div
    class="flex flex-1 justify-between items-center bg-[#111111] min-w-[100vw] max-h-screen"
  >
    <div class="flex justify-center min-w-[50%] h-full w-full">
      <div class="flex flex-col gap-[20px] text-white">
        <h1 class="text-[48px]">Services</h1>
        <svg
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
        <ul class="list-disc list-inside">
          <li class="text-[18px]">UI/UX Design</li>
          <li>Web3 Solutions</li>
          <li>Branding & Identity</li>
          <li>Custom Development</li>
          <li>Website Design & Development</li>
          <li>Launchpad (Coming Soon)</li>
        </ul>
      </div>
    </div>
    <div class="flex min-w-[50%]">
      <img src="/floatingspaceman.jpeg" class="min-w-full min-h-full" alt="" />
    </div>
  </div>
  <div class="flex flex-col items-center gap-[20px] pt-[100px]">
    <h1 class="text-white text-[48px]">What We Do</h1>
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
  <div class="carousel w-full mt-[60px] ">
    <div
      id="slide1"
      class="carousel-item relative w-full flex justify-center overflow-hidden"
    >
      <div
        class="flex items-center border w-full gap-[10px] rounded-2xl mx-[30vw]"
      >
        <div class="px-[70px] py-[40px]">
          <img
            src="/landing-bg.jpeg"
            class="max-w-[500px] max-h-[500px] w-[500px] h-[500px] rounded-3xl"
          />
        </div>
        <div
          class="text-white flex flex-col gap-[30px] min-w-[600px] w-full ml-[20px]"
        >
          <div class="flex flex-col gap-[20px]">
            <h1 class="text-[32px]">UI/UX Design</h1>
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
          </div>

          <p class="text-[18px] w-[500px] description">
            A great user experience starts with great design. Our team of UI/UX
            experts will work with you to create an intuitive, seamless
            experience for your users.
          </p>
          <button class="border w-[180px] h-[50px]"> Get In Touch </button>
        </div>
      </div>
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide4" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div
      id="slide2"
      class="carousel-item relative w-full flex justify-center overflow-hidden"
    >
      <div
        class="flex items-center border w-full gap-[10px] rounded-2xl mx-[30vw]"
      >
        <div class="px-[70px] py-[40px]">
          <img
            src="/landing-bg.jpeg"
            class="max-w-[500px] max-h-[500px] w-[500px] h-[500px] rounded-3xl"
          />
        </div>
        <div
          class="text-white flex flex-col gap-[30px] min-w-[600px] w-full ml-[20px]"
        >
          <div class="flex flex-col gap-[20px]">
            <h1 class="text-[32px]">UI/UX Design</h1>
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
          </div>

          <p class="text-[18px] w-[500px] description">
            A great user experience starts with great design. Our team of UI/UX
            experts will work with you to create an intuitive, seamless
            experience for your users.
          </p>
          <button class="border w-[180px] h-[50px]"> Get In Touch </button>
        </div>
      </div>
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div
      id="slide3"
      class="carousel-item relative w-full flex justify-center overflow-hidden"
    >
      <div
        class="flex items-center border w-full gap-[10px] rounded-2xl mx-[30vw]"
      >
        <div class="px-[70px] py-[40px]">
          <img
            src="/landing-bg.jpeg"
            class="max-w-[500px] max-h-[500px] w-[500px] h-[500px] rounded-3xl"
          />
        </div>
        <div
          class="text-white flex flex-col gap-[30px] min-w-[600px] w-full ml-[20px]"
        >
          <div class="flex flex-col gap-[20px]">
            <h1 class="text-[32px]">UI/UX Design</h1>
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
          </div>

          <p class="text-[18px] w-[500px] description">
            A great user experience starts with great design. Our team of UI/UX
            experts will work with you to create an intuitive, seamless
            experience for your users.
          </p>
          <button class="border w-[180px] h-[50px]"> Get In Touch </button>
        </div>
      </div>
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide4" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div
      id="slide4"
      class="carousel-item relative w-full flex justify-center overflow-hidden"
    >
      <div
        class="flex items-center border w-full gap-[10px] rounded-2xl mx-[30vw]"
      >
        <div class="px-[70px] py-[40px]">
          <img
            src="/landing-bg.jpeg"
            class="max-w-[500px] max-h-[500px] w-[500px] h-[500px] rounded-3xl"
          />
        </div>
        <div
          class="text-white flex flex-col gap-[30px] min-w-[600px] w-full ml-[20px]"
        >
          <div class="flex flex-col gap-[20px]">
            <h1 class="text-[32px]">UI/UX Design</h1>
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
          </div>

          <p class="text-[18px] w-[500px] description">
            A great user experience starts with great design. Our team of UI/UX
            experts will work with you to create an intuitive, seamless
            experience for your users.
          </p>
          <button class="border w-[180px] h-[50px]"> Get In Touch </button>
        </div>
      </div>
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  <div class="carousel-indicators mt-[40px] mb-[80px]">
    <div class="indicator slideone active" />
    <div class="indicator slidetwo" />
    <div class="indicator slidethree" />
    <div class="indicator slidefour" />
    <!-- <div class="indicator slideone"></div> -->
  </div>
  <Contact />
</div>

<style>
  .carousel {
    overflow-x: hidden;
  }

  .description {
    font-family: "Open Sans", sans-serif;
    text-align: justify;
  }

  .carousel-indicators {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    margin: 0 10px;
  }

  .indicator.active {
    background-color: white;
  }
</style>
