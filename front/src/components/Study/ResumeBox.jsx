import styled from "styled-components";
import UserProfile from "../Common/UserProfile";
import MainButton from "../Button/MainButton";
import { useSelector } from "react-redux";
import { customAxios } from "../../modules/Other/Axios/customAxios";
import { MdAttachFile } from "react-icons/md";

const Container = styled.div`
  width: 700px;
  height: 230px;
  border-radius: 36px;
  border: 2px solid var(--gray-200);
  position: relative;

  display: flex;

  margin: 7px;
`;

const ProfileContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 10px;
`;

const DateContainer = styled.div`
  position: absolute;
  right: 40px;
  top: 15px;
`;

const TextContainer = styled.div`
  width: 600px;
  height: 80px;

  padding: 10px;
  line-height: 150%;

  position: absolute;
  left: 40px;
  top: 50px;

  background-color: #f8f6ff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 250px;
`;

const Icon = styled(MdAttachFile)`
  transform: rotate(45deg);
`

const File = styled.a``;

const FileConatainer = styled.div`
  display: flex;
  position: absolute;
  /* margin-bottom: 20px; */
  bottom: 50px;
  left: 45px;
`;

export default function ResumeBox({
  request_id,
  study_id,
  backgroundcolor,
  characterimg,
  nickname,
  date,
  text,
  member_id,
  setList,
  request_files,
}) {
  const approval = () => {
    customAxios()
      .post(`/studies/${study_id}/requests/${request_id}/approval`, {
        user_id: member_id,
      })
      .then((res) => {
        alert("신청이 승인되었습니다.");
        customAxios()
          .get(`studies/${study_id}/requests`)
          .then((response) => {
            // 받아온 응답 데이터를 상태 변수에 저장
            setList(response.data);
          });
      })
      .catch();
  };

  const denial = () => {
    customAxios()
      .post(`/studies/${study_id}/requests/${request_id}/denial`, {
        user_id: member_id,
      })
      .then((res) => {
        alert("신청이 거절되었습니다.");
        customAxios()
          .get(`studies/${study_id}/requests`)
          .then((response) => {
            // 받아온 응답 데이터를 상태 변수에 저장
            setList(response.data);
          });
      })
      .catch();
  };

  const SERVER = process.env.REACT_APP_SERVER_URL

  return (
    <Container>
      <ProfileContainer>
        <UserProfile
          backgroundcolor={backgroundcolor}
          characterimg={characterimg}
          nickname={nickname}
        />
      </ProfileContainer>
      <DateContainer>{date} </DateContainer>
      <TextContainer>{text}</TextContainer>
      {request_files && request_files.length > 0 ? (
        <>
          <FileConatainer>
            <Icon/>
            <h1>첨부파일 :&nbsp;</h1>
            {request_files.map((file, idx) => (
              <File
                href={`${SERVER}studies/${study_id}/requests/${request_id}/files/${file.file_id}`}
                key={idx}
              >
                {file.name}
              </File>
            ))}
          </FileConatainer>
        </>
      ) : (
        <></>
      )}

      <ButtonContainer>
        <MainButton
          marginRight={10}
          width={100}
          height={30}
          fontSize={14}
          onClick={approval}
          content="승인"
        />
        <MainButton
          marginRight={10}
          width={100}
          height={30}
          fontSize={14}
          onClick={denial}
          content="거절"
        />
      </ButtonContainer>
    </Container>
  );
}
