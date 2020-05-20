<template>
  <section class="animal-page">
    <div class="container">
      <div v-if="animalsId" class="content">
        <div class="avatar-box">
          <div class="avatar">
            <img :src="`http://localhost:3030/${animalsId.imagem_animal}`" :alt="animalsId.nome" />
          </div>
        </div>
        <div class="info-box">
          <div class="info">
            <h2>Dados sobre</h2>
            <ul class="datas">
              <li>
                <b>Nome:</b>
                {{animalsId.nome}}
              </li>
              <li>
                <b>Espécie:</b>
                {{animalsId.especie}}
              </li>
              <li>
                <b>Sexo:</b>
                {{animalsId.sexo}}
              </li>
              <li>
                <b>Tamanho:</b>
                {{animalsId.tamanho}}
              </li>
              <li>
                <b>
                  Descrição:
                  <br />
                </b>
                {{animalsId.descricao}}
              </li>
              <li>
                <b>
                  Observações:
                  <br />
                </b>
                {{animalsId.observacoes}}
              </li>
            </ul>
            <div class="info-user">
              <h3>Cadastrado por:</h3>
              {{animalsId.usuario.nome}}
              <a target="_black" :href="urlLink">Link</a>
            </div>
          </div>
        </div>
      </div>
      <Loading v-else />
    </div>
  </section>
</template>

<script>
import { api } from "@/services/services.js";
export default {
  name: "AnimalPage",
  props: ["id"],
  data() {
    return {
      animalsId: null
    };
  },
  computed: {
    urlLink() {
      return `https://api.whatsapp.com/send?phone=${this.animalsId.usuario.telefone}&text=Olá,%20meu%20amigo!`;
    }
  },
  methods: {
    getAnimalsId() {
      const id_animals = this.id;
      console.log(id_animals);
      api.get(`/animals/${id_animals}`).then(res => {
        console.log(res.data);
        this.animalsId = res.data.animal;
      });
    }
  },
  created() {
    this.getAnimalsId();
    // this.getUserId();
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 32px;
  padding: 32px 0px 0px 0px;
}
.avatar-box {
  width: 100%;
  height: 450px;
}
.avatar {
  overflow: hidden;
  display: block;
  width: 100%;
  height: 450px;
  border-radius: 3px;
  img {
    width: 100%;
    height: 100%;
  }
}
.info {
  h2 {
    font-size: 2rem;
    font-weight: 900;
  }
  > .datas li {
    padding: 5px 0px;
  }
}
</style>