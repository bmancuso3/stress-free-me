import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { date: '10/8/23', count: 8.4 },
    { date: '10/12/23', count: 5.8 },
    { date: '10/15/23', count: 4.5 },
    { date: '10/21/23', count: 3.6 },
    { date: '10/25/23', count: 4.8 },
    { date: '10/31/23', count: 5.7 },
    { date: '11/1/23', count: 7.7 },
    { date: '11/4/23', count: 7 },
  ];


  new Chart(
    document.getElementById('stress-journey'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.date),
        datasets: [
          {
            label: 'Stress Journey Score',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();