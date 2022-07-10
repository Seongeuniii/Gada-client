import React from "react";
import styled from 'styled-components';
import LoginHeader from 'components/LoginHeader';
import { 
    ChatIcon,
    GoogleIcon
} from 'components/icons';

const Login = () => {
    return (
        <Wrapper>
            <LoginHeader />
            <LoginContainer>
                <KakaoLogin>
                    <ChatIcon style={LoginIconStyle} />
                    <LoginText>카카오 로그인</LoginText>
                </KakaoLogin>
                <GoogleLogin>
                    <GoogleIcon style={LoginIconStyle} />
                    <LoginText>구글 로그인</LoginText>
                </GoogleLogin>
                <LocalLogin>
                    <LoginText>다른 계정으로 로그인</LoginText>
                </LocalLogin>
                <Register>회원가입</Register>
            </LoginContainer>
        </Wrapper>
    )
}

export default Login;

const Wrapper = styled.div`
    background-color: #60A5F8;
    width: 100vw;
    height: 100vh;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15vh;

    & > div:not(:first-of-type) {
        margin-top: 10px;
    }

    & > div:hover {
        box-shadow: 0 0 5px rgba(0,0,0,0.4);
    }
`

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 50px;
    cursor: pointer;
    position: relative;
    border-radius: 5px;
`

const KakaoLogin = styled(LoginWrapper)`
    background-color: #FEE500;
    color: #4B2F1B;
`

const GoogleLogin = styled(LoginWrapper)`
    background-color: #ffffff;
    color: #666666;
`

const LocalLogin = styled(LoginWrapper)`
    background-color: #222222;
    color: #ffffff;
`

const LoginText = styled.span`
    diplay: inline-block;
    font-weight: 500;
    font-size: 17px;
`

const LoginIconStyle = {
    position: 'absolute',
    top: '50%',
    left: '15px',
    transform: 'translate(0, -50%)'

} as React.CSSProperties;

const Register = styled.span`
    display: inline-block;
    margin-top: 15px;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    color: #ffffff;
`