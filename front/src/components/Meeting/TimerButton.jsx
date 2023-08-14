import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BiTimer } from "react-icons/bi";

const Container = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
`;

const ReadyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-100);
  border-radius: 10px;
border: 1px solid var(--gray-200);
  margin-right: 15px;
`;
const StartState = styled.div``;
const StopState = styled.div``;

const IconBiTimer = styled(BiTimer)`
  font-size: 2rem; 
`;

export default function TimerButton() {
  const [timerState, setTimerState] = useState("ready");
  const [timer, setTimer] = useState(0);
  const [saveTime, setSaveTime] = useState(0);

  const checkTime = () => {
    setTimeout(() => {
      setTimer((prev) => prev + 1);
      checkTime();
    }, 1000);
  };

  const saveCurrentTime = () => {
    setSaveTime(timer);
  };

  useEffect(() => {
    checkTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ReadyState
        hidden={timerState !== "ready"}
        onClick={() => {
          setTimerState("start");
          setTimer(0);
        }}
      >
        <IconBiTimer />
        &nbsp; 타이머 &nbsp;
      </ReadyState>
      <StartState
        hidden={timerState !== "start"}
        onClick={() => {
          setTimerState("stop");
          saveCurrentTime();
        }}
      >{`${Math.floor(timer / 60)} : ${Math.floor(timer % 60)}`}</StartState>
      <StopState
        hidden={timerState !== "stop"}
        onClick={() => {
          setTimerState("ready");
        }}
      >
        {`${Math.floor(saveTime / 60)} : ${Math.floor(saveTime % 60)}`}
      </StopState>
    </Container>
  );
}
