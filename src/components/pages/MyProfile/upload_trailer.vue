<template>
    <div class="upload_section">
        <form>
            <h1>New Post</h1>
            <label>Product Title</label>
            <input type="text" />
            <label>Product Description </label>
            <textarea />
            <label>Price</label>
            <input type="number" />
            <label>Image</label>
            <input type="file" @change="onFileChange" />
            <div>
                <img v-if="url" :src="url" />
            </div>
            <br />
            <div class="buttons"></div>
            <button class="cancel_button" type="reset">Cancel</button>
            <button class="upload_button" type="submit" @submit.stop.prevent="sendFileItems()">Upload</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url: null,
            title: '',
            description: '',
            price: null,
        }
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file)
        },
        sendFileItems() {
            console.log(this.url);
            console.log(this.title);
            console.log(this.description);
            console.log(this.price);
        }
    }
}
</script>
<style scoped>
.upload_section {
    justify-content: center;
    border: 1px solid #333;
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

input[type=text],
input[type=number] {
    height: 45px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid black;
    font-size: 18px;
    padding: 10px;
    margin-right: 10px;
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
</style>