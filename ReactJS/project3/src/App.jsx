import CompX from "./concepts/ContextAPI/CompX";
import ContextUse from "./concepts/ContextAPI/ContextUse";
import MyConsumer from "./concepts/ContextAPI/MyConsumer";
import { MyProvider } from "./concepts/ContextAPI/MyContext";
import NavRoutes from "./concepts/RouterDom/PageRoutes/NavRoutes";

function App() {
  return (
    <>
      {/* <MyProvider>
        <MyConsumer /> */}
      {/* <CompX /> */}
      {/* <ContextUse /> */}
      {/* </MyProvider> */}
      <NavRoutes />
    </>
  );
}

export default App;
