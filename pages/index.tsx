import type { NextPage } from "next";
import Header from "../src/components/Header/Header";
import styled from "styled-components";




const Home: NextPage = () => {
  return (
    <>
      <Header/>
    
      <Main>
        <div>text</div> 
      </Main>
    </>  
  )
}


const Main = styled.main`
  
  background-color: red;
`;



export default Home