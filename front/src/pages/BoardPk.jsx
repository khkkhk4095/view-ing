import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArticleDetail from "../components/Board/ArticleDetail";
import ReplyList from "../components/Board/Organisms/ReplyList";
import { useLocation } from "react-router-dom";
import ArticleAxios from "../modules/Other/Axios/ArticleAxios";
import CommentAxios from "../modules/Other/Axios/CommentAxios";


export default function BoardPk() {
  const [data, setData] = useState([]);
  const [reply, setReply] = useState([]);
  const param = useLocation().pathname.split("/")[3];
	const type = useLocation().pathname.split("/")[2];

	

  useEffect(() => {
    ArticleAxios(setData, param, type)
    CommentAxios(setReply, param)
  }, []);

  return (
    <>
      <ArticleDetail data={data} setData={setData}></ArticleDetail>
      <ReplyList reply={reply} setReply={setReply}></ReplyList>
    </>
  );
}
