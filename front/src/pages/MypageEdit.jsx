import { styled } from "styled-components";
import MainButton from "../components/Button/MainButton";
import SubButton from "./../components/Button/SubButton";
import SetProfileImage from "../components/MyPage/SetProfileImage";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { customAxios } from "./../modules/Other/Axios/customAxios";
import Error from "../components/Common/Error";
import { useState } from "react";
import { Login } from "../modules/UserReducer/Actions";

const EditContainer = styled.div``;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 50px;

  margin-bottom: 30px;
`;

const ProfileContainer = styled.div`
  width: 300px;
  height: 400px;
`;

const ProfileImg = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  background-color: azure;
  margin: auto;
  margin-top: 20px;
  background-color: ${(props) => props.$backgroundcolor};
  background-image: ${(props) => `url(/profile/${props.$characterimg}.png)`};
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
`;

const NicknameContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: aquamarine;
`;

const Text = styled.div``;

// const NicknameInput = styled.input`
//   padding: 10px;
//   border: 2px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   color: #555;
//   outline: none;

//   &:focus {
//     border-color: #007bff;
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }
// `;

const NicknameInput = styled.input`
  --border-height: 1px;
  --border-before-color: rgba(221, 221, 221, 0.39);
  --border-after-color: #5891ff;
  --input-hovered-color: #4985e01f;
  position: relative;
  width: 400px;
  color: #000000;
  font-size: 0.9rem;
  background-color: transparent;
  box-sizing: border-box;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  border-bottom: var(--border-height) solid var(--border-before-color);

  margin-right: 20px;

  &:hover {
    background: var(--input-hovered-color);
  }

  &:focus {
    outline: none;
    border-bottom: var(--border-height) solid var(--border-after-color);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  /* margin-left: 50px; */
  display: flex;
  justify-content: center;
`;

export default function MypageEdit() {
  //

  //유저정보
  const member_id = useSelector((state) => state.UserReducer.memberId);
  const nick = useSelector((state) => state.UserReducer.nickname);
  const color = useSelector((state) => state.UserReducer.backgroundColor);
  const img = useSelector((state) => state.UserReducer.backgroundImg);

  const dispatch = useDispatch();
  const [nickChecked, setNickChecked] = useState(false);
  const [nickname, setNickname] = useState(nick);
  const [backgroundColor, setBackgroundColor] = useState(color);
  const [backgroundImg, setBackgourndImg] = useState(img);

  // react-hook-form에서 사용되는 함수
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    formState: { isSubmitting },
  } = useForm();

  const handleNickname = (e) => {
    setNickname(e.target.value);
    setNickChecked(false);
  };

  const handleCheck = () => {
    customAxios()
      .get(`login/nickname/check/${nickname}`)
      .then((response) => {
        console.log(response.data);
        alert("사용 가능한 닉네임입니다.");
        setNickChecked(true);
      })
      .catch((error) => {
        alert("중복된 닉네임입니다.");
      });
  };

  const onSubmit = () => {
    const data = {
      member_id: member_id,
      nickname: nickname,
    };

    if (nickChecked === false) {
      return alert("중복확인해주세요.");
    }

    customAxios()
      .put(`members/${member_id}/nickname`, data)
      .then(function (response) {
        console.log(response);

        alert("닉네임 변경이 완료되었습니다.");
        setNickChecked(false);
        customAxios()
          .get(`members/${member_id}/`)
          .then((res) => {
            dispatch(Login(res.data)); // 리덕스에 적용
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err, 1);
          });
      })
      .catch((error) => {
        console.error("에러가 발생했습니다.:", error);
      });
  };

  return (
    <EditContainer>
      <FlexContainer>
        <Title>{nickname}님, 환영합니다.</Title>
      </FlexContainer>
      <FlexContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>닉네임&nbsp;&nbsp;&nbsp;</h1>
          <NicknameInput
            id="userId"
            defaultValue={nickname}
            onChange={handleNickname}
          />
          <Error>{errors?.userId?.message}</Error>
          <SubButton
            onClick={() => handleCheck()}
            width={50}
            height={20}
            content={"중복확인"}
          ></SubButton>
          <ButtonContainer>
            <MainButton
              type={"button"}
              width={100}
              height={40}
              content={"저장하기"}
              onClick={onSubmit}
            ></MainButton>
          </ButtonContainer>
        </form>
      </FlexContainer>
      <SetProfileImage
        selectedColor={backgroundColor}
        setSelectedColor={setBackgroundColor}
        selectedImage={backgroundImg}
        setSelectedImage={setBackgourndImg}
      ></SetProfileImage>
    </EditContainer>
  );
}
