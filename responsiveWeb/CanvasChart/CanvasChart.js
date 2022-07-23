// window.chart = require('chart.js');
const canvas = document.querySelector("#canvas");
// 1. 캔버스를 지정 
const ctx = canvas.getContext("2d")
// 2. 캔버스의 컨텍스트 지정 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.fillStyle = 'gray'
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.strokeRect(10, 10, 100, 50)


ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect (10, 10, 50, 50);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect (30, 30, 50, 50);
ctx.clearRect( 20, 20, 80, 30)


canvas.onclick = function (event) {
	const x = event.clientX - ctx.canvas.offsetLeft
	const y = event.clientY - ctx.canvas.offsetTop
		// 구한 좌표를 이용해서 사각형을 그리는 코드를 작성해보겠습니다.

	ctx.fillRect(x - 15, y - 15, 30, 30);
		// 클릭할 때마다 30픽셀*30픽셀 크기의 사각형을 그리도록 하려고 합니다.
		// 이 때, x, y를 그대로 전달하면 해당 좌표부터 사각형이 시작되어 어색한 느낌을 줍니다.
		// 클릭한 위치를 사각형의 정중앙이 되게 하려면 사각형크기/2 한 만큼 좌표에서 빼주면 됩니다.
		// 따라서 x - 15, y - 15 를 전달합니다.
}

// console.log(barChart)