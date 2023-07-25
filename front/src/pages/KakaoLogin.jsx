import { useNavigate } from "react-router-dom";

export default function KaKaoLogin() {

    let params = new URL(document.URL).searchParams;
    let code = params.get('code')
    console.log(code)
    let navigate = useNavigate()

    return <div>로그인 중입니다. 잠시만 기다리세요.</div>
  }
  