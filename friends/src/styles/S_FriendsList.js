import styled from 'styled-components'

export const HomeContainer = styled.div `
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'L L L B B'
`
export const FriendsContainer = styled.div `
  background: #7289da;
  color: white;
  padding: 20px;
  grid-area: L;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .friend {
    display: grid;
    grid-template-areas:
      'n n n a a'
      'e e e e e';
    margin: 10px 0;
  }

  .name {
    grid-area: n;
  }

  .age {
    grid-area: a;
  }

  .email {
    grid-area: e;
  }
`

export const ButtonContainer = styled.div `
  grid-area: B;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button `
  background: white;
  width: 400px;
  height: 100px;
  border: none;
  border-radius: 10px;
  font-size: 30px;
  color: #7289da
  font-weight: 300;
  cursor: pointer;
`
