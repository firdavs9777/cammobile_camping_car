<template>
    <div class="login">
      <base-dialog :show="isLoading" title="Authenticating" fixed>
        <base-spinner></base-spinner>
      </base-dialog>
      <form @submit.prevent="submitForm">
        <h1 class="heading">LOG <span class="in">IN</span></h1>
        <div class="form-control">
          <input
            type="email"
            id="email"
            class="email"
            v-model.trim="email"
            placeholder="ID or EMAIL"
          />
        </div>
        <div class="form-control">
          <input
            type="password"
            id="password"
            class="password"
            v-model.trim="password"
            placeholder="PASSWORD"
          />
        </div>
        <div class="checkbox">
          <input type="checkbox" class="checkbox-input" />
          <label for="b">로그인 상태 유지 </label>
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email and password (must be at least 6 characters
          long)
        </p>
        <button type="submit" class="login-button">로그인</button>
  
        <!-- <button type="submit" class="kakao-login">
          <i class="ri-kakao-talk-fill"></i> 카카오톡 간편 로그인
        </button>
        <button type="submit" class="google-login">
          <i class="ri-google-fill"></i> Google 간편 로그인
        </button> -->
        <ul>
          <li>
            <router-link to="/find_password"> 아이디 찾기</router-link>
          </li>
          <span class="divider">|</span>
          <li>
            <router-link to="/find_password">비밀번호 찾기</router-link>
          </li>
          <span class="divider">|</span>
          <li>
            <router-link to="/register">회원가입</router-link>
          </li>
        </ul>
      </form>
    </div>
  </template>