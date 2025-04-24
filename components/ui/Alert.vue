<template>
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show" class="fixed z-50 top-4 right-4 w-full max-w-md overflow-hidden">
      <!-- Backdrop blur for depth -->
      <div class="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-lg"></div>
      <div :class="[
        'relative p-4 rounded-lg shadow-xl pointer-events-auto border',
        type === 'error' 
          ? 'bg-red-50/95 border-red-200' 
          : 'bg-blue-50/95 border-blue-200'
      ]">
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <svg v-if="type === 'error'" class="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else class="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <p :class="[
              'text-base font-semibold tracking-tight',
              type === 'error' ? 'text-red-900' : 'text-blue-900'
            ]">
              {{ title }}
            </p>
            <p :class="[
              'mt-1 text-sm leading-5',
              type === 'error' ? 'text-red-700' : 'text-blue-700'
            ]">
              {{ message }}
            </p>
          </div>
          <div class="flex-shrink-0 self-start ml-4">
            <button
              @click="$emit('close')"
              :class="[
                'p-1.5 rounded-md inline-flex hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
                type === 'error' 
                  ? 'text-red-500 hover:text-red-600 focus:ring-red-500'
                  : 'text-blue-500 hover:text-blue-600 focus:ring-blue-500'
              ]"
            >
              <span class="sr-only">Close</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
  type: 'error' | 'info'
  title: string
  message: string
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>
