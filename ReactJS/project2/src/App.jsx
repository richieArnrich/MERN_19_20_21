import ParentCom1 from "./concepts/ParentCom1";
import ParentComp2 from "./concepts/ParentComp2";

function App() {
  let obj = {
    name: "Karthik",
    age: 40,
  };
  return (
    <>
      {/* <ParentCom1 /> */}
      <ParentComp2 objData={obj} />
    </>
  );
}

export default App;
