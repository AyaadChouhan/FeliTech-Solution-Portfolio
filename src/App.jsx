import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index";

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <Router>
        {/* <ScrollToTop /> */}
        <AppRoutes />
      </Router>
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
