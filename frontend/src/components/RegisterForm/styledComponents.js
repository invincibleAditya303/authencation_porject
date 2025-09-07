import styled from 'styled-components'

export const RegisterBgContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1f1f1f;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RegisterContainer = styled.div`
    width: 80vw;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    border: 2px #324155 solid;
`

export const RegisterImage = styled.img`
    width: 35vw;
    height: 40vh;
    margin-left: 15px;
    border-radius: 20px;
`

export const RegisterFormContainer = styled.form`
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

export const RegisterInputContainer = styled.div`
    width: 35vw;
    height: 8vh;
    margin-top: 20px;
`

export const RegisterLabelHeading = styled.label`
    color: #ffffff;
    font-size: 20px;
    font-family: "Roboto";
    padding-left: 5px;
    padding-bottom: 5px;
`

export const RegsiterInputText = styled.input`
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

export const SubmitButton = styled.button`
    width: 80px;
    height: 36px;
    background-color: #32cad6;
    color: #333333;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    border-radius: 8px;
    border-width: 0px;
    margin-top: 20px;
    cursor: pointer;
    outline: none;
`

export const RegisterErrmsg = styled.p`
    color: hsla(7, 78%, 49%, 1.00);
    font-size: 16px;
    font-family: "Roboto";
`

export const RegisterSuccessMsg = styled.p`
    color: #2e6b22ff;
    font-size: 18px;
    font-family: "Roboto";
`