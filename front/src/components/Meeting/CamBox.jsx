import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BiVolumeMute } from "react-icons/bi";
import UserProfile from "./../Common/UserProfile";

function CamBox({ streamManager, isVideoActive }) {
  const videoRef = useRef();

  useEffect(() => {
    if (streamManager && !!videoRef) {
      streamManager.addVideoElement(videoRef.current);
    }
  });

  const [videoOn, setVideoOn] = useState(true);

  const [audioOn, setAudioOn] = useState(true);

  const getUserData = () => {
    const data = streamManager
      ? streamManager.stream.connection.data
      : undefined;
    return data
      ? JSON.parse(data).clientData
      : { nickname: "로딩 중", background: "cow", character: "red" };
  };

  const Container = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
  `;

  const CamContainer = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: grey;
    z-index: -100;
  `;

  const ProfileContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: grey;
    z-index: 50;
  `;

  const ProfileBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const InfoContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    color: white;
  `;

  return (
    <>
      <Container>
        {streamManager ? (
          <CamContainer
            autoPlay={true}
            ref={videoRef}
            hidden={!videoOn}
          ></CamContainer>
        ) : null}
        <ProfileContainer hidden={videoOn}>
          <ProfileBox>
            <UserProfile
              nickname={getUserData().nickname}
              backgroundcolor={getUserData().backgroundColor}
              characterimg={getUserData().backgroundImg}
            />
          </ProfileBox>
        </ProfileContainer>
        <BiVolumeMute
          display={audioOn ? "none" : ""}
          size={50}
          color="red"
        ></BiVolumeMute>
        <InfoContainer>{getUserData().nickname} </InfoContainer>
      </Container>
    </>
  );
}

export default CamBox;
