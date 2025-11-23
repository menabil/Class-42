import "./App.css";
import One from "./components/Contact";
import Hello from "./components/Hello";
import Button from "./components/Heading";
import Image from "./components/Image";
import Game from "./assets/console.jpg";

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

      <Image className={"w-[400px] h-[300px] mt-5 ml-70"} img={Game} />
    </>
  );
}

export default App;
