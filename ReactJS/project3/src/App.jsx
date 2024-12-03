import CompX from "./concepts/ContextAPI/CompX";
import ContextUse from "./concepts/ContextAPI/ContextUse";
import MyConsumer from "./concepts/ContextAPI/MyConsumer";
import { MyProvider } from "./concepts/ContextAPI/MyContext";

function App() {
  return (
    <>
      <MyProvider>
        <MyConsumer />
        {/* <CompX /> */}
        <ContextUse />
      </MyProvider>
    </>
  );
}

export default App;
