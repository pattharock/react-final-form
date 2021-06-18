import {Form, Field} from 'react-final-form'
import './App.css';

function App() {
  return (
    <div className="App">
      <header  eader className="App-header">
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render = {({handleSubmit}) => (
            
          )}
        />
      </header>
    </div>
  );
}

export default App;
