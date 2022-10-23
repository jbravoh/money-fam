import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatbotPage from "./components/ChatbotPage";
import Landing from "./components/Landing";
import Community from "./components/Community";
import { Container } from "@material-ui/core";

// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            {/* <Navbar /> */}
            <Route path="chatbot" element={<ChatbotPage />} />
            <Route path="community" element={<Community />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
