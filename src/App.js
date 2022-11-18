import "./App.css";
import styled from "styled-components";
import logo from "./images/logo.svg";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;

const Header = styled.header`
  width: 87px;
  height: 54px;
  background: url(${logo});
  background-position: center;
  margin: 50px auto 40px auto;
`;
