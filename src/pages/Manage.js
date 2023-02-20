
import {Line, Pie} from "react-chartjs-2";
import {useState} from "react";
import {
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
} from "chart.js/auto";

const Manage = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thue", "Fri"],
    datasets: [
      {
        label: "users for the week",
        data: [6, 3, 6, 12, 10],
        // backgroundColor: "aqua",
        borderColor: "#3498db",
        // pointBorderColor: "aqua",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true
    },
    scales: {
      y:{
        // min: 3,
        // max: 6
      }
    }
  };

  const PieData = {
    labels: ["Mobile", "Desktop", "Tablet"],
    datasets: [
      {
        label: "users per device",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dash-landing">
      <div className="manage-labels">
        <p>DASHBOARD</p>
        <h4>Blog Overview</h4>
      </div>

      <div className="dashboard-home">
        <div className="blog-cards">
          <div class="chart-container">
            <svg
              class="chart-svg"
              viewBox="0 0 100 30"
              preserveAspectRatio="none"
            >
              <path
                class="chart-line"
                d="M 0 25 C 10 10, 20 20, 30 15 C 40 30, 50 10, 60 20 C 70 25, 80 10, 90 25 L 100 20"
              ></path>
            </svg>
            <div class="chart-labels">
              <span class="chart-value">30</span>
              <span class="chart-label">Posts</span>
            </div>
          </div>
        </div>

        <div className="blog-cards">
          <div class="chart-container">
            <svg
              class="chart-svg"
              viewBox="0 0 100 30"
              preserveAspectRatio="none"
            >
              <path
                class="chart-line"
                d="M 0 25 C 10 10, 20 20, 30 15 C 40 30, 50 10, 60 20 C 70 25, 80 10, 90 25 L 100 20"
              ></path>
            </svg>
            <div class="chart-labels">
              <span class="chart-value">30</span>
              <span class="chart-label">Comments</span>
            </div>
          </div>
        </div>
      </div>
      <div className="charts">
        <div className="chart">
          <label>Users overview</label>
          {/* <Bar data={userData} />{" "} */}
          <Line data={data} options={options}></Line>
        </div>
        <div className="pie-chart">
          <label>Users by device</label>
          <Pie data={PieData} style={{ width: "150px", height: "200px" }}></Pie>
        </div>
      </div>
    </div>
  );
};

export default Manage;
