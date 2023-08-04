import styled from "styled-components";
import MainButton from "./../components/Button/MainButton";
import SubButton from "./../components/Button/SubButton";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { customAxios } from "../modules/Other/Axios/customAxios";
import UserProfile from "../components/Common/UserProfile";

const studyData = {
  study_id: 1,
  title: "test1",
  description: "스터디 설명입니다.",
  applied_company: "삼성",
  applied_job: "개발",
  capacity: 6,
  head_count: 4,
  created_at: "2023-07-26T15:17",
  deadline: null,
  recruitment: true,
  leader: {
    member_id: null,
    nickname: "지우",
    background: null,
    character: null,
  },
  career_level: "ALL",
  tags: ["tag1", "tag2", "tag3"],
};

const Container = styled.div``;

const Company = styled.div``;

const Title = styled.div``;

const Leader = styled.div``;

const Date = styled.div``;

const Capacity = styled.div``;

const Tag = styled.div``;

const Description = styled.div``;

export default function StudyPkDetail() {
  // const [studyData, SetstudyData] = useState([]);

  // const studyPk = useParams().studyPk;

  // console.log(studyPk);

  // useEffect(() => {
  //   customAxios()
  //     .get(`studies/${studyPk}`)
  //     .then((res) => {
  //       SetstudyData(res.data);
  //     });
  // }, []);

  return (
    <Container>
      <Company>
        {studyData.applied_company}
        {studyData.applied_job}
        {studyData.career_level}
      </Company>
      <Title>{studyData.title}</Title>
      <Leader>
        <UserProfile />
      </Leader>
      <Date>마감날짜{studyData.deadline}</Date>
      <Capacity>
        {studyData.head_count}/{studyData.capacity}
      </Capacity>
      <Tag>
        {studyData.tags.map((tag, idx) => {
          <Tag></Tag>;
        })}
      </Tag>
      <Description>{studyData.description}</Description>
      <MainButton />
      <SubButton />
    </Container>
  );
}
