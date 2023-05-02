import { Box } from "@chakra-ui/react";
import "./App.css";
import { AllRoutes, Navbar } from "./components";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Box
        p={{ base: "8px 10px 8px" }}
        w={{ base: "100%" }}
        bg="#f9fafe"
        minH="calc(100vh - 73px)"
      >
        <AllRoutes />
      </Box>
    </Box>
  );
}

export default App;
