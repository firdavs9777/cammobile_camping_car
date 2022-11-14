<template> 
<div class="trailer">
  <form>
  <input type="search" class="search_item"  placeholder="Search"  />
    <ul>
    <li class="A"> <button @click="clicked" > 제조사/ 모델</button></li>
      <li class="A"><button> 연식</button></li>
      <li class="A"><button> 주행거리</button></li>
      <li class="A"><button> 가격</button></li>
      <li class="A"><button> 연료</button></li>
      <li class="A"><button> 색상</button></li>
      <i class="ri-arrow-down-line" @click="clicked"></i>
      <br>
      <button class="more" @click="clicked" >추가옵션 더 보기</button>
  </ul>
  <button type="submit" class="search" @click.stop.prevent="submit()">검색</button>
</form>
</div>
</template>
<script>


export default {
    data() {
      return {
        menu: false,
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      };
    },
  
    methods: {
      clicked()
      {
        alert('Button Clicked');
      },
      submit(){
      //if you want to send any data into server before redirection then you can do it here
      this.$router.push("/trailer_search");
    }
    },
  };
  </script>
  <style scoped lang="scss">
  .trailer 
  {
    min-height: 500px;
  }
  .search_item
  {
    height: 30px;
    width: 100%;
    border:1px solid black;
    border-radius: 20px;
    color:#333;
    justify-content: center;
    margin: auto;
    margin-bottom: 10px;
    padding-left: 20px;
  }
  ul li 
  {
    text-align: left;
    background-color:#5DA1D3;
    color:#000000;
    padding:10px;
    margin-bottom: 10px;
    padding-left: 10px;
    border-radius: 10px;
  }
  ul i 
  {
    font-size: 20px;
  }
  ul li  button 
  {
    padding-left: 10px;
    color:rgb(0, 0, 0);
  }
  .search
  {
    background-color: #5DA1D3;
    width: 200px;
    height: 45px;
    border-radius: 20px;
    color:#FFFFFF;
    font-size: 20px;
    padding: 10px;
    margin:10px;
  }
  .more 
  {
    font-size: 14px;
    color:#000000;
    padding: 10px;
    margin:10px;
  }

</style>