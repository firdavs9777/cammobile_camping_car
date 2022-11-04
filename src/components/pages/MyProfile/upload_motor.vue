<template>
  <div class="upload_section">
    <form v-on:submit.prevent="sendFileItems()">
      <h1>Motor Post</h1>
      <label>차종 이름</label>
      <input type="text" v-model="post.car_name" />
      <label>판매가</label>
      <input type="text" placeholder="Ex:23.100.000" v-model="post.price" />
      <label>연식 </label>
      <input type="text" v-model="post.produced_year" />
      <!-- <label>KM 수</label>
      <input type="number" v-model="insurance_history" /> -->
      <label>보험이력</label>
      <input type="text" v-model="post.insurance_history" />
      <label>외부길이</label>
      <input type="text" v-model="post.outside_length" />
      <label>실내길이</label>
      <input type="text" v-model="post.indoor_length" />
      <label>외부너비</label>
      <input type="text" v-model="post.outside_width" />
      <label>내부높이</label>
      <input type="text" v-model="post.inner_height" />
      <label>공차중량</label>
      <input type="text" v-model="post.load_weight" />
      <label>최대 적재중량</label>
      <input type="text" v-model="post.max_loadweight" />
      <label>판매지역</label>
      <input type="text" v-model="post.sale_area" />
      <br />
      <label>면허</label>
      <select v-model="post.licence_need">
        <option value="" selected>핀요면허 선택하십시오</option>
        <option>대형 견인</option>
        <option>소형 견인</option>
        <option>1종 대형</option>
        <option>1종 보통</option>
        <option>2종 보통</option>
        <option>기타</option>
      </select>
      <section v-for="(element, name, index) in options" :key="index">
        <label>{{ name }}</label>

        <!-- <p>{{ element }}</p> -->
        <!-- <select  @change="getOption($event,`${name}`)">
          <option value="" selected>{{ name }} 선택하십시오</option>
          <option  v-for="el,indexs in element" :key="indexs">
            {{ el.value }}  {{el.is_quantity}}
          </option>
        </select> -->
        <select @change="getOption($event, `${name}`)">
          <option value="" selected>{{ name }} 선택하십시오</option>
          <template v-for="(el, i) in element">
            <option :key="i" :value="el.idx" :is_quantity="el.is_quantity">
              {{ el.value }}
            </option>
          </template>
          <template> </template>
        </select>
        <br />
      </section>
      <div class="option-select-box" v-if="optionPopValue.visible">
        <ul>
          <li>
            <span>옵션명</span><b>{{ optionPopValue.name }}</b>
          </li>
          <li>
            <span>선택옵션</span><b>{{ optionPopValue.text }}</b>
          </li>
          <li v-if="optionPopValue.is_quantity">
            <span>옵션수량</span
            ><input type="number" :value="optionPopValue.quantity" />
          </li>
          <li>
            <span>옵션설명</span
            ><textarea v-model="optionPopValue.comment"></textarea>
          </li>
          <li><button>옵션선택 완료</button></li>
        </ul>
      </div>

      <label>Motor Home Images</label>
      <input
        type="file"
        class="form-control"
        accept="image"
        :disabled="selectedImage == ''"
        @change="uploadImage"
      />
      <select v-model="selectedImage">
        <option value="" selected>Choose Image Type</option>
        <option value="0_0">레이아웃</option>
        <option value="1_1">외관:전면</option>
        <option value="1_2">외관:후면</option>
        <option value="1_3">외관:측면</option>
        <option value="1_4">외관:기타</option>
        <option value="2_1">실내:침실</option>
        <option value="2_2">실내:주방</option>
        <option value="2_3">실내:소파</option>
        <option value="2_4">실내:화장실</option>
        <option value="2_5">실내:샤워실</option>
        <option value="2_6">실내:기타</option>
      </select>
      <div v-for="(image, abc) in images" :key="abc.text">
        <p>{{ image.text }}</p>
        <img
          :src="image.src"
          class="preview"
          style="width: 200px; margin: 10px"
        />
      </div>
      <br />
      <div class="buttons"></div>
      <button class="cancel_button" type="reset">Cancel</button>
      <button class="upload_button" type="submit">Upload</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    axios.get("http://cammobile.kr/q/api/mobile/?c=option-load").then((rep) => {
      this.options = rep.data;
      console.log(rep.data);
    });
  },
  data() {
    return {
      formData: new FormData(),
      optionPopValue: {
        visible: false,
        name: "",
        idx: 0,
        text: "",
        is_quantity: 0,
        quantity: 0,
        comment: "",
      },
      options: [],
      activeOption: null,
      checkValue: false,
      product_num: "",
      post: {
        car_name: "",
        price: "",
        produced_year: "",
        insurance_history: "",
        outside_length: "",
        indoor_length: "",
        outside_width: "",
        inner_height: "",
        load_weight: "",
        max_loadweight: "",
        sale_area: "",
        licence_need: "",
      },
      // { "option" : [ {"idx":62,"qu":5},{"idx":3,"qu":3} ] }
      selectedImage: "",
      option_el: "",
      total_options: [],
      files: {
        IMG_0_0: [],
        IMG_1_1: [],
        IMG_1_2: [],
        IMG_1_3: [],
        IMG_1_4: [],
        IMG_2_1: [],
        IMG_2_2: [],
        IMG_2_3: [],
        IMG_2_4: [],
        IMG_2_5: [],
        IMG_2_6: [],
      },
      images: [],
      response: [],
      users: [],
      typeName: {
        "0_0": "레이아웃",
        "1_1": "외관:전면",
        "1_2": "외관:후면",
        "1_3": "외관:측면",
        "1_4": "외관:기타",
        "2_1": "실내:침실",
        "2_2": "실내:주방",
        "2_3": "실내:소파",
        "2_4": "실내:화장실",
        "2_5": "실내:샤워실",
        "2_6": "실내:기타",
      },
      submitting: false,
    };
  },

  //   http://cammobile.kr/q/api/mobile/?c=modify
  methods: {
    getOption(o, name) {
      const option = o.target;
      const idx = option.value;
      const is_quantity =
        option.options[option.selectedIndex].getAttribute("is_quantity");
      const text = option.options[option.selectedIndex].text;
      this.optionPopValue.name = name;
      this.optionPopValue.idx = idx;
      this.optionPopValue.is_quantity = parseInt(is_quantity);
      this.optionPopValue.text = text;
      this.optionPopValue.quantity = 0;
      this.optionPopValue.comment = "";
      this.optionPopValue.visible = true;

      console.log(this.optionPopValue);
    },
    uploadImage(e) {
      if (this.selectedImage != "") {
        // this.formData.append("IMG_"+this.selectedImage+"[]", e.target.files[0]);
        var selectedFiles = e.target.files[0];
        // this.files["IMG_"+this.selectedImage].push(e.target.files[0]);
        let img = {
          src: URL.createObjectURL(selectedFiles),
          name: "IMG_" + this.selectedImage,
          file: selectedFiles,
          text: this.typeName[this.selectedImage],
        };
        this.images.push(img);
      } else {
        alert("타입 선택하시오!");
      }
    },
    previewFiles(e) {
      const file = e.target.files[0];
      this.post.url = URL.createObjectURL(file);
    },

    sendFileItems() {
      for (let item of this.images) {
        console.log("files---------------------------------------");
        console.log(item.name);
        console.log(item.file);
        this.formData.append(item.name + "[]", item.file);
      }
      for (let item of this.total_options) {
        console.log("options---------------------------------------");
        console.log(item.option);
        this.formData.append(item.name + ": ", item.option);
      }
      this.formData.append("options", this.total_options);
      this.formData.append("data", JSON.stringify(this.post));
      axios
        .post("http://cammobile.kr/q/api/mobile/?c=modify", this.formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((result) => {
          console.log("result");
          console.log(result.data);
          // console.log(result);
        })
        .catch((error) => {
          console.log(error.message);
        });
      // this.$router.push("/myprofile");
    },
  },
};
</script>
<style scoped>
.option-select-box {
  background: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
}
.upload_section {
  justify-content: center;
  border: 1px solid #333;
  height: 700px;
  overflow-x: scroll;
  overflow-y: none;
}

