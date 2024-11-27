<script setup></script>

<template>
  <section class="bg-blue-200 min-h-screen grid place-content-center">
    <!-- <div class="chat-notification"> -->
    <div
      class="flex items-center max-w-sm mx-auto p-6 rounded-lg bg-white shadow-xl"
    >
      <!-- <div class="chat-notification-logo-wrapper"> -->
      <div class="shrink-0">
        <!-- <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo" /> -->
        <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <!-- <div class="chat-notification-content"> -->
      <div class="mx-6">
        <!-- <h4 class="chat-notification-title">ChitChat</h4> -->
        <h4 class="text-gray-900 text-xl">ChitChat</h4>
        <!-- <p class="chat-notification-message">You have a new message!</p> -->
        <p class="text-gray-600 text-base">You have a new message!</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* .chat-notification {
  display: flex;
  align-items: center;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
} */
/* .chat-notification-logo-wrapper {
  flex-shrink: 0;
} */
/* .chat-notification-logo {
  height: 3rem;
  width: 3rem;
} */
/* .chat-notification-content {
  margin-left: 1.5rem;
} */
/* .chat-notification-title {
  color: #1a202c;
  font-size: 1.25rem;
  line-height: 1.25;
} */
/* .chat-notification-message {
  color: #718096;
  font-size: 1rem;
  line-height: 1.5;
} */
</style>
