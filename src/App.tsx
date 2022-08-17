import { Card } from './components/Card';
import { Form } from './components/Form';

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <Form />
      <Card />
    </div>
  );
}

export default App;
