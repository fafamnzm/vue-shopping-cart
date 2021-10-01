<template>
  <div class="home my-auto">
    <v-img
      alt="Fafa Image"
      class="shrink mr-2"
      contain
      src="https://www.faramarz-monazami.com/wp-content/uploads/2019/05/cropped-Capture3-6.jpg"
      transition="scale-transition"
      width="200"
      @click="GoToTheDevelopersPage"
    />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    GoToTheDevelopersPage() {
      window.location.href = "https://www.faramarz-monazami.com/"
    }
  }
}
</script>

<style scoped>
.home {
  display: grid;
  place-items: center;
  cursor: pointer;
  padding-top: 200px;
}
</style>
