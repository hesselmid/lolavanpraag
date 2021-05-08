<template>
  <div class="bg-apple-green">
    <div
      class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] 2xl:pt-[165px] 2xl:pb-[112px] 2xl:px-[55px]"
    >
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <h1
        class="mt-[20px] font-serif font-light text-[32px] leading-[32px] 2xl:text-[90px] 2xl:leading-[80px]"
      >
        Contact
      </h1>

      <div class="mt-[50px] 2xl:grid 2xl:grid-cols-2 2xl:mt-[80px]">
        <div class="2xl:grid 2xl:grid-cols-2">
          <div class="font-serif font-light text-[24px] leading-[35px]">
            Want to get in touch?
          </div>
          <div class="mt-[10px] 2xl:mt-0">
            <a
              class="block font-light leading-[32px] 2xl:text-[20px] 2xl:leading-[40px]"
              href="+ 31 (0)10 234 5413"
              >+ 31 (0)10 234 5413</a
            >
            <a
              class="block font-light leading-[32px] 2xl:text-[20px] 2xl:leading-[40px]"
              href="info@lolavanpraag.com"
              >info@lolavanpraag.com</a
            >
          </div>
        </div>
        <div class="mt-[50px] 2xl:grid 2xl:grid-cols-2 2xl:mt-0 ">
          <div class="font-serif font-light text-[24px] leading-[35px]">
            Follow Lola on
          </div>
          <div class="mt-[10px] 2xl:mt-0">
            <a
              class="block font-light leading-[32px] 2xl:text-[20px] 2xl:leading-[40px]"
              href="https://www.instagram.com/lolavanpraag/"
            >
              Instagram
            </a>
            <a
              class="block font-light leading-[32px] 2xl:text-[20px] 2xl:leading-[40px]"
              href="https://www.linkedin.com/in/lola-van-praag/"
              >LinkedIn</a
            >
          </div>
        </div>
      </div>

      <div
        class="border-t border-[#97D039] mt-[25.5px] pt-[24.5px] 2xl:grid 2xl:grid-cols-4 2xl:mt-[50px] 2xl:pt-[50px]"
      >
        <div class="font-serif font-light text-[24px] leading-[35px]">
          Find my work at the follow galleries
        </div>
        <div class="mt-[10px] 2xl:mt-0">
          <a
            class="block font-light leading-[32px] 2xl:text-[20px] 2xl:leading-[40px]"
            href="https://www.rademakersgallery.com/"
          >
            Rademarkers Gallery
          </a>
          <a
            class="block font-light leading-[32px] 2xl:text-[20px] 2xl:leading-[40px]"
            href="https://hetechtewerk.studio/"
            >HEW Gallery</a
          >
        </div>
      </div>

      <div
        class="border-t border-[#97D039] mt-[24.5px] pt-[25.5px] 2xl:mt-[50px] 2xl:pt-[50px]"
      >
        <h2 class="font-serif font-light text-[24px] leading-[35px]">
          Shoot me a message!
        </h2>
        <form class="mt-[20px] 2xl:mt-[40px]">
          <div class="2xl:grid 2xl:grid-cols-2 2xl:gap-x-[113px]">
            <input
              class="block w-full pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black"
              type="text"
              placeholder="First name*"
            />
            <input
              class="block w-full mt-[40px] pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black 2xl:mt-0"
              type="text"
              placeholder="Last name*"
            />
            <input
              class="block w-full mt-[40px] pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black 2xl:mt-[60px]"
              type="email"
              placeholder="E-mail address*"
            />
            <input
              class="block w-full mt-[40px] pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black 2xl:mt-[60px]"
              type="tel"
              placeholder="Telephone number*"
            />
            <input
              class="block w-full mt-[40px] pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black 2xl:mt-[60px]"
              type="text"
              placeholder="Subject"
            />
            <input
              class="block w-full mt-[40px] pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black 2xl:mt-[60px] 2xl:row-start-4"
              type="textarea"
              placeholder="Comment*"
            />
          </div>
          <button
            class="mt-[50px] bg-electric-pink h-[60px] px-[62px] lowercase 2xl:mt-[60px]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    <Marquee class="sticky bottom-0" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { name: "Home", link: "/" },
        { name: "Contact", link: "/contact" }
      ]
    };
  }
};
</script>
