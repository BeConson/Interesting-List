
var app = new Vue({
	el: "#app",
	data: {
		open:"Open daily sky",		
		nowDate: "",    
		nowTime: "",   
		conson:"",
		title: "",
		copyright: "",
		date: "",
		explanation: "",
		image: "",
		message:"声明：数据来源于NASA提供的API,每个IP请求数有限,请不要反复请求,否则将会限制访问。因直接链接NASA服务器,所以资源加载可能会慢一点,请耐心等待哦~",
		country:"自动更新时间以华盛顿为准：",
		myname:"Conson",
		HowCreate:"Use NASA Open API + Semantic UI + Vue",
		createTime:"Create in 2020.4.18"
	},
	methods: {
		DailySky: async function() {
			let httpUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
			let resultAwait = await fetch(httpUrl)
			let result = await resultAwait.json()
						// console.log(result)
						this.title = result.title
						this.copyright = result.copyright;
						this.date = result.date
						this.explanation = result.explanation
						this.image = result.hdurl
					},
					currentTime() {
						setInterval(this.getDate, 500);
					},
					getDate: function() {
						var t = new Date().getTime();
						t = t - 12 * 3600 * 1000;
						t = new Date(t);

						var _this = this;
						let yy = new Date().getFullYear();
						let mm = new Date().getMonth() + 1;
						let dd = new Date().getDate() ;
						let week = new Date().getDay();
						let hh = new Date().getHours() - 12;
						let ss = new Date().getSeconds();
						let mf =
						new Date().getMinutes() < 10
						? "0" + new Date().getMinutes()
						: new Date().getMinutes();	
						_this.conson = t;		             
						_this.nowTime = hh + ":" + mf + ":" + ss;
						_this.nowDate = yy + "-" + mm + "-" + dd;
					}
				},
				mounted() {
					this.currentTime();
				},
				    // 销毁定时器
				    beforeDestroy: function() {
				    	if (this.getDate) {
				    		console.log("销毁定时器")
				            clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
				        }
				    }
				})
