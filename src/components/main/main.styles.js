import styled from 'styled-components'

export const Main = styled.main`
  ${({ theme }) => `
    width: 100%;
    section {
      display: flex;
      flex-direction: row;
      margin: 50px 20px 50px 20px;
      width: 90%;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content:  center;
      align-items: center;
    }
    div {
      width: 110px;
    }
    img {
      width: 90px ;
    }
    p {
      margin-top: 5px;
      font-size: 12px;
      color: ${theme.color.grey}
    }

  `}
`
