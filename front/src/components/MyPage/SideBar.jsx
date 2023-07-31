import { styled } from "styled-components"
import { Link, Outlet } from 'react-router-dom';
import StudySideBar from "../Study/StudySideBar";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  padding: 20px;
`

const SidebarContainer = styled.div`
  width: 222px;
  height: 600px;
  
  margin-right: 50px;
  border-top: 1px solid #ebebebde;
`

const Menu = styled.div`
  width: 150px;
  height: 30px;
  font-weight: 300;
  padding-top: 13px;
  padding-left: 15px;
  color: var(--gray-800);
  border-bottom: 1px solid #ebebebde;
  text-decoration: none;

  &:hover {
    background-color: var(--secondary);
  }
  ${({ $active }) => $active && `
    background-color: var(--secondary);
  `}
`

const MyPage = styled.div`
  width: 150px;
  height: 30px;
  font-weight: 300;
  padding-top: 13px;
  padding-left: 15px;
  color: var(--gray-800);
  border-bottom: 1px solid #ebebebde;
  text-decoration: none;
  background-color: var(--secondary);
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function SideBar () {

  const [clicked, setClicked] = useState(document.location.pathname)
  console.log(clicked)

  const menuList = [ "내 정보 수정", "내 스터디", "찜한 스터디", "내 쪽지함", "내 캘린더", "내가 쓴 글", "내가 좋아요 한 글", "내가 댓들 단 게시글", "탈퇴하기"]
  const linkList = [ "/mypage/edit", "/mypage/study", "/mypage/bookmark","/mypage/get", "/mypage/calendar", "/mypage/myarticle", "/mypage/like", "/mypage/comment", "/mypage/withdraw"]
  const menuListDoms = menuList.map((menu, idx) => <StyledLink to={linkList[idx]} onClick={()=> setClicked(linkList[idx])} key={idx}><Menu $active={clicked === linkList[idx]} >{menu}</Menu></StyledLink>)


  return <Container>
    <SidebarContainer>
      <MyPage>마이 페이지</MyPage>
      {menuListDoms}
    </SidebarContainer>
    {/* <StudySideBar></StudySideBar> */}
    <div>
      <Outlet/>
    </div>
  </Container>
}