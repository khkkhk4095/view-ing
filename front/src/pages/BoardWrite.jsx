import { styled } from "styled-components";
import MainButton from "../components/Button/MainButton";
import { useEffect, useState } from "react";
import { customAxios } from "../modules/Other/Axios/customAxios";

const Container = styled.div``;

const Category = styled.div``;

const CategorySelect = styled.select``;

const Title = styled.div``;

const TitleInput = styled.input``;

const Content = styled.div``;

const TextArea = styled.textarea``;

const ButtonsContainer = styled.div`
  display: flex;
`;

export default function BoardWrite() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const SendRequest = (e) => {
    customAxios().post(`boards/${category}`,)
  }

  useEffect(()=>{
    setCategory()
  },[])

  return (
    <Container>
      <Category>
        카테고리{" "}
        <CategorySelect onChange={(e) => handleCategory(e)}>
          <option value={"general"}>자유게시판</option>
          <option value={"review"}>면접게시판</option>
          <option value={"qna"}>질문게시판</option>
        </CategorySelect>
      </Category>
      <Title>
        게시글 제목 <TitleInput onChange={(e) => handleTitle(e)}></TitleInput>{" "}
      </Title>
      <Content>내용</Content>
      <TextArea onChange={(e) => handleContent(e)}></TextArea>
      <ButtonsContainer>
        <div>
          <MainButton
            width={80}
            height={35}
            marginright={10}
            content={"작성하기"}
          ></MainButton>
          <MainButton width={80} height={35} content={"취소"}></MainButton>
        </div> 
      </ButtonsContainer>
    </Container>
  );
}
