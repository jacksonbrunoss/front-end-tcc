<template>
  <nav class="navigation">
    <div class="container">
      <div class="content">
        <div class="brand-box">
          <img
            src="../../assets/LOGO.svg"
            alt="ADOTTTE - Plataforma para adoção de animais domésticos."
          />
        </div>
        <div class="menu">
          <ul>
            <li>
              <router-link to="/">Inicio</router-link>
            </li>
            <li>
              <router-link to="/about">Sobre</router-link>
            </li>
            <router-link class="btn" tag="button" to>Fazer Login</router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  background: linear-gradient(93.34deg, #1d2025 0.04%, #131416 101.53%);
  padding: 0px 16px;
  position: fixed;
}
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
}
.brand-box img {
  width: 200px;
}
.menu ul {
  display: flex;
  align-items: center;
}
.menu ul li a {
  color: var(--lighter);
  text-transform: uppercase;
  padding: 0px 16px;
}
</style>