<!-- 
api 

http://cammobile.kr/q/api/hash/?c=type

http://cammobile.kr/q/api/hash/?c=maker

http://cammobile.kr/q/api/hash/?c=info

http://cammobile.kr/q/api/hash/?c=option

 -->

<template>
  <div class="base_info_page">
    <div>
      <img src="@components/assets/variant1.png" class="step-image" />
    </div>
    <div class="base_info">
      <form v-on:submit.prevent="sendFileItems()">
        <label class="car_type_label"> 캠핑카 타입</label>
        <div id="outer">
          <div class="inner">
            <button @click="getEl($event)" type="button" value="motorhome">
              모터홈
            </button>
          </div>
          <div class="inner">
            <button @click="getEl($event)" type="button" value="carribean">
              카라반
            </button>
          </div>
          <div class="inner">
            <button
              @click="getEl($event)"
              type="button"
              value="folding_trailer"
            >
              폴딩트레일러
            </button>
          </div>
          <div class="inner">
            <button @click="getEl($event)" type="button" value="cargo_trailer">
              화물트레일러
            </button>
          </div>
          <div class="inner">
            <button @click="getEl($event)" type="button" value="etc">
              기타
            </button>
          </div>
        </div>
        <div v-if="post.car_type === 'motorhome'">
          <div class="form_input">
            <label>베이스차량모델</label>
            <input
              type="text"
              placeholder="베이스 차량 모델을 입력해주세요"
              v-model="post.car_model"
            />
          </div>
          <div class="form_input">
            <label> 연료</label>
            <input
              type="text"
              placeholder="차량의 연료를 선택해주세요."
              v-model="post.car_model"
            />
          </div>
          <div class="form_input">
            <label> 연비</label>
            <input
              type="text"
              placeholder="차량의 연비를 입력해주세요. (km/l)"
              v-model="post.fuel_mileage"
            />
          </div>
          <div class="form_input">
            <label>출력</label>
            <input
              type="text"
              placeholder="차량의 출력을 입력해주세요. (hp)"
              v-model="post.power"
            />
          </div>
          <div class="form_input">
            <label>토크</label>
            <input
              type="text"
              placeholder="차량의 토크을 입력해주세요. (kg. m)"
              v-model="post.torque"
            />
          </div>
          <div class="form_input">
            <label>배기량</label>
            <input
              type="text"
              placeholder="차량의 배기량을 입력해주세요. (cc)"
              v-model="post.engine_displacement"
            />
          </div>
          <div class="form_input">
            <label>구동</label>
            <select
              type="text"
              class="select_input"
              v-model="post.driving_system"
            >
              <option selected class="ri-arrow-down-fill">Select option</option>
              <option>Option1</option>
              <option>Option2</option>
            </select>
          </div>
        </div>
        <div v-else>
          <div class="form_input">
            <label>섀시종류</label>
            <input
              type="text"
              placeholder="차량의 변속기를 입력해주세요."
              v-model="post.chassis"
            />
          </div>
          <div class="form_input">
            <label>액슬 수</label>
            <input
              type="text"
              placeholder="액슬 수를 입력해주세요."
              v-model="post.axles"
            />
          </div>
          <div class="form_input">
            <label>브레이크타입</label>
            <input
              type="text"
              placeholder="브레이크 타입을 선택해주세요."
              v-model="post.break_type"
            />
          </div>
          <div class="form_input">
            <label>견인장치 전기타입</label>
            <input
              type="text"
              placeholder="견인장치 전기타입을 선택해주세요."
              v-model="post.electric_type"
            />
          </div>
        </div>
        <div>
          <div class="form_input">
            <label>판매가격</label>
            <input
              type="text"
              placeholder="판매가격을 입력해주세요 (원)"
              v-model="post.price"
            />
          </div>
          <div class="form_input">
            <label>제조구분</label>
            <select
              type="text"
              class="select_input"
              v-model="post.manufactured_by"
            >
              <option selected class="ri-arrow-down-fill">Select option</option>
              <option>Option1</option>
              <option>Option2</option>
            </select>
            <!-- <input type="text" placeholder="" post.maker
                        <input type="text" placeholder="" post.model -->
          </div>
          <div class="form_input">
            <label>차량번호</label>
            <input
              type="text"
              placeholder="차량번호를 입력해주세요."
              v-model="post.car_number"
            />
          </div>
          <div class="form_input">
            <label>차량 모델명</label>
            <select type="text" class="select_input" v-model="post.car_name">
              <option selected class="ri-arrow-down-fill">Select option</option>
              <option>Option1</option>
              <option>Option2</option>
            </select>
          </div>
          <div class="form_input">
            <label>연식</label>
            <input
              type="text"
              placeholder="차량의 연식을 입력해주세요."
              v-model="post.produced_year"
            />
          </div>
          <div class="form_input">
            <label>캠핑카 외부 사이즈</label>
            <label>가로</label>
            <input
              type="text"
              placeholder="수치를 입력해주세요. (mm)"
              v-model="post.outside_width"
            />
            <br/>
            <label>세로</label>
            <input
              type="text"
              placeholder="수치를 입력해주세요. (mm)"
              v-model="post.outside_length"
            />
            <label>높이</label>
            <input
              type="text"
              placeholder="수치를 입력해주세요. (mm)"
              v-model="post.outside_height"
            />
          </div>
          <div class="form_input">
            <label>캠핑카 내부 사이즈</label>
            <label>가로</label>
            <input
              type="text"
              placeholder="수치를 입력해주세요. (mm)"
              v-model="post.inner_width"
            />
            <br/>
            <label>세로</label>
            <input
              type="text"
              placeholder="수치를 입력해주세요. (mm)"
              v-model="post.inner_length"
            />
            <label>높이</label>
            <input
              type="text"
              placeholder="수치를 입력해주세요. (mm)"
              v-model="post.inner_height"
            />
          </div>
          <div class="form_input">
            <label>캠핑카 공차중량</label>
            <input
              type="text"
              placeholder="무게를 입력해주세요. (Kg)"
              v-model="post.load_weight"
            />
          </div>
          <div class="form_input">
            <label>캠핑카 최대 적재 중량</label>
            <input
              type="text"
              placeholder="무게를 입력해주세요. (Kg)"
              v-model="post.max_loadweight"
            />
          </div>

          <div class="form_input">
            <label>캠핑카 승차인원</label>
            <input
              type="text"
              placeholder="승차인원을 선택해주세요."
              v-model="post.passenger_seat"
            />
          </div>
          <div class="form_input">
            <label>캠핑카 취침인원</label>
            <input
              type="text"
              placeholder="취침인원을 선택해주세요."
              v-model="post.number_beds"
            />
          </div>

          <div class="form_input">
            <label>면허자격</label>
            <input
              type="text"
              placeholder="캠핑카 면허 자격을 선택해주세요."
              v-model="post.licence_need"
            />
          </div>
          <div class="form_input_adress">
            <label>판매 지역</label>
            <select v-model="post.sale_area" @change="getAddress($event)">
              <option value="">먼저 시, 도 선택하십시오</option>
              <option v-for="(area_main, idd) in address_data" :key="idd">
                {{ area_main["si"] }}
              </option>
            </select>
            <select v-model="post.sub_sale_area">
              <option value="">시,군 선택하십시오</option>
              <option v-for="(area_sub, idd2) in address_sub_info" :key="idd2">
                {{ area_sub["gu"] }}
              </option>
            </select>
          </div>
          <div class="form_input">
            <label>캠핑카 휠 옵션</label>
            <select
              type="text"
              class="select_input"
              v-model="post.wheel_option_type"
            >
              <option selected :value="null">휠 종류를 선택해주세요</option>
              <option>Option1</option>
              <option>Option2</option>
            </select>
            <input
              type="text"
              placeholder="수치를 입력해주세요 (inch)"
              v-model="post.wheel_option_num"
            />
            <select
              type="text"
              class="select_input"
              v-model="post.wheel_spare_tire"
            >
              <option selected :value="null">
                스페어 타이어 유무를 선택해주세요.
              </option>
              <option>Option1</option>
              <option>Option2</option>
            </select>
          </div>
        </div>
        <!-- <button class="submit-button">다음단계로</button> -->
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  mounted(){
    axios.get("http://cammobile.kr/q/api/hash/?c=local").then((rep) => {
            this.address_data = rep.data
        });
  },
  computed: {
    ...mapGetters(["car_type"]),
    isLoggedIn() {
      return this.$store.getters.get_car_type;
    },
  },
  data() {
    return {
      types: [],
      address_data: null,
      address_sub_info: null,
      post: {
        // MotorHome
        car_type: "",
        car_model: "",
        fuel: "",
        fuel_mileage: "",
        power: "",
        torque: "",
        engine_displacement: "",
        driving_system: "",
        // Others
        chassis: "",
        axles: "",
        break_type: "",
        electric_type: "",
        comment: "",
        price: "",
        manufactured_by: "",
        car_number: "",
        car_name: "",
        produced_year: "",
        outside_width: "",
        outside_length: "",
        outside_height: "",
        inner_width: "",
        inner_length: "",
        inner_height: "",
        load_weight: "",
        max_loadweight: "",
        passenger_seat: "",
        number_beds: "",
        licence_need: "",
        sale_area: "",
        sub_sale_area: "",
        wheel_option_type: "",
        wheel_option_num: "",
        wheel_spare_tire: "",
      },
    };
  },
  methods: {
    async loadData() {
      try {
        console.log(this.$store.dispatch("loadCarType"));
      } catch (error) {
        console.log(error.message);
      }
    },
    getEl(event) {
      this.post.car_type = event.target.value;
    },
    sendFileItems() {
      console.log(this.post);
    },
    getAddress(element) {
      if (element != "")
        axios
          .get(
            "http://cammobile.kr/q/api/hash/?c=local&si=" +
              element.target.value +
              ""
          )
          .then((rep) => {
            this.address_sub_info = rep.data;
          });
    },
  },
};
</script>
<style scoped>
.base_info_page {
  height: 800px;
  overflow-x: scroll;
  overflow-y: none;
}

