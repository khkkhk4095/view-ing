import { styled } from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  width: ${(props) => `${props.$width}px`};
  height: ${(props) => `${props.$height}px`};
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export default function AlertModal({ isOpen, onClose, type, }) {


  let width = 600
  let height = 400
  let content = ""
  switch (type = "withdraw") {
    case "withdraw":
      width = 300
      height = 200
      content = "정말 탈퇴하시겠습니까?"
    case "withdraw_super":
      width = 300
      height = 200
      content = "방장은 탈퇴할 수 없습니다."
    case "delete":
      width = 300
      height = 200
      content = "정말 삭제하시겠습니까?"
  }

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent $width={width} $height={height}>
            <button onClick={()=>onClose(false)}>나가기</button>
            <p>{content}</p>
          </ModalContent>
          
        </ModalOverlay>
      )}
    </>
  );
}
