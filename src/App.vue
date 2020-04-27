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
@import url("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap");
:root {
  --font: "Roboto", sans-serif;

  --blue: #0d47a1;
  --blue-dark: #153d79;
  --yelow: #f3c300;
  --yelow-dark: #d5b01a;
  --dark: #131416;
  --darker: #1d2025;
  --grey: #acadaf;
  --grey-dark: #c6c7c8;
  --light: #e6f0fe;
  --lighter: #f5f9ff;
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
  background-color: var(--lighter);
  font-family: var(--font);
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
  color: var(--lighter);
  text-transform: uppercase;
  background: linear-gradient(103.64deg, #0d47a1 0%, #153d79 122.64%);
  border: none;
  padding: 16px 32px;
  border-radius: 7px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    transition: 0.2s ease;
    transform: scale(1.1);
  }
}
</style>
