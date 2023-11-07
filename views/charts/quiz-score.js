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
    document.getElementById('quiz-score'),
    {
      type: 'bar',
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
