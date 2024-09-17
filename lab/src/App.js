// Imports
import React from "react"
import styled from "styled-components"

// Images
// import * as Images from "./images/*"
import logo from "./images/logo-ironhack.svg"
import burger from "./images/menu-top-xs.png"
import coverImg from "./images/cover-iron-react.svg"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

// Styles
const Header = styled.header`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    padding: 24px 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a img {
        width: 48px;
    }  
`

const Burger = styled.button`
    border: none;
    background: none;
    padding: 0;
`

const Cover = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    border: 12px solid white;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-idnex: 0;
    }
`

const CoverContent = styled.div`
    position: relative;
    z-index: 1;
    color: white;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 5vw;
    max-width: 600px;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 16px;
`

const Intro = styled.p`
    font-size: 24px;
    margin-bottom: 16px;
`

const Button = styled.button`
    font-size: 24px;
    background-color: white;
    border: none;
    padding: 16px 24px;
    border-radius: 16px;
`

const Container = styled.main`
    padding: 100px 5vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
`

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    justify-items: center;
`

const CardImg = styled.img`
    
`

const CardTitle = styled.h4`
    width: 100%;
    text-align: left;
    font-size: 24px;
`

const CardText = styled.p`
    font-size: 18px;
`

// Texts
const titleText = "Say hello to ReactJS"
const introText =
    "You will learn how to use the most popular frontend library and become a super Ninja developer."
const buttonText = "Awesome!"

const cardsContent = [
    {
        img: icon1,
        title: "Declarative",
        text: "React makes it painless to create interactive UIs",
    },
    {
        img: icon2,
        title: "Components",
        text: "Build encapsulated components that manage their states",
    },
    {
        img: icon3,
        title: "Single-Way",
        text: "A set of immutable values are passed to the component's",
    },
    {
        img: icon4,
        title: "JSX",
        text: "Statically typed, designed to run on modern browsers",
    },
]

function App() {
    return (
        <>
            <Header>
                <a href="/">
                    <img src={logo} alt="Logo Ironhack" />
                </a>

                <Burger>
                    <img src={burger} alt="Hamburger menu" />
                </Burger>
            </Header>

            <Cover>
                <img src={coverImg} alt="Cover" />

                <CoverContent>
                    <Title>{titleText}</Title>

                    <Intro>{introText}</Intro>

                    <Button>{buttonText}</Button>
                </CoverContent>
            </Cover>

            <Container>
                {cardsContent.map((item, i) => (
                    <Card key={i}>
                        <CardImg src={item.img} />
                        <CardTitle>{item.title}</CardTitle>
                        <CardText>{item.text}</CardText>
                    </Card>
                ))}
            </Container>
        </>
    )
}

export default App
