import { useState } from 'react';
import InputSection from './InputSection';
import ChartSection from './ChartSection';

function App() {

  const [allData, setAllData] = useState([]);

  function updateData(elem)
  {
    const a = allData.slice()
    if(elem.pressedBtn === 2 || elem.pressedBtn === 3 || elem.pressedBtn === 4)
    {
      console.log(elem.result)
      a.push({...elem, result:(Math.abs(elem.result.w * elem.result.r) * 0.0333 + Math.abs(Number(elem.result.w)))})
    }else{
      a.push(elem)
    }
    return setAllData(a)
  }

  return (
    <div className="App">
      <InputSection onAddClick={updateData}/>
      <ChartSection data={allData}/>
    </div>
  );
}

export default App;
