<template>
  <nav class="navigation">
    <div class="container">
      <div class="content">
        <div class="brand-box">
          <img
            src="@/assets/brand.svg"
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
            <div class="btn-login">
              <router-link v-if="user" to="/">
                <i class="bx bx-power-off"></i>
              </router-link>
              <router-link v-else class="login-link" to="/">Login</router-link>
            </div>
            <router-link class="btn" tag="button" to>Cadastre-se</router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      user: false
    };
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  box-shadow: var(--shadow);
  background: var(--light-l);
  position: fixed;
  z-index: 999;
}
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
}
.brand-box img {
  width: 100px;
}
.menu ul {
  display: flex;
  align-items: center;
}
.menu ul li a {
  color: var(--black-l);
  font-weight: bold;
  padding: 0px 16px 0px 0px;
  transition: 0.2s ease;
  &:hover {
    color: var(--green-d);
    transition: 0.2s ease;
  }
}
.btn-login {
  margin: 0px 16px 0px 0px;
}
a .bx-power-off {
  color: var(--green-d);
  font-size: 1.5rem;
}
.login-link {
  color: var(--black-l);
  transition: 0.2s ease;
  font-weight: bold;
  &:hover {
    color: var(--green-d);
    transition: 0.2s ease;
  }
}
</style>