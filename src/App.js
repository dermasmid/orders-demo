import {AppProvider} from '@shopify/polaris';
import DataTableExample from './orders';

function App() {
  return (
    <AppProvider>
    <div className="App">
    <DataTableExample/>
    </div>
    </AppProvider>
  );
}

export default App;