form {
  padding: 10px;
}
h1 {
  margin: auto;
  padding: 10px;
  font-size: 18px;
}

label {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  display: block;
}

input[type="text"],
input[type="number"] {
  height: 30px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid black;
  font-size: 18px;
  padding: 10px;
  margin-right: 10px;
}

input[type="file"] {
  text-align: left;
  justify-content: flex-start;
  margin: 10px;
  padding-right: 20px;
  height: 30px;
  width: 100%;
}
select {
  margin: auto;
  margin-top: 5px;
  height: 30px;
  width: 100%;
  border-radius: 120px;
  border: 1px solid black;
  padding-left: 10px;
}
textarea {
  border-radius: 20px;
  width: 100%;
  height: 150px;
  border: 1px solid black;
  font-size: 18px;
  padding: 10px;
  margin-right: 10px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.cancel_button {
  border-radius: 15px;
  height: 35px;
  width: 45%;
  margin-top: 20px;
  color: #fff;
  background-color: red;
}

.upload_button {
  border-radius: 15px;
  height: 35px;
  width: 45%;
  margin-top: 20px;
  margin-left: 10px;
  color: #fff;
  background-color: rgb(0, 140, 255);
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
.url_image {
  height: 100px;
  width: 150px;
}
.url_image img {
  height: 100px;
  width: 150px;
}
.extra_description input {
  padding-top: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
