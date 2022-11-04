<template>
  <div>
    <form>
      <h1>Edit your trailer post</h1>
      <label>Product title</label>
      <input type="text" v-model="product_title" />
      <label>Product description</label>
      <textarea value="description" v-model="message">
    </textarea>
      <label>Product Price</label>
      <input type="number" v-model="product_price" />
      <label>Company Name</label>
      <input type="text" v-model="company_name" />
      <label>Images</label>
      <img src="../../assets/trailer.jpg" class="edit_image" />
      <img src="../../assets/trailer.jpg" class="edit_image" />
      <img src="../../assets/trailer.jpg" class="edit_image" />
      <input type="file" @change="onFileChange" />
      <div>
        <img v-if="url" :src="url" />
      </div>
      <div class="buttons"></div>
      <button class="cancel_button" @click="cancel_confirm()">Cancel</button>
      <button class="upload_button" type="submit" @click="edit_page_complete()">Complete</button>
    </form>
  </div>
</template>
<script>
export default
  {
    data() {
      return {
        product_title: 'Title',
        message: 'Description',
        product_price: 222,
        company_name: 'Yofill Corp',
        url: null,
      }
    },
    methods: {
      onFileChange(e) {
        const file = e.target.files[0];
        this.url = URL.createObjectURL(file)
      },
      cancel_confirm() {
        let confirm_cancel_box = confirm("Are you sure you want to cancel editing?");
        console.log(confirm_cancel_box);
        if (confirm_cancel_box) {
          this.$router.push('myTrailer');
        }
      },
      edit_page_complete() {
        let confirm_complete_box = confirm("Are you sure you want to post your changes? ");
        console.log(confirm_complete_box);
        if (confirm_complete_box) {
          this.$router.push('myTrailer');
        }
      }
    }
  }
</script>
<style scoped>
h1 {
  margin: auto;
  padding: 10px;
  font-size: 18px;

}

label {
  display: block;
  margin: auto;
  margin-top: 10px;
  font-size: 16px;
}

input[type="text"],
input[type="number"] {
  height: 30px;
  border: 1px solid black;
  padding-left: 10px;
  width: 100%;
  margin-top: 10px;
}

input[type=file] {
  text-align: left;
  justify-content: flex-start;
  margin: 10px;
  padding-right: 20px;
  height: 45px;
  width: 100%;
}

textarea {
  width: 100%;
  border: 1px solid #333;
  height: 50px;
  padding-left: 10px;
  padding-top: 10px;
  margin-top: 10px;
  resize: none;
}

.edit_image {
  width: 33%;
  height: 100px;
  padding: 10px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.cancel_button {
  border-radius: 15px;
  height: 35px;
  width: 47%;
  margin-top: 20px;
  color: #fff;
  background-color: red;
}

.upload_button {
  border-radius: 15px;
  height: 35px;
  width: 47%;
  margin-top: 20px;
  margin-left: 15px;
  color: #fff;
  background-color: rgb(0, 140, 255);
}
</style>