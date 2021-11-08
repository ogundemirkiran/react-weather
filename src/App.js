import "./App.css";
import Mainweather from "./components/mainWeather/index";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./context/authcontext";

function App() {
  return (
    <AuthProvider>
      <Mainweather />
    </AuthProvider>
  );
}

export default App;
