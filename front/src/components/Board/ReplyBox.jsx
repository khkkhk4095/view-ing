import React, { useState } from "react";
import styled from "styled-components";
import { BiLike, BiSolidLike, BiCommentDetail } from "react-icons/bi";
import UserProfile from "../Common/UserProfile";
import { css } from "styled-components";
import ReplyInput from "./ReplyInput";
import { customAxios } from "../../modules/Other/Axios/customAxios";
import { useSelector } from "react-redux";
import { UserReducer } from "./../../modules/UserReducer/UserReducer";
import { useLocation } from "react-router-dom";
import CommentAxios from "../../modules/Other/Axios/CommentAxios";
import SubButton from "./../Button/SubButton";

// const Container = styled.div`
//   width: 800px;
//   height: fit-content;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

const ReplyContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 0.5px solid var(--gray-100);
  /* 
  &:last-child {
    border-bottom: none;
  } */
`;

const UserStyled = styled.div`
  ${(props) =>
    props.isNestedReply &&
    css`
      margin-left: 40px;
    `}
`;

const Content = styled.div`
  flex-grow: 1;
  margin: 20px 10px;
  font-size: 14px;
  color: var(--gray-600);

  ${(props) =>
    props.isNestedReply &&
    css`
      margin-left: 50px;
    `}
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;

  color: var(--gray-400);
  font-size: 12px;

  ${(props) =>
    props.isNestedReply &&
    css`
      margin-left: 40px;
    `}
`;

const LikeCount = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const LikeIcon = styled(BiLike)`
  margin-right: 4px;
`;
const SolidLikeIcon = styled(BiSolidLike)`
  margin-right: 4px;
`;

const CommentIcon = styled(BiCommentDetail)`
  margin-right: 4px;
`;

const CreatedAt = styled.div`
  margin-right: 10px;
`;

const ReplyCount = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const ButtonsContainer = styled.div`
  display: inline-block;
`

const ButtonsFlex = styled.div`
  display: flex;
`

export default function ReplyBox({
  comment_id,
  nickname,
  character,
  background,
  content,
  created_at,
  like_count,
  reply_count,
  isDelete,
  isLike,
  isNestedReply,
  setReply,
  author,
}) {
  const [showInput, setShowInput] = useState(false); // Use parentheses instead of square brackets
  const toggleShowInput = () => setShowInput(!showInput);
  const memberId = useSelector((state) => state.UserReducer.memberId);
  const param = useLocation().pathname.split("/")[3];
  const [isUpdating, setIsUpdating] = useState(false);
  const text = (isUpdating, isDelete, content) => {
    if(isDelete){
      return "삭제된 메세지입니다."
    } else if (isUpdating) {
      return <ReplyInput commentId={comment_id} value={content} />
    } else {
      return content
    }
  }

  const handleLike = (isDelete) => {
    if(isDelete){
      return 
    } else {
      customAxios()
        .post(`members/${memberId}/likes/comments/${comment_id}`)
        .then((res) => {
          CommentAxios(setReply, param);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleDislike = (isDelete) => {
    if(isDelete){
      return 
    } else {
    customAxios()
      .delete(`members/${memberId}/likes/comments/${comment_id}`)
      .then((res) => {
        CommentAxios(setReply, param);
      })
      .catch((err) => console.log(err));
    }
  };

  const handleDelete = () => {
    customAxios()
      .delete(`boards/${param}/comments/${comment_id}`)
      .then((res) => {
        CommentAxios(setReply, param);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <ReplyContainer isNestedReply={isNestedReply}>
        <UserStyled isNestedReply={isNestedReply}>
          <UserProfile
            backgroundcolor={background}
            characterimg={character}
            nickname={nickname}
          />
        </UserStyled>
        <Content isNestedReply={isNestedReply}>
          {text(isUpdating, isDelete, content)}
          {author === memberId && !isDelete ? (<ButtonsContainer>
            <ButtonsFlex>
              <SubButton content="수정하기" onClick={() => setIsUpdating(true)}></SubButton>
              <SubButton content="삭제하기" onClick={() => handleDelete()}></SubButton>
            </ButtonsFlex>
          </ButtonsContainer>
          ) : (
            <></>
          )}
        </Content>

        <BottomContainer isNestedReply={isNestedReply}>
          <CreatedAt> {created_at}</CreatedAt>
          <LikeCount>
            {isLike ? (
              <SolidLikeIcon onClick={() => handleDislike(isDelete)} size={16} />
            ) : (
              <LikeIcon onClick={() => handleLike(isDelete)} size={16} />
            )}
            {like_count}
          </LikeCount>
          {!isNestedReply && (
            <ReplyCount onClick={toggleShowInput}>
              <CommentIcon size={16} />
              {reply_count}
            </ReplyCount>
          )}
        </BottomContainer>
        {showInput && !isDelete && <ReplyInput commentId={comment_id} setReply={setReply} />}
      </ReplyContainer>
    </>
  );
}
