<script>
import { ref } from '@vue/reactivity'

export default {
  setup(){
    let open = ref(false)

    function MenuOpen() {
      open.value = !open.value
    }

    return{open, MenuOpen}
  }


}

</script>

<template>
  <header class="md:pt-[73px] sm:pt-[64px] pt-[48px]">
    <div class="max-w-[1140px] w-full md:px-[15px] sm:px-10 px-6 mx-auto">
      <nav
        class="flex items-center sm:justify-start justify-between font-semibold text-white text-[18px] leading-[28px]">
        <router-link class="mr-[80px]" to="/">
          <img src="../assets/img/logo/myteam-logo.svg" alt="logo" />
        </router-link>
        <ul class="sm:flex hidden items-center gap-x-10">
          <li class="hover:text-[#F67E7E] duration-200 ease-out">
            <router-link to="/">home</router-link>
          </li>
          <li class="hover:text-[#F67E7E] duration-200 ease-out">
            <router-link to="/about">about</router-link>
          </li>
        </ul>
        <div class="ml-auto sm:block hidden">
          <router-link
            class="px-[32px] pt-[8px] pb-[11px] border-2 border-white rounded-[24px] hover:bg-white hover:text-[#002529] duration-200 ease-out"
            to="/contact">contact us</router-link>
        </div>
        <button id="openBtn" @click="MenuOpen" class="sm:hidden block" type="button">
          <img src="../assets/img/icons/icon-hamburger-menu.svg" alt="menu" />
        </button>
      </nav>
    </div>
    <div id="mobileNav" class="w-full h-screen fixed top-0 z-50 bg-[#00000080] text-white font-livvic" :class="open ? 'fixed' : 'hidden'">
      <div class="w-[255px] h-full ml-auto bg-[#2C6269] px-[48px] pt-[112px] relative translate-x-0" :class="open ? 'translate-x-0' : 'translate-x-[100%]'">
        <ul>
          <li class="text-[18px] leading-[28px] font-semibold mb-[24px]">
            <router-link to="/">home</router-link>
          </li>
          <li class="text-[18px] leading-[28px] font-semibold mb-[36px]">
            <router-link to="/about">about</router-link>
          </li>
          <li class="text-[18px] leading-[28px] font-semibold">
            <router-link class="pt-[9px] pb-[11px] pl-[33px] pr-[33px] border-2 border-white rounded-[24px] active:bg-white active:text-[#2C6269] duration-200 ease-in"
              to="/contact">contact us</router-link>
          </li>
        </ul>
        <button @click="MenuOpen" class="absolute top-[56px] right-[25px]">
          <img src="../assets/img/icons/closeBtn.svg" alt="icon" />
        </button>
        <img class="absolute bottom-0 right-[-100px]" src="../assets/img/mobile-circle.svg" alt="circle " />
      </div>
    </div>
  </header>
</template>
