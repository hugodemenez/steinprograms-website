"use client";

import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';

const Chart = ({ data }: { data: any }) => {
    ChartJS.register(...registerables);
    const chartContainerRef = useRef<HTMLCanvasElement>(null);
    const chartRef = useRef<any>(null);
    // Define handleResize using useCallback
    const handleResize = useCallback(() => {
        if (chartContainerRef.current && chartRef.current) {
           chartRef.current!.resize(); 
        }
    }, []);
    useEffect(() => {
        chartRef.current?.destroy()
        chartRef.current = new ChartJS(chartContainerRef.current!, {
            type: 'line',
            data: {
                labels: ['Welcome', '', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Easter Egg',
                    data: [0, 3, 5, 2, 3, 6],
                    borderWidth: 1,
                    pointHoverRadius: 10,
                    pointHitRadius: 20,
                    borderColor: '#3FD028',
                    fill: true,
                    pointBackgroundColor: '#3FD028',
                    backgroundColor: (context) =>{
                        const bgColor = [
                            'rgba(63, 208, 40, 0.5)',
                            'rgba(63, 208, 40, 0)',
                        ]
                        const gradientBg = context.chart.ctx.createLinearGradient(0, 0, 0, context.chart.height);
                        gradientBg.addColorStop(0, bgColor[0]);
                        gradientBg.addColorStop(0.8, bgColor[1]);
                        return gradientBg;
                    }
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        display: false
                    },
                    x: {
                        beginAtZero: true,
                        display: false
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        })
        handleResize();

        window.addEventListener('resize', handleResize);
        return () =>{
            window.removeEventListener('resize', handleResize);
            chartRef.current?.destroy();
        }
    }, [data]);

    return (
        <div className='-translate-y-4 '>
        <canvas ref={chartContainerRef} id='chart' />
        </div>
    )
};

export default Chart;
