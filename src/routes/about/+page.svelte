<script>
  import { onMount } from "svelte";
  onMount(async () => {
    const indicators = document.getElementsByClassName("indicator");
    const buttons = document.getElementsByClassName("btn");
    console.log(indicators);
    console.log(buttons);

    console.log(buttons[0]);
    buttons[1].addEventListener("click", () => {
      indicators[0].classList.remove("active");
      indicators[1].classList.add("active");
    });
  });
</script>

<div class="bg-[#111111]">
  <div class="carousel w-full mt-[100px] ">
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
        <div class="px-[70px]">
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
        <a href="#slide" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div
      id="slide3"
      class="carousel-item relative w-full flex justify-center overflow-hidden"
    >
      <div
        class="flex items-center border w-full gap-[10px] rounded-2xl mx-[30vw]"
      >
        <div class="px-[70px]">
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
        <div class="px-[70px]">
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
  <div class="carousel-indicators mt-[40px]">
    <div class="indicator slideone active" />
    <div class="indicator slidetwo" />
    <div class="indicator slidethree" />
    <div class="indicator slidefour" />
    <!-- <div class="indicator slideone"></div> -->
  </div>
</div>

<style>
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
