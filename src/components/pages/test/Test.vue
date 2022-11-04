<template>
  <div class="test">
    <h1>Vuex Test</h1>
    <Result class="active" />
    <AnotherResult v-bind:class="{ active: isActive }" />
    <hr />
    <Counter />
    <AnotherCounter />
    <hr />
    <input type="text" v-model="value" />
    <p>{{ value }}</p>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reverse message "{{ reversedMessage }}""</p>
      <p>{{ now }}</p>
      <p>{{ fullName }}</p>
      <p>{{ bookingLimitTime }}</p>
    </div>

    <!-- Computed Caching vs Methods 
Instead of computed property, we can define the same function as a method
// Computed property will only re-evaluate when some of its reactive dependencies 
The computed value will never  update its values  
Watchers are used to update the current data 
-->
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </div>

    <h3 style="text-align: center">Vue.js | Watchers</h3>

    <!-- Creating element for Vue -->
    <div style="text-align: center" id="ex">
      <h3>
        Enter any Value :
        <input type="text" v-model="value1" />
      </h3>
      <h3>
        Input number x 2 :
        <span style="font-size: 30px">
          {{ result }}
        </span>
      </h3>
    </div>
    <!-- It will return active class if isActive is true -->
    <div class="static" v-bind:class="{ active: isActive }" @click="Change()">
      <h2>Hello</h2>
    </div>

    <!-- It will render acitve class when isActive is true
    text-danger class when hasError is true
    hasError is false so it will return static active 
    hasError is true so it will return static actice hasError classes 

    -->
    <div
      class="static"
      v-bind:class="{ active: isActive, 'text-danger': hasError }"
    >
      <h1>Two Class binded div</h1>
    </div>

    <!-- The bound object does not have to be inline
    The class return will be active text-danger classes 
    when text-danger dynamically becomes true
    active and text-danger classes will be called 
    -->

    <div v-bind:class="classObject">
      <h3>Heading 3</h3>
    </div>
    <!-- If you want to toggle a class in the list conditionally, you can do it with a ternary expresssion -->
    <!-- <div v-bind:class="[isActive ? activeClass : '', errorClass]">
<h2>Header 4</h2>
</div> -->
    <div v-bind:class="classObject2">
      <h1>heading 5</h1>
    </div>

    <!-- We can pass an array to v-bind:class  to apply a list of classes -->
    <div v-bind:class="[activeClass, errorClass]">
      <h2>hello</h2>
    </div>

    <!-- With Components -->
  </div>
</template>
<script>
import Counter from "./Counter.vue";
import AnotherCounter from "./AnotherResult.vue";
import Result from "./Result.vue";
import AnotherResult from "./AnotherResult.vue";
import * as types from "../../../store/types";
import moment from "moment";
export default {
  data() {
    return {
      isAc: true,
      err: null,
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        "text-danger": true,
      },
      message: "Hello",
      firstName: "Firdavs",
      lastName: "Mutalipov",
      time: "2022.01.23 10:00",
      moment: moment,
      question: "",
      answer: "I cannot give you an answer until you ask me question! ",
      value1: "",
      result: 0,
      activeClass: "active",
      errorClass: "text-danger",
    };
  },
  watch: {
    value1: function (val) {
      this.value1 = val;
      this.result = 2 * val;
      return this.result;
    },
    result: function (val) {
      this.result = val;
    },
    //  firstName: function(val)
    //  {
    //     this.fullName = val + "fgdfgh  dgh" + this.lastName;
    //  },
    //  lastName: function(val){
    //     this.fullName = this.firstName + '  ' + val
    //  }
  },
  // Computed Setter
  // Computed properties by default getter only but you can also use it as a setter when you need it
  computed: {
    classObject2: function () {
      return {
        active: this.isAc && !this.err,
        "text-danger": this.err && this.err.type === "fatal",
      };
    },
    // fullName: function(){
    //       return this.firstName + ' ' + this.lastName
    // },
    bookingLimitTime: {
      get() {
        return this.moment(this.time).format("HH:mm");
      },
      set(val) {
        this.time = `${this.time.slice(0, 6)} ${val}`;
      },
    },
    fullName: {
      get: function () {
        return this.firstName + this.lastName;
      },
      set: function () {
        return this.firstName + "hehehe";
      },
    },
    now: function () {
      return Date.now();
    },
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
    value: {
      get() {
        return this.$store.getters[types.VALUE];
      },
      set(value) {
        this.$store.dispatch(types.UPDATE_VALUE, value);
      },
    },
  },
  methods: {
    Change() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
    updateValue(event) {
      this.$store.dispatch(types.UPDATE_VALUE, event.target.value);
    },
  },
  components: {
    Counter,
    AnotherCounter,
    Result,
    AnotherResult,
  },
};
</script>
<style scoped>
.test {
  height: 100%;
}
.active {
  border: 1px solid black;
  color: blue;
  background-color: aquamarine;
}
.text-danger {
  color: red;
  border: 1px solid black;
}
.static {
  font-size: 22px;
}
.errorClass {
  font-size: 22px;
  color: rgb(236, 235, 238);
  background-color: coral;
}
.activeClass {
  color: red;
  font-size: 32px;
}
</style>
