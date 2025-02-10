//[Dashboard Javascript]

//Project:	Law Firm - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function() {

    'use strict';

    var options = {
        series: [{
                name: "Ongoing",
                data: [45, 52, 38, 24, 33, 26, 41, 20, 31, 45, 25, 20]
            },
            {
                name: "Settled",
                data: [35, 41, 62, 42, 25, 48, 29, 37, 36, 40, 32, 35]
            }
        ],
        chart: {
            height: 168,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [2, 2],
            curve: 'smooth',
            dashArray: [0, 4]
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            tooltipHoverFormatter: function(val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            }
        },
        yaxis: {
            labels: {
                show: false,
            }
        },
        colors: ['#3596f7', '#42b53f'],
        tooltip: {
            y: [{
                    title: {
                        formatter: function(val) {
                            return val
                        }
                    }
                },
                {
                    title: {
                        formatter: function(val) {
                            return val
                        }
                    }
                },
            ]
        },
        grid: {
            show: false,
            padding: {
                right: 6,
                left: -6
            },
        }
    };

    var chart = new ApexCharts(document.querySelector("#totalcases"), options);
    chart.render();



    var options = {
        series: [{
            name: "Settled",
            data: [25, 15, 22, 18, 28, 25, 35, 40, 25, 22, 28, 30]
        }],
        chart: {
            height: 168,
            type: 'area',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [2],
            curve: 'smooth',
            dashArray: [0]
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            tooltipHoverFormatter: function(val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            }
        },
        yaxis: {
            labels: {
                show: false,
            }
        },
        colors: ['#42b53f'],
        tooltip: {
            y: [{
                title: {
                    formatter: function(val) {
                        return val
                    }
                }
            }, ]
        },
        grid: {
            show: false,
            padding: {
                right: 6,
                left: -10,
                bottom: -20,
            },
        }
    };

    var chart = new ApexCharts(document.querySelector("#settledcases"), options);
    chart.render();


    var options = {
        series: [{
            name: 'Won',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'Lost',
            data: [13, 12, 13, 12, 13, 13, 12]
        }, {
            name: 'Decillned',
            data: [12, 17, 11, 9, 15, 11, 20]
        }],
        chart: {
            type: 'bar',
            height: 406,
            stacked: true,
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#42b53f', '#ee3158', '#ffa800'],
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ["Real Estate", "M&A", "Corporate", "Employment", "Envronmental", "Litigation", "IP"],
            labels: {
                formatter: function(val) {
                    return val
                },
            },
        },
        yaxis: {
            title: {
                text: undefined
            },
            labels: {
                style: {
                    colors: [],
                    fontSize: '16px',
                    fontFamily: 'IBM Plex Sans , sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'right',
            horizontalAlign: 'right',
        },
        responsive: [{
            breakpoint: 1025,
            options: {
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                },
            },
        }],
    };

    var chart = new ApexCharts(document.querySelector("#opportunityoutcome"), options);
    chart.render();



    var options = {
        series: [{
            name: 'Won',
            data: [4, 8, 12, 10, 11, 10, 8]
        }, {
            name: 'Lost',
            data: [8, 2, 9, 8, 10, 5, 2]
        }],
        chart: {
            type: 'bar',
            height: 300,
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#1e42a0', '#ee3158'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ["Campaign", "Event", "Referral", "Seminar", "Sponsorship", "Tickets"],
            labels: {
                formatter: function(val) {
                    return val
                },
            },
        },
        yaxis: {
            title: {
                text: undefined
            },

            labels: {
                style: {
                    colors: [],
                    fontSize: '16px',
                    fontFamily: 'IBM Plex Sans , sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: false,
        }
    };

    var chart = new ApexCharts(document.querySelector("#opportunityoutcome2"), options);
    chart.render();


    var options = {
        series: [{
            name: "Profit",
            data: [0, 40, 110, 70, 100, 60, 130, 55, 140, 125]
        }],
        chart: {
            foreColor: "#bac0c7",
            height: 300,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        colors: ['#1e42a0'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 5,
            dashArray: 0,
        },
        markers: {
            size: 5,
            colors: '#ffffff',
            strokeColors: '#1e42a0',
            strokeWidth: 3,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 5,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            hover: {
                size: undefined,
                sizeOffset: 3
            }
        },
        grid: {
            borderColor: '#f7f7f7',
            row: {
                colors: ['transparent'], // takes an array which will be repeated on columns
                opacity: 0
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            labels: {
                show: true,
            },
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: true
            },
            tooltip: {
                enabled: true,
            },
        },
        yaxis: {
            labels: {
                show: true,
                formatter: function(val) {
                    return val + "K";
                }
            }

        },
    };
    var chart = new ApexCharts(document.querySelector("#charts_widget_43_chart"), options);
    chart.render();



    var options = {
        series: [{
            name: 'series1',
            data: [178, 223, 195, 201, 143, 189, 156, 155, 118, 167, 159]
        }],
        chart: {
            height: 200,
            width: 600,
            type: 'area',
            toolbar: {
                show: false,
            },
            offsetY: 15,
            offsetX: -50,
        },
        colors: ['#ee3158'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
        },

        markers: {
            size: 0,
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            }

        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function(val) {
                    return val;
                }
            }

        },
        grid: {
            show: true,
            borderColor: '#39DA8A',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false,
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            row: {
                colors: undefined,
                opacity: 0.5,
            },
            column: {
                colors: undefined,
                opacity: 0.1
            },
        }
    };

    var chart = new ApexCharts(document.querySelector("#statisticschart5"), options);
    chart.render();


}); // End of use strict