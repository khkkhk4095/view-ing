import { styled } from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 25px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 6px;

  &:hover {
    background-color: #ccc;
  }
`;

export default function MiniMenu({ content, member_id, to }) {
  const SERVER = "http://70.12.246.87:8080/messages";
  const author_id = useSelector((state) => state.UserReducer.member_id);
  const token = localStorage.getItem("access_token");

  const handleImageClick = () => {
    const newWindow = window.open("", "_blank", "width=395,height=360");
    newWindow.document.write(`
      <html>
      <head>
        <title>쪽지 작성</title>
        <style>
          @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css");
          *import { UserReducer } from './../../modules/UserReducer/UserReducer';
          {
            font-family: "Pretendard";
          }

          textarea{
            resize:none; 
            margin-bottom:20px;
          }

          .container{
            display:flex; 
            justify-content:center;
          }
        </style>
      </head>
      <body>
        <h4>쪽지 작성</h4>
        <h5>받는 사람 : ${to}</h5>
        제목 : <input></input>
        <textarea rows="12" cols="50"></textarea>
        <br />
        <div class="container">
          <button onclick="sendNote()">쪽지 보내기</button>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script>
          function sendNote() {
            const content = document.querySelector('textarea').value;
            const title = document.querySelector('input').value;
            console.log()
            
          }
        </script>
      </body>
      </html>
    `);
  };

  return <Container onClick={handleImageClick}>{content}</Container>;
}
