<script setup></script>

<template>
  <body class="bg-white text-gray-700" style="font-family: 'Source Sans Pro', sans-serif">
    <!--Nav-->
    <nav>
      <div class="container mx-auto flex items-center justify-between px-6 py-2">
        <a class="text-2xl font-bold lg:text-4xl" href="#"> SHMW </a>
        <div class="block lg:hidden">
          <button class="flex appearance-none items-center rounded border border-gray-600 px-3 py-2 text-gray-500 hover:border-teal-500 hover:text-gray-800 focus:outline-none">
            <svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:block">
          <ul class="inline-flex">
            <li>
              <a class="px-4 font-bold" href="/">Home</a>
            </li>
            <li>
              <a class="px-4 hover:text-gray-800" href="#">About</a>
            </li>
            <li>
              <a class="px-4 hover:text-gray-800" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!--Hero-->
    <div class="py-20" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)">
      <div class="container mx-auto px-6">
        <h2 class="mb-2 text-4xl font-bold text-white">Smart Health Monitoring Wristwatch!</h2>
        <h3 class="mb-8 text-2xl text-gray-200">Monitor your health vitals smartly anywhere you go.</h3>
        <button class="rounded-full bg-white px-8 py-4 font-bold uppercase tracking-wider shadow-lg">Pre Order</button>
      </div>
    </div>
    <!-- Features -->
    <section class="container mx-auto p-10 px-6">
      <h2 class="mb-8 text-center text-4xl font-bold text-gray-800">Features</h2>
      <div class="mb-20 flex flex-wrap items-center">
        <div class="w-full md:w-1/2">
          <h4 class="mb-3 text-3xl font-bold text-gray-800">Exercise Metrics</h4>
          <p class="mb-8 text-gray-600">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="https://raw.githubusercontent.com/ammezie/tailwind_landing_page/master/assets/health.svg" alt="Monitoring" />
        </div>
      </div>
      <div class="mb-20 flex flex-wrap items-center">
        <div class="w-full md:w-1/2">
          <img src="https://raw.githubusercontent.com/ammezie/tailwind_landing_page/master/assets/report.svg" alt="Reporting" />
        </div>
        <div class="w-full pl-10 md:w-1/2">
          <h4 class="mb-3 text-3xl font-bold text-gray-800">Reporting</h4>
          <p class="mb-8 text-gray-600">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
        </div>
      </div>
      <div class="mb-20 flex flex-wrap items-center">
        <div class="w-full md:w-1/2">
          <h4 class="mb-3 text-3xl font-bold text-gray-800">Syncing</h4>
          <p class="mb-8 text-gray-600">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="https://raw.githubusercontent.com/ammezie/tailwind_landing_page/master/assets/sync.svg" alt="Syncing" />
        </div>
      </div>
    </section>
    <!-- Testimonials -->
    <section class="bg-gray-100">
      <div class="container mx-auto px-6 py-20">
        <h2 class="mb-8 text-center text-4xl font-bold text-gray-800">Testimonials</h2>
        <div class="flex flex-wrap">
          <div class="mb-4 w-full px-2 md:w-1/3">
            <div class="rounded bg-white py-2 shadow">
              <p class="mb-5 px-6 text-base text-gray-800">Monitoring and tracking my health vitals anywhere I go and on any platform I use has never been easier.</p>
              <p class="px-6 text-xs text-gray-500 md:text-sm">John Doe</p>
            </div>
          </div>
          <div class="mb-4 w-full px-2 md:w-1/3">
            <div class="rounded bg-white py-2 shadow">
              <p class="mb-5 px-6 text-base text-gray-800">As an Athlete, this is the perfect product for me. I wear my Smart Health Monitoring Wristwatch everywhere I go, even in the bathroom since it's waterproof.</p>
              <p class="px-6 text-xs text-gray-500 md:text-sm">Jane Doe</p>
            </div>
          </div>
          <div class="mb-4 w-full px-2 md:w-1/3">
            <div class="rounded bg-white py-2 shadow">
              <p class="mb-5 px-6 text-base text-gray-800">I don't regret buying this wearble gadget. One of the best gadgets I own!.</p>
              <p class="px-6 text-xs text-gray-500 md:text-sm">James Doe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Call to Action-->
    <section style="background-color: #667eea">
      <div class="container mx-auto px-6 py-20 text-center">
        <h2 class="mb-6 text-center text-4xl font-bold text-white">Limited in Stock</h2>
        <h3 class="my-4 text-2xl text-white">Get yourself the Smart Health Monitoring Wristwatch!</h3>
        <button class="mt-6 rounded-full bg-white px-8 py-4 font-bold uppercase tracking-wider shadow-lg">Pre Order</button>
      </div>
    </section>
    <!--Footer-->
    <footer class="bg-gray-100">
      <div class="container mx-auto px-6 pb-6 pt-10">
        <div class="flex flex-wrap">
          <div class="w-full text-center md:w-1/4 md:text-left">
            <h5 class="mb-6 font-bold uppercase">Links</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="text-gray-600 hover:text-orange-500 hover:underline">FAQ</a>
              </li>
              <li class="mt-2">
                <a href="#" class="text-gray-600 hover:text-orange-500 hover:underline">Help</a>
              </li>
              <li class="mt-2">
                <a href="#" class="text-gray-600 hover:text-orange-500 hover:underline">Support</a>
              </li>
            </ul>
          </div>
          <div class="w-full text-center md:w-1/4 md:text-left">
            <h5 class="mb-6 font-bold uppercase">Legal</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="text-gray-600 hover:text-orange-500 hover:underline">Terms</a>
              </li>
              <li class="mt-2">
                <a href="#" class="text-gray-600 hover:text-orange-500 hover:underline">Privacy</a>
              </li>
            </ul>
          </div>
          <div class="w-full text-center md:w-1/4 md:text-left">
            <h5 class="mb-6 font-bold uppercase">Social</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="text-gray-600 hover:text-orange-500 hover:underline">Facebook</a>
              </li>
              <li class="mt-2">
                <a href="#" class="text-gray-600 hover:text-orange-500 hover:underline">Linkedin</a>
              </li>
              <li class="mt-2">
                <a href="#" class="text-gray-600 hover:text-orange-500 hover:underline">Twitter</a>
              </li>
            </ul>
          </div>
          <div class="w-full text-center md:w-1/4 md:text-left">
            <h5 class="mb-6 font-bold uppercase">Company</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="text-gray-600 hover:text-orange-500 hover:underline">Official Blog</a>
              </li>
              <li class="mt-2">
                <a href="#" class="text-gray-600 hover:text-orange-500 hover:underline">About Us</a>
              </li>
              <li class="mt-2">
                <a href="#" class="text-gray-600 hover:text-orange-500 hover:underline">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>

<style scoped></style>
