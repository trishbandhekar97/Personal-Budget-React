import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart, Pie } from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import 'chart.js/auto';




function Charts() {

  const [data, setData] = useState();
  

  useEffect(() => {
    const fetch = async () => {
      try {
        
        await axios.get('http://localhost:3000/budget').then((res) => {
      
            console.log(res.data.myBudget)
            setData(res.data.myBudget)
        
        });
        
        // chartData.labels = result.data.myBudget.map((item) => {
        //   return item.title;
        // })
        // chartData.datasets[0].data = result.data.myBudget.map((item) => {
        //   return item.budget;
        // })
      } catch(err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  const chartData = {
    labels: data?.map(i => i.title),
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          data: data?.map(i => i.budget),
          // you can set indiviual colors for each bar
          backgroundColor: [
            '#ffcd56',
            '#ff6384',
            '#36a2eb',
            '#fd6b19',
            '#795548',
            '#c90076',
            '#f19336'
          ],
          borderWidth: 1,
        }
    ]
  };

  console.log(chartData)

  
  return (
    <Pie type="pie" data={chartData} width={400} height={300}/>
  );
}



export default Charts;