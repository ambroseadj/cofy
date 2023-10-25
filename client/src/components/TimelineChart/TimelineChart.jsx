import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';


const TimelineChart = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);
  const margin = { top: 30, right: 0, bottom: 50, left: 100 };
  let width = 0;
  let height = 0;

  useEffect(() => {
    const fetchData = () => {
      const mockData = [
        {
          title: 'Insight 1',
          published: 'January, 09 2017 00:00:00',
          relevance: 2,
        },
        {
          title: 'Insight 2',
          published: 'January, 20 2017 03:51:25',
          relevance: 3,
        },
     
      ];
      setData(mockData);
    };

    fetchData();
  }, []);

  const createTimelineChart = () => {
    if (!chartRef.current) {
      return;
    }
  
    const container = d3.select(chartRef.current);
    const containerWidth = container.node().getBoundingClientRect().width;
    width = containerWidth - margin.left - margin.right;
    height = 300;
  
    container.select('svg').attr('width', containerWidth).attr('height', height);
  
    const svg = container.select('svg');
  
    const parseTime = d3.timeParse('%B, %d %Y %H:%M:%S');
    data.forEach((d) => {
      d.published = parseTime(d.published);
    });
  
    const xScale = d3
      .scaleTime()
      .domain([d3.min(data, (d) => d.published), d3.max(data, (d) => d.published)])
      .range([margin.left, width - margin.right]);
  
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.relevance)])
      .nice()
      .range([height - margin.bottom, margin.top]);
  
    svg.selectAll('*').remove();
  
    svg.style('border', '2px solid #7367f0');
    svg.style('padding', '0px');
    svg.style('margin-left', '2px');
    svg.style('border-radius', '30px');
    svg.style('margin-top', '50px');
    svg.style('margin-right', '10px')
  
    




    data.forEach((d, i) => {
      if (i < data.length - 1) {
        const x1 = xScale(d.published);
        const y1 = yScale(d.relevance);
        const x2 = xScale(data[i + 1].published);
        const y2 = yScale(data[i + 1].relevance);
  
        svg
          .append('line')
          .attr('x1', x1)
          .attr('y1', y1)
          .attr('x2', x2)
          .attr('y2', y2)
          .style('stroke', 'steelblue')
          .style('stroke-width', 2)
          .transition()
          .duration(1500);
      }
    });
  
    const xAxis = d3.axisBottom(xScale).ticks(5);
    const yAxis = d3.axisLeft(yScale).ticks(5);
  
    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis);
  
    svg
      .append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis);
  
    svg
      .append('text')
      .attr('x', width / 1.8)
      .attr('y', height - margin.bottom + 35)
      .attr('text-anchor', 'middle')
      .text('Publication Date');
  
    svg
      .append('text')
      .attr('x', -height / 2)
      .attr('y', margin.left / 1.5)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Relevance');
  

  };
  

  useEffect(() => {
    createTimelineChart();
    window.addEventListener('resize', createTimelineChart);
    return () => {
      window.removeEventListener('resize', createTimelineChart);
    };
  }, [data]);

  return <div className="timelinechart-container" ref={chartRef}>

<svg width={width} height={height}></svg>
  </div>;
};

export default TimelineChart;
