var sound1
function preload(){
  sound1 = loadSound("obj_wo3DlMOGwrbDjj7DisKw_30390178354_00f7_869f_74f4_61de38543fb37b7fdbb98a52fd4a69af.mp3") //先把音樂檔載入到sound1程式碼中
}
var face_colors = "fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a".split("-").map(a=>"#"+a)
var eye_colors = "323031-3d3b3c-7f7979-c1bdb3-5f5b6b".split("-").map(a=>"#"+a)
var pos_x=[]
var pos_y=[]
var sizes=[]
var colors=[]
var v_y=[]//移動速度x軸
var v_x=[]//移動速度y軸
var txts  //宣告一個變數，變數存放著文字框內容
function setup() {
  createCanvas(windowWidth,windowHeight);

  //文字框的設定
  inputElement = createInput("🍊🍙")//產生一個文字方塊
  inputElement.position(10,10)//把文字方塊移到(10,10)
  inputElement.size(170,20)//文字框的寬與高
  //以下的style，可以google搜尋html input css找到相關資料
  inputElement.style("font-size","20px") //文字框內的文字大小
  inputElement.style("color","#cdb4db") //文字框內的文字顏色
  inputElement.style("background","#d8e2dc") //文字框的背景顏色
   //inputElement.style("border","none") //設定文字框沒有框線

  // //按鈕的設定
  // btnMoveElement = createButton("開始") //產生一個按鈕，按鈕上有"移動"字
  // btnMoveElement.position(200,10) //按鈕的位置
  // btnMoveElement.size(80,40) //按鈕的寬與高
  // btnMoveElement.style("font-size","20px") //按鈕內的文字大小
  // btnMoveElement.style("color","#fff") //按鈕內的文字顏色
  // btnMoveElement.style("background","#d8e2dc") //按鈕的背景顏色
  // btnMoveElement.mousePressed(sound1.play)

  // //"暫停"按鈕的設定
  // btnstopElement = createButton("暫停")
  // btnstopElement.position(270,10)
  // btnstopElement.size(80,40)
  // btnstopElement.style("font-size","20px")
  // btnstopElement.style("color","#fff")
  // btnstopElement.style("background","#d8e2dc")
  // btnstopElement.mousePressed(sound1.stop)

  // //radio的設定，多個選項，只能選一個(單選題)
  // radioElement = createRadio()
  // radioElement.option("暫停")
  // radioElement.option("旋轉")
  // radioElement.option("移動")
  // radioElement.position(370,10) //選鈕的位置
  // radioElement.size(80,80)
  // radioElement.style("font-size","20px")
  // radioElement.style("color","#fff")
  // radioElement.style("background-color","#d8e2dc")
  // //checkBox的設定，多個選項，可以多個(複選題)
  // btnVoice = createButton("音樂") //產生一個按鈕，按鈕上有"移動"字
  // btnVoice.position(440,10) //按鈕的位置
  // btnVoice.size(80,40) //按鈕的寬與高
  // btnVoice.style("font-size","20px") //按鈕內的文字大小
  // btnVoice.style("color","#fff") //按鈕內的文字顏色
  // btnVoice.style("background","#d8e2dc") //按鈕的背景顏色
  // // btnVoice.mousePressed(voice_go)
  // //for(var i=0;i<20;i=i+1){
  //   //drawface(face_colors[int(random(face_colors.length))],eye_colors[int(random(eye_colors.length))],random(0,3,1,2))
  // //}
}

function draw(){
  background("#b8d4e3");
  for(var i=0;i<pos_x.length;i=i+1)
  {
    push()
    txts = inputElement.value();
    translate(pos_x[i],pos_y[i])
    drawface(colors[i],0,sizes[i])
    pop()
    pos_y[i] = pos_y[i] +v_y[i]
  if(pos_y[i]>height || pos_y[i]<0)
  {
  pos_x.splice(i,1)
  pos_y.splice(i,1)
  sizes.splice(i,1)
  colors.splice(i,1)
  v_y.splice(i,1)

  }
     }
}
    function drawface(face_clr=255,eye_clr=0,size=1){
    push() //自行設定格式
    //translate(random(width),random(height))  //原點(0,0)移動到(200,200)

    scale(size) //放大縮小
    //文字框的顯示格式
    fill("#fff")  //設定文字的顏色
    textSize(50) //文字大小
    text(txts,-50,250) //顯示文字，文字內容為txts，放在位置座標(50，200)

    fill("#3a86ff")
    //臉蛋
    ellipse(0,0,400)
    fill("#ffffff")
    ellipse(0,50,300)
    //眼睛
    ellipse(-45,-100,90,150)
    ellipse(45,-100,90,150)
    //眼珠
    fill(eye_clr)
ellipse(-40+mouseX/35,-100+mouseY/20,30,40)
ellipse(40+mouseX/35,-100+mouseY/20,30,40)
fill("#ffffff")
ellipse(-40+mouseX/35,-100+mouseY/20,10,20)
ellipse(40+mouseX/35,-100+mouseY/20,10,20)

    
    //鼻子
    fill("#d90429")
    ellipse(0,-20,60)
    fill("#ffffff")
    ellipse(0,-35,15)
    //嘴巴
    fill("#000000")
    line(0,10,-0,130)
    line(-60,60,0,130)
    line(60,60,0,130)
    //鬍鬚
    line(170,40,90,40)
    line(-170,40,-90,40)
    line(180,-40,90,20)
    line(-180,-40,-90,20)
    line(160,100,90,60)
    line(-160,100,-90,60)
    pop()  //把原本設定都消失
    }

    function mousePressed(){
      if(mouseY>30){ //設定y軸為0~60間的座標值都不產生新的物件
        //產生一個新的物件
        pos_x.push(mouseX)
        pos_y.push(mouseY)
        sizes.push(random(0.5,1,0.7))
        colors.push(face_colors[int(random(face_colors.lengh))])
        v_y.push(random(-1,1))
      }
    }
   

    function face_move(){




    }


    function face_stop(){


    }
    // function push(){
    //   if(sound1.isPlaying()){
    //     sound1.stop();
    //   }
    //   else{
    //     sound1.play();
    //   }
    // }
