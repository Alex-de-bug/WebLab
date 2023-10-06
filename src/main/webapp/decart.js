window.onload = function () {
    drawG();
}
const canvas = document.getElementById("coordinate-system");
const ctx = canvas.getContext("2d");

canvas.addEventListener('click', function (event) {
    var mouseX = (event.clientX - canvas.getBoundingClientRect().left-250)/40;
    var mouseY = -(event.clientY - canvas.getBoundingClientRect().top-250)/40;


    var mouseXe = event.clientX - canvas.getBoundingClientRect().left;
    var mouseYe = event.clientY - canvas.getBoundingClientRect().top;

    // Добавляем новую точку в массив
    points.push({ x: mouseXe, y: mouseYe });

    // Рисуем новую точку
    drawPointe(mouseXe, mouseYe, mouseX, mouseY);

    alert(mouseX+" "+mouseY);
});

function drawG(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = 500;
    canvas.height = 500;

    const radius = 200;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const pointRadius = 3;

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.fillStyle = "red";

    // x
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.stroke();

    // x arrow
    ctx.beginPath();
    ctx.moveTo(canvas.width - 8, centerY - 5);
    ctx.lineTo(canvas.width, centerY);
    ctx.lineTo(canvas.width - 8, centerY + 5);
    ctx.fill();

    // sign x axis
    ctx.fillText("X", canvas.width - 10, centerY + 20);


    // y axis
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.stroke();

    // y arrow
    ctx.beginPath();
    ctx.moveTo(centerX - 5, 10);
    ctx.lineTo(centerX, 0);
    ctx.lineTo(centerX + 5, 10);
    ctx.fill();

    // sign y axis
    ctx.fillText("Y", centerX - 20, 20);

    ctx.fillStyle = 'blue';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 3/2*Math.PI, 4/2*Math.PI); // Изменение углов
    ctx.fillStyle = "#7300ff";
    ctx.fill();
    ctx.stroke();

    // triangle
    ctx.beginPath();
    ctx.moveTo(centerX + radius, centerY);
    ctx.lineTo(centerX , centerY  +radius);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = "#fffb00";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - radius/2);
    ctx.lineTo(centerX - radius, centerY - radius/2);
    ctx.lineTo(centerX - radius, centerY);
    ctx.closePath();
    ctx.fillStyle = "#3d9070";
    ctx.fill();
    ctx.stroke();

    // ox
    ctx.beginPath();
    ctx.arc(centerX + radius, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX + 4/5*radius, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX + 3/5*radius, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX + 2/5*radius, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX + 1/5*radius, centerY, pointRadius, 0, 2 * Math.PI);

    ctx.arc(centerX - radius, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX - 4/5*radius, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX - 3/5*radius, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX - 2/5*radius, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX - 1/5*radius, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.fillStyle = '#000000';
    ctx.fill();

    ctx.fillText('5', centerX + radius + pointRadius, centerY + 20);
    ctx.fillText('4', centerX + (4/5) * radius + pointRadius, centerY + 20);
    ctx.fillText('3', centerX + (3/5) * radius + pointRadius, centerY + 20);
    ctx.fillText('2', centerX + (2/5) * radius + pointRadius, centerY + 20);
    ctx.fillText('1', centerX + (1/5) * radius + pointRadius, centerY + 20);

    ctx.fillText('-5', centerX - radius - pointRadius, centerY + 20);
    ctx.fillText('-4', centerX - (4/5) * radius - pointRadius, centerY + 20);
    ctx.fillText('-3', centerX - (3/5) * radius - pointRadius, centerY + 20);
    ctx.fillText('-2', centerX - (2/5) * radius - pointRadius, centerY + 20);
    ctx.fillText('-1', centerX - (1/5) * radius - pointRadius, centerY + 20);

    // точки оу
    ctx.beginPath();
    ctx.arc(centerX, centerY + radius, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY + (4/5) * radius, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY + (3/5) * radius, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY + (2/5) * radius, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY + (1/5) * radius, pointRadius, 0, 2 * Math.PI);

    ctx.arc(centerX, centerY - radius, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY - (4/5) * radius, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY - (3/5) * radius, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY - (2/5) * radius, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY - (1/5) * radius, pointRadius, 0, 2 * Math.PI);

    ctx.fillStyle = '#000000';
    ctx.fill();

    ctx.font = '12px Arial'; // Устанавливаем шрифт и размер
    ctx.fillStyle = 'black'; // Устанавливаем цвет текста

    ctx.fillText('-5', centerX + 20, centerY + radius);
    ctx.fillText('-4', centerX + 20, centerY + (4/5) * radius);
    ctx.fillText('-3', centerX + 20, centerY + (3/5) * radius);
    ctx.fillText('-2', centerX + 20, centerY + (2/5) * radius);
    ctx.fillText('-1', centerX + 20, centerY + (1/5) * radius);

    ctx.fillText('5', centerX + 20, centerY - radius);
    ctx.fillText('4', centerX + 20, centerY - (4/5) * radius);
    ctx.fillText('3', centerX + 20, centerY - (3/5) * radius);
    ctx.fillText('2', centerX + 20, centerY - (2/5) * radius);
    ctx.fillText('1', centerX + 20, centerY - (1/5) * radius);

}

function drawPoint(x,y,r) {
    const scale = 400 / 2;
    x = scale / r * x + scale + 50;
    y = 300 - (scale / r * y + scale - 150);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fillStyle = '#030000';
    ctx.fill();
}


var pointRadius = 5;
var pointColor = '#ff0000';


var points = [];


function drawPointe(x, y, xt, yt) {

    ctx.beginPath();
    ctx.arc(x, y, pointRadius, 0, 2 * Math.PI);
    ctx.fillStyle = pointColor;
    ctx.fill();


    ctx.font = '12px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('('+xt+'; '+yt+')', x + 10, y);
}
