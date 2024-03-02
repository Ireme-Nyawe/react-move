import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
let items = ["New York", "San Francisco", "Tokyo", "Kigali", "Paris"];
const handleSelectItem = (item: string) => {
  console.log(item);
};
function App() {
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        <div className="alert">
          <h1>Alert</h1>
          <p>Alert-Text</p>
        </div>
      </Alert>
    </div>
  );
}

export default App;
