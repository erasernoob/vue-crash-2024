<script setup>
import Hero from '@/components/Hero.vue'
import  HomeCards from '@/components/HomeCards.vue'
import JobListings from '@/components/JobListings.vue';
</script>

<template>

 <Hero />
  <HomeCards />
  <!-- limit is a Number we will need to add a colon front of it  -->
  <JobListings :limit = "3" :show-buttton="true"/>

</template>