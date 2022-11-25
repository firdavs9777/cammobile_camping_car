<template>
  <div class="input_option_section">
    <div>
      <img src="@components/assets/variant2.png" class="step-image" />
    </div>
    <div class="input_option">
      <div class="form-section">
        <div v-for="(option, option_id) in options_main" :key="option_id">
          <label class="car_type_label">{{ option.category }}</label>
          <br />
          <div
            class="option_section"
            v-for="(element_option, element_id) in option.data"
            :key="element_id"
          >
            <button
              @click="select_required($event)"
              :value="element_option.title"
              class="select_button"
              :class="{ active: isActive }"
              type="button"
            >
              {{ element_option.title }}
            </button>
            <br v-if="(element_id + 1) % 2 == 0" />
          </div>
        </div>
      </div>
      <!-- <button class="submit-button">다음단계로</button> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    axios.post("http://cammobile.kr/q/api/hash/?c=option").then((rep) => {
      this.options_main = rep.data;
      console.log(rep.data);
    });
  },
  data() {
    return {
      options_main: null,
      selected_data: [],
      isActive: false,
    };
  },
  methods: {
    select_required(event) {
      let element = event.target.value;
      let el = event.target.classList.value;
      console.log(el);
      this.isActive = !this.isActive;
      this.selected_data.push(element);
      console.log(this.selected_data);
    },
  },
};
</script>
<style scoped>
.active {
}
.errorClass {
  background-color: transparent;
}

.step-image {
  width: 100%;
  margin-top: 10px;
  padding: 24px 0px;
}

.input_option_section {
  height: 700px;
  overflow-x: scroll;
  overflow-y: none;
}

.input_option {
  background-color: #f0f4f7;
}

.select_button {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #777777;
  align-items: center;
  padding: 5px 12px;
  height: 29px;
  margin-right: 10px;
  margin-top: 7px;
  padding: 5px 12px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
}

.form-section {
  margin-bottom: 10px;
  width: 100%;
  text-align: left;
  padding-left: 10px;
}

.car_type_label {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-transform: capitalize;
  color: #222222;
  margin-top: 20px;
  padding-top: 20px;
}

.option_section {
  display: inline-block;
}

.submit-button {
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
  width: 180px;
  height: 45px;
  background: #b9b9b9;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 35px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #ffffff;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
