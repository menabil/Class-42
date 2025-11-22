import "./App.css";
import One from "./components/Heading";
import Hello from "./components/Heading";
import Button from "./components/Heading";

function App() {
  return (
    <>
      <h1 className="bg-teal-800 text-white text-3xl mt-3 text-center py-3">
        Hello World
      </h1>

      <Hello />

      <One text={"Hello One"} />
      <One text={"Hello Two"} />
      <One className={"bg-cyan-600"} text={"Hello Three"} />

      <Button className={"bg-amber-500"} btnText={"Click Me"} />
      <Button className={"bg-red-700"} btnText={"View All"} />
    </>
  );
}

export default App;
