import { Form, Field } from 'react-final-form';
import './App.css';

function App() {
  const onSubmit = (e) => {
    debugger;
  };

  const validate  = (e) => {
    debugger;
  };

  return (
    <div className='App'>
      <header eader className='App-header'>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSumbit}>
              <div>
                <label> First Name </label>
                <Field
                  name='firstName'
                  component='input'
                  placeholder='First Name'
                />
              </div>
              <button type='submit'> Submit </button>
            </form>
          )}
        />
      </header>
    </div>
  );
}

export default App;
