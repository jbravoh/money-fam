import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBotPage from "./components/ChatBotPage";
import Homepage from "./components/Homepage";
import Community from "./components/Community";
import { Container } from "@material-ui/core";

// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            {/* <Navbar /> */}
            <Route path="chatbot" element={<ChatBotPage />} />
            <Route path="community" element={<Community />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
