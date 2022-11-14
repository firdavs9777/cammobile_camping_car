<template>
  <div class="upload_section">
    <form v-on:submit.prevent="sendFileItems()">
      <p v-if="errors.length">
        <b>Please correct the following errors: </b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
      </p>
      <h1>Post</h1>
      <label>Car Type</label>
      <select v-model="post.car_type">
      <option>MOTOR</option>
      <option>TRAILER</option>
      </select>
   
      <label>차종 이름</label>
      <input type="text" v-model="post.car_name" required />
      <label>판매가</label>
      <input type="text" placeholder="Ex: 23.100.000 " v-model="post.price" required />
      <label>연식 </label>
      <input type="text" v-model="post.produced_year" placeholder="Ex: 2021" required />
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
      <label> <span>판매지역</span></label>
      <select v-model="post.sale_area" @change="getAddress($event)" required>
        <option value=""> 먼저 시, 도 선택하십시오 </option>
        <option v-for="(area_main, idd) in address_data" :key="idd">
          {{ area_main['si'] }}
        </option>
      </select>
      <select v-model="post.sub_sale_area" required>
        <option value=""> 시,군 선택하십시오</option>
        <option v-for="(area_sub, idd2) in address_sub_info" :key="idd2">
          {{ area_sub['gu'] }}
        </option>
      </select>
      <br />
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
      <label>Comment</label>
      <input type="text" v-model="post.comment"/>
      <section v-for="(element, name, index) in options" :key="index">
        <label>{{ name }}</label>
        <select @change="getOption($event, `${name}`)">
          <option selected value="start">{{ name }} 선택하십시오</option>
          <template v-for="(el, i) in element">
            <option :key="i" :value="el.idx" :is_quantity="el.is_quantity">
              {{ el.value }}
            </option>
          </template>
          <template> </template>
        </select>

        <br />
        <div class="option-select-box"
          v-if="optionPopValue.idx != 'start' && optionPopValue.text && optionPopValue.name == name && optionPopValue.visible">
          <span></span>
          <i class="ri-close-line" @click="close_option"></i>
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
            <li><button type="submit" v-on:click="option_select">옵션선택 완료</button></li>
          </ul>
        </div>
      </section>
      <div class="option-select-result" v-if="total_options.length != 0">
        <ul v-for="(option, option_key) in total_options" :key="option_key">
          <i class="ri-delete-bin-5-line" @click="delete_option(option)"></i>
          <li>Title: {{ option.name }} </li>
          <li>Value: {{ option.text }} </li>
          <li v-if="optionPopValue.is_quantity">
            Quantity: {{ option.quantity }}
          </li>
          <li>
            Comment:{{ option.comment }}
          </li>
        </ul>
      </div>
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
      <div class="image_section" v-for="(image, abc) in images" :key="abc.text">
        <p>{{ image.text }}
          <i class="ri-close-line" @click="delete_image(image)"></i>
        </p>
        <img :src="image.src" class="preview" style="width: 200px; margin: 10px" />
        <hr>
      </div>
      <br />
      <div class="submit_buttons"></div>
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
    axios.get("http://cammobile.kr/q/api/hash/?c=local").then((rep) => {
      this.address_data = rep.data
    })
  },
  data() {
    return {
      mobileidx:'',
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
      total_options: [],
      address_sub_info: null,
      address_data: null,
      post: {
        car_name: "",
        car_type:"",
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
        sub_sale_area: "",
        licence_need: "",
        comment:""
      },
      selectedImage: "",
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

  //   http://cammobile.kr/q/api/mobile/?c=modify
  methods: {
    close_option() {
      this.optionPopValue.visible = false;
    },
    delete_image(el) {
      let delete_val = this.images.indexOf(el);
      if (delete_val > -1) {
        this.images.splice(delete_val, 1)
        this.$refs.input.value = '';
      }
    },
    delete_option(el) {
      let delete_val = this.total_options.indexOf(el);
      if (delete_val > -1) {
        this.total_options.splice(delete_val, 1)
      }
    },
    option_select() {
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
        alert(this.optionPopValue.name + ":" + ' 선택이 완료 됐습니다')
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
        };
        this.images.push(img);
      } else {
        alert("타입 선택하시오!");
      }
    },
    sendFileItems() {
      console.log(this.post);
      // Validation
      if (this.post.car_name && this.post.price && this.post.produced_year && this.images.length != 0) {
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

            if( rep.error ){
              alert( rep.message );
            }else{
              this.$router.push("/myprofile/id/"+ rep.mobileidx);
              this.mobileidx = rep.mobileidx;
              console.log(this.mobileidx);
            }
            
            // console.log(result.data);
            // console.log(result);
          })
          .catch((error) => {
            console.log(error.message);
          });
        

      }

      this.errors = [];
      if (!this.post.car_name) {
        this.errors.push('Name is required');
      }
      if (!this.post.price) {
        this.errors.push('Price is required');
      }
      if (!this.post.produced_year) {
        this.errors.push('Produced Year is required');
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
<style scoped>
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
/* Style the color of the message that says 'No file chosen' */
  color:transparent;
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
.submit_buttons {
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
.option-select-box {
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid black;
  box-sizing: border-box;
  box-shadow: 3px 4px 4px rgb(100, 100, 100)
}
.option-select-box i {
  font-size: 22px;
  float: right;
}
.option-select-box i:hover {
  opacity: 1;
}
.option-select-box ul li {
  list-style: none;
  font-size: 16px;
  padding: 10px;
}
.option-select-box ul li span {
  margin-bottom: 10px;
  padding: 10px;
}
.option-select-box ul li input {
  padding-left: 10px;

}
.option-select-box ul li textarea {
  margin-top: 10px;
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
.option-select-box ul li button {
  border: 1px solid black;
  font-size: 16px;
  height: 40px;
  width: 150px;
  background-color: #47b5ff;
  color: #fff;
  font-weight: 300;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 20px;
  margin-top: 15px;
}
.option-select-result {
  margin-top: 10px;
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 3px 4px 4px rgb(100, 100, 100)
}
.option-select-result i {
  font-size: 22px;
  float: right;
}
.option-select-result i:hover {
  opacity: 1;
}

.option-select-result ul {
  padding: 10px;
  margin-top: 10px;
  border: 1px solid black;
}

.option-select-result ul li {
  list-style: none;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 5px;
}

.image_section {
  margin: 10px;
  padding-top: 10px;
}

.image_section i {
  font-size: 18px;
  padding-left: 27%;
}
</style>
