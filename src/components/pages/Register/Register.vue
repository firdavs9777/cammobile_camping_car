<template>
    <div class="register">
        <form>
            <h1 class="heading">cammobile</h1>
            <label>Username</label>
            <br>
            <input type="text" placeholder="Username" class="username">
            <br>
            <label for="email">Email</label>
            <br />
            <input type="email" class="email" placeholder="Email" />
            <br />
            <label>
                Profile Image(optional)
            </label>
            <input type="file" />
            <label for="password">Password</label>
            <br />
            <input type="password" class="password" placeholder="Password" />
            <br />
            <label for="password">Password Confirmation</label>
            <br />
            <input type="password" class="password" placeholder="Password" />
            <br />
            <button type="submit" class="signup-button">회원가입</button>
            <button type="submit" class="kakao-signup">
                <i class="ri-kakao-talk-fill"></i> 카카오톡으로 회원가입
            </button>
            <button type="submit" class="google-signup">
                <i class="ri-google-fill"></i> Google으로 회원가입
            </button>
        </form>

    </div>
</template>
<script></script>
<style scoped>
.register {
    margin: auto;
    background-color: #F5F5F5;
    justify-content: center;
    align-items: center;
    text-align: center;
}

form {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 15px;
    padding-bottom: 10px;
    margin-bottom: 15px;
}

.heading {
    font-size: 50px;
    color: #47b5ff;
    padding: 10px;
    margin: 20px;
}

label {
    display: block;
    font-size: 18px;
    padding-top: 10px;
}

.username {
    height: 40px;
    width: 200px;
    border: 1px solid #ccc;
    padding-left: 10px;
    border-radius: 10px;
}

input[type=file] {
    text-align: left;
    height: 35px;
    padding-left: 20px;
    margin-top: 10px;
    margin-left: 10px;

}

.email {
    height: 40px;
    width: 200px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding-left: 10px;
    border-radius: 10px;
}

.signup-button {
    font-size: 16px;
    height: 35px;
    width: 200px;
    background-color: #47b5ff;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.kakao-signup {
    display: block;
    color: #333;
    height: 35px;
    width: 200px;
    background-color: #F7E317;
    border-radius: 20px;
    margin-top: 10px;
    font-size: 16px;
    margin: auto;
}

.google-signup {
    color: #333;
    height: 35px;
    width: 200px;
    background-color: #81C6E8;
    border-radius: 20px;
    margin-top: 10px;
    font-size: 17px;
    padding-left: 5px;
}

.password {
    width: 200px;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding-left: 10px;
    border-radius: 10px;
}

ul {
    justify-content: space-between;
    margin-top: 10px;
}

li {
    display: inline-block;
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
}

a {
    font-size: 14px;
    text-decoration: none;
    color: #000000;
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
    font-size: 14px;
    cursor: pointer;
}
</style>
  