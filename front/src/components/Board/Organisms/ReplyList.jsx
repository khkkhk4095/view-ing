import styled from "styled-components";
import ReplyBox from "../ReplyBox";
import React from "react";
import ReplyInput from "../ReplyInput";

export default function ReplyList({ reply, rereply }) {
  return (
    <>
      <ReplyInput></ReplyInput>
      {reply.map((reply, idx) => (
        <ReplyBox
          key={idx}
          comment_id={reply.comment_id}
          nickname={reply.author.nickname}
          character={reply.author.character}
          background={reply.author.background}
          content={reply.content}
          created_at={reply.created_at}
          updated_at={reply.updated_at}
          like_count={reply.like_count}
          reply_count={reply.reply_count}
          isDelete={reply.isDelete}
        ></ReplyBox>
      ))}
    </>
  );
}
