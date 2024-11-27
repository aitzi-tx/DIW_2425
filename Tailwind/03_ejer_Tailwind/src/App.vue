<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
   <body class="" style="font-family: 'Source Sans Pro', sans-serif">
    <!--Nav-->

    <nav class="">
      <div class="flex justify-between px-6 py-6">
        <a class="text-gray-700 text-2xl font-bold" href="#"> SHMW </a>
        <div class="">  
        </div>
        <div class="">
          <ul class="flex gap-6 text-gray-500">
            <li>
              <a class="font-bold" href="/">Home</a>
            </li>
            <li>
              <a class="" href="#">About</a>
            </li>
            <li>
              <a class="" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!--Hero-->

    <div
      class=""
      style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
    >
      <div class="px-12 py-24">
        <h2 class="text-2xl text-white font-bold my-1">Smart Health Monitoring Wristwatch!</h2>

        <h3 class="text-xl text-white my-4">Monitor your health vitals smartly anywhere you go.</h3>

        <button class="bg-white text-gray-500 rounded-full px-8 py-4 text-sm font-bold shadow-xl">PRE ORDER</button>
      </div>
    </div>

    <!-- Features -->

    <section class="py-8 px-14">
      <h2 class="text-center text-3xl font-bold text-gray-800">Features</h2>

      <div class="flex py-6">
        <div class="">
          <h4 class="text-left text-2xl font-bold text-gray-800 py-4">Exercise Metrics</h4>

          <p class="text-gray-500">
            Our Smart Health Monitoring Wristwatch is able to capture you vitals
            while you exercise. You can create different category of exercises
            and can track your vitals on the go.
          </p>
        </div>

        <div class="w-2/4">
          <img
            src="https://raw.githubusercontent.com/ammezie/tailwind_landing_page/master/assets/health.svg"
            alt="Monitoring"
          />
        </div>
      </div>

      <div class="flex py-6">
        <div class="w-2/4">
          <img
            src="https://raw.githubusercontent.com/ammezie/tailwind_landing_page/master/assets/report.svg"
            alt="Reporting"
          />
        </div>

        <div class="">
          <h4 class="text-left text-2xl font-bold text-gray-800 py-4">Reporting</h4>

          <p class="text-gray-500">
            Our Smart Health Monitoring Wristwatch can generate a comprehensive
            report on your vitals depending on your settings either daily,
            weekly, monthly, quarterly or yearly.
          </p>
        </div>
      </div>

      <div class="flex py-6">
        <div class="">
          <h4 class="text-left text-2xl font-bold text-gray-800 py-4">Syncing</h4>

          <p class="text-gray-500 w-10/12">
            Our Smart Health Monitoring Wristwatch allows you to sync data
            across all your mobile devices whether iOS, Android or Windows OS
            and also to your laptop whether MacOS, GNU/LInux or Windows OS.
          </p>
        </div>

        <div class="w-3/4 h-2/4">
          <img
            src="https://raw.githubusercontent.com/ammezie/tailwind_landing_page/master/assets/sync.svg"
            alt="Syncing"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials -->

    <section class="py-12">
      <div class="text">
        <h2 class="text-center text-2xl font-bold text-gray-800 py-4">Testimonials</h2>

        <div class="grid grid-cols-3 justify-around px-16 gap-12 items-center">
          <div class="bg-white rounded-3xl shadow-xl border border-opacity-1 px-8 py-4">
            <div class="">
              <p class="">
                Monitoring and tracking my health vitals anywhere I go and on
                any platform I use has never been easier.
              </p>

              <p class="text-gray-400 text-left">John Doe</p>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-xl border border-opacity-1 px-8 py-4">
            <div class="">
              <p class="">
                As an Athlete, this is the perfect product for me. I wear my
                Smart Health Monitoring Wristwatch everywhere i go, even in the
                bathroom since it's waterproof.
              </p>

              <p class="text-gray-400 text-left">Jane Doe</p>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-xl border border-opacity-1 px-8 py-4">
            <div class="">
              <p class="">
                I don't regret buying this wearble gadget. One of the best
                gadgets I own!.
              </p>

              <p class="text-gray-400 text-left">James Doe</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Call to Action-->

    <section style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)" class="text-center py-12">
      <div class="py-6">
        <h2 class="text-4xl text-white font-bold my-4">Limited in Stock</h2>

        <h3 class=" text-xl text-white my-4">Get yourself the Smart Health Monitoring Wristwatch!</h3>

        <button class="bg-white text-gray-700 rounded-full px-8 py-4 text-sm font-bold shadow-xl">PRE ORDER</button>
      </div>
    </section>

    <!--Footer-->

    <footer class="py-12">
      <div class="">
        <div class="flex justify-around">
          <div class="">
            <h5 class="text-gray-700 font-bold text-xl py-8">Links</h5>

            <ul class="">
              <li class="py-2">
                <a href="#" class="">FAQ</a>
              </li>

              <li class="py-2">
                <a href="#" class="">Help</a>
              </li>

              <li class="py-2">
                <a href="#" class="">Support</a>
              </li>
            </ul>
          </div>

          <div class="">
            <h5 class="text-gray-700 font-bold text-xl py-8">Legal</h5>

            <ul class="">
              <li class="py-2">
                <a href=" #" class="">Terms</a>
              </li>

              <li class="py-2">
                <a href="#" class="">Privacy</a>
              </li>
            </ul>
          </div>

          <div class="">
            <h5 class="text-gray-700 font-bold text-xl py-8">Social</h5>

            <ul class="">
              <li class="py-2">
                <a href="#" class="">Facebook</a>
              </li>

              <li class="py-2">
                <a href="#" class="">Linkedin</a>
              </li>

              <li class="py-2">
                <a href="#" class="">Twitter</a>
              </li>
            </ul>
          </div>

          <div class="">
            <h5 class="text-gray-700 font-bold text-xl py-8">Company</h5>

            <ul class="">
              <li class="py-2">
                <a href="#" class="">Official Blog</a>
              </li>

              <li class="py-2">
                <a href="#" class="">About Us</a>
              </li>
              <li class="py-2">
                <a href="#" class="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
