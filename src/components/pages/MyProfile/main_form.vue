<template>
  <form>
    <section v-for="(i, index) in pages" :key="index">
      <section class="page1" v-if="i == 1 && num == 1">
        <basic_form />
      </section>
      <section class="page2" v-if="i == 2 && num == 2">
        <option_input />
      </section>
      <section class="page3" v-if="i == 3 && num == 3">
        <option_details />
      </section>
      <section class="page4" v-if="i == 4 && num == 4">
        <image_section />
      </section>
      <section class="page5" v-if="i == 5 && num == 5">
        <div>
          <div>
            <img src="@components/assets/variant5.png" class="step-image" />
          </div>
          <div>
            <img
              src="@components/assets/Vector.png"
              style="width: 49px; height: 49px"
            />
          </div>
          <button class="upload_button" type="button">Previus</button>
        </div>
      </section>
    </section>
    <button class="upload_button" type="button" @click="page_next()">
      메인으로 가기
    </button>
  </form>
</template>
<script>
import basic_form from "./form/basic_form.vue";
import image_section from "./form/image_section.vue";
import option_input from "./form/option-input.vue";
import option_details from "./form/option_details.vue";
export default {
  components: {
    basic_form,
    option_input,
    option_details,
    image_section,
  },
  data() {
    return {
      pages: 5,
      num: 1,
    };
  },
  methods: {
    page_next() {
      this.num = this.num + 1;
    },
  },
};
</script>
<style scoped lang="scss">
.step-image {
  width: 100%;
  margin-top: 10px;
  padding: 24px 0px;
}

.upload_button {
  @include submit_button;
}
</style>
