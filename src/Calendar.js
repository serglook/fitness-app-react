import './index.css';

export default function Calendar({value, onDateChange}) {
  return (
    <div className="calendar">
      <input type="date" id="calendar" value={value} onChange={e => onDateChange(e.target.value)}/>
    </div>
  );
}

