import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as Chart } from "chart.js/auto";

export const Charts = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthMap = months.map((month) => month);
  return (
    <div>


      <div style={{ maxWidth: "30%" }}>
        <Pie
          datasetIdKey="id"
          data={{
            labels: monthMap,
            datasets: [{
              label: 'My First Dataset',
              data: [250, 50, 100, 120, 150 , 160 , 190 , 110 , 165 , 100 , 80 , 70],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 8
            }]
            
          }}
        />
      </div>
    </div>
  );
};
