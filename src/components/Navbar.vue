<template>
  <nav class="max-w-screen-xl mx-auto px-8 h-24 flex items-center justify-between">
    <Logo />

    <ul class="flex items-center space-x-8">
      <li>
        <Link href="#home">
          <span class="text-lg">Home</span>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <span class="text-lg">Projects</span>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/samuelcust/" target="_blank">
          <img src="/assets/images/github.svg" width="24" height="24">
        </Link>
      </li>
      <li>
        <Link href="https://br.linkedin.com/in/samuel-custodio-01a6a0187" target="_blank">
          <img src="/assets/images/linkedin.svg"  width="24" height="24">
        </Link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

import Logo from './Logo.vue'
import Link from './Link.vue'

</script>
