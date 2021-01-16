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
        total.innerHTML=+total.innerHTML+20;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{tbtn2.innerHTML="Add To The List";
          tbtn2.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-20;
        }
}
/*fin thriller*/
/*mystery*/

var mheart1=document.getElementById("mysheart1")
var mdislike1=document.getElementById("mysthumb1")
var mbook1=document.getElementById("mys-book1")
var mbtn1=document.getElementById("mysbtn1")

function myslike1(){
if(mheart1.style.color=="rgb(196, 28, 28)"){
    mheart1.style.color="black"
}else{mheart1.style.color="rgb(196, 28, 28)"}
}
function mysdislike1(){
    if(mdislike1.style.color=="blue"){
        mdislike1.style.color="black"
    }else{
        mdislike1.style.color="blue"
    }
}
function mysadd1(){
    if(mbtn1.innerHTML=="Add To The List"){
        mbtn1.innerHTML="Added";
        mbtn1.style.color="green";
        mbook1.removeAttribute("style");
        total.innerHTML=+total.innerHTML+15;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{mbtn1.innerHTML="Add To The List";
          mbtn1.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-15;
        }
}
var mheart2=document.getElementById("mysheart2")
var mdislike2=document.getElementById("mysthumb2")
var mbook2=document.getElementById("mys-book2")
var mbtn2=document.getElementById("mysbtn2")

function myslike2(){
if(mheart2.style.color=="rgb(196, 28, 28)"){
    mheart2.style.color="black"
}else{mheart2.style.color="rgb(196, 28, 28)"}
}
function mysdislike2(){
    if(mdislike2.style.color=="blue"){
        mdislike2.style.color="black"
    }else{
        mdislike2.style.color="blue"
    }
}
function mysadd2(){
    if(mbtn2.innerHTML=="Add To The List"){
        mbtn2.innerHTML="Added";
        mbtn2.style.color="green";
        mbook2.removeAttribute("style");
        total.innerHTML=+total.innerHTML+36;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{mbtn2.innerHTML="Add To The List";
          mbtn2.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-36;
        }
}
/*fin mystery*/
/*fantasy*/

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
        total.innerHTML=+total.innerHTML+27;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{fbtn1.innerHTML="Add To The List";
          fbtn1.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-27;
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
        total.innerHTML=+total.innerHTML+6;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{fbtn2.innerHTML="Add To The List";
          fbtn2.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-6;
        }
}
/*fin fantasy*/
/*action*/

var aheart1=document.getElementById("actheart1")
var adislike1=document.getElementById("actthumb1")
var abook1=document.getElementById("act-book1")
var abtn1=document.getElementById("actbtn1")

function actlike1(){
if(aheart1.style.color=="rgb(196, 28, 28)"){
    aheart1.style.color="black"
}else{aheart1.style.color="rgb(196, 28, 28)"}
}
function actdislike1(){
    if(adislike1.style.color=="blue"){
        adislike1.style.color="black"
    }else{
        adislike1.style.color="blue"
    }
}
function actadd1(){
    if(abtn1.innerHTML=="Add To The List"){
        abtn1.innerHTML="Added";
        abtn1.style.color="green";
        abook1.removeAttribute("style");
        total.innerHTML=+total.innerHTML+9;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{abtn1.innerHTML="Add To The List";
          abtn1.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-9;
        }
}
var aheart2=document.getElementById("actheart2")
var adislike2=document.getElementById("actthumb2")
var abook2=document.getElementById("act-book2")
var abtn2=document.getElementById("actbtn2")

function actlike2(){
if(aheart2.style.color=="rgb(196, 28, 28)"){
    aheart2.style.color="black"
}else{aheart2.style.color="rgb(196, 28, 28)"}
}
function actdislike2(){
    if(adislike2.style.color=="blue"){
        adislike2.style.color="black"
    }else{
        adislike2.style.color="blue"
    }
}
function actadd2(){
    if(abtn2.innerHTML=="Add To The List"){
        abtn2.innerHTML="Added";
        abtn2.style.color="green";
        abook2.removeAttribute("style");
        total.innerHTML=+total.innerHTML+8;
        booknb.innerHTML=+booknb.innerHTML+1;
    }else{abtn2.innerHTML="Add To The List";
          abtn2.style.color="rgb(109, 69, 9)";
          booknb.innerHTML=+booknb.innerHTML-1;
          total.innerHTML=+total.innerHTML-8;
        }
}
/*fin action*/
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
/*section 6*/
var f=document.getElementById("facebook")
var i=document.getElementById("instagram")
var t=document.getElementById("twitter")
var y=document.getElementById("youtube")

function fwhiter(){
    f.style.fill="white";

}
function fnormal(){
    f.style.fill="rgb(214, 212, 207)";

}
function iwhiter(){
    i.style.fill="white";

}
function inormal(){
    i.style.fill="rgb(214, 212, 207)";

}
function twhiter(){
    t.style.fill="white";

}
function tnormal(){
    t.style.fill="rgb(214, 212, 207)";

}
function ywhiter(){
    y.style.fill="white";

}
function ynormal(){
    y.style.fill="rgb(214, 212, 207)";

}
var l1=document.getElementById("footerlink1")
var l2=document.getElementById("footerlink2")
var l3=document.getElementById("footerlink3")
var l4=document.getElementById("footerlink4")
var l5=document.getElementById("footerlink5")
var l6=document.getElementById("footerlink6")
var l7=document.getElementById("footerlink7")
var l8=document.getElementById("footerlink8")
function l1whiter(){
    l1.style.color="white"; 
}
function l1normal(){
    l1.style.color="rgb(214, 212, 207)"; 
}
function l2whiter(){
    l2.style.color="white"; 
}
function l2normal(){
    l2.style.color="rgb(214, 212, 207)"; 
}
function l3whiter(){
    l3.style.color="white"; 
}
function l3normal(){
    l3.style.color="rgb(214, 212, 207)"; 
}
function l4whiter(){
    l4.style.color="white"; 
}
function l4normal(){
    l4.style.color="rgb(214, 212, 207)"; 
}
function l5whiter(){
    l5.style.color="white"; 
}
function l5normal(){
    l5.style.color="rgb(214, 212, 207)"; 
}
function l6whiter(){
    l6.style.color="white"; 
}
function l6normal(){
    l6.style.color="rgb(214, 212, 207)"; 
}
function l7whiter(){
    l7.style.color="white"; 
}
function l7normal(){
    l7.style.color="rgb(214, 212, 207)"; 
}
function l8whiter(){
    l8.style.color="white"; 
}
function l8normal(){
    l8.style.color="rgb(214, 212, 207)"; 
}
/* end section 6*/