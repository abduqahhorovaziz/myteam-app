<template>
  <footer class="font-livvic bg-[#002529] text-white">
    <div class="max-w-[1440px] min-h-[196px] py-[48px] w-full mx-auto relative">
      <div class="max-w-[1140px] w-full px-[15px] mx-auto">
        <div class="flex sm:flex-row flex-col items-center">
          <div class="md:mr-[125px] flex flex-col sm:items-start items-center sm:mb-0 mb-6">
            <div class="mb-[25px]">
              <img src="../assets/img/logo/myteam-logo.svg" alt="logo" />
            </div>
            <ul class="flex items-center gap-x-10 md:mb-0 mb-[33px]">
              <li class="font-semibold text-[18px] leading-[28px] hover:text-[#F67E7E] duration-200 ease-out">
                <router-link to="/">home</router-link>
              </li>
              <li class="font-semibold text-[18px] leading-[28px] hover:text-[#F67E7E] duration-200 ease-out">
                <router-link to="/about">about</router-link>
              </li>
            </ul>
            <ul class="flex items-center gap-x-4 text-[24px] md:hidden">
              <li class="hover:text-[#F67E7E] duration-200 ease-out">
                <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
              </li>
              <li class="hover:text-[#F67E7E] duration-200 ease-out">
                <a href="#"><i class="fa-brands fa-pinterest"></i></a>
              </li>
              <li class="hover:text-[#F67E7E] duration-200 ease-out">
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
              </li>
            </ul>
          </div>
          <div class="md:block hidden">
            <p class="font-medium text-[15px] leading-[25px] opacity-60">
              987 Hillcrest Lane <br />
              Irvine, CA
              <br />
              California 92714 <br />
              Call Us : 949-833-7432
            </p>
          </div>
          <div class="sm:ml-auto flex flex-col sm:items-end items-center">
            <ul class="items-center gap-x-4 text-[24px] mb-[50px] md:flex hidden">
              <li class="hover:text-[#F67E7E] duration-200 ease-out">
                <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
              </li>
              <li class="hover:text-[#F67E7E] duration-200 ease-out">
                <a href="#"><i class="fa-brands fa-pinterest"></i></a>
              </li>
              <li class="hover:text-[#F67E7E] duration-200 ease-out">
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
              </li>
            </ul>
            <div class="md:hidden block mb-[34px]">
              <p class="sm:text-right text-center font-medium text-[15px] leading-[25px] opacity-60">
                987 Hillcrest Lane <br />
                Irvine, CA <br />
                California 92714 <br />
                Call Us : 949-833-7432
              </p>
            </div>
            <p class="font-medium text-[15px] leading-[25px] opacity-60">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
