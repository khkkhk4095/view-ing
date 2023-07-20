import styled from "styled-components";
import { Link } from "react-router-dom";

// props로 message와 is_read로 받는다.

const Container = styled(Link)`
  width: 430px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-50);
  color: var(--gray-700);
  font-weight: 300;
`;

const TitleContainer = styled.div``;

const DateContainer = styled.div``;

export default function GithubButton({ alarm_type }) {
  // Function to get the appropriate link based on the alarm_type
  const getLink = (alarmType) => {
    switch (alarmType) {
      case "message":
        return "/mypage/get";
      case "approve":
        return "/link-for-alarm-type-2";
      case "apply":
        return "/link-for-alarm-type-3";
      case "studyArticle":
        return "/link-for-alarm-type-4";
      case "studyMeeting":
        return "/link-for-alarm-type-5";
      case "studyComment":
        return "/link-for-alarm-type-5";
      case "studyReply":
        return "/link-for-alarm-type-5";
      case "boardComment":
        return "/link-for-alarm-type-5";
      case "boardReply":
        return "/link-for-alarm-type-5";
      case "leader":
        return "/link-for-alarm-type-5";
      default:
        return "/";
    }
  };

  return (
    <Container to={getLink(alarm_type)}>
      <TitleContainer>신청하신 스터디가 승인되었습니다.</TitleContainer>
      <DateContainer>2020.02.02</DateContainer>
    </Container>
  );
}
