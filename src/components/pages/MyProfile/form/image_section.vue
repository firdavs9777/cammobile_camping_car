<template>
  <div class="image_section">
    <img src="../../../assets/variant4.png" class="step-image" />
    <h1>이미지 등록</h1>
    <p>사진을 클릭해, 각도 별 이미지를 등록해주세요.</p>
    <p>※ 차량 상태를 확인 할 수 있는 사진을 업로드 해주세요.</p>
    <h1>필수 이미지</h1>
    <ul>
      <li class="required" v-for="(required,required_id) in required_images" :key="required_id">
        <input
          id="fileUpload"
          type="file"
          accept="image"
          @change="onFilePicked"
          class="file"
          style="display: none"
        />
        <button class="image_button" @click.once="select_required()">
          <p>
            <img src="@components/assets/plus.png" class="plus" v-if="visible" />
          </p>
          <p v-for="(file,file_id) in image_files" :key="file_id">
            <img  v-if="file_id == required_id" :src="file.src"  class="" style="height: 120px; width: 120px" />
          </p>
        </button>
        <h1>{{ required.title}}</h1>
      </li>
    </ul>
    <ul>
      <h1>레이아웃</h1>
      <li class="optional">
        <input
          id="file"
          type="file"
          accept="image"
          @change="onOptionalPicked"
          hidden
        />
        <button class="image_button" @click="select_optional()">
          <img src="../../../assets/plus.png" class="plus" />
        </button>
        <p v-for="(image_layout, layout_id) in layout_images" :key="layout_id">
          <img
            :src="image_layout.src"
            class=""
            style="height: 120px; width: 120px"
          />
        </p>
      </li>
    </ul>
    <ul>
      <h1>실내</h1>
      <li class="optional">
        <input
          id="file_inside"
          type="file"
          accept="image"
          @change="onFilePicked2"
          hidden
        />
        <button class="image_button" @click="select_optional_two()">
          <img src="../../../assets/plus.png" class="plus" />
        </button>
        <p v-for="(image_inside, inside_id) in inside" :key="inside_id">
          <img
            :src="image_inside.src"
            class=""
            style="height: 120px; width: 120px"
          />
        </p>
      </li>
    </ul>
    <ul>
      <h1>옵션</h1>
      <li class="optional">
        <input
          id="file_option"
          type="file"
          accept="image"
          @change="onFilePicked3"
          hidden
        />
        <button class="image_button" @click="select_optional_three()">
          <img src="../../../assets/plus.png" class="plus" />
        </button>
        <p v-for="(image_inside, inside_id) in options" :key="inside_id">
          <img :src="image_inside.src" class=""  style="height: 120px; width: 120px"/>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // 	{"layout":[url...],"inner":[url,...],"etd":[url,...],"outer":{font,front_l,front_r,left,right,top,back,back_l,back_r}}
  data() {
    return {
        required_images:[
        {
            title:'item1'
        },
        {
            title:'item2'
        },
        {
            title:'item3'
        },
        {
            title:'item4'
        },
        {
            title:'item4'
        },
        {
            title:'item6'
        },
        {
            title:'item7'
        },
        {
            title:'item8'
        },
        {
            title:'item9'
        },
    ],
      selected: "",
      images: [],
      image_files: [],
      layout_images: [],
      inside: [],
      options: [],
      front: null,
      front_l: null,
      front_r: null,
      left: null,
      right: null,
      top: null,
      back: null,
      back_l: null,
      back_r: null,
      visible: true,
    };
  },
  methods: {
    select_required() {
      let fileInputElement = document.getElementById("fileUpload").click();
      let another = document.getElementById("fileUpload").value;
    },
    select_optional() {
      let fileInputElement = document.getElementById("file").click();
    },
    select_optional_two() {
      let fileInputElement = document.getElementById("file_inside").click();
    },
    select_optional_three() {
      let fileInputElement = document.getElementById("file_option").click();
    },
    onFilePicked(event) {
      const selected_image = event.target.files[0];
      console.log(event.target.files);
      let img = {
        src: URL.createObjectURL(selected_image),
        file: selected_image,
      };
      this.visible = false;
      this.front = img.src;
      this.image_files.push(img);
    },
    onOptionalPicked(event) {
      const optional_image = event.target.files[0];
      console.log(event.target.files);
      let img = {
        src: URL.createObjectURL(optional_image),
        file: optional_image,
      };
      this.visible = false;
      this.layout_images.push(img);
    },
    onFilePicked2(event) {
      const selected_image = event.target.files[0];
      console.log(event.target.files);
      let img = {
        src: URL.createObjectURL(selected_image),
        file: selected_image,
      };
      this.visible = false;
      this.inside.push(img);
    },
    onFilePicked3(event) {
      const selected_image = event.target.files[0];
      console.log(event.target.files);
      let img = {
        src: URL.createObjectURL(selected_image),
        file: selected_image,
      };
      this.visible = false;
      this.options.push(img);
    },
  },
};
</script>
<style>
.image_section {
  height: 700px;
  overflow-x: scroll;
  overflow-y: none;
  justify-content: right;
}

.step-image {
  width: 100%;
  margin-top: 10px;
  padding: 24px 0px;
}

.input_file {
  visibility: hidden;
}

.image_button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 110px;
  height: 120px;
  background: #c3c3c3;
  border-radius: 20px;
}

.plus {
  height: 32px;
  width: 32px;
}

.required {
  display: inline-block;
  padding: 10px;
}

.optional {
  display: inline-flex;
  flex-direction: row;
  justify-content: left;
  scroll-behavior: smooth;
  overflow: hidden;
}

.optional h1 {
  display: inline-block;
}
</style>
