<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">
          KPI Performance Overview
        </h1>
        <p class="text-gray-600">Welcome back, Dr. Supansa</p>
      </div>
      <div class="relative">
        <select
          class="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option>Round 2/2025</option>
          <option>Round 1/2025</option>
          <option>Round 2/2024</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Teaching Track -->
    <div class="mb-6">
      <h2 class="text-center text-lg font-medium text-gray-700 mb-1">
        Teaching Track
      </h2>
      <p class="text-center text-sm text-gray-500 mb-4">
        11 Feb 2025-31 July 2025
      </p>
    </div>

    <!-- KPI Categories with NuxtLink-->
    <div class="grid grid-cols-5 gap-4 mb-8">
      <NuxtLink
        to="/lecturer/teaching-performance"
        class="rounded-lg p-4 text-center transition-colors cursor-pointer"
        :class="
          $route.path === '/lecturer/teaching-performance'
            ? 'bg-blue-200'
            : 'bg-gray-100 hover:bg-blue-100'
        "
      >
        <p class="text-sm text-gray-600">Teaching (60%)</p>
        <p class="text-xl font-bold text-gray-700">45.75%</p>
      </NuxtLink>

      <NuxtLink
        to="/lecturer/research-performance"
        class="rounded-lg p-4 text-center transition-colors cursor-pointer"
        :class="
          $route.path === '/lecturer/research-performance'
            ? 'bg-blue-200'
            : 'bg-gray-100 hover:bg-blue-100'
        "
      >
        <p class="text-sm text-gray-600">Research (15%)</p>
        <p class="text-xl font-bold text-gray-700">15.25%</p>
      </NuxtLink>

      <NuxtLink
        to="/lecturer/academic-performance"
        class="rounded-lg p-4 text-center transition-colors cursor-pointer"
        :class="
          $route.path === '/lecturer/academic-performance'
            ? 'bg-blue-200'
            : 'bg-gray-100 hover:bg-blue-100'
        "
      >
        <p class="text-sm text-gray-600">Academic Service (10%)</p>
        <p class="text-xl font-bold text-gray-700">7.5%</p>
      </NuxtLink>

      <NuxtLink
        to="/lecturer/administration"
        class="rounded-lg p-4 text-center transition-colors cursor-pointer"
        :class="
          $route.path === '/lecturer/administration'
            ? 'bg-blue-200'
            : 'bg-gray-100 hover:bg-blue-100'
        "
      >
        <p class="text-sm text-gray-600">Administration (5%)</p>
        <p class="text-xl font-bold text-gray-700">5%</p>
      </NuxtLink>

      <NuxtLink
        to="/lecturer/arts-culture"
        class="rounded-lg p-4 text-center transition-colors cursor-pointer"
        :class="
          $route.path === '/lecturer/arts-culture'
            ? 'bg-blue-200'
            : 'bg-gray-100 hover:bg-blue-100'
        "
      >
        <p class="text-sm text-gray-600">Arts and culture (10%)</p>
        <p class="text-xl font-bold text-gray-700">3.75%</p>
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Teaching Track Chart -->
      <div class="md:col-span-2 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-center text-lg font-medium text-gray-700 mb-1">
          Teaching Track
        </h2>
        <p class="text-center text-sm text-gray-500 mb-6">
          11 Feb 2025-31 July 2025
        </p>

        <!-- Performance Chart -->
        <div class="flex justify-center">
          <div class="w-full max-w-lg h-80">
            <canvas ref="performanceChart"></canvas>
          </div>
        </div>

        <!-- Legend -->
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <div class="flex items-center">
            <span class="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
            <span class="text-sm text-gray-700">Teaching</span>
          </div>
          <div class="flex items-center">
            <span class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
            <span class="text-sm text-gray-700">Research</span>
          </div>
          <div class="flex items-center">
            <span class="w-3 h-3 rounded-full bg-teal-500 mr-2"></span>
            <span class="text-sm text-gray-700">Academic Service</span>
          </div>
          <div class="flex items-center">
            <span class="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
            <span class="text-sm text-gray-700">Administration</span>
          </div>
          <div class="flex items-center">
            <span class="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
            <span class="text-sm text-gray-700">Art and Culture</span>
          </div>
        </div>
      </div>

      <!-- Performance Metrics -->
      <div class="md:col-span-1">
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-lg font-medium text-gray-900 mb-4">
            Overall Performance
          </h2>

          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700"
                  >Academic Performance (60%)</span
                >
                <span class="text-sm font-medium text-gray-700">56.25%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-blue-600 h-2 rounded-full"
                  style="width: 56.25%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700"
                  >Behavior (40%)</span
                >
                <span class="text-sm font-medium text-gray-700">36%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-green-600 h-2 rounded-full"
                  style="width: 36%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700"
                  >Total Score (100%)</span
                >
                <span class="text-sm font-medium text-gray-700">92.25%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-600 h-2 rounded-full"
                  style="width: 92.25%"
                ></div>
              </div>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium text-gray-700"
                  >Performance Level</span
                >
                <span
                  class="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full"
                  >Excellent</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Performance Level Legend -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-4">
            Performance Level
          </h2>

          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">< 55</span>
              <span
                class="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full"
                >Very Poor</span
              >
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">55-64</span>
              <span
                class="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full"
                >Poor</span
              >
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">65-74</span>
              <span
                class="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                >Moderate</span
              >
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">75-84</span>
              <span
                class="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"
                >Good</span
              >
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-700">85-100</span>
              <span
                class="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full"
                >Excellent</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

definePageMeta({
  layout: "lecturer",
});

const performanceChart = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  // Create doughnut chart
  if (performanceChart.value) {
    new Chart(performanceChart.value, {
      type: "doughnut",
      data: {
        labels: [
          "Teaching",
          "Research",
          "Academic Service",
          "Administration",
          "Art and Culture",
        ],
        datasets: [
          {
            data: [60, 15, 10, 5, 3.75],
            backgroundColor: [
              "#2563eb", // blue
              "#eab308", // yellow
              "#14b8a6", // teal
              "#9333ea", // purple
              "#ec4899", // pink
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Academic Performance",
            position: "bottom" as const,
            font: {
              size: 16,
              weight: "bold",
            },
          },
        },
      },
    });
  }
});
</script>
