var myChart = echarts.init(document.getElementById('Libra'));

option = {
	backgroundColor: 'transparent',
	// backgroundColor: '#000000',
	title: {
		text: '天秤座',
		textStyle: {
			color: '#fff'
		}
	},
	grid: {
		width: '100%',
		height: '90%'
	},
	xAxis: {
		show: false,
	},
	yAxis: {
		show: false,
	},
	color: ['#000000', '#FFFFFF'],
	series: [{
			type: 'line',
			itemStyle: {
				normal: {
					color: '#7af5e9',
					opacity: 1,
					borderWidth: 3,
					shadowBlur: 8,
					shadowColor: '#fff'
				}
			},
			lineStyle: {
				normal: {
					opacity: 0.5,
				}
			},
			label: {
				emphasis: {
					show: true,
					offset: [24, -5],
					formatter: '{b}'
				}
			},
			data: [{
				name: 'Hi',
				value: [2-1, 3+1]
			}, {
				name: 'Hi',
				value: [2.8-1, 3.2+1]
			}, {
				name: 'Hi',
				value: [3.5-1, 4.8+1]
			}, {
				name: 'Hi',
				value: [4.6-1, 5.2+1]
			}, {
				name: 'Hi',
				value: [5-1, 4+1]
			}, {
				name: 'Hi',
				value: [4-1, 2.3+1]
			}, {
				name: 'Hi',
				value: [3.5-1, 2+1]
			}]
		}, {
			type: 'lines',
			coordinateSystem: 'cartesian2d',
			zlevel: 2,
			effect: {
				show: true,
				constantSpeed: 200,
				trailLength: 0.02,
				symbolSize: 2,
			},
			lineStyle: {
				normal: {
					color: '#fff',
					opacity: 0,
					curveness: 0
				}
			},
			data: [{
				coords: [
					[1, 1],
					[7, 4]
				]
			}, {
				coords: [
					[3, 7],
					[2, 3]
				]
			}]
		}, {
			type: 'scatter',
			symbolSize: 2,
			hoverAnimation: false,
			itemStyle: {
				normal: {
					color: '#fff',
					opacity: 1,
					borderWidth: 1,
					shadowBlur: 10,
					shadowColor: '#fff'
				}
			},
			data: [
				[1.3, 6.8],
				[2.5, 2.7],
				[0.8, 1.9],
				[4.2, 1.2],
				[0.5, 3.6],
				[6.9, 1],
				[3.5, 6.2],
				[3.9, 0.2],
				[2.2, 5.9],
				[3.7, 1.1],
				[5.2, 6.4]
			]
		}
	]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
