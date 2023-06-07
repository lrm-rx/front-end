window.onload = function() {
    let  arr = [{x:0,y:0},{x:200,y:300}]; // 行驶坐标点
    let speed = 1, timer,flag=false; // 速度
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    // const img = document.getElementById('img');
    // 图片预加载
    const img = new Image();
    img.src = 'img/person.png';
    // img.onload = function() {
    //     ctx.drawImage(img, arr[0].x,arr[0].y,30,30);
    // }
    
    // 单击事件
    document.querySelector('.play').onclick = function(){
        play();
    }
    document.querySelector('.stop').onclick = function(){
        stop();
    }

    function play() {
        if(flag) return;
        timer = setInterval(draw, 50);
        flag = true;
    }

    function stop() {
        clearInterval(timer);
        flag = false;
    }

    // 绘制路径
    function draw() {
        ctx.clearRect(0,0,canvas.clientWidth,canvas.height); // 清除画布内容
        if(arr[0].x<arr[1].x) {
            arr[0].x+=speed;
        }
        if(arr[0].y<arr[1].y) {
            arr[0].y+=speed;
        }
        ctx.drawImage(img,arr[0].x,arr[0].y,30,30);
        // 行驶的轨迹
        ctx.strokeStyle = 'green';
        ctx.lineTo(arr[0].x,arr[0].y); // 画点
        ctx.stroke(); // 执行绘制
    }

}