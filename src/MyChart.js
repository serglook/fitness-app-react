import './index.css';
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

export default function MyChart({chartData, chartNum}) {
  let parsedData = {
    labels: chartData.filter(item=>item.pressedBtn === chartNum).map(item => item.formattedDate),
    datasets: [{
      label: ["Weight", "Bench", "Squat", "Deadlift", "Pullups"][chartNum-1],
      data: chartData.filter(item=>item.pressedBtn === chartNum).map(item => item.result)
  }]
  }
  const options = {
    aspectRatio: 1505 / 216
    // maintainAspectRatio: false	
  }
  return (
    <div className="chart">
      { <Line data={parsedData} options={options} /> }
    </div>
  );
}

