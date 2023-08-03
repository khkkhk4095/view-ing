import axios from "axios";

const SERVER = "http://localhost:8080/";
console.log(localStorage.getItem("access_token"));

export const customAxios = () =>
  axios.create({
    baseURL: SERVER,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
