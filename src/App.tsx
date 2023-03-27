import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useCombinedHook } from './hooks/useCombinedHook';

function App() {

  const {
    initialisationData,
    foo: { value, setValue, loading: fooLoading },
    bar,
    baz
  } = useCombinedHook(5);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setValue(value + 1)}>Add Foo?</button>
        <button onClick={() => bar.setStringo(bar.stringo + 'o')}>Add Bar?</button>
        <button onClick={() => baz.setObji({ dog: 'bork', money: 3000 })}>Add Money</button>
        <p>
          Initialised?
        </p>
        <p>
          Foo: {value} {!fooLoading ? 'Yes' : 'No'}
        </p>
        <p>
          Bar: {!bar.loading ? 'Yes' : 'No'}
        </p>
        <p>
          Store Count: {initialisationData.storeCount}
        </p>
        <p>
          All initialised: {initialisationData.allInitialised ? 'Yes' : 'No'}
        </p>
      </header>
    </div>
  );
}

export default App;
