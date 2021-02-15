import mock from "../@fake-db/mock"

const userInfo = {
    "username": "masterpiece",
    "password": "test##33"
}

const data = {
    loginResp: {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwayI6NH0.oOld3Rl4sDUjwkBRB1pBzeha5UubPPxSJhBmLpEZqI0",
        "id": 4
      }
}

export const loginApi = {
    login: "/api/v1/users/login"
}

mock.onPost(loginApi.login).reply(request => {
    return [200, JSON.parse(JSON.stringify(data.loginResp))];
})
