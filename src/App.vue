<template>
  <div id="app">
    <Navbar />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navigation/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>
<style lang="scss">
@import url("https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css");
@import url("https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese");
:root {
  --font: "Nunito", sans-serif;

  --green-l: #3dcc8e;
  --green-m: #00c68e;
  --green-d: #03b898;
  --black-l: #4a4a4a;
  --grey-l: #d6d6d6;
  --light-l: #ffffff;
  --gradient: linear-gradient(96.83deg, #3dcc8e -7.74%, #03b898 124.61%);
  --shadow: 0px 1px 5px 0px rgba(74, 74, 74, 0.3);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
h1,
h2,
h3,
h4,
h5,
p,
ul,
li,
ol,
span,
blockquote,
cite,
table,
a {
  text-decoration: none;
  font-size: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
img {
  display: block;
  margin: 0;
  padding: 0;
  max-width: 100%;
}
body {
  background-color: var(--light);
  font-family: var(--font);
  color: var(--black-l);
}
/* Estilos Globais */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  flex: 1;
}
.container {
  max-width: 1144px;
  margin: 0 auto;
}
.btn {
  color: var(--light-l);
  text-transform: uppercase;
  background: var(--gradient);
  border: none;
  padding: 16px 48px;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  font-family: var(--font);
  transition: 0.2s ease;
  &:hover {
    transition: 0.2s ease;
    transform: scale(1.1);
  }
}
</style>
