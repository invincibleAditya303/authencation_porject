import styled from 'styled-components'

export const LoginBgContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1f1f1f;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 80vw;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    border: 2px #324155 solid;
`

export const LoginImage = styled.img`
    width: 35vw;
    height: 40vh;
    margin-left: 15px;
    border-radius: 20px;
`

export const LoginFormContainer = styled.form`
    width: 40vw;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    border: 2px #324155 solid;
    margin-right: 15px;
`

export const InputContainer = styled.div`
    width: 35vw;
    height: 8vh;
    margin-top: 20px;
`

export const LabelHeading = styled.label`
    color: #ffffff;
    font-size: 20px;
    font-family: "Roboto";
    padding-left: 5px;
    padding-bottom: 5px;
`

export const InputText = styled.input`
    width: 100%;
    height: 6vh;
    background-color: transparent;
    color: #ffffff;
    font-size: 20px;
    font-family: "Roboto";
    padding-left: 10px;
    border-radius: 20px;
    border: 2px #324155 solid;
    outline: none;
`

export const ButtonsContainer = styled.div`
    width: 20vw;
    height: 36px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const LoginButton = styled.button`
    width: 80px;
    height: 100%;
    background-color: #32cad6;
    color: #333333;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    border-radius: 8px;
    border-width: 0px;
    cursor: pointer;
    outline: none;
`

export const Errmsg = styled.p`
    color: hsla(7, 78%, 49%, 1.00);
    font-size: 16px;
    font-family: "Roboto";

`