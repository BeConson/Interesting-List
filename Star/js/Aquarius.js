var myChart = echarts.init(document.getElementById('Aquarius'));

option = {
	backgroundColor: 'transparent',
	// backgroundColor: '#000000',
	title: {
		text: '水瓶座',
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
				value: [4 - 1.5, 7 - 0]
			}, {
				name: 'Hi',
				value: [3.6 - 1.5, 5.8]

			}, {
				name: 'Hi',
				value: [2.8 - 1.5, 4.8]
			}, {
				name: 'Hi',
				value: [4.1 - 1.5, 4.5]
			}, {
				name: 'Hi',
				value: [4.6 - 1.5, 5]
			}, {
				name: 'Hi',
				value: [4.1 - 1.5, 4.5]
			}, {
				name: 'Hi',
				value: [2.8 - 1.5, 4.8]
			}, {
				name: 'Hi',
				value: [3.1 - 1.5, 4.2]
			}, {
				name: 'Hi',
				value: [2.9 - 1.5, 3.6]
			}, {
				name: 'Hi',
				value: [4.2 - 1.5, 2.6]
			}, {
				name: 'Hi',
				value: [4.3 - 1.5, 3.2]
			}, {
				name: 'Hi',
				value: [4.9 - 1.5, 3.3]
			}, {
				name: 'Hi',
				value: [5.9 - 1.5, 2.8]
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
					[0, 6],
					[7, 3]
				]
			}, {
				coords: [
					[4, 3],
					[1, 1]
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
