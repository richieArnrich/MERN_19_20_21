import CompX from "./concepts/ContextAPI/CompX";
import ContextUse from "./concepts/ContextAPI/ContextUse";
import MyConsumer from "./concepts/ContextAPI/MyConsumer";
import { MyProvider } from "./concepts/ContextAPI/MyContext";
import HandleData from "./concepts/LCM/HandleData";
import UseEffectFunc from "./concepts/LCM/UseEffectFunc";
import NavRoutes from "./concepts/RouterDom/PageRoutes/NavRoutes";

function App() {
  return (
    <>
      {/* <MyProvider>
        <MyConsumer /> */}
      {/* <CompX /> */}
      {/* <ContextUse /> */}
      {/* </MyProvider> */}
      {/* <NavRoutes />
      <HandleData /> */}
      <UseEffectFunc />
    </>
  );
}

export default App;
