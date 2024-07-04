import { Toaster } from "react-hot-toast";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="app">
      <Weather />
      <Toaster />
    </div>
  );
};

export default App;
