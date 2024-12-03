import BootstrapStyle from "./concepts/BootstrapStyle";
import ClassForm from "./concepts/ClassForm";
import DisplayImages from "./concepts/DisplayImages";
import FuncForm from "./concepts/FuncForm";
import InlineStyle from "./concepts/InlineStyle";
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
      {/* <InputLength /> */}
      {/* <InlineStyle /> */}
      {/* <DisplayImages /> */}
      <BootstrapStyle />
    </>
  );
}

export default App;
