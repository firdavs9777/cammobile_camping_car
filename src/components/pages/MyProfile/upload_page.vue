<template>
  <div class="upload_section">
    <form v-on:submit.prevent="sendFileItems()">
      <div class="error_section">
        <p v-if="errors.length" class="error_text">
          <b>Please correct the following errors: </b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        </p>
      </div>
      <div class="heading">
        <h1>Post</h1>
      </div>
      <div class="form_section">
        <label>Car Type</label>
        <select v-model="post.car_type">
          <option selected value="">Please choose car type</option>
          <option>MOTOR</option>
          <option>TRAILER</option>
        </select>
      </div>
      <div class="form_section">
        <label>차종 이름</label>
        <input type="text" v-model="post.car_name" placeholder="Car Name" />
      </div>
      <div class="form_section">
        <label>모델</label>
        <input type="text" v-model="post.model" placeholder="Model Name" />
      </div>
      <div class="form_section">
        <label>판매가</label>
        <input type="text" placeholder="Ex: 23.100.000 " v-model="post.price" />
      </div>
      <div class="form_section">
        <label>Manufactured_by</label>
        <input type="text" placeholder="Ex: Samsung or LG" v-model="post.manufactured_by"/>
      </div>
      <div class="form_section">
        <label>연식 </label>
        <input type="text" v-model="post.produced_year" placeholder="Ex: 2021" />
      </div>
      <div class="form_section">
        <label>보험이력</label>
        <input type="text" v-model="post.insurance_history" />
      </div>
      <div class="form_section">
        <label>외부길이</label>
        <input type="text" v-model="post.outside_length" />
      </div>
      <div class="form_section">
        <label>실내길이</label>
        <input type="text" v-model="post.indoor_length" />
      </div>
      <div class="form_section">
        <label>외부너비</label>
        <input type="text" v-model="post.outside_width" />
      </div>
      <div class="form_section">
        <label>내부높이</label>
        <input type="text" v-model="post.inner_height" />
      </div>
      <div class="form_section">
        <label>공차중량</label>
        <input type="text" v-model="post.load_weight" />
      </div>
      <div class="form_section">
        <label>최대 적재중량</label>
        <input type="text" v-model="post.max_loadweight" />
      </div>
      <div class="form_main_area">
        <label> <span>판매지역</span></label>
        <select v-model="post.sale_area" @change="getAddress($event)">
          <option value=""> 먼저 시, 도 선택하십시오 </option>
          <option v-for="(area_main, idd) in address_data" :key="idd">
            {{ area_main['si'] }}
          </option>
        </select>
      </div>
      <div class="form_sub_area">
        <select v-model="post.sub_sale_area">
          <option value=""> 시,군 선택하십시오</option>
          <option v-for="(area_sub, idd2) in address_sub_info" :key="idd2">
            {{ area_sub['gu'] }}
          </option>
        </select>
      </div>
      <br />
      <div class="form_section">
        <label>면허</label>
        <select v-model="post.licence_need">
          <option value="" selected>필요면허 선택하십시오</option>
          <option>대형 견인</option>
          <option>소형 견인</option>
          <option>1종 대형</option>
          <option>1종 보통</option>
          <option>2종 보통</option>
          <option>기타</option>
        </select>
      </div>
      <div class="form_section">
        <label>Comment</label>
        <input type="text" v-model="post.comment" />
      </div>
  
      <div class="options_section" v-if="hi">
        <section v-for="(element, name, index) in options_main" :key="index">
          <label>{{ name }}</label>
          <select @change="getOption($event, `${name}`)">
            <option selected value="start">{{ name }} 선택하십시오</option>
            <template v-for="(el, i) in element">
              <option :key="i" :value="el.idx" :is_quantity="el.is_quantity">
                {{ el.value }}
              </option>
            </template>
          </select>

          <br />
          <div class="option-select-box"
            v-if="optionPopValue.idx != 'start' && optionPopValue.text && optionPopValue.name == name && optionPopValue.visible">
            <span></span>
            <i class="ri-close-line" @click="close_option_bar"></i>
            <ul>
              <li>
                <span>옵션명:</span><b>{{ optionPopValue.name }}</b>
              </li>
              <li>
                <span>선택옵션:</span><b>{{ optionPopValue.text }}</b>
              </li>
              <li v-if="optionPopValue.is_quantity">
                <span>옵션수량:</span><input type="number" v-model="optionPopValue.quantity" />
              </li>
              <li>
                <span>옵션설명</span><textarea v-model="optionPopValue.comment" value="optionPopValue.comment"></textarea>
              </li>
              <li><button type="submit" class="done" v-on:click="get_total_options">옵션선택 완료</button></li>
            </ul>
          </div>
        </section>
      </div>
      <div class="option-select-result" v-if="total_options.length != 0">
        <ul v-for="(option, option_key) in total_options" :key="option_key" class="result_list">
          <i class="ri-delete-bin-5-line" @click="delete_option(option)"></i>
          <li>Title: {{ option.name }} </li>
          <li>Value: {{ option.text }} </li>
          <li v-if="optionPopValue.is_quantity">
            Quantity: {{ option.quantity }}
          </li>
          <li>
            Comment:{{ option.comment }}
          </li>
          <hr />
        </ul>
      </div>
      <div class="form_image">
        <input type="file" class="form-control" accept="image" :disabled="selectedImage == ''" @change="uploadImage"
          required ref="input" />
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
      </div>
      <div class="image_section" v-for="(image, abc) in images" :key="abc.text">
        <p>
          <i class="ri-close-line" @click="delete_image(image)"></i>
        </p>
        <p v-if="image.src">
          <img :src="image.src" class="preview" style="width: 200px; margin: 10px" />
        </p>
        <div v-for="(el, id) in image" :key="id">
          <p v-if="el.url">
            <img :src="el.url" style="width: 200px; margin: 10px" />
          </p>
        </div>

        <hr>
        <!-- <img :src="image.url" class="preview" style="width: 200px; margin: 10px" /> -->
      </div>

      <div class="submit_buttons">
        <button class="cancel_button" type="reset">Cancel</button>
        <button class="upload_button" type="submit">Upload</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    axios.get("http://cammobile.kr/q/api/mobile/?c=option-load").then((rep) => {
      this.options_main = rep.data;
      console.log(rep.data);
    });
    axios.get("http://cammobile.kr/q/api/hash/?c=local").then((rep) => {
      this.address_data = rep.data
    });
    // console.log(this.$route.params.id);
    if (this.$route.params.id) {
      this.mobileidx = this.$route.params.id;
      axios.get("http://cammobile.kr/q/api/mobile/?c=load&mobileidx=" + this.mobileidx + "")
        .then((rep) => {
          this.post = rep.data.body;
          this.post.comment = rep.data.detail.comment
          this.options = rep.data.options;
          this.images = rep.data.images
        });
    }

  },
  data() {
    return {
      test_data: [],
      mobileidx: '',
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
      hi:false,
      options_main: [],
      total_options: [],
      address_sub_info: null,
      address_data: null,
      post:
      {
        car_name: "",
        model:'',
        car_type: "",
        price: "",
        manufactured_by:"",
        produced_year: "",
        insurance_history: "",
        outside_length: "",
        indoor_length: "",
        outside_width: "",
        inner_height: "",
        load_weight: "",
        max_loadweight: "",
        sale_area: "",
        sub_sale_area: "",
        licence_need: "",
        comment: ""
      },
      selectedImage: "",
      images: [],
      errors: [],
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
    };
  },
  methods: {
    hello(){
      this.hi = !this.hi;
    },
    delete_image(el) {
      let delete_val = this.images.indexOf(el);
      if (delete_val > -1) {
        this.images.splice(delete_val, 1)
        this.$refs.input.value = '';
      }
    },
    close_option_bar() {
      this.optionPopValue.visible = false;
    },
    delete_option(el) {
      let delete_val = this.total_options.indexOf(el);
      if (delete_val > -1) {
        this.total_options.splice(delete_val, 1)
      }
    },
    get_total_options() {
      let options = {
        idx: this.optionPopValue.idx,
        name: this.optionPopValue.name,
        text: this.optionPopValue.text,
        quantity: this.optionPopValue.quantity,
        comment: this.optionPopValue.comment,
      };
      this.total_options.push(options);
      if (this.optionPopValue.comment == '') {
        alert('Please enter comment');
      }
      else {
        this.optionPopValue.visible = false;
      }
    },
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
    },
    getAddress(element) {
      if (element != '')
        axios.get("http://cammobile.kr/q/api/hash/?c=local&si=" + element.target.value + "")
          .then((rep) => {
            this.address_sub_info = rep.data;
          })
    },
    uploadImage(e) {
      console.log(typeof e.target.files);
      if (this.selectedImage != "" && e.target.files.length !== 0) {
        // this.formData.append("IMG_"+this.selectedImage+"[]", e.target.files[0]);
        var selectedFiles = e.target.files[0];
        this.image_file = selectedFiles;
        if (selectedFiles > 0) {
          alert("Same pictures, please insert another image");
        }
        let img = {
          src: URL.createObjectURL(selectedFiles),
          name: "IMG_" + this.selectedImage,
          file: selectedFiles,
          text: this.typeName[this.selectedImage],
          url: URL.createObjectURL(selectedFiles),
        };
        this.images.push(img);
      } else {
        alert("타입 선택하시오!");
      }
    },
    sendFileItems() {
      console.log(this.post);
      // Validation
      if (this.post.car_type && this.post.car_name && this.post.price && this.post.produced_year && this.post.sale_area && this.images.length != 0) {
        // Appending post data
        this.formData.append("data", JSON.stringify(this.post));
        // Appending total_options data
        this.formData.append("options", JSON.stringify(this.total_options));
        // Appending images data to formData
        for (let item of this.images) {
          this.formData.append(item.name + "[]", item.file);
        }
        // Post Data
        axios
          .post("http://cammobile.kr/q/api/mobile/?c=modify", this.formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((result) => {
            console.log(result.data);
            const rep = result.data;
            if (rep.error) {
              alert(rep.message);
            } else {
              this.$router.push("upload_page/" + rep.mobileidx);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
      this.errors = [];
      if (!this.post.car_type) {
        this.errors.push('Car Type is required');
      }
      if (!this.post.car_name) {
        this.errors.push('Name is required');
      }
      if (!this.post.price) {
        this.errors.push('Price is required');
      }
      if (!this.post.produced_year) {
        this.errors.push('Produced Year is required');
      }
      if (!this.post.sale_area) {
        this.errors.push('Sale Area  is required');
      }

      if (this.images.length == 0) {
        this.errors.push('Please insert at least one image');
      }
      if (this.errors.length != 0) {
        alert("Please fix errors above");
      }
    }
  }
};
</script>
<style scoped lang="scss">

// Sass Settings for Css
.upload_section {
  justify-content: center;
  height: 700px;
  overflow-x: scroll;
  overflow-y: none;

  form {
    .error_section {
      margin: auto;

      .error_text {
        @include error-text;

        b {
          font-size: 20px;
          color: #333;
        }
      }
    }

    .heading {
      @include header;
    }

    .form_section {
      margin: 2px;
    }

    label {
      @include label;
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
      color: transparent;
      width: 100%;
    }

    input[type="file"]::-webkit-file-upload-button {
      border-radius: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
      background: #ED1C1B;
      border: 2px solid #fff;
      color: #fff;
      cursor: pointer;
      font-size: 12px;
      outline: none;
      padding: 10px 10px;
      text-transform: uppercase;
      transition: all 1s ease;
    }

    input[type="file"]::-webkit-file-upload-button:hover {
      background: #fff;
      border: 2px solid #535353;
      color: #000;
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

    .option-select-box {
      border-radius: 10px;
      background: #fff;
      padding: 10px;
      margin-top: 10px;
      border: 1px solid black;
      box-sizing: border-box;
      box-shadow: 3px 4px 4px rgb(100, 100, 100);

      i {
        font-size: 22px;
        float: right;

        i:hover {
          opacity: 1;

          ul {
            font-size: 20px;

            li {
              list-style: none;
              padding: 10px;

              span {
                font-size: 18px;
                margin-bottom: 10px;
                padding: 10px;
                margin: 20px;

                b {
                  font-size: 18px;
                  padding: 10px;
                  margin: 10px;

                  input {
                    padding-left: 10px;
                    font-size: 20px;

                    textarea {
                      @include textarea;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .option-select-result {
      margin-top: 10px;
      border-radius: 10px;
      background: #fff;
      padding: 10px;
      box-sizing: border-box;
      border-bottom: 1px solid black;
      box-shadow: 3px 4px 4px rgb(100, 100, 100);
      margin: auto;

      .result_list {
        margin: auto;
        margin-bottom: 1px solid grey;

        ul {
          padding: $padding;

          i {
            font-size: 22px;
            float: right;

            li {
              padding: $padding;
              margin-top: 10px;
              @include upload_button;

              i:hover {
                opacity: 1;
                color: blue
              }
            }

          }
        }
      }
    }

    .image_section {
      margin: 10px;
      padding-top: 10px;

      i {
        font-size: 18px;
        padding-left: 27%;

        img {
          margin: $auto;
        }
      }
    }

    .submit_buttons {
      display: flex;
      justify-content: space-around;
      text-align: center;

      //  .cancel_button {@include cancel_button}
      .upload_button {
        @include upload_button;
      }
    }
  }
}
</style>



