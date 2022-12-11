<script setup>
import Banner from "@/components/Banner.vue"
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <div>
    <div class="bg-[#014E56] w-full sm:min-h-[700px] min-h-[567px] font-livvic relative overflow-hidden">
      <Header />

      <div class="md:pt-[129px] sm:pt-[112px] pt-[80px] max-w-[1440px] w-full mx-auto overflow-hidden z-40 relative">
        <div class="max-w-[1140px] w-full md:min-h-[460px] sm:min-h-[484px] min-h-[400px] px-[15px] mx-auto">
          <div class="flex md:flex-row flex-col md:text-left text-center md:items-end items-center md:gap-x-[30px]">
            <div class="md:w-[635px] md:mb-0 sm:mb-[24px] mb-[18px]">
              <p
                class="font-bold text-white md:text-[100px] sm:text-[64px] md:leading-[100px] sm:leading-[56px] text-[40px] leading-[40px]">
                Find the <br />
                best <span class="text-[#F67E7E]">talent</span>
              </p>
            </div>
            <div
              class="max-w-[445px] relative after:w-[60px] after:h-[4px] md:after:block after:hidden after:bg-[#79C8C7] after:absolute after:bottom-[190px]">
              <p class="font-semibold md:text-left text-center md:text-[18px] text-[15px] leading-[28px] text-white">
                Finding the right people and building high performing teams can be
                hard. Most companies aren’t tapping into the abundance of global
                talent. We’re about to change that.
              </p>
            </div>
          </div>
        </div>
        <img class="absolute left-[-100px] bottom-[250px] -z-[10] md:block hidden" src="../assets/img/circle-mid.svg"
          alt="circle" />
        <img class="absolute bottom-[-100px] md:right-[165px] md:left-auto left-[50%] translate-x-[-50%] px-[10px]"
          src="../assets/img/circle-bottom.svg" alt="circle" />
      </div>
    </div>

    <main class="font-livvic">
      <section class="bg-[#012F34] min-h-[684px] text-white">
        <div
          class="max-w-[1440px] w-full min-h-[684px] md:pt-[198px] md:px-0 sm:px-[98px] sm:pt-[136px] md:pb-0 sm:pb-[100px] px-[9px] pt-[100px] pb-[64px] overflow-hidden mx-auto relative">
          <div class="max-w-[1140px] w-full px-[15px] mx-auto">
            <div class="flex md:flex-row flex-col md:items-start justify-between">
              <div
                class="relative after:block after:w-[50px] after:h-[4px] after:bg-[#F67E7E] after:absolute md:after:bottom-[198px] sm:after:bottom-[96px] after:bottom-[192px] md:mb-0 mb-[64px]">
                <p
                  class="font-bold md:text-[48px] text-[32px] md:leading-[48px] leading-[32px] md:max-w-[445px] max-w-[240px]">
                  Build & manage distributed teams like no one else.
                </p>
              </div>
              <div class="flex flex-col gap-y-8">
                <div class="flex sm:flex-row flex-col sm:items-start items-center">
                  <div class="mt-4 sm:mb-0 mb-4">
                    <span class="w-[56px] h-[56px] bg-[#2C6269] sm:mr-[23px] block rounded-full relative">
                      <img class="absolute bottom-[16px] right-[16px]" src="../assets/img/icons/human.svg" alt="icon" />
                    </span>
                  </div>
                  <div>
                    <p class="font-bold text-[18px] leading-[28px] text-[#F67E7E] mb-[16px] sm:text-left text-center">
                      Experienced Individuals
                    </p>
                    <p
                      class="font-semibold text-[15px] leading-[25px] opacity-80 max-w-[445px] sm:text-left text-center">
                      Our network is made up of highly experienced professionals
                      who are passionate about what they do.
                    </p>
                  </div>
                </div>
                <div class="flex sm:flex-row flex-col sm:items-start items-center">
                  <div class="mt-4 sm:mb-0 mb-4">
                    <span class="w-[56px] h-[56px] bg-[#2C6269] sm:mr-[23px] block rounded-full relative">
                      <img class="absolute bottom-[16px] right-[16px]" src="../assets/img/icons/settings.svg"
                        alt="icon" />
                    </span>
                  </div>
                  <div>
                    <p class="font-bold text-[18px] leading-[28px] text-[#F67E7E] mb-[16px] sm:text-left text-center">
                      Easy to Implement
                    </p>
                    <p
                      class="font-semibold text-[15px] leading-[25px] opacity-80 max-w-[445px] sm:text-left text-center">
                      Our processes have been refined over years of implementation
                      meaning our teams always deliver.
                    </p>
                  </div>
                </div>
                <div class="flex sm:flex-row flex-col sm:items-start items-center">
                  <div class="mt-4 sm:mb-0 mb-4">
                    <span class="w-[56px] h-[56px] bg-[#2C6269] sm:mr-[23px] block rounded-full relative">
                      <img class="absolute bottom-[16px] right-[16px]" src="../assets/img/icons/diagramm.svg"
                        alt="icon" />
                    </span>
                  </div>
                  <div>
                    <p class="font-bold text-[18px] leading-[28px] text-[#F67E7E] mb-[16px] sm:text-left text-center">
                      Enhanced Productivity
                    </p>
                    <p
                      class="font-semibold text-[15px] leading-[25px] opacity-80 max-w-[445px] sm:text-left text-center">
                      Our customized platform with in-built analytics helps you
                      manage your distributed teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="absolute md:bottom-0 top-0 right-[-100px]" src="./assets/img/circle-3.svg" alt="circle" />
        </div>
      </section>

      <section class="bg-[#004047] text-white">
        <div
          class="max-w-[1440px] w-full min-h-[745px] md:pt-[140px] sm:py-[100px] pt-[140px] md:px-0 sm:px-[97px] px-[9px] pb-[164px] mx-auto relative overflow-hidden">
          <div class="max-w-[1140px] w-full mx-auto px-[15px]">
            <p
              class="font-bold md:text-[48px] text-[32px] md:leading-[48px] leading-[32px] text-center md:max-w-[932px] max-w-[573px] md:mb-[92px] mb-[84px] mx-auto">
              Delivering real results for top companies. Some of our
              <span class="text-[#79C8C7]">success stories.</span>
            </p>
            <div class="flex md:flex-row flex-col md:items-start items-center md:gap-x-[30px] gap-y-[84px]">
              <div class="md:max-w-[350px] flex flex-col items-center relative z-10">
                <img class="absolute -z-10 top-[-35px]" src="../assets/img/quote.svg" alt="icon" />
                <p class="text-center font-semibold text-[15px] leading-[25px] mb-6">
                  “The team perfectly fit the specialized skill set required. They
                  focused on the most essential features helping us launch the
                  platform eight months faster than planned.”
                </p>
                <p class="font-bold text-[18px] leading-[28px] text-[#79C8C7] mb-[2px]">
                  Kady Baker
                </p>
                <p class="text-[13px] leading-[18px] italic mb-[32px]">
                  Product Manager at Bookmark
                </p>
                <div>
                  <img src="../assets/img/kady.png" alt="" />
                </div>
              </div>
              <div class="md:max-w-[350px] flex flex-col items-center relative z-10">
                <img class="absolute -z-10 top-[-35px]" src="../assets/img/quote.svg" alt="icon" />
                <p class="text-center font-semibold text-[15px] leading-[25px] mb-6">
                  “We needed to automate our entire onboarding process. The team
                  came in and built out the whole journey. Since going live, user
                  retention has gone through the roof!”
                </p>
                <p class="font-bold text-[18px] leading-[28px] text-[#79C8C7] mb-[2px]">
                  Aiysha Reese
                </p>
                <p class="text-[13px] leading-[18px] italic mb-[32px]">
                  Founder of Manage
                </p>
                <div>
                  <img src="../assets/img/aiysha.png" alt="avatar" />
                </div>
              </div>
              <div class="md:max-w-[350px] flex flex-col items-center relative z-10">
                <img class="absolute -z-10 top-[-35px]" src="../assets/img/quote.svg" alt="icon" />
                <p class="text-center font-semibold text-[15px] leading-[25px] mb-6">
                  “Amazing. Our team helped us build an app that delivered a new
                  experience for hiring a physio. The launch was an instant
                  success with 100k downloads in the first month.”
                </p>
                <p class="font-bold text-[18px] leading-[28px] text-[#79C8C7] mb-[2px]">
                  Arthur Clarke
                </p>
                <p class="text-[13px] leading-[18px] italic mb-[32px]">
                  Co-founder of MyPhysio
                </p>
                <div>
                  <img src="../assets/img/arthur.png" alt="avatar" />
                </div>
              </div>
            </div>
          </div>
          <img class="absolute top-0 left-0" src="../assets/img/rectangle.svg" alt="shape" />
          <img class="absolute bottom-[-100px] right-0" src="../assets/img/circle-4.svg" alt="shape" />
        </div>
      </section>

      <Banner />

    </main>

    <Footer />
  </div>
</template>
