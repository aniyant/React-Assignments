import React from 'react';
import { DashboardContext } from '../components/DashboardContextProvider'
import { useContext } from 'react';
import {Line} from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import * as ChartJs from 'chart.js';
ChartJs.Chart.register.apply(null, Object.values(ChartJs).filter((chartClass) => (chartClass.id)));
// new ChartJs.Chart()

export const Dashboard = () => {
    const {dashboardData,setDashboardData} = useContext(DashboardContext);
    const {summary,dailyAnalytics} = dashboardData;
    console.log(dashboardData);
    console.log(summary)
    console.log(dailyAnalytics);
  return (
    <div>
        <h2>Dashboard</h2>
        <div>
            <p>Total Revenue: {summary.totalRevenue}</p>
            <p>No.of Orders: {summary.numberOfOrders}</p>
            <p>Order Value: {summary.averageOrderValue}</p>
        </div>
        <div>
            <h3>Daily Analytics</h3>
        </div>
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(2,1fr)",
            justifyContent:"center",
            gridAutoRows:'auto',
            alignItems:"center",
            gap:"50px",
            width:"80%",
            margin:"20px",
        }}>
            <div>
                <h4>Revenue</h4>
            <Line
            data = {
                {
                    labels: dailyAnalytics.map(item => item.day),
                    datasets: [
                        {
                            label: 'Revenue',
                            data: dailyAnalytics.map(item => item.revenue),
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)'
                        }
                    ]
                }
            }
            />
            </div>
           
            <div>
                <h4>Orders</h4>
            <Bar 
                data={{
                    labels: dailyAnalytics.map(item => item.day),
                    datasets: [
                        {
                            label: 'Orders',
                            data: dailyAnalytics.map(item => item.orders),
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)'
                        }
                    ]
                }}
            />
            </div>
            <div>
                <h4>Average Order Value</h4>
            <Line
            data = {
                {
                    labels: dailyAnalytics.map(item => item.day),
                    datasets: [
                        {
                            label: 'Revenue',
                            data: dailyAnalytics.map(item => item.averageOrderValue),
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)'
                        }
                    ]
                }
            }
            />
            </div>
            <div>
                <h4>Peak OrderTime</h4>
            <Line
            data = {
                {
                    labels: dailyAnalytics.map(item => item.day),
                    datasets: [
                        {
                            label: 'Revenue',
                            data: dailyAnalytics.map(item => item.peakOrderTime),
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)'
                        }
                    ]
                }
            }
            />
            </div>
            <div>
                <h4>Customer Satisfaction</h4>
            <Bar 
                data={{
                    labels: dailyAnalytics.map(item => item.day),
                    datasets: [
                        {
                            label: 'Orders',
                            data: dailyAnalytics.map(item => item.customerSatisfaction),
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)'
                        }
                    ]
                }}
            />
            </div>
        </div>
    </div>
  )
}
