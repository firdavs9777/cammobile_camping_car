export default {
    setUser(state, payload) {
      state.token = payload.access_token;
      state.tokenExpiration = payload.expire_time;
    },
    setAutoLogout(state) {
      state.didAutoLogout = true;
    },
  };
  