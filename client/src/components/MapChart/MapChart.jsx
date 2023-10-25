import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';


const MapChart = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);
  const margin = { top: 50, right: 10, bottom: 50, left: 100 };
  let width = 0;
  let height = 0;

  useEffect(() => {
    const fetchData = () => {
      const mockData = [
        { impact: 3, likelihood: 4 },
        { impact: 3, likelihood: 2 },
        { impact: 4, likelihood: 3 },
        { impact: 6, likelihood: 5 },
        { impact: 3, likelihood: 5 },
        { impact: 4, likelihood: 2 },
      ];
      setData(mockData);
    };

    fetchData();
  }, []);

  const createScatterPlot = () => {
    if (!chartRef.current) {
      return;
    }

    const container = d3.select(chartRef.current);
    const containerWidth = container.node().getBoundingClientRect().width;
    width = containerWidth - margin.left - margin.right;
    height = width * 0.5;

    
    container.select('svg').attr('width', containerWidth).attr('height', height);

    const svg = container.select('svg');

    svg.selectAll('*').remove();

    svg.style('border', '2px solid #7367f0');
    svg.style('padding', '0px');
    svg.style('margin-left', '2px');
    svg.style('border-radius', '30px');
    svg.style('margin-top', '50px');
    svg.style('margin-right', '10px');
 

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.impact)])
      .nice()
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.likelihood)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const circles = svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .transition()
      .duration(1500)
      .attr('cx', (d) => xScale(d.impact))
      .attr('cy', (d) => yScale(d.likelihood))
      .attr('r', 6)
      .style('fill', 'steelblue');

    const xAxis = d3.axisBottom(xScale).ticks(5);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis);

    svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis);

   
    svg
      .append('text')
      .attr('x', width / 1.8)
      .attr('y', height - margin.bottom + 35)
      .attr('text-anchor', 'middle')
      .text('Impact');

    svg
      .append('text')
      .attr('x', -height / 2)
      .attr('y', margin.left / 1.5)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Likelihood');

   
  };

  useEffect(() => {
    createScatterPlot();
    window.addEventListener('resize', createScatterPlot);
    return () => {
      window.removeEventListener('resize', createScatterPlot);
    };
  }, [data]);

  return (
    <div className="scatterplot-container" ref={chartRef}>
      <svg width={width} height={height}></svg>
    </div>
  );
};

export default MapChart;
