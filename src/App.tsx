import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
let items = ["New York", "San Francisco", "Tokyo", "Kigali", "Paris"];
const handleSelectItem = (item: string) => {
  console.log(item);
};
function App() {
  const [alertVisibility, SetAlertVisible] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisibility && (
        <Alert close={()=>SetAlertVisible(false)}>
          <p>Alert-Text</p>
        </Alert>
      )}
      <Button onClick={() => SetAlertVisible(true)}>My Button</Button>
    </div>
  );
}

export default App;
