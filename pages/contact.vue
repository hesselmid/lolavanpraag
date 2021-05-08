<template>
  <div class="bg-apple-green">
    <div
      class="container mx-auto pt-[86px] pb-[100px] px-[17.5px] md:px-[30px] 2xl:px-[55px]"
    >
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <h1 class="mt-[20px] font-serif font-light text-[32px] leading-[32px]">
        Contact
      </h1>

      <div class="mt-[50px]">
        <div>
          <div class="font-serif font-light text-[24px] leading-[35px]">
            Want to get in touch?
          </div>
          <div class="mt-[10px]">
            <a
              class="block font-light leading-[32px]"
              href="+ 31 (0)10 234 5413"
              >+ 31 (0)10 234 5413</a
            >
            <a
              class="block font-light leading-[32px]"
              href="info@lolavanpraag.com"
              >info@lolavanpraag.com</a
            >
          </div>
        </div>
        <div class="mt-[50px]">
          <div class="font-serif font-light text-[24px] leading-[35px]">
            Follow Lola on
          </div>
          <div class="mt-[10px]">
            <a
              class="block font-light leading-[32px]"
              href="https://www.instagram.com/lolavanpraag/"
            >
              Instagram
            </a>
            <a
              class="block font-light leading-[32px]"
              href="https://www.linkedin.com/in/lola-van-praag/"
              >LinkedIn</a
            >
          </div>
        </div>
      </div>

      <div class="border-t border-[#97D039] mt-[25.5px] pt-[24.5px]">
        <div class="font-serif font-light text-[24px] leading-[35px]">
          Find my work at the follow galleries
        </div>
        <div class="mt-[10px]">
          <a
            class="block font-light leading-[32px]"
            href="https://www.rademakersgallery.com/"
          >
            Rademarkers Gallery
          </a>
          <a
            class="block font-light leading-[32px]"
            href="https://hetechtewerk.studio/"
            >HEW Gallery</a
          >
        </div>
      </div>

      <div class="border-t border-[#97D039] mt-[24.5px] pt-[25.5px]">
        <h2 class="font-serif font-light text-[24px] leading-[35px]">
          Shoot me a message!
        </h2>
        <form class="mt-[20px]">
          <input
            class="block w-full pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black"
            type="text"
            placeholder="First name*"
          />
          <input
            class="block w-full mt-[40px] pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black"
            type="text"
            placeholder="Last name*"
          />
          <input
            class="block w-full mt-[40px] pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black"
            type="email"
            placeholder="E-mail address*"
          />
          <input
            class="block w-full mt-[40px] pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black"
            type="tel"
            placeholder="Telephone number*"
          />
          <input
            class="block w-full mt-[40px] pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black"
            type="text"
            placeholder="Subject"
          />
          <input
            class="block w-full mt-[40px] pb-[17px] pl-[20px] bg-apple-green border-b border-black font-light text-[14px] leading-[19px] placeholder-black"
            type="textarea"
            placeholder="Comment*"
          />
          <button
            class="mt-[50px] bg-electric-pink h-[60px] px-[62px] lowercase"
          >
            Send
          </button>
        </form>
      </div>
    </div>
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
