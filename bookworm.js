/*historical*/
var hheart1= document.getElementById("histheart1")
var hdislike1=document.getElementById("histthumb1")
var hbook1=document.getElementById("hist-book1")
var booknb=document.getElementById("nb-your-books")
var hbtn1=document.getElementById("histbtn1")
var total=document.getElementById("totalcost")

function histlike1(){
if(hheart1.style.color=="rgb(196, 28, 28)"){
    hheart1.style.color="black"
}else{hheart1.style.color="rgb(196, 28, 28)"}
}
function histdislike1(){
    if(hdislike1.style.color=="blue"){
        hdislike1.style.color="black"
    }else{
        hdislike1.style.color="blue"
    }
}
function histadd1(){
    if(hbtn1.innerHTML=="Add To The List"){
        hbtn1.innerHTML="Added";
        hbtn1.style.color="green";
        hbook1.removeAttribute("style");
        total.innerHTML=+total.innerHTML+18;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{hbtn1.innerHTML="Add To The List";
          hbtn1.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-18;
        }
}
var hheart2= document.getElementById("histheart2")
var hdislike2=document.getElementById("histthumb2")
var hbook2=document.getElementById("hist-book2")
var hbtn2=document.getElementById("histbtn2")



function histlike2(){
    if(hheart2.style.color=="rgb(196, 28, 28)"){
        hheart2.style.color="black"
    }else{hheart2.style.color="rgb(196, 28, 28)"}
    }
function histdislike2(){
    if(hdislike2.style.color=="blue"){
        hdislike2.style.color="black"
    }else{
        hdislike2.style.color="blue"
    }
    }
function histadd2(){
    if(hbtn2.innerHTML=="Add To The List"){
        hbtn2.innerHTML="Added";
        hbtn2.style.color="green";
        hbook2.removeAttribute("style");
        total.innerHTML=+total.innerHTML+74;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{hbtn2.innerHTML="Add To The List";
        hbtn2.style.color="rgb(109, 69, 9)";
        booknb.innerHTML=+booknb.innerHTML-1;
        total.innerHTML=+total.innerHTML-74;
    }
    }
/*fin historical*/
/*romance*/

var rheart1= document.getElementById("romheart1")
var rdislike1=document.getElementById("romthumb1")
var rbook1=document.getElementById("rom-book1")
var rbtn1=document.getElementById("rombtn1")

function romlike1(){
if(rheart1.style.color=="rgb(196, 28, 28)"){
    rheart1.style.color="black"
}else{rheart1.style.color="rgb(196, 28, 28)"}
}
function romdislike1(){
    if(rdislike1.style.color=="blue"){
        rdislike1.style.color="black"
    }else{
        rdislike1.style.color="blue"
    }
}
function romadd1(){
    if(rbtn1.innerHTML=="Add To The List"){
        rbtn1.innerHTML="Added";
        rbtn1.style.color="green";
        rbook1.removeAttribute("style");
        total.innerHTML=+total.innerHTML+9;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{rbtn1.innerHTML="Add To The List";
          rbtn1.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-9;
        }
}
var rheart2= document.getElementById("romheart2")
var rdislike2=document.getElementById("romthumb2")
var rbook2=document.getElementById("rom-book2")
var rbtn2=document.getElementById("rombtn2")

function romlike2(){
if(rheart2.style.color=="rgb(196, 28, 28)"){
    rheart2.style.color="black"
}else{rheart2.style.color="rgb(196, 28, 28)"}
}
function romdislike2(){
    if(rdislike2.style.color=="blue"){
        rdislike2.style.color="black"
    }else{
        rdislike2.style.color="blue"
    }
}
function romadd2(){
    if(rbtn2.innerHTML=="Add To The List"){
        rbtn2.innerHTML="Added";
        rbtn2.style.color="green";
        rbook2.removeAttribute("style");
        total.innerHTML=+total.innerHTML+10;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{rbtn2.innerHTML="Add To The List";
          rbtn2.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-10;
        }
}
/*fin romance*/
/*thriller*/

var theart1= document.getElementById("thrheart1")
var tdislike1=document.getElementById("thrthumb1")
var tbook1=document.getElementById("thr-book1")
var tbtn1=document.getElementById("thrbtn1")

function thrlike1(){
if(theart1.style.color=="rgb(196, 28, 28)"){
    theart1.style.color="black"
}else{theart1.style.color="rgb(196, 28, 28)"}
}
function thrdislike1(){
    if(tdislike1.style.color=="blue"){
        tdislike1.style.color="black"
    }else{
        tdislike1.style.color="blue"
    }
}
function Thradd1(){
    if(tbtn1.innerHTML=="Add To The List"){
        tbtn1.innerHTML="Added";
        tbtn1.style.color="green";
        tbook1.removeAttribute("style");
        total.innerHTML=+total.innerHTML+7;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{tbtn1.innerHTML="Add To The List";
          tbtn1.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-7;
        }
}
var theart2= document.getElementById("thrheart2")
var tdislike2=document.getElementById("thrthumb2")
var tbook2=document.getElementById("thr-book2")
var tbtn2=document.getElementById("thrbtn2")

function thrlike2(){
if(theart2.style.color=="rgb(196, 28, 28)"){
    theart2.style.color="black"
}else{theart2.style.color="rgb(196, 28, 28)"}
}
function thrdislike2(){
    if(tdislike2.style.color=="blue"){
        tdislike2.style.color="black"
    }else{
        tdislike2.style.color="blue"
    }
}
function thradd2(){
    if(tbtn2.innerHTML=="Add To The List"){
        tbtn2.innerHTML="Added";
        tbtn2.style.color="green";
        tbook2.removeAttribute("style");
        total.innerHTML=+total.innerHTML+36;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{tbtn2.innerHTML="Add To The List";
          tbtn2.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-36;
        }
}
/*fin thriller*/
/*mystery*/

var fheart1=document.getElementById("fanheart1")
var fdislike1=document.getElementById("fanthumb1")
var fbook1=document.getElementById("fan-book1")
var fbtn1=document.getElementById("fanbtn1")

function fanlike1(){
if(fheart1.style.color=="rgb(196, 28, 28)"){
    fheart1.style.color="black"
}else{fheart1.style.color="rgb(196, 28, 28)"}
}
function fandislike1(){
    if(fdislike1.style.color=="blue"){
        fdislike1.style.color="black"
    }else{
        fdislike1.style.color="blue"
    }
}
function fanadd1(){
    if(fbtn1.innerHTML=="Add To The List"){
        fbtn1.innerHTML="Added";
        fbtn1.style.color="green";
        fbook1.removeAttribute("style");
        total.innerHTML=+total.innerHTML+11;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{fbtn1.innerHTML="Add To The List";
          fbtn1.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-11;
        }
}
var fheart2=document.getElementById("fanheart2")
var fdislike2=document.getElementById("fanthumb2")
var fbook2=document.getElementById("fan-book2")
var fbtn2=document.getElementById("fanbtn2")

function fanlike2(){
if(fheart2.style.color=="rgb(196, 28, 28)"){
    fheart2.style.color="black"
}else{fheart2.style.color="rgb(196, 28, 28)"}
}
function fandislike2(){
    if(fdislike2.style.color=="blue"){
        fdislike2.style.color="black"
    }else{
        fdislike2.style.color="blue"
    }
}
function fanadd2(){
    if(fbtn2.innerHTML=="Add To The List"){
        fbtn2.innerHTML="Added";
        fbtn2.style.color="green";
        fbook2.removeAttribute("style");
        total.innerHTML=+total.innerHTML+11;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{fbtn2.innerHTML="Add To The List";
          fbtn2.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-11;
        }
}
/*fin mystery*/
/* fin section 4*/
/* start section 5*/
var g_emoji=document.getElementById("grinemoji")
var s_emoji=document.getElementById("smileemoji")
var m_emoji=document.getElementById("mehemoji")
var f_emoji=document.getElementById("frownemoji")
var share_i=document.getElementById("shareicon")
var share_t=document.getElementById("sharetext")


function myalert(){
    alert("thank you for sharing my webpage!!Here's the link to copy 'http://127.0.0.1:5500/bookworm.html'")
}

 function grin(){
     if(g_emoji.style.color=="rgb(143, 8, 53)")
     { g_emoji.style.color="black"}
     else{g_emoji.style.color="rgb(143, 8, 53)"}
 }
 function smile(){
    if(s_emoji.style.color=="rgb(241, 161, 11)")
    { s_emoji.style.color="black"}
    else{s_emoji.style.color="rgb(241, 161, 11)"}
}
function meh(){
    if(m_emoji.style.color=="rgb(55, 109, 51)")
    { m_emoji.style.color="black"}
    else{m_emoji.style.color="rgb(55, 109, 51)"}
}
function frown(){
    if(f_emoji.style.color=="rgb(6, 7, 90)")
    { f_emoji.style.color="black"}
    else{f_emoji.style.color="rgb(6, 7, 90)"}
}
/* end section 5*/