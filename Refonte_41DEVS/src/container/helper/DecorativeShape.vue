<script setup lang="ts">
import { useId } from 'vue'

const id = `decorative-shape-${useId().replaceAll(':', '')}`
const clipId = `${id}-clip`
const maskId = `${id}-mask`
const filterId = `${id}-filter`
</script>

<template>
  <svg
    class="decorative-shape"
    width="170"
    height="170"
    viewBox="0 0 97 99"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g :clip-path="`url(#${clipId})`">
      <mask
        :id="maskId"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="-1"
        y="0"
        width="98"
        height="99"
      >
        <path
          d="M66.6924 0.133295C70.0487 -0.0606737 73.3324 1.16213 75.7443 3.50409L93.174 20.4283C95.6102 22.7937 96.9301 26.0806 96.8066 29.474L94.8797 82.4126C94.659 88.4754 89.9479 93.4198 83.9029 93.9331L30.2065 98.4924C26.7443 98.7864 23.3246 97.5652 20.8317 95.1446L3.57019 78.3838C1.11733 76.0021 -0.203149 72.6871 -0.0597362 69.2712L2.23209 14.6824C2.49069 8.52291 7.37451 3.56147 13.5292 3.20577L66.6924 0.133295Z"
          fill="#5F01D3"
        />
      </mask>
      <g :mask="`url(#${maskId})`">
        <path
          d="M66.6924 0.133295C70.0487 -0.0606737 73.3324 1.16213 75.7443 3.50409L93.174 20.4283C95.6102 22.7937 96.9301 26.0806 96.8066 29.474L94.8797 82.4126C94.659 88.4754 89.9479 93.4198 83.9029 93.9331L30.2065 98.4924C26.7443 98.7864 23.3246 97.5652 20.8317 95.1446L3.57019 78.3838C1.11733 76.0021 -0.203149 72.6871 -0.0597362 69.2712L2.23209 14.6824C2.49069 8.52291 7.37451 3.56147 13.5292 3.20577L66.6924 0.133295Z"
          fill="#5F01D3"
        />
        <g :filter="`url(#${filterId})`">
          <path
            d="M39 -7.64844L69.2681 -7.64844C75.1048 -7.64844 79.7011 -2.67041 79.2363 3.14783L75.1131 54.7645C74.733 59.5233 71.0422 63.3498 66.3002 63.9013L4.00815 71.1461C2.46189 71.3259 0.916045 71.1406 -0.514576 70.629C-3.06883 69.7155 -4.09368 66.8743 -4.09369 64.1616L-4.09375 40.4996L-4.09079 -1.50035C-4.0912 -4.89554 -1.33899 -7.64811 2.0562 -7.64813L39 -7.64844Z"
            fill="#0C0020"
            fill-opacity="0.9"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        :id="filterId"
        x="-22.3504"
        y="-25.9051"
        width="119.877"
        height="115.377"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="9.12832" result="effect1_foregroundBlur" />
      </filter>
      <clipPath :id="clipId">
        <rect width="97" height="99" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped>
.decorative-shape {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}
</style>
