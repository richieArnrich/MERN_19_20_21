import Binding from "./concepts/Binding";
import ClassEvent from "./concepts/ClassEvent";
import ClassProps1 from "./concepts/ClassProps1";
import Counter from "./concepts/Counter";
import FuncProps1 from "./concepts/FuncProps1";
import FunctEvent from "./concepts/FunctEvent";
import MyClassComp from "./concepts/MyClassComp";
import MyFuncComp from "./concepts/MyFuncComp";
import StateClass from "./concepts/StateClass";
import ToggleState from "./concepts/ToggleState";
import UpdateState from "./concepts/UpdateState";

function App() {
  return (
    <>
      {/* <MyFuncComp />
      <MyClassComp />
      <FuncProps1 name="Naveen" age="30" />
      <ClassProps1 name="Shreya" age="10" /> */}
      {/* <StateClass /> */}
      {/* <FunctEvent /> */}
      {/* <ClassEvent /> */}
      {/* <UpdateState /> */}
      {/* <ToggleState /> */}
      {/* <Counter /> */}
      <Binding />
      {console.log(Binding)}
    </>
  );
}

export default App;
