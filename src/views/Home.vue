<template>
  <div class="home">
    <header class="header">
      <div class="container">
        <div class="content">
          <div class="hero">
            <h1 class="title">Encontre seu novo amigo</h1>
            <SearchAnimals />
          </div>
        </div>
      </div>
    </header>
    <ListAnimals />
  </div>
</template>

<script>
import SearchAnimals from "@/components/Animals/SearchAnimals.vue";
import ListAnimals from "@/components/Animals/ListAnimals.vue";
export default {
  name: "Home",
  components: {
    SearchAnimals,
    ListAnimals
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: url("../assets/bg-header.jpg");
  object-fit: cover;
  background-position: center;
}
.content {
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero {
  > .title {
    font-size: 2rem;
    color: var(--lighter);
  }
}
</style>
