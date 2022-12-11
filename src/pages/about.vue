<script setup>
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <div>
    <div class="bg-[#014E56] w-full sm:min-h-[517px] min-h-[567px] font-livvic relative overflow-hidden">
      <Header />

      <div class="max-w-[1440px] sm:min-h-[405px] min-h-[480px] w-full mx-auto text-white relative overflow-hidden z-20">
        <div class="max-w-[1140px] w-full mx-auto px-[15px]">
          <div class="flex md:flex-row flex-col md:items-start items-center md:mt-[120px] mt-[112px]">
            <div>
              <p class="font-bold sm:text-[64px] text-[40px] md:leading-[100px] sm:leading-[56px] leading-[40px] md:w-[350px] md:text-left text-center">About</p>
            </div>
            <div
              class="md:pt-[40px] sm:pt-6 pt-4 relative md:after:block after:hidden after:w-[50px] after:h-[4px] after:bg-[#F67E7E] after:absolute after:bottom-[152px]">
              <p class="font-semibold md:text-[18px] text-[15px] leading-[28px] md:max-w-none max-w-[457px] md:text-left text-center">We help companies build dynamic teams
                made up of top global talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse teams shape the best
                products and experiences. We’ll bring those teams to you.</p>
            </div>
          </div>
        </div>
        <img class="absolute sm:bottom-0 bottom-[-100px] right-[-100px] -z-10" src="../assets/img/mobile-circle.svg" alt="circle">
      </div>
    </div>

    <section class="w-full bg-[#004047] min-h-[1002px]  text-white font-livvic">
      <div class="max-w-[1440px] w-full mx-auto min-h-[1002px] relative md:py-[140px] pt-[100px] pb-[128px] overflow-hidden">
        <div class="max-w-[1140px] w-full mx-auto px-[15px]">
          <p class="font-bold md:text-[48px] text-[32px] md:leading-[48px] leading-[32px] text-center md:mb-[64px] mb-[48px]">Meet the directors</p>
          <div class="flex flex-wrap justify-center md:gap-x-[30px] gap-x-[11px] gap-y-[76px]">
            <div class="md:w-[350px] sm:w-[281px] w-[327px] h-[253px]  bg-[#012F34] relative cursor-pointer group">
              <div class="w-full h-full pt-8 px-6 pb-[56px] flex flex-col items-center relative overflow-hidden">
                <img class="mb-4" src="../assets/img/aboutcards/nikita.png" alt="customer">
                <p class="font-extrabold text-[18px] leading-[28px] text-[#79C8C7]">Nikita Marks</p>
                <p class="text-[15px] leading-[25px]">Founder & CEO</p>

                <div
                  class="absolute w-full h-full bg-[#002529] top-0 left-0 translate-y-[100%]  duration-200 ease-out group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pt-[35px] px-6 text-center flex flex-col items-center">
                  <p class="font-bold text-[18px] leading-[28px] text-[#79C8C7] mb-2">Nikita Marks</p>
                  <p class="max-w-[254px] font-semibold text-[15px] leading-[25px] mb-6">“Empowered teams create truly amazing products. Set the north star and let them follow it.”</p>
                  <ul class="flex items-center gap-x-4 text-[24px]">
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <div
                class="w-[56px] h-[56px] bg-[#F67E7E] rounded-full absolute bottom-[-28px] left-[50%] translate-x-[-50%] flex items-center justify-center text-3xl group-hover:rotate-45 duration-200 ease-out group-hover:bg-[#79C8C7]">
                <img src="../assets/img/clients/plus.svg" alt="shape">
              </div>
            </div>
            <div class="md:w-[350px] sm:w-[281px] w-[327px] h-[253px]  bg-[#012F34] relative cursor-pointer group">
              <div class="w-full h-full pt-8 px-6 pb-[56px] flex flex-col items-center relative overflow-hidden">
                <img class="mb-4" src="../assets/img/aboutcards/cristian.png" alt="customer">
                <p class="font-extrabold text-[18px] leading-[28px] text-[#79C8C7]">Cristian Duncan</p>
                <p class="text-[15px] leading-[25px]">Co-founder & COO</p>

                <div
                  class="absolute w-full h-full bg-[#002529] top-0 left-0 translate-y-[100%]  duration-200 ease-out group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pt-[35px] px-6 text-center flex flex-col items-center">
                  <p class="font-bold text-[18px] leading-[28px] text-[#79C8C7] mb-2">Cristian Duncan</p>
                  <p class="max-w-[254px] font-semibold text-[15px] leading-[25px] mb-6">“Empowered teams create truly amazing products. Set the north star and let them follow it.”</p>
                  <ul class="flex items-center gap-x-4 text-[24px]">
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <div
                class="w-[56px] h-[56px] bg-[#F67E7E] rounded-full absolute bottom-[-28px] left-[50%] translate-x-[-50%] flex items-center justify-center text-3xl group-hover:rotate-45 duration-200 ease-out group-hover:bg-[#79C8C7]">
                <img src="../assets/img/clients/plus.svg" alt="shape">
              </div>
            </div>
            <div class="md:w-[350px] sm:w-[281px] w-[327px] h-[253px]  bg-[#012F34] relative cursor-pointer group">
              <div class="w-full h-full pt-8 px-6 pb-[56px] flex flex-col items-center relative overflow-hidden">
                <img class="mb-4" src="../assets/img/aboutcards/cruz.png" alt="customer">
                <p class="font-extrabold text-[18px] leading-[28px] text-[#79C8C7]">Cruz Hamer</p>
                <p class="text-[15px] leading-[25px]">Co-founder & CTO</p>

                <div
                  class="absolute w-full h-full bg-[#002529] top-0 left-0 translate-y-[100%]  duration-200 ease-out group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pt-[35px] px-6 text-center flex flex-col items-center">
                  <p class="font-bold text-[18px] leading-[28px] text-[#79C8C7] mb-2">Cruz Hamer</p>
                  <p class="max-w-[254px] font-semibold text-[15px] leading-[25px] mb-6">“Empowered teams create truly amazing products. Set the north star and let them follow it.”</p>
                  <ul class="flex items-center gap-x-4 text-[24px]">
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <div
                class="w-[56px] h-[56px] bg-[#F67E7E] rounded-full absolute bottom-[-28px] left-[50%] translate-x-[-50%] flex items-center justify-center text-3xl group-hover:rotate-45 duration-200 ease-out group-hover:bg-[#79C8C7]">
                <img src="../assets/img/clients/plus.svg" alt="shape">
              </div>
            </div>
            <div class="md:w-[350px] sm:w-[281px] w-[327px] h-[253px]  bg-[#012F34] relative cursor-pointer group">
              <div class="w-full h-full pt-8 px-6 pb-[56px] flex flex-col items-center relative overflow-hidden">
                <img class="mb-4" src="../assets/img/aboutcards/drake.png" alt="customer">
                <p class="font-extrabold text-[18px] leading-[28px] text-[#79C8C7]">Drake Heaton</p>
                <p class="text-[15px] leading-[25px] italic">Business Development Lead</p>

                <div
                  class="absolute w-full h-full bg-[#002529] top-0 left-0 translate-y-[100%]  duration-200 ease-out group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pt-[35px] px-6 text-center flex flex-col items-center">
                  <p class="font-bold text-[18px] leading-[28px] text-[#79C8C7] mb-2">Drake Heaton</p>
                  <p class="max-w-[254px] font-semibold text-[15px] leading-[25px] mb-6">“Empowered teams create truly amazing products. Set the north star and let them follow it.”</p>
                  <ul class="flex items-center gap-x-4 text-[24px]">
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <div
                class="w-[56px] h-[56px] bg-[#F67E7E] rounded-full absolute bottom-[-28px] left-[50%] translate-x-[-50%] flex items-center justify-center text-3xl group-hover:rotate-45 duration-200 ease-out group-hover:bg-[#79C8C7]">
                <img src="../assets/img/clients/plus.svg" alt="shape">
              </div>
            </div>
            <div class="md:w-[350px] sm:w-[281px] w-[327px] h-[253px]  bg-[#012F34] relative cursor-pointer group">
              <div class="w-full h-full pt-8 px-6 pb-[56px] flex flex-col items-center relative overflow-hidden">
                <img class="mb-4" src="../assets/img/aboutcards/griffin.png" alt="customer">
                <p class="font-extrabold text-[18px] leading-[28px] text-[#79C8C7]">Griffin Wise</p>
                <p class="text-[15px] leading-[25px] italic">Lead Marketing</p>

                <div
                  class="absolute w-full h-full bg-[#002529] top-0 left-0 translate-y-[100%]  duration-200 ease-out group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pt-[35px] px-6 text-center flex flex-col items-center">
                  <p class="font-bold text-[18px] leading-[28px] text-[#79C8C7] mb-2">Griffin Wise</p>
                  <p class="max-w-[254px] font-semibold text-[15px] leading-[25px] mb-6">“Empowered teams create truly amazing products. Set the north star and let them follow it.”</p>
                  <ul class="flex items-center gap-x-4 text-[24px]">
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <div
                class="w-[56px] h-[56px] bg-[#F67E7E] rounded-full absolute bottom-[-28px] left-[50%] translate-x-[-50%] flex items-center justify-center text-3xl group-hover:rotate-45 duration-200 ease-out group-hover:bg-[#79C8C7]">
                <img src="../assets/img/clients/plus.svg" alt="shape">
              </div>
            </div>
            <div class="md:w-[350px] sm:w-[281px] w-[327px] h-[253px]  bg-[#012F34] relative cursor-pointer group">
              <div class="w-full h-full pt-8 px-6 pb-[56px] flex flex-col items-center relative overflow-hidden">
                <img class="mb-4" src="../assets/img/aboutcards/aden.png" alt="customer">
                <p class="font-extrabold text-[18px] leading-[28px] text-[#79C8C7]">Aden Allan</p>
                <p class="text-[15px] leading-[25px]">Account Manager</p>

                <div
                  class="absolute w-full h-full bg-[#002529] top-0 left-0 translate-y-[100%]  duration-200 ease-out group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pt-[35px] px-6 text-center flex flex-col items-center">
                  <p class="font-bold text-[18px] leading-[28px] text-[#79C8C7] mb-2">Aden Allan</p>
                  <p class="max-w-[254px] font-semibold text-[15px] leading-[25px] mb-6">“Empowered teams create truly amazing products. Set the north star and let them follow it.”</p>
                  <ul class="flex items-center gap-x-4 text-[24px]">
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li class="hover:text-[#F67E7E] duration-200 ease-out"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <div
                class="w-[56px] h-[56px] bg-[#F67E7E] rounded-full absolute bottom-[-28px] left-[50%] translate-x-[-50%] flex items-center justify-center text-3xl group-hover:rotate-45 duration-200 ease-out group-hover:bg-[#79C8C7]">
                <img src="../assets/img/clients/plus.svg" alt="shape">
              </div>
            </div>
          </div>
        </div>
        <img class="absolute md:top-0 top-[-100px] left-[-100px]" src="../assets/img/aboutcards/circle.svg" alt="shape">
        <img class="absolute bottom-0 right-0" src="../assets/img/aboutcards/rectangle.svg" alt="shape">
      </div>
    </section>

    <section class="w-full bg-[#012F34] text-white font-livvic">
      <div class="max-w-[1440px] w-full mx-auto md:py-[140px] py-[100px] overflow-hidden relative">
        <img class="absolute md:top-0 top-[-100px] sm:left-0 left-[-100px]" src="../assets/img/clients/clients-bg.svg" alt="shape">
        <div class="max-w-[1140px] w-full mx-auto px-[15px]">
          <div class="flex flex-col items-center">
            <p class="md:mb-[70px] mb-[48px] md:text-[48px] text-[32px] md:leading-[48px] leading-[32px] font-bold text-center">Some of our clients</p>
            <ul class="flex sm:flex-row flex-col sm:gap-y-0 gap-y-[60px] md:gap-x-[80px] gap-x-10 items-center">
              <li><a href="#"><img src="../assets/img/clients/verge.png" alt="client-logo"></a></li>
              <li><a href="#"><img src="../assets/img/clients/jakarta.png" alt="client-logo"></a></li>
              <li><a href="#"><img src="../assets/img/clients/guardian.png" alt="client-logo"></a></li>
              <li><a href="#"><img src="../assets/img/clients/techradar.png" alt="client-logo"></a></li>
              <li><a href="#"><img src="../assets/img/clients/gadgets.png" alt="client-logo"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <Banner/>

    <Footer />

  </div>
</template>
