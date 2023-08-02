import styled from "styled-components";
import React, { useState, useEffect } from "react";
import stompjs from "stompjs";
import * as SockJS from "sockjs-client";
import UserProfile from "../Common/UserProfile";

const Container = styled.div`
  border: "2px solid black";
  padding: "16px";

  width: 1000px;
  height: 500px;
`;

const ChatArea = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ChatBox = styled.div`
  font-size: 12px;
  color: var(--primary);
`;

const SendButton = styled.button``;

const MessageInputBox = styled.input``;

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const sockJS = new SockJS("http://localhost:8080/studyChat");
  const stompClient = stompjs.over(sockJS);

  const sendMsg = () => {
    stompClient.send(
      "/app/chats/studies/1",
      {},
      JSON.stringify({ user_id: 1, content: msg })
    );
  };
  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe("/topic/1", (data) => {
        const newMessage = JSON.parse(data.body);
        let arr = [...msgList];
        arr.splice(newMessage);
        setMsgList((arr) => [...arr, newMessage]);
      });
    });
    return () => stompClient.disconnect();
  }, []);

  // const style = {
  //   border: "2px solid black",
  //   padding: "16px",
  // };

  const chgMsg = (e) => {
    setMsg(e.target.value);
  };

  return (
    <Container>
      <ChatArea>
        {msgList.map((m) => {
          return (
            <>
              <UserProfile
                nickname={m.nickname}
                backgroundcolor={"red"}
                characterimg={"cow"}
              />
              <ChatBox key={m.chat_id}>{m.content}</ChatBox>
            </>
          );
        })}
      </ChatArea>
      <MessageInputBox
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMsg();
        }}
        onChange={chgMsg}
      ></MessageInputBox>
      <SendButton onClick={sendMsg}>전송</SendButton>
    </Container>
  );
}
