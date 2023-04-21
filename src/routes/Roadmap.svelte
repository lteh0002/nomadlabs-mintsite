<script>
  import Item from './Item.svelte'
	const data = {
		'Phase 1 - Space Nomads Genesis Collection': ['888 supply', '0.088 ETH Mint Price'],
		'Phase 2': ['Complete Launpad Development', 'Expand team under Nomad Labs Advisory', 'Enable Website Staking Mechanism', 'Launch Marketplace', 'Expand Nomad Labs via Merchandise & Partnerships'],
		'Phase 3': ['PFP Collection Launch', 'Expand Nomad Labs Community', 'Push Development on Software and Branding'],
		'Phase 4': ['Coming Soon'],
	}
</script>

<div class="bg-[#111111] min-w-[100vw]">
  <div class="pt-[150px] lg:px-[350px] px-[100px]">
    <div class="flex flex-col gap-[150px]">
      <div class="flex lg:flex-row flex-col lg:gap-[110px] justify-center min-h-[650px]">
        <img class="lg:w-[600px] lg:h-[600px] h-[400px] w-[620px] rounded-[50px]" src="/nomadspeech.png" alt="" />
        <div class="flex flex-col min-w-[500px] max-h-[700px]">
          <h1 class="text-white text-[48px] mb-[20px]">Roadmap</h1>
          <svg width="261" height="12" viewBox="0 0 261 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            
          <div class="lg:mt-[15px] text-[18px]">
            {#each Object.entries(data) as entry}
              <Item {entry} />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  * {
    color: white;
    background-color: #111111;
  }
</style>