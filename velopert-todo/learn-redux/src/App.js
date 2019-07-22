import React  from 'react'
import { Counter } from './components/Counter';
import { Palette } from './components/Palette';
import { WaitingList } from './components/WaitingList';

const App = () => {
    return (
      <div>
        <Palette selected="red"/>
        <Counter value="0" color="red" />
        <WaitingList />
      </div>
    )
}

export default App;