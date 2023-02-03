import * as d3 from 'd3'

let data;

const WIDTH = 400
const HEIGHT = 400
const PADDING = 20

export function initChart(chartContainer) {
    data = JSON.parse(chartContainer.dataset['tags'])

    if (data.tags.length > 0) {
        createChart(data)
    }
}

function createChart(data) {
    const tag = data.tags[0]
    const chartData = tag.values.reduce((obj, item) => (obj[item.tag] = item.count, obj), {})
    const radius = Math.min(WIDTH, HEIGHT) / 2 - PADDING

    const svg = d3.select('.community-tag-chart')
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

    svg.selectAll('slices')
        .data(pieData)
        .join('text')
        .text((d) => d.data[0])
        .attr('transform', (d) => `translate(${arcGenerator.centroid(d)})`)
        .style('text-anchor', 'middle')
        .style('font-size', 17)
}
