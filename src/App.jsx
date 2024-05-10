import "./App.css";
import { Container, Row } from "react-bootstrap";
import MyMain from "./components/MyMain";
import MySidebar from "./components/MySidebar.jsx";

function App() {
 
 
  return (
    <>
      <Container fluid>
        <Row>
          <MySidebar />
          <MyMain />
        </Row>
      </Container>
    </>
  );
}

export default App;
