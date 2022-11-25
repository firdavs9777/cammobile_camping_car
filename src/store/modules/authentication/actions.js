let timer;
export function getAccessToken() {
  const token = JSON.parse(localStorage.getItem("AccessToken"));
  if (token && token.access_token) {
    return token.access_token;
  } else {
    return null;
  }
}

export async function getUserData() {
  const response = await fetch("http://cammobile.kr/q/api/token/?c=user", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + getAccessToken(),
    },
  }).then((rep)=>{
    if(rep.e){
      alert(rep.m);
    }
    else 
    {
      console.log(rep)
      localStorage.setItem('user-data',rep)
    }
  })
  const responseData = await response.json();
  console.log(responseData);
}

export function setUser(data) {
  // storage.setSession('user',JSON.stringify(data));
  localStorage.setItem("user", JSON.stringify(data));
}
export function getUser(data) {
  return JSON.parse(localStorage.getItem("user"));
}

function refreshToken() {
  const refreshUrl = "http://cammobile.kr/q/api/token/?c=refresh-token";
  // console.log(getAccessToken());

  const response = fetch(refreshUrl, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getAccessToken(),
    },
  })
    .then((rep) => {
      if (rep.e) {
        alert(rep.m);
      } else {
        // console.log("--------prev");
        // console.log(getAccessToken());
        // console.log("--------new");
        // console.log(rep);
        localStorage.setItem("AccessToken", JSON.stringify(rep.data));
      }
    })
    .catch((error) => {
      alert(error);
    });
}
export function tokenExpire() {
  // console.log("check");
  const token = JSON.parse(localStorage.getItem("access_token"));
  // console.log(token);
  const now = Math.floor(+new Date() / 1000);
  if (token) {
    if (token.expire_time < now) {
      localStorage.removeItem("access_token");
      clearUser();
    } else {
      refreshToken();
    }
  } else {
    localStorage.removeItem("access_token");
    clearUser();
  }
}
export function clearUser() {
  // storage.clearSession();
  localStorage.removeItem("user");
}

export default {
  // http://cammobile.kr/q/api/token/?c=login&id=krrjoro@naver.com&pass=1111
  async login(context, payload) {
    console.log;
    let url = "http://cammobile.kr/q/api/token/?c=login";
    const response = await fetch(url, {
      method: "POST",
      //   headers: {
      //     'Authorization':'Bearer '+ getAccessToken()
      // },
      body: JSON.stringify({
        id: payload.id,
        pass: payload.pass,
      }),
    });
    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      const error = new Error(responseData.m || "Failed to authenticate.");
      throw error;
    }
    // const expiresIn = +responseData.data.expire_time * 1000;
    // const expirationDate = new Date().getTime() + expiresIn;
    // localStorage.setItem('expire_time', responseData.data.expire_time);
    localStorage.setItem("AccessToken", JSON.stringify(responseData.data));
    // timer = setTimeout(function () {
    //   context.dispatch('logout');
    // }, expiresIn);
    getUserData();

    context.commit("setUser", {
      access_token: responseData.data.access_token,
      expire_time: responseData.data.expire_time,
    });
  },
  autoLogin(context) {
    const token = JSON.parse(localStorage.getItem("AccessToken"));
    // const tokenExpiration = localStorage.getItem("expire_time");
    // const refreshToken = localStorage.getItem("refreshToken");
    // const expiresIn = +refreshToken - new Date().getTime();
    // timer = setTimeout(function () {
    //   context.dispatch("autoLogout");
    // }, expiresIn);
    if (token) {
      context.commit("setUser", {
        access_token: token
      });
    }
  },
  logout(context) {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("user-data");
    localStorage.removeItem("expire_time");
    // localStorage.removeItem('expire_time');
    clearTimeout(timer);
    context.commit("setUser", {
      token: null,
    });
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
