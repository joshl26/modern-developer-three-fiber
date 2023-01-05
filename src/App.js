import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import classes from "./App.module.css";

function App() {
  return (
    <Canvas className={classes.canvas}>
      <Experience />
    </Canvas>
  );
}

export default App;
