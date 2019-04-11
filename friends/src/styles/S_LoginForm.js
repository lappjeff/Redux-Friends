import styled from 'styled-components'

const LoginFormContainer = styled.div `
  height: 350px;
  width: 50%;
  background: white	;
  border-radius: 5px;
  margin: 0 auto;
`

const LoginFormItem = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  height: 100%;


  input {
    width: 60%;
    border: none;
    border-bottom: 2px solid #7289da;
    height: 40px;
    font-size: 15px
    text-align: center;
    ::placeholder {
      color: #7289da;
    }
  }

  button {
    width: 70%;
    height: 50px;
    border-radius: 5px;
    background: #7289da;
    border: none;
    font-size: 20px;
    color: white;
    cursor: pointer;
    text-align: center;
  }
`


export {
  LoginFormContainer,
  LoginFormItem,
}
