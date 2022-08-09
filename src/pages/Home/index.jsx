import Header from "../../components/Home/Header";
import Filter from "../../components/Home/Filter";
import { Container } from "./styles";
import Main from "../../components/Home/Main";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const [filterAplied, setFilterAplied] = useState("todo");
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Filter setFilterAplied={setFilterAplied} />
      <Main filterAplied={filterAplied} />
    </Container>
  );
};

export default Home;
