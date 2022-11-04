<template>
  <div class="trailer">
    <button>
      <router-link to="myprofile"> MY 모터홈 </router-link>
    </button>
    <button>
      <router-link to="myTrailer"> MY 트레일러 </router-link>
    </button>
    <section>
      <ul>
        <li>
          <div class="product">
            <div class="product_image">
              <img src="../../assets/trailer.jpg" class="trailer" @click="imageClicked()" />
            </div>
            <div class="product_details">
              <h1>Product title</h1>
              <p>Product description</p>
              <p>Product price</p>
              <p class="company_name">Company name</p>
            </div>
            <br />
          </div>
          <hr class="divider" />
          <div class="product_description">
            <h1>캠핑 카 ㅋㅋㅋ</h1>
            <button @click.stop.prevent="edit_trailer()">
              <i class="ri-edit-box-line"></i>
            </button>
          </div>

          <p class="product_info">Product Price | km | 22.354.354 원</p>
        </li>
        <button class="compare" @click.stop.prevent="upload_trailer()">
          <i class="ri-add-line"></i>
        </button>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    upload_trailer() {
      this.$router.push("upload_trailer");
      // this.$router.push("/trailer_search");
    },
    edit_trailer() {
      this.$router.push("edit_trailer");
    }
  },
};
</script>

<style scoped>
section {
  text-align: left;
}

button {
  margin-bottom: 10px;
  padding: 10px;
}

a {
  color: #333;
  padding: 20px;
  text-decoration: none;
}

a:active,
a:hover,
a.router-link-active {
  font-weight: 700;
  border-bottom: 1px solid black;
  cursor: pointer;
}

.trailer {
  cursor: pointer;
  pointer-events: visible;
  height: 105px;
  border-radius: 10px;
}

ul {
  padding-left: 10px;
  padding-top: 10px;
}

ul li {
  background-color: #a8c2e9;
  list-style: none;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  margin-right: 5px;
}

ul li .product {
  display: flex;
}

.product_image {
  width: 50%;
}

.product_details {
  width: 50%;
  margin-top: 20px;
}

.company_name {
  justify-content: center;
  margin-top: 20px;
}

.divider {
  width: 100%;
  height: 2px;
  color: #333;
  margin-bottom: 10px;
}

.compare {
  width: 60px;
  height: 60px;
  background: #2d9aff;
  position: absolute;
  bottom: 150px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  color: #ffff;
}

.compare i {
  font-size: 30px;
}

.ri-edit-box-line {
  font-size: 30px;
}

.product_description {
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
  justify-content: space-between;
}

.product_info {
  padding-left: 15px;
  color: #333;
}
</style>
