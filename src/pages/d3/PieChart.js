import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';




function PieChart() {

    const [data, setData] = useState({
        title: 515,
        budget: 'Rent'
    });

    const svgRef = useRef();


    useEffect(() => {
        const fetch = async () => {
            try {
              
              await axios.get('http://localhost:3000/budget').then((res) => {
            
                  console.log(res.data.myBudget)
                  setData(res.data.myBudget)
              
              });
              
            } catch(err) {
              console.log(err);
            }
          };
          fetch();
          createChart();
          

    }, [data]);


    function createChart() {
        const w = 960;
        const h = 450;
        const radius = h/2;

        const svg = d3.select(svgRef.current)
                      .attr('width', w)
                      .attr('height', h)
                      .style('overflow', 'visible')
                      .style('margin-top', '400px')

        const formattedData = d3.pie().value(d => d?.budget)(data);
        const arcGen = d3.arc().innerRadius(0).outerRadius(radius);
        const color = d3.scaleOrdinal(0).range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        svg.selectAll()
            .data(formattedData)
            .join('path')
            .attr('d', arcGen)
            .attr('fill', d => color(d.value))
            .style('opacity', 0.7);

        svg.selectAll()
            .data(formattedData)
            .join('text')
            .text(d => d.data.title)
            .attr('transform', d => `translate(${arcGen.centroid(d)})`)
            .style('text-anchor', 'middle')
    }



    return (
     <svg ref={svgRef}></svg>
    );
  }
  
  export default PieChart;
  