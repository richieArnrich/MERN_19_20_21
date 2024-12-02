import ClassForm from "./concepts/ClassForm";
import FuncForm from "./concepts/FuncForm";
import InputLength from "./concepts/InputLength";
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
      {/* <ParentComp2 objData={obj} /> */}
      {/* <ClassForm /> */}
      {/* <FuncForm /> */}
      <InputLength />
    </>
  );
}

export default App;
