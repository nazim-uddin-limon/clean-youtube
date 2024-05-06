import useApp from "./hooks/useApp";

import FormDialog from "./components/dialog";

function App() {
  useApp();
  return (
    <div>
      <FormDialog />
    </div>
  );
}

export default App;
