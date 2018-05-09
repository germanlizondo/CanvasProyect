var array = [];

function ini(){
  carga();



}

function data(){
   
    var a=1;

    //valors del grafics
    array[1]=document.getElementById("a1").innerHTML;
    array[2]=document.getElementById("b1").innerHTML;
    array[3]=document.getElementById("c1").innerHTML;
    array[4]=document.getElementById("d1").innerHTML;
    array[5]=document.getElementById("a2").innerHTML;
    array[6]=document.getElementById("b2").innerHTML;
    array[7]=document.getElementById("c2").innerHTML;
    array[8]=document.getElementById("d2").innerHTML;
    array[9]=document.getElementById("a3").innerHTML;
    array[10]=document.getElementById("b3").innerHTML;
    array[11]=document.getElementById("c3").innerHTML;
    array[12]=document.getElementById("d3").innerHTML;
    array[13]=document.getElementById("a4").innerHTML;
    array[14]=document.getElementById("b4").innerHTML;
    array[15]=document.getElementById("c4").innerHTML;
    array[16]=document.getElementById("d4").innerHTML;

//noms del grafics

array[17]=document.getElementById("name1").innerHTML;
array[18]=document.getElementById("name2").innerHTML;
array[19]=document.getElementById("name3").innerHTML;
array[20]=document.getElementById("name4").innerHTML;

//colors del grafics

array[21]=document.getElementById("color1").value;
array[22]=document.getElementById("color2").value;
array[23]=document.getElementById("color3").value;
array[24]=document.getElementById("color4").value;

//tipografia

array[25]=document.getElementById("typo").value;
array[26]=document.getElementById("fondo").value;
array[27]=document.getElementById("linea").value;

//valors
array[28]=document.getElementById("valor1").innerHTML;
array[29]=document.getElementById("valor2").innerHTML;
array[30]=document.getElementById("valor3").innerHTML;
array[31]=document.getElementById("valor4").innerHTML;
}


function grafic1(){
   var canvas=document.getElementById("grafic1");
   grafico = canvas.getContext("2d");
   var img= new Image();
   var i=parseFloat(array[1])+parseFloat(array[5])+parseFloat(array[9])+parseFloat(array[13]);
   var j=parseFloat(array[2])+parseFloat(array[6])+parseFloat(array[10])+parseFloat(array[14]);
   var a=parseFloat(array[3])+parseFloat(array[7])+parseFloat(array[11])+parseFloat(array[15]);
   var b=parseFloat(array[4])+parseFloat(array[8])+parseFloat(array[12])+parseFloat(array[16]);
   
   var suma=i+j+a+b;
   var i2=i/suma*100;
   var j2=j/suma*100;
   var a2=a/suma*100;
   var b2=b/suma*100;
   var porci=i*2*Math.PI/suma;
   var porcj=j*2*Math.PI/suma;
   var porca=a*2*Math.PI/suma;
   var porcb=b*2*Math.PI/suma;
   
   if (array[26]=="1"){
   img.src = 'first.jpg';}
   if (array[26]=="2"){
   img.src = 'space.jpg';}
   if (array[26]=="3"){
   img.src = 'mountains.jpg';}
   img.onload = function(){
    grafico.drawImage(img,0,0,550,400);
    grafico.fillStyle=(array[21]);
    grafico.beginPath();
    grafico.lineWidth=parseFloat(array[27]);
    grafico.moveTo(250,200);
    grafico.lineTo(350,200);
    grafico.arc(250,200,175,0,porci,false);
    grafico.closePath();
    grafico.fill();
    grafico.fillStyle =(array[22]);
    grafico.stroke();
    grafico.strokeStyle = "black";
    grafico.beginPath();
    grafico.moveTo(250,200);
    grafico.lineTo(250+100*Math.cos(porci),200+100*Math.sin(porci));
    grafico.arc(250,200,175,porci,porcj+porci,false);
    grafico.closePath();
    grafico.fill();
    grafico.fillStyle = (array[23]);
    grafico.stroke();
    grafico.beginPath();
    grafico.moveTo(250,200);
    grafico.arc(250,200,175,porci+porcj,porci+porca+porcj,false);
    grafico.closePath();
    grafico.fill();
    grafico.fillStyle= (array[24]);
    grafico.stroke();
    grafico.beginPath();
    grafico.moveTo(250,200);
    grafico.lineTo(250+100*Math.cos(porci+porca+porcj),200+100*Math.sin(porci+porca+porcj));
    grafico.arc(250,200,175,porci+porcj+porca,porci+porca+porcj+porcb,false);
    grafico.closePath();
    grafico.fill();
    grafico.stroke();


                       // LLegenda del gràfic
                        if(array[25]=="1"){
                            grafico.font = "13px Arial";
                        }
                        if(array[25]=="2"){
                            grafico.font = "13px Comic Sans MS";
                        }
                        if(array[25]=="3"){
                            grafico.font = "13px times New Roman";
                        }
                     
                       grafico.fillStyle = (array[21]);
                       grafico.fillText(array[17]+"/"+i2.toFixed(1)+"%",450,270);
                       grafico.stroke();
                       grafico.fillStyle =  (array[22]);
                       grafico.fillText(array[18]+"/"+j2.toFixed(1)+"%",450,290);
                       grafico.stroke();
                       grafico.fillStyle =  (array[23]);
                       grafico.fillText(array[19]+"/"+a2.toFixed(1)+"%",450,320);
                       grafico.stroke();
                       grafico.fillStyle =  (array[24]);
                       grafico.fillText(array[20]+"/"+b2.toFixed(1)+"%",450,350);
                       grafico.stroke();



   }
}

