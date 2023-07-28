import React from "react";
import styled from "styled-components";
import { BiLike, BiCommentDetail } from "react-icons/bi";
import UserProfile from "../Common/UserProfile";

const ReplyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid var(--gray-100);

  &:last-child {
    border-bottom: none;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  margin: 20px 10px;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  
  color: var(--gray-400);
  font-size: 12px;


`;

const LikeCount = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const LikeIcon = styled(BiLike)`
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
}) {
  return (
    <>
      <ReplyContainer>
        <UserProfile
          backgroundcolor={background}
          characterimg={character}
          nickname={nickname}
        />
        <Content>{content}</Content>

        <BottomContainer>
          <CreatedAt> {created_at}</CreatedAt>
          <LikeCount>
            <LikeIcon size={16} />
            {like_count}
          </LikeCount>
          <ReplyCount>
            <CommentIcon size={16} />

            {reply_count}
          </ReplyCount>
        </BottomContainer>
      </ReplyContainer>
    </>
  );
}
