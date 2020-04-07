const url = "https://api.kawalcorona.com/indonesia/"

fetch(url)
    .then(response => response.json())
    .then(data =>{
        api(data)
        charts(data)
    })
    .catch((error) => {
        console.log(error);
    })

function api(data){
    let object = {
        'infects':parseInt(data[0].positif.replace(/,/g,'')),
        'deaths':parseInt(data[0].meninggal.replace(/,/g,'')),
        'cureds':parseInt(data[0].sembuh.replace(/,/g,'')),
    }
    document.getElementById('cured').innerHTML = `<span class='number'>${object.cureds}</span>`
    document.getElementById('infect').innerHTML = `<span class='number'>${object.infects}</span>`
    document.getElementById('death').innerHTML = `<span class='number'>${object.deaths}</span>`
    document.getElementById('jumlah').innerHTML = `<span class='number'>${object.cureds + object.deaths + object.infects}</span>`
}

function charts(data){
    let object = {
        'infects':parseInt(data[0].positif.replace(/,/g,'')),
        'deaths':parseInt(data[0].meninggal.replace(/,/g,'')),
        'cureds':parseInt(data[0].sembuh.replace(/,/g,'')),
    }
    var ctx = document.getElementById('chart').getContext("2d");
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels:['Sembuh','Terinfeksi','Meninggal'],
            datasets: [{
                data:[object.cureds,object.infects,object.deaths],
                backgroundColor: [
                    'rgb(46, 204, 113)',
                    'rgb(241, 196, 15)',
                    'rgb(231, 76, 60)'
                ],
            }],
        },
        options: {
            maintainAspectRatio: false,
            responsive:true,
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontSize: 20,
                }
            },
            title: {
                display: true
            },
            scales: {
                yAxes: [{
                    gridLines: {
                    display: false
                    },
                    ticks: {display:false}
                }]
            }
        }
    });
}

let fb = document.querySelector('.facebook')
let wa = document.querySelector('.whatsapp')
fb.addEventListener('click',event =>{
    var win = window.open('https://www.facebook.com/vio.g.art', '_blank');
    win.focus();
})
wa.addEventListener('click',event =>{
    var win = window.open('https://api.whatsapp.com/send?phone=+6288976092732', '_blank');
    win.focus();
})