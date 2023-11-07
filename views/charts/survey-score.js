import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { factor: 'sleep', score: 1 },
    { factor: 'headaches', score: 2 },
    { factor: 'performance', score: 3 },
    { factor: 'workload', score: 5 },
    { factor: 'hobbies', score: 4 },
    { factor: 'stress', score: 3 },
    { factor: 'therapy', score: 4 },
    { factor: 'outdoors', score: 2 },
  ];

  new Chart(
    document.getElementById('survey-score'),
    {
      type: 'doughnut',
      data: {
        labels: data.map(row => row.factor),
        datasets: [
          {
            label: 'Stress Factor by Category',
            data: data.map(row => row.score)
          }
        ]
      }
    }
  );
})();

(async function() {
  const data = {
    labels: [
      'sleep',
      'headaches',
      'performance',
      'workload',
      'hobbies',
      'stress',
      'therapy',
      'outdoors'
    ],
    datasets: [{
      label: 'Stress Factors by Type',
      data: [1, 2, 3, 5, 4, 3, 4, 2],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4
    }]
  };

  new Chart(
    document.getElementById('survey-doughnut'),
    {
      type: 'doughnut',
      data: data,
    }
  );
})();
