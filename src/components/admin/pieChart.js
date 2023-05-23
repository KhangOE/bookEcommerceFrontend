
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

export const data = {
    labels: ['Novel', 'Science', 'nonFiction'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3],
            borderWidth: 1,
            backgroundColor: [
                '#2A76F4',
                '#94BAF9',
                '#D9E6FD',

            ],
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "bottom",
        },
    },
};

export const PieChart = () => {
    return (<>
        <Pie data={data} options={options} />
    </>)
}