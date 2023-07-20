import './index.css';
import grape from "./grapefruit.jpg"
import weight from "./weight.png"
import bench from "./bench.png"
import squat from "./squat.png"
import deadlift from "./deadlift.png"
import pullup from "./pullup.png"

export default function InputSelectionButton({onBtnClick, ex}) {
  if (ex === "weight") {
    return (
      <div className="input-selection-button">
        <button onClick={onBtnClick}>
        <img 
       src={weight}
       alt="Grapefruit slice atop a pile of other slices"></img>
        </button>
      </div>
    );
  }
  if (ex === "bench") {
    return (
      <div className="input-selection-button">
        <button onClick={onBtnClick}>
        <img 
       src={bench}
       alt="Grapefruit slice atop a pile of other slices"></img>
        </button>
      </div>
    );
  }
  if (ex === "squat") {
    return (
      <div className="input-selection-button">
        <button onClick={onBtnClick}>
        <img 
       src={squat}
       alt="Grapefruit slice atop a pile of other slices"></img>
        </button>
      </div>
    );
  }
  if (ex === "deadlift") {
    return (
      <div className="input-selection-button">
        <button onClick={onBtnClick}>
        <img 
       src={deadlift}
       alt="Grapefruit slice atop a pile of other slices"></img>
        </button>
      </div>
    );
  }
  if (ex === "pullup") {
    return (
      <div className="input-selection-button">
        <button onClick={onBtnClick}>
        <img 
       src={pullup}
       alt="Grapefruit slice atop a pile of other slices"></img>
        </button>
      </div>
    );
  }
}

