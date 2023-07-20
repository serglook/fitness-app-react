import { useState } from 'react';
import './index.css';
import InputSelectionButton from './InputSelectionButton';
import SelectedInput from './SelectedInput';
import Calendar from './Calendar';

export default function InputSection({onAddClick}) {
  const [pressedBtn, setPressedBtn] = useState(1)
  const date = new Date();

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' +mm + '-' + dd ;
  console.log(today)
  const [selectedDate, setSelectedDate] = useState(today) // TO CHANGE ON TODAY
  const [weigth, setWeigth] = useState(0)
  const [bench, setBench] = useState({w: 0, r: 0})
  const [squat, setSquat] = useState({w: 0, r: 0})
  const [deadlift, setDeadlift] = useState({w: 0, r: 0})
  const [pullups, setPullups] = useState(0)

  function handleInputState(i)
  {
    if(i===1) {return weigth}
    if(i===2) {return bench}
    if(i===3) {return squat}
    if(i===4) {return deadlift}
    return pullups
  }

  function handleInputSetter(i)
  {
    if(i===1) {return setWeigth}
    if(i===2) {return setBench}
    if(i===3) {return setSquat}
    if(i===4) {return setDeadlift}
    return setPullups
  }
  let formattedDate = selectedDate.split('-').join(".").substring(2,10);
  return (
    <div className="input-section">
      <h1 className='selection-label'>Select workout</h1>
      <div className='buttons'>
      <InputSelectionButton onBtnClick={()=>setPressedBtn(1)} ex= "weight"/>
      <InputSelectionButton onBtnClick={()=>setPressedBtn(2)} ex ="bench"/>
      <InputSelectionButton onBtnClick={()=>setPressedBtn(3)} ex ="squat"/>
      <InputSelectionButton onBtnClick={()=>setPressedBtn(4)} ex ="deadlift"/>
      <InputSelectionButton onBtnClick={()=>setPressedBtn(5)} ex ="pullup"/>
      </div>
      <hr className="hr-dashed"></hr>
      <SelectedInput selection={pressedBtn} val={handleInputState(pressedBtn)} onInputChange={handleInputSetter(pressedBtn)}/>
      <Calendar value={selectedDate} onDateChange={setSelectedDate}/>  
        <button className='add-btn' onClick={()=>onAddClick({
        pressedBtn,
        formattedDate,
        result :handleInputState(pressedBtn)
        })}>Add record</button>
    </div>
  );
}

