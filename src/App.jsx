import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Initial from "./pages/Initial";
import Home from "./pages/Home";

import { AppStyle } from "./styles/style";
function App() {
  return (
    <AppStyle>
      <Router>
        <Routes>
          <Route path="/" exact element={<Initial />} />
          <Route path="/home" exact element={<Home />} />
        </Routes>
      </Router>
    </AppStyle>
  );
}

export default App;
