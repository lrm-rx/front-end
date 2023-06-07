window.onload = function() {
    // 获取画布元素
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    // 初始化
    const bg = new Image();
    bg.src = 'image/bg.png';
    const heroImg = new Image();
    heroImg.src = 'image/hero.png';
    const monsterImg = new Image();
    monsterImg.src = 'image/monster.png';

    const hero = {x:0,y:0,speed:1};
    const monster = {x:0,y:0};
    let score = 0; // 分数
    let keyDown = {};
    addEventListener('keydown', function(e){
        //e.keyCode 获取  上38  下40  左37   右39
        keyDown[e.keyCode] = true;
    })
    addEventListener("keyup",function(e){  //松开
        delete keyDown[e.keyCode]; //清除按下的属性
    });

    function play(){
        if(38 in keyDown){ //上
            hero.y -= hero.speed;
        };
        if(40 in keyDown){ //下
            hero.y += hero.speed;
        };
        if(37 in keyDown){ //左
            hero.x -= hero.speed;
        };
        if(39 in keyDown){ //右
            hero.x += hero.speed;
        };
        if(hero.x <= (monster.x+2) && hero.y <= (monster.y+2) &&
        monster.x <= (hero.x+2) && monster.y <= (hero.y+2))  {
            score++;
            hero.x = canvas.width/2; //攻关后，英雄位置固定的
            hero.y = canvas.height/2;
            monster.x = Math.floor(Math.random()*canvas.width);  //怪兽位置随机获取
            monster.y = Math.floor(Math.random()*canvas.height);
        }
    };

    let flag = false;  //未结束
    function over(){
        if(hero.x<=0 ||hero.x>=canvas.width||hero.y<=0 ||hero.y>=canvas.height){
            flag = true;
            score = 0;
            alert('游戏结束！！！')
        }
    }

    //渲染图片  文字
    function render(){
        //drawImage(img,x,y,w,h);
        ctx.drawImage(bg,0,0,canvas.width,canvas.height); //渲染图片背景
        ctx.drawImage(monsterImg,monster.x,monster.y,30,30); //渲染怪兽
        ctx.drawImage(heroImg,hero.x,hero.y,30,30); //渲染英雄
        ctx.font = "20px '微软雅黑";
        ctx.fillStyle="#fff";
        ctx.fillText(`分数:${score}`,30,30);
    };

    //初始化
    function init(){
        render();
        play();
        over();
        if(!flag){
            requestAnimationFrame(init);
        }
    };
    init();
    //动画神器  requestAnimationFrame 
    requestAnimationFrame = requestAnimationFrame || webkitRequestAnimationFrame || mozRequestAnimationFrame || msRequestAnimationFrame

}