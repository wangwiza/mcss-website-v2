<script setup>
import CloudImage from '@/components/CloudImage.vue';
import TeamCard from '@/components/TeamCard.vue';
import { team } from '@/data/team.js';

</script>

<template>
  <div class="wrapper">
    <div class="grid">
      <h1 class="page-title">About McGill Chinese Student Society</h1>
      <div>
        <p class="p1">
          <CloudImage class="page_polaroid" imageName="mcss/team/group" />
        </p>
        <p class="p1">
          MCSS, McGill Chinese Students' Society is the largest and most influential cultural student organization in
          Eastern Canada.
        </p>
        <p class="p1">
          With over 60 years of history, we provide a variety of events to over 1,500 active members and help our members
          succeed in school and life.
        </p>
        <p class="p1">
          Our short-term goal is to provide our students with valuable events to make their student life more meaningful,
          while our long-term goal is to motivate and encourage our students to give back to their community and excel
          academically by providing them with helpful services including seminars, lessons, and talks.
        </p>
        <p class="p1">
          MCSS is a non-profit organization registered under the Students' Society of McGill University. All our proceeds
          either go to charity or are used to provide our students with more valuable services.
        </p>
        <p class="p1">
          Our events range from largescale shows to career planning and information seminars. In addition, we organize
          dinner outings, networking opportunities and parties for our members.
        </p>
        <p class="p1">&nbsp</p>
        <p class="p1">&nbsp</p>
        <p class="p1">
          <b>MCSS</b>
          <h1 class="page-title">MEET THE TEAM</h1>
        </p>
        <p class="p1">&nbsp</p>
        <div class="team-grid">
          <TeamCard v-for="member in team" :key="member" :teamMember="member"/>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  position: relative;
  max-width: 1660px;
  width: 66.666%;
  left: 16.666%
}

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
}

.page-title {
  font-size: var(--header-text-size-px);
  width: 100%;
  text-align: center;
  display: inline-block;
  position: relative;
  margin-bottom: 45px;
  letter-spacing: var(--heading-spacing);
  text-transform: var(--heading-font-case);
}

.p1 {
  text-align: center;
  margin-bottom: 15px;
}

p {
  margin-bottom: 15px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(250px, 15vw), 1fr));
  column-gap: 5vw;
  row-gap: 5vh;
  align-items: stretch;
}

.page_polaroid {
  width: 100%;
  height: auto;
  max-width: 600px;
  margin: 0;
}
</style>