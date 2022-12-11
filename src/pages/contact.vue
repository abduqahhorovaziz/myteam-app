<script setup>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"
</script>

<template>
  <div>
    <div class="bg-[#014E56] w-full sm:min-h-[789px] min-h-[567px] font-livvic relative overflow-hidden">
      <Header />
      <div class="max-w-[1440px] sm:min-h-[405px] w-full mx-auto text-white relative overflow-hidden z-20">
        <img class="absolute top-[124px] left-[-100px] sm:block hidden" src="../assets/img/contact/circle.svg" alt="shape">
        <img class="absolute sm:bottom-0 bottom-[-112.5px] right-[-100px]" src="../assets/img/contact/circle-2.svg" alt="shape">
        <div class="max-w-[1140px] w-full mx-auto px-[15px] pb-[114px]">
          <div class="flex md:flex-row flex-col md:items-start items-center md:mt-[120px] mt-[112px]">
            <div class="sm:max-w-[540px] md:mb-0 mb-[64px]">
              <p
                class="mb-4 font-bold sm:text-[64px] text-[40px] md:leading-[100px] sm:leading-[56px] leading-[40px] md:w-[350px] md:text-left text-center">
                Contact
              </p>
              <div>
                <p class="font-bold text-[32px] leading-[48px] text-[#F67E7E] mb-8 md:text-left text-center">Ask us about</p>
                <div class="flex flex-col gap-y-8 px-[15px]">
                  <div class="flex  items-center">
                    <div class="mt-4 sm:mb-0 mb-4">
                      <span class="w-[56px] h-[56px] bg-[#2C6269] mr-[23px] block rounded-full relative">
                        <img class="absolute bottom-[16px] right-[16px]" src="../assets/img/icons/human.svg"
                          alt="icon" />
                      </span>
                    </div>
                    <div>
                      <p class="font-bold text-[18px] leading-[28px]">
                        The quality of our talent network
                      </p>
                    </div>
                  </div>
                  <div class="flex  items-center">
                    <div class="mt-4 sm:mb-0 mb-4">
                      <span class="w-[56px] h-[56px] bg-[#2C6269] mr-[23px] block rounded-full relative">
                        <img class="absolute bottom-[16px] right-[16px]" src="../assets/img/icons/settings.svg"
                          alt="icon" />
                      </span>
                    </div>
                    <div>
                      <p class="font-semibold text-[18px] leading-[28px]">
                        Usage & implementation of our software
                      </p>
                    </div>
                  </div>
                  <div class="flex  items-center">
                    <div class="mt-4 sm:mb-0 mb-4">
                      <span class="w-[56px] h-[56px] bg-[#2C6269] mr-[23px] block rounded-full relative">
                        <img class="absolute bottom-[16px] right-[16px]" src="../assets/img/icons/diagramm.svg"
                          alt="icon" />
                      </span>
                    </div>
                    <div>
                      <p class="font-semibold text-[18px] leading-[28px]">
                        How we help drive innovation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sm:w-[540px] md:ml-auto">
              <form class="w-full flex flex-col gap-y-6" action="#">
                <div>
                  <input
                    class="w-full px-[14px] pb-4 bg-transparent border-b outline-none focus:border-[#79C8C7] duration-200 ease-out font-semibold text-[15px] leading-[25px] tracking-[-0.115385px]"
                    type="text" placeholder="Name">
                </div>
                <div>
                  <input
                    class="w-full px-[14px] pb-4 bg-transparent border-b outline-none focus:border-[#79C8C7] duration-200 ease-out font-semibold text-[15px] leading-[25px] tracking-[-0.115385px] peer invalid:border-[#F67E7E] invalid:placeholder-[#F67E7E]"
                    type="email" placeholder="Email Address" required>
                  <span
                    class="invisible font-semibold text-[10px] leading-[12px] text-[#F67E7E] italic px-[14px] peer-invalid:visible">This
                    field is required</span>
                </div>
                <div>
                  <input
                    class="w-full px-[14px] pb-4 bg-transparent border-b outline-none focus:border-[#79C8C7] duration-200 ease-out font-semibold text-[15px] leading-[25px] tracking-[-0.115385px]"
                    type="text" placeholder="Company Name">
                </div>
                <div>
                  <input
                    class="w-full px-[14px] pb-4 bg-transparent border-b outline-none focus:border-[#79C8C7] duration-200 ease-out font-semibold text-[15px] leading-[25px] tracking-[-0.115385px]"
                    type="text" placeholder="Title">
                </div>
                <div>
                  <textarea
                    class="w-full px-[14px] pb-4 bg-transparent border-b outline-none focus:border-[#79C8C7] duration-200 ease-out font-semibold text-[15px] leading-[25px] tracking-[-0.115385px]"
                    placeholder="Message"></textarea>
                </div>
                <button
                  class="text-left px-8 pt-[9px] pb-[11px] bg-white rounded-[24px] w-[123px] text-[#004047] font-semibold text-[18px] leading-[28px] hover:bg-[#004047] hover:text-white duration-200 ease-out">submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
