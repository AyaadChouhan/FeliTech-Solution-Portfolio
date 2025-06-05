import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index";
import ScrollToTop from '../src/Components/ScrollToTop'
function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
