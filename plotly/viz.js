fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    sortByCountryPopulation(data);

    const top30Countries = data.slice(-30); 

    const countries = top30Countries.map(country => country.country);
    const populations = top30Countries.map(country => country.population);

    const trace = {
        x: countries,
        y: populations,
        type: 'bar',
        marker: {
            color: '#65E93A'
        }
    };

    const layout = {
        title: 'Top 30 des pays avec la plus grande population',
        xaxis: {
            title: 'Pays'
        },
        yaxis: {
            title: 'Population'
        }
    };

    Plotly.newPlot('data-viz', [trace], layout);
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}