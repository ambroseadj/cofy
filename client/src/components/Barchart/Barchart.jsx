import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import './Barchart.css';

const BarChart = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);
  const margin = { top: 100, right: 100, bottom: 100, left: 100 };
  let width = 0;
  let height = 0;

  useEffect(() => {
    const fetchData = () => {
      const mockData = [
        { country: 'USA', intensity: 6 },
        { country: 'Russia', intensity: 12 },
        { country: 'Nigeria', intensity: 16 },
        { country: 'Saudi Arabia', intensity: 8 },
      ];
      setData(mockData);
    };

    fetchData();
  }, []);

  const createBarChart = () => {
    if (!chartRef.current) {
      return;
    }

    const container = d3.select(chartRef.current);
    const containerWidth = container.node().getBoundingClientRect().width;
    width = containerWidth - margin.left+100 ;
    height = width * 0.6;

    container.select('svg').attr('width', containerWidth).attr('height', height);

    const svg = container.select('svg');

    svg.style('border', '2px solid #7367f0');
    svg.style('padding', '0px');
    svg.style('margin-left', '2px');
    svg.style('border-radius', '30px');
    svg.style('margin-top', '50px');
    svg.style('margin-right', '10px');

    const xScale = d3.scaleBand()
      .domain(data.map((d) => d.country))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.intensity)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg.selectAll('rect').remove();

    const defs = svg.append('defs');

    const gradient = defs.append('linearGradient')
      .attr('id', 'barGradient')
      .attr('x1', '0%')
      .attr('x2', '0%')
      .attr('y1', '0%')
      .attr('y2', '100%');

    gradient.append('stop')
      .attr('offset', '0%')
      .style('stop-color', 'lightblue');

    gradient.append('stop')
      .attr('offset', '100%')
      .style('stop-color', 'blue');

    const bars = svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.country))
      .attr('y', height - margin.bottom)
      .attr('width', xScale.bandwidth())
      .attr('height', 0)
      .style('fill', 'url(#barGradient)') 
      .transition()
      .duration(1500)
      .attr('y', (d) => yScale(d.intensity))
      .attr('height', (d) => height - margin.bottom - yScale(d.intensity));

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis);

    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', height - margin.bottom + 40)
      .attr('text-anchor', 'middle')
      .text('Country')
      .attr('fill', 'black');

    svg
      .append('text')
      .attr('x', -height / 2)
      .attr('y', margin.left / 1.5)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Intensity')
      .attr('fill', 'black');


  };

  useEffect(() => {
    createBarChart();
    window.addEventListener('resize', createBarChart);
    return () => {
      window.removeEventListener('resize', createBarChart);
    };
  }, [data]);

  return (
    <div className="barchart-container" ref={chartRef}>
      <svg width={width} height={height}></svg>
    </div>
  );
};

export default BarChart;
