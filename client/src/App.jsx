import { Box } from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
