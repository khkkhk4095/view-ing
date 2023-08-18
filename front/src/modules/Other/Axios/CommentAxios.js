import { useLocation } from "react-router-dom";
import { customAxios } from "./customAxios";

export default function CommentAxios(callback, param) {

  return customAxios()
    .get(`boards/${param}/comments`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