function grafic2(){
    var canvas = document.getElementById('grafic2');
      var grafico=canvas.getContext('2d');
      var img= new Image();
      var a=parseFloat(array[1]);
      var b=parseFloat(array[5]);
      var c=parseFloat(array[9]);
      var d=parseFloat(array[13]);
      var e=parseFloat(array[2]);
      var f=parseFloat(array[6]);
      var g=parseFloat(array[10]);
      var h=parseFloat(array[14]);
      var i=parseFloat(array[3]);
      var j=parseFloat(array[7]);
      var k=parseFloat(array[11]);
      var l=parseFloat(array[15]);
      var m=parseFloat(array[4]);
      var n=parseFloat(array[8]);
      var o=parseFloat(array[12]);
      var p=parseFloat(array[16]);
      var max= Math.max(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
      var apos= 270-(a*100/max)*2;
      var bpos= 270-(b*100/max)*2;
      var cpos= 270-(c*100/max)*2;
      var dpos= 270-(d*100/max)*2;
      var epos= 270-(e*100/max)*2;
      var fpos= 270-(f*100/max)*2;
      var gpos= 270-(g*100/max)*2;
      var hpos= 270-(h*100/max)*2;
      var ipos= 270-(i*100/max)*2;
      var jpos= 270-(j*100/max)*2;
      var kpos= 270-(k*100/max)*2;
      var lpos= 270-(l*100/max)*2;
      var mpos= 270-(m*100/max)*2;
      var npos= 270-(n*100/max)*2;
      var opos= 270-(o*100/max)*2;
      var ppos= 270-(p*100/max)*2;
      if (array[26]=="1"){
        img.src = 'first.jpg';}
        if (array[26]=="2"){
        img.src = 'space.jpg';}
        if (array[26]=="3"){
        img.src = 'mountains.jpg';}

      img.onload = function(){
        if(array[25]=="1"){
            grafico.font = "13px Arial";
        }
        if(array[25]=="2"){
            grafico.font = "13px Comic Sans MS";
        }
        if(array[25]=="3"){
            grafico.font = "13px times New Roman";
        }
        grafico.drawImage(img,0,0,550,400);
          grafico.strokeStyle = "black";
          grafico.fillStyle="black";
          grafico.beginPath();
          grafico.lineWidth=3;
          grafico.moveTo(50,350);
        grafico.lineTo(450,350);
        grafico.moveTo(50,50);
        grafico.lineTo(50,350);
          grafico.stroke();
          grafico.strokeStyle = "black";
          grafico.beginPath();
          grafico.lineWidth=0.5;
          grafico.moveTo(50,70);
          grafico.lineTo(450,70);
          grafico.fillText(max,25,70);
          grafico.moveTo(50,140);
          grafico.lineTo(450,140);
          grafico.fillText(3*max/4,25,140);
          grafico.moveTo(50,210);
          grafico.lineTo(450,210);
          grafico.fillText(max/2,25,210);
          grafico.moveTo(50,280);
          grafico.lineTo(450,280);
          grafico.fillText(max/4,25,280);
          grafico.fillText(array[28],90,370);
          grafico.fillText(array[29],185,370);
          grafico.fillText(array[30],285,370);
          grafico.fillText(array[31],390,370);
          grafico.stroke();
          grafico.beginPath();
          grafico.lineWidth=parseFloat(array[27]);
          grafico.moveTo(95,apos);
          grafico.lineTo(190,bpos);
          grafico.lineTo(290,cpos);
          grafico.lineTo(395,dpos);
          grafico.strokeStyle=(array[21]);
          grafico.stroke();

          grafico.beginPath();
          grafico.moveTo(95,epos);
          grafico.lineTo(190,fpos);
          grafico.lineTo(290,gpos);
          grafico.lineTo(395,hpos);
          grafico.strokeStyle=(array[22]);
          grafico.stroke();
         
          grafico.beginPath();
          grafico.moveTo(90,ipos);
          grafico.lineTo(100,jpos);
          grafico.lineTo(290,kpos);
          grafico.lineTo(395,lpos);
          grafico.strokeStyle=(array[23]);
          grafico.stroke();
          
          grafico.beginPath();
          grafico.moveTo(90,mpos);
          grafico.lineTo(190,npos);
          grafico.lineTo(290,opos);
          grafico.lineTo(395,ppos);
          grafico.strokeStyle=(array[24]);
          grafico.stroke();

          grafico.beginPath();
          grafico.fillStyle = (array[21]);
          grafico.fillText(array[17],90,30);
          grafico.stroke();

          grafico.fillStyle =  (array[22]);
          grafico.fillText(array[18],185,30);
          grafico.stroke();

          grafico.fillStyle =  (array[23]);
          grafico.fillText(array[19],285,30);
          grafico.stroke();

          grafico.fillStyle =  (array[24]);
          grafico.fillText(array[20],390,30);
          grafico.stroke();
      }
  }

  function grafic3(){
    var canvas = document.getElementById('grafic3');
    var grafico = canvas.getContext('2d');
    var img= new Image();
    var a=parseFloat(array[1]);
    var b=parseFloat(array[2]);
    var c=parseFloat(array[3]);
    var d=parseFloat(array[4]);
    var e=parseFloat(array[5]);
    var f=parseFloat(array[6]);
    var g=parseFloat(array[7]);
    var h=parseFloat(array[8]);
    var i=parseFloat(array[9]);
    var j=parseFloat(array[10]);
    var k=parseFloat(array[11]);
    var l=parseFloat(array[12]);
    var m=parseFloat(array[13]);
    var n=parseFloat(array[14]);
    var o=parseFloat(array[15]);
    var p=parseFloat(array[16]);
    var max= Math.max(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
    if (array[26]=="1"){
        img.src = 'first.jpg';}
        if (array[26]=="2"){
        img.src = 'space.jpg';}
        if (array[26]=="3"){
        img.src = 'mountains.jpg';}
    img.onload = function(){
        if(array[25]=="1"){
            grafico.font = "13px Arial";
        }
        if(array[25]=="2"){
            grafico.font = "13px Comic Sans MS";
        }
        if(array[25]=="3"){
            grafico.font = "13px times New Roman";
        }
        grafico.drawImage(img,0,0,550,400);
        grafico.strokeStyle = "black";
        grafico.beginPath();
        grafico.lineWidth=3;
        grafico.moveTo(50,350);
        grafico.lineTo(450,350);
        grafico.moveTo(50,50);
        grafico.lineTo(50,350);
        grafico.stroke();
        grafico.beginPath();
        grafico.textAlign="start";
        grafico.fillStyle =  "black";
        grafico.fillText(array[28],3,70);
        grafico.fillText(array[29],3,140);
        grafico.fillText(array[30],3,210);
        grafico.fillText(array[31],3,280);
        grafico.textAlign="center";
        grafico.fillText(max/4,50+350/4,370);
        grafico.fillText(max/2,50+350/2,370);
        grafico.fillText(3*max/4,50+3*350/4,370);
        grafico.fillText(max,450,370);
       
        grafico.beginPath();
        grafico.moveTo(50,60);
        grafico.lineTo(50+a*400/max,60);
        grafico.moveTo(50,130);
        grafico.lineTo(50+e*400/max,130);
        grafico.moveTo(50,200);
        grafico.lineTo(50+i*400/max,200);
        grafico.moveTo(50,265);
        grafico.lineTo(50+m*400/max,265);
        grafico.strokeStyle=array[21];
        grafico.stroke();

        grafico.beginPath();
        grafico.moveTo(50,70);
        grafico.lineTo(50+b*400/max,70);
        grafico.moveTo(50,140);
        grafico.lineTo(50+f*400/max,140);
        grafico.moveTo(50,210);
        grafico.lineTo(50+j*400/max,210);
        grafico.moveTo(50,275);
        grafico.lineTo(50+n*400/max,275); 
        grafico.strokeStyle=array[22];
        grafico.stroke();
        
        grafico.beginPath();
        grafico.strokeStyle=array[23];
        grafico.moveTo(50,80);
        grafico.lineTo(50+c*400/max,80);
        grafico.moveTo(50,150);
        grafico.lineTo(50+g*400/max,150);
        grafico.moveTo(50,220);
        grafico.lineTo(50+k*400/max,220);
        grafico.moveTo(50,285);
        grafico.lineTo(50+o*400/max,285);
        grafico.stroke();
        
        grafico.beginPath();
        grafico.strokeStyle=array[24];
        grafico.moveTo(50,90);
        grafico.lineTo(50+d*400/max,90);
        grafico.moveTo(50,160);
        grafico.lineTo(50+h*400/max,160); 
        grafico.moveTo(50,230);
        grafico.lineTo(50+l*400/max,230);
        grafico.moveTo(50,295);
        grafico.lineTo(50+p*400/max,295);

        grafico.stroke();
    }
}

function grafic4(){
    var canvas = document.getElementById('grafic4');
      var grafico = canvas.getContext('2d');
      var img= new Image();
      var a=parseFloat(array[1])+parseFloat(array[5])+parseFloat(array[9])+parseFloat(array[13]);
      var b=parseFloat(array[2])+parseFloat(array[6])+parseFloat(array[10])+parseFloat(array[14]);
      var c=parseFloat(array[3])+parseFloat(array[7])+parseFloat(array[11])+parseFloat(array[15]);
      var d=parseFloat(array[4])+parseFloat(array[8])+parseFloat(array[12])+parseFloat(array[16]);
      var max= Math.max(a,b,c,d);
      var apos= 250-(a*100/max)*2;
      var bpos= 250-(b*100/max)*2;
      var cpos= 250-(c*100/max)*2;
      var dpos= 250-(d*100/max)*2;
      if (array[26]=="1"){
        img.src = 'first.jpg';}
        if (array[26]=="2"){
        img.src = 'space.jpg';}
        if (array[26]=="3"){
        img.src = 'mountains.jpg';}
      img.onload = function(){
        if(array[25]=="1"){
            grafico.font = "13px Arial";
        }
        if(array[25]=="2"){
            grafico.font = "13px Comic Sans MS";
        }
        if(array[25]=="3"){
            grafico.font = "13px times New Roman";
        }
        grafico.drawImage(img,0,0,550,400);
          grafico.strokeStyle = "black";
          grafico.beginPath();
          grafico.lineWidth=3;
          grafico.moveTo(50,350);
          grafico.lineTo(450,350);
          grafico.moveTo(50,50);
          grafico.lineTo(50,350);
          grafico.stroke();
          grafico.beginPath();
          grafico.fillStyle="black";
          grafico.lineWidth=0.5;
          grafico.moveTo(50,50);
          grafico.lineTo(450,50);
          grafico.fillText(max,15,50);
          grafico.moveTo(50,100);
          grafico.lineTo(450,100);
          grafico.fillText(3*max/4,15,100);
          grafico.moveTo(50,150);
          grafico.lineTo(450,150);
          grafico.fillText(max/2,15,150);
          grafico.moveTo(50,200);
          grafico.lineTo(450,200);
          grafico.fillText(max/4,15,200);
          grafico.moveTo(50,250);
          grafico.lineTo(450,250);
          grafico.fillText(max/8,15,250);
          grafico.moveTo(50,300);
          grafico.lineTo(450,300);
          grafico.fillText(max/16,15,300);
         
          
          grafico.stroke();
          grafico.moveTo(50,250);
          grafico.lineTo(50,apos);
          grafico.closePath();
          
          grafico.beginPath();
          grafico.moveTo(50+400/8,350);
          grafico.lineTo(50+400/8,apos);
          // gruix de la linea
          grafico.strokeStyle = (array[21]);
          grafico.lineWidth=40;
          grafico.stroke();

          //BARRA2
          grafico.beginPath();
          grafico.moveTo(50 + 3 * 400 / 8, 350);
          grafico.lineTo(50 + 3 * 400 / 8, bpos);
          // gruix de la linea
          grafico.strokeStyle = (array[22]);
          grafico.lineWidth = 40;
          grafico.stroke();

          //BARRA3
          grafico.beginPath();
          grafico.moveTo(50 + 5 * 400 / 8, 350);
          grafico.lineTo(50 + 5 * 400 / 8, cpos);
          // gruix de la linea
          grafico.strokeStyle = (array[23]);
          grafico.lineWidth = 40;
          grafico.stroke();

          //BARRA4
          grafico.beginPath();
          grafico.moveTo(50 + 7 * 400 / 8, 350);
          grafico.lineTo(50 + 7 * 400 / 8, dpos);
          // gruix de la linea
          grafico.strokeStyle = (array[24]);
          grafico.lineWidth = 40;
          grafico.stroke();
          
          grafico.beginPath();
          grafico.fillStyle = (array[21]);
          grafico.fillText(array[17],90,30);
          grafico.stroke();

          grafico.fillStyle =  (array[22]);
          grafico.fillText(array[18],185,30);
          grafico.stroke();

          grafico.fillStyle =  (array[23]);
          grafico.fillText(array[19],285,30);
          grafico.stroke();

          grafico.fillStyle =  (array[24]);
          grafico.fillText(array[20],390,30);
          grafico.stroke();

      }
  }


function carga(){
    var myVar = setInterval(function(){ data() }, 500);
    var v2=setInterval(function(){ grafic1() }, 500);
    var v3=setInterval(function(){ grafic2() }, 500);
    var v4=setInterval(function(){ grafic3() }, 500);
    var v5=setInterval(function(){ grafic4() }, 500);
} 




window.addEventListener("load",ini,false);