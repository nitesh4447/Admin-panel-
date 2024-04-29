const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1 May','15 May','30 May','2 April'],
      datasets: [{
        label: 'Date wised Data',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


   const xtc = document.getElementById('myChart1');

  new Chart(xtc, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const rtx= document.getElementById('myChart12');

  new Chart(rtx, {
    type: 'line',
    data: {
      labels: ['1 May','15 May','30 May','2 April'],
      datasets: [{
        label: 'Date wised Data',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const gtx= document.getElementById('doughnut');

  new Chart(gtx, {
    type: 'doughnut',
    data: {
      labels: ['1 May','15 May','30 May','2 April'],
      datasets: [{
        label: 'Date wised Data',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const tx= document.getElementById('doughnut1');

  new Chart(tx, {
    type: 'line',
    data: {
      labels: ['1 May','15 May','30 May','2 April'],
      datasets: [{
        label: 'Date wised Data',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const fun = document.getElementById('myChartlast1');

  new Chart(fun, {
    type: 'bar',
    data: {
      labels: ['1 May','15 May','30 May','2 April'],
      datasets: [{
        label: 'Date wised Data',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const fun1 = document.getElementById('myChartlast2');

  new Chart(fun1, {
    type: 'line',
    data: {
      labels: ['1 May','15 May','30 May','2 April'],
      datasets: [{
        label: 'Date wised Data',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

