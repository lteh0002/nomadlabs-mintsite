<script>
  import { navigation } from "./../utils/nav.js";
</script>

<div id="contact" class="flex justify-center flex-col items-center">
  <div class="text-holder">
    <h1
      class="text-white lg:text-[48px] sm:text-[36px] text-[30px] pb-[30px] w-[350px] sm:w-full text-center"
    >
      Let's Build Something Great Together
    </h1>
    <svg
      width="141"
      height="7"
      viewBox="0 0 141 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_9_386)">
        <path
          d="M140.19 2.7V4.00851H84.13C83.98 4.74894 83.58 5.28511 83.13 5.28511C82.68 5.28511 82.27 4.75532 82.13 4.00851H72.33C72.13 5.54681 71.21 6.71489 70.12 6.71489C69.03 6.71489 68.12 5.54681 67.91 4.00851H58.12C57.97 4.74894 57.57 5.28511 57.12 5.28511C56.67 5.28511 56.26 4.75532 56.12 4.00851H0V2.73191H56.11C56.26 1.99787 56.65 1.45532 57.11 1.45532C57.57 1.45532 57.96 1.97234 58.11 2.73191H67.89C68.09 1.15532 69 0 70.1 0C71.2 0 72.1 1.15532 72.31 2.7H82.12C82.27 1.96596 82.66 1.4234 83.12 1.4234C83.58 1.4234 83.97 1.94043 84.12 2.7H140.19Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_9_386">
          <rect width="140.19" height="6.71489" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <div
      class="text-white c-desc sm:w-[770px] w-[350px] text-[18px] flex flex-col items-center gap-[30px]"
    >
      <p class="description pt-[30px] text-center text-[14px] sm:text-[18px]">
        At Nomad Labs, we're passionate about delivering innovative solutions
        and helping our clients succeed.
      </p>
      <p
        class="{$navigation === 'home' ? 'hidden' : 'block'} description text-center text-[14px] sm:text-[18px]"
      >
        If you're ready to take your digital vision to the next level, we'd love
        to hear from you. Contact us today to learn more about how we can help
        bring your vision to life.
      </p>
      <p
        class="{$navigation === 'home' ? 'block' : 'hidden'} description text-center text-[14px] sm:text-[18px]"
      >
        Interested to learn more about us ?
      </p>
    </div>

    {#if $navigation === 'home'}
      <a href="/about">
        <div
          class="border text-white h-[50px] w-[180px] flex justify-center items-center mt-[40px] button-hover"
        >
          About Us
        </div>
      </a>
    {:else if $navigation === 'about'}
    <a href="mailto:contact@nomadlabs.space">
      <div
            class="border text-white h-[50px] w-[180px] flex justify-center items-center mt-[40px] button-hover"
          >
            Get In Touch
      </div>
    </a>
    {/if}

   
  </div>
</div>

<style>
  #contact {
    min-height: 500px;
    /* height: 500px; */
  }

  .text-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #contact {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url("/spaceman.jpeg");
    background-position: center;
    background-size: cover;
  }

  .description {
    font-family: "Open Sans", sans-serif;
  }

  .button-hover {
    transition: all 0.3s ease-in-out;
  }

  .button-hover:hover {
    color: #bbbbbb;
    border-color: #bbbbbb;
  }

  @media (max-width: 1024px) {
    .text-holder {
      max-width: 660px;
    }
  }

  @media (max-height: 428px) {
    .c-desc {
      width: 600px;
    }

    #contact {
    min-height: 400px;
    /* height: 500px; */
  }
  }
</style>
