import './index.css';

export default function SelectedInput({selection, val, onInputChange}) {
  if (selection === 1) {
    return (
      <div className="input-selection-button">
        <h2>Weight</h2>
        <input type="number" value={val} name="weight" placeholder="Your current weigth" 
        onChange={e => onInputChange(e.target.value)}/>
      </div>
    );     
  }

  if (selection === 2) {
    return (
      <div className="input-selection-button">
        <h2>Bench press</h2>
        <b>w:</b>
        <input type="number" value={val.w} name="bench-weight" placeholder="Weight" 
        onChange={e => onInputChange({...val, w: e.target.value})}/>
        <b>r:</b>
        <input type="number" value={val.r} name="bench-reps" placeholder="Reps" 
        onChange={e => onInputChange({...val, r: e.target.value})}/>
      </div>
    );     
  }

  if (selection === 3) {
    return (
      <div className="input-selection-button">
        <h2>Squat</h2>
        <b>w:</b>
        <input type="number" value={val.w} name="squat-weight" placeholder="Weight" 
        onChange={e => onInputChange({...val, w: e.target.value})}/>
        <b>r:</b>
        <input type="number" max="20" value={val.r} name="squat-reps" placeholder="Reps" 
        onChange={e => onInputChange({...val, r: e.target.value})}/>
      </div>
    );     
  }

  if (selection === 4) {
    return (
      <div className="input-selection-button">
        <h2>Dead lift</h2>
        <b>w:</b>
        <input type="number" value={val.w} name="deadlift-weight" placeholder="Weight" 
        onChange={e => onInputChange({...val, w: e.target.value})}/>
        <b>r:</b>
        <input type="number" value={val.r} name="deadlift-reps" placeholder="Reps" 
        onChange={e => onInputChange({...val, r: e.target.value})}/>
      </div>
    );     
  }
    return (
      <div className="input-selection-button">
        <h2>Pullups</h2>
        <input type="number" value={val} name="pullup-reps" placeholder="Reps" 
        onChange={e => onInputChange(e.target.value)}/>
      </div>
    );     
}

