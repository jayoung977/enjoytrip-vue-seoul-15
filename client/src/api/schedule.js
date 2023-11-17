import { localAxios } from "@/util/http-commons";

const local = localAxios();
const url = "/tourlist";

async function getAttrtions(param, success, fail) {
  const { sido, start, listsize } = param;
  console.log("param : " + start + "," + listsize);
  await local
    .get(
      `${url}/search?sidoCode=${sido}&start=${start}&listsize=${listsize}`,
      param
    )
    .then(success)
    .catch(fail);
}

// async function findById(userid, success, fail) {
//   local.defaults.headers["Authorization"] =
//     sessionStorage.getItem("accessToken");
//   await local.get(`/user/info/${userid}`).then(success).catch(fail);
// }

// async function tokenRegeneration(user, success, fail) {
//   local.defaults.headers["refreshToken"] =
//     sessionStorage.getItem("refreshToken"); //axios header에 refresh-token 셋팅
//   await local.post(`/user/refresh`, user).then(success).catch(fail);
// }

// async function logout(userid, success, fail) {
//   await local.get(`/user/logout/${userid}`).then(success).catch(fail);
// }

export { getAttrtions };