.base_info {
  background-color: #f0f4f7;
}

.step-image {
  width: 100%;
  margin-top: 10px;
  padding: 24px 0px;
}

.form_section {
}

.car_type_label {
  width: 6em;
  margin-bottom: 10px;
  display: block;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: -0.3px;
  text-transform: capitalize;
  color: #222222;
}

#outer {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
}

#outer .inner button {
  margin-top: 10px;
  margin-left: 5px;
  max-width: 93px;
  max-height: 29px;
  padding: 5px 12px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #777777;
}

#outer .inner button:focus,
#outer .inner button:active {
  background: #3c70bf;
  color: #ffffff;
}

.form_input {
}

.form_input input {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  padding: 10px;
  color: #777777;
  width: 95%;
  height: 37px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
}

.form_input_adress label {
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 9em;
  padding-right: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.5px;
  text-transform: capitalize;
  color: #222222;
  display: block;
}

.form_input_adress select {
  padding-left: 10px;
  width: 48%;
  height: 37px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
}

.select_input {
  width: 95%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  padding-left: 10px;
  color: #777777;
  width: 95%;
  height: 38px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
}

.submit-button {
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
  width: 180px;
  height: 45px;
  left: 124px;
  top: 1651px;
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
  margin-top: 20px;
}
label 
{
  display: block;
  padding-top: 10px;
}
</style>
