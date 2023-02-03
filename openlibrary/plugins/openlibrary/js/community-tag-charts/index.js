import * as d3 from 'd3'


const WIDTH = 500
const HEIGHT = 500
const PADDING = 20

const margin = {top: 20, right: 30, bottom: 40, left: 90}

let chartElements = []
let chartLabels = []
let visibleChartIndex = 0
let header

export function initChart(chartContainer) {
    const data = JSON.parse(chartContainer.dataset['tags'])
    const selectors = JSON.parse(chartContainer.dataset['selectors'])
    const chartType = chartContainer.dataset['chartType']

    header = document.querySelector(selectors.header)
    if (data.tags.length > 0) {
        updateHeader(data.tags[0].label)
        renderCharts(data, selectors.chartView, chartType)
        if (data.tags.length > 1) {
            chartLabels = data.tags.map(tag => tag.label)
            const prevButton = document.querySelector(selectors.prevButton)
            const nextButton = document.querySelector(selectors.nextButton)

            initNavButtons(prevButton, nextButton)
        }
    }
}

function updateHeader(text) {
    header.textContent = text
}

function renderCharts(data, selector, chartType) {
    for (const tag of data.tags) {
        if (chartType === 'barplot') {
            createBarPlot(tag, selector)
        } else {
            createPieChart(tag, selector)
        }
    }
    chartElements = document.querySelector(selector).children
    chartElements[0].classList.remove('hidden')
}

function createBarPlot(tag, selector) {
    const width = WIDTH - margin.left - margin.right
    const height = HEIGHT - margin.top - margin.bottom

    const svg = d3.select(selector)
        .append('div')
        .attr('class', `${selector.substring(1)}__chart hidden`)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const data = tag.values
    const counts = data.map((d) => d.count)
    const upperLimit = Math.max(...counts)

    // Add X axis
    const x = d3.scaleLinear()
        .domain([0, upperLimit])
        .range([ 0, width]);
    svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end');

    // Y axis
    const y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(d => d.tag))
        .padding(.1);
    svg.append('g')
        .call(d3.axisLeft(y))

    //Bars
    svg.selectAll('myRect')
        .data(data)
        .join('rect')
        .attr('x', x(0) )
        .attr('y', d => y(d.tag))
        .attr('width', d => x(d.count))
        .attr('height', y.bandwidth())
        .attr('fill', '#69b3a2')
}

function createPieChart(tag, selector) {
    const chartData = tag.values.reduce((obj, item) => (obj[item.tag] = item.count, obj), {})
    const radius = Math.min(WIDTH, HEIGHT) / 2 - PADDING

    const svg = d3.select(selector)
        .append('div')
        .attr('class', `${selector.substring(1)}__chart hidden`)
        .append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT)
        .append('g')
        .attr('transform', `translate(${WIDTH / 2}, ${HEIGHT / 2})`)

    const color = d3.scaleOrdinal()
        .range(d3.schemeSet2)

    const pie = d3.pie()
        .value((d) => d[1])
    const pieData = pie(Object.entries(chartData))

    const arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(radius)

    svg.selectAll('path')
        .data(pieData)
        .enter()
        .append('path')
        .attr('d', arcGenerator)
        .attr('fill', (d) => color(d.data[0]))
        .attr('stroke', 'black')
        .style('stroke-width', '2px')
        .style('opacity', 0.7)
        .append('title')
        .text((d) => `Tagged "${d.data[0]}" by ${d.data[1]} ${d.data[1] === 1 ? 'patron' : 'patrons'}`)

    svg.selectAll('slices')
        .data(pieData)
        .join('text')
        .text((d) => d.data[0])
        .attr('transform', (d) => `translate(${arcGenerator.centroid(d)})`)
        .style('text-anchor', 'middle')
        .style('font-size', 17)
}

function initNavButtons(prevButton, nextButton) {
    let chartIndex = 0

    prevButton.addEventListener('click', () => {
        --chartIndex;
        if (chartIndex < 0) {
            chartIndex = chartElements.length - 1
        }
        updateView(chartIndex);
    })
    nextButton.addEventListener('click', () => {
        ++chartIndex;
        chartIndex = chartIndex % chartElements.length
        updateView(chartIndex)
    })
}

function updateView(newIndex) {
    chartElements[visibleChartIndex].classList.add('hidden')

    chartElements[newIndex].classList.remove('hidden')
    updateHeader(chartLabels[newIndex])

    visibleChartIndex = newIndex
}
