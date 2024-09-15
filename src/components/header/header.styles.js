import styled from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => `
    background-color: ${theme.color.secondary};
    height: 70%;
    width: 100vw;
    padding: 20px ;
  `}
`
export const Nav = styled.div`
  ${({ theme }) => `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px 20px 60px;
  `}

`

export const Content = styled.div`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  width: 60vw;
  color: ${theme.color.primary};
  padding: 20px 60px 20px 60px;
  h1 {
    margin-bottom: 20px;
    font-size: 50px;
  }
  p {
    font-size: 15px;
  }
  `}
`

export const Button = styled.button`
  ${({ theme }) => `
    width: 120px;
    height: 50px;
    background-color: ${theme.color.primary};
    color: ${theme.color.secondary};
    margin-top: 40px ;
  `}
`