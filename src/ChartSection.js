import './index.css';
import MyChart from './MyChart';
import { useState } from 'react';

const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

export default function ChartSection({data}) {

  // const [weightData, setWeightData] = useState({
  //   labels: data.map(item => item.selectedDate),
  //   datasets: [{
  //     label: "Weight",
  //     data: data.map(item => item.result)
  // }]
  // })
// if (data.length)  
// {
//   if(data.slice(-1).pressedBtn === 1){
//     console.log('1')
//   }
//   if(data.slice(-1).pressedBtn === 2){
//     console.log('2')
//   }
//   console.log(data[data.length - 1].pressedBtn)
// }
  // let weightData = {
  //   labels: data.map(item => item.selectedDate),
  //   datasets: [{
  //     label: "Weight",
  //     data: data.map(item => item.result)
  // }]
  // }
  // const [userData, setUserData] = useState({
  //   labels: UserData.map(data => data.year),
  //   datasets: [{
  //     label: "Users Gained",
  //     data: UserData.map(data => data.userGain)
  // }]
  // })
  return (
    <div className="chart-section">
      <MyChart chartData={data} chartNum={1}/>
      <MyChart chartData={data} chartNum={2}/>
      <MyChart chartData={data} chartNum={3}/>
      <MyChart chartData={data} chartNum={4}/>
      <MyChart chartData={data} chartNum={5}/>

    </div>
  );
}

