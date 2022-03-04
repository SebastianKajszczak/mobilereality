import React from 'react'
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import a from '../utils/images/a.jpg'
import b from '../utils/images/b.jpg'
import c from '../utils/images/c.jpg'
import d from '../utils/images/d.jpg'

const MainPage = () => {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`votes-page`, { replace: true})
    }

    return (
        <div>
            <SectionWrapper>
                <TextPart>
                    <h1>Kilka słów o nas</h1>
                    <h3>Czyli kim jesteśmy i dokąd zmierzamy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <Button onClick={handleRedirect}>Zobacz więcej</Button>
                </TextPart>
                <ImagePart>
                    <img src={a} width='380px' height='200px'></img>
                    <img src={b} width='380px' height='200px'></img>
                    <img src={c} width='380px' height='200px'></img>
                    <img src={d} width='380px' height='200px'></img>
                </ImagePart>
            </SectionWrapper>
            <SectionWrapper>
                <ImagePart>
                    <img src={a} width='380px' height='200px'></img>
                    <img src={b} width='380px' height='200px'></img>
                    <img src={c} width='380px' height='200px'></img>
                    <img src={d} width='380px' height='200px'></img>

                </ImagePart>
                <TextPart>
                    <h1>Nasza oferta</h1>
                    <h3>Dowiedz się co możemy Tobie zaoferować</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <Button onClick={handleRedirect}>Zobacz więcej</Button>
                </TextPart>
            </SectionWrapper>
        </div>
    )
}

const SectionWrapper = styled.div`
  display: flex;
  text-align: center;
  
  h1, h3, button {
    text-transform: capitalize;
  }
  
  p {
    padding: 30px;
  }
`

const TextPart = styled.div`
  flex: 0 1 50%;
`

const ImagePart = styled.div`
  flex: 0 1 50%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
`

const ImageOne = styled.div`

`

const ImageTwo = styled.div`

`

const ImageThree = styled.div`

`

const ImageFour = styled.div`

`

const Button = styled.button`
  border: 1px solid #00d9ff;
  height: 30px;
  background-color: transparent;
  cursor: pointer;
  
  &:hover {
    background-color: hsl(179, 100%, 90%);
  }
`

export default MainPage