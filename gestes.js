// Menu boutton toggle
var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener('click', () => {
  toggle_menu.classList.toggle('active') ;
  menu.classList.toggle('responsive') ;
})


// Slide Toggle Down

var quoteContainer = document.querySelectorAll(".quote-container");
var down = document.getElementsByClassName("arrowIcon");
var appart = document.querySelectorAll(".appart");

let fleche = quoteContainer.length;

function enleverActiveImages() {
  for(let i = 0; i < fleche; i++) {
    quoteContainer[i].addEventListener('click', () => {
      down[i].classList.toggle("rotate");
      appart[i].classList.toggle("apparition");
    })
  }
}

enleverActiveImages();


// setup 
const data = {
  labels: ['Chauffage', 'Eau chaude', 'Froid', 'Lavage', 'Autres', 'Cuisson'],
  datasets: [{
    label: 'Weekly Sales',
    data: [50, 17, 14, 8, 6, 5],
    backgroundColor: [
      'rgba(180, 0, 0, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderColor: [
      'rgba(180, 0, 0, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    hoverOffset: 10,
    borderWidth: 1,
    cutout: '70%',
    rotation: 45
  }]
};

// hoverLabel
const hoverLabel = {
  id: 'hoverLabel',
  afterDraw(chart){
    const {ctx, chartArea: {top, width, height}} = chart;
    ctx.save();

    if(chart._active.length > 0) {
      const textLabel = chart.config.data.labels[chart._active[0].index];
      const numberLabel = chart.config.data.datasets[chart._active[0].datasetIndex].data[chart._active[0].index];
      const color = chart.config.data.datasets[chart._active[0].datasetIndex].borderColor[chart._active[0].index];

      ctx.font = 'bolder 16px Arial';
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.fillText(`${textLabel}: ${numberLabel}%`, width / 2, height / 2 + top);
    }
    ctx.restore();
  }
}

// config 
const config = {
  type: 'doughnut',
  data,
  options: {
    plugins: {
      title: {
          display: true,
          text: 'Consommation en électricité des ménages francais',
          font: {
            size: 20
          },
          padding: {
            bottom: 25
          }
      },
      legend: {
        display: true,
        position: 'bottom'
      }
  }
  },
  plugins: [hoverLabel]
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
