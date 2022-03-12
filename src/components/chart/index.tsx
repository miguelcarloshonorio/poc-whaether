import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            labels:{
                rotation: 90,
            }
        },
        y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
                drawOnChartArea: false
            },
        },
        x: {
            grid: {
                color: 'red',
                borderColor: 'grey',
                tickColor: 'grey'
            },
        },
    }
};

const labels = ['1960', '1970', '1980', '1990', '2000', '2010', '2020'];

export const chartData = {
    labels,
    datasets: [
        {
            label: 'Temperature',
            position: 'bottom',
            data: labels.map(() => faker.datatype.number({ min: -2, max: 48 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Precipitation',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1'
        },
    ],
};

export default function LineChart() {
    return <Line options={options} data={chartData} />;
}
