// JavaScript Document
 window.onload=function(){
 	var midrightheight=document.getElementById("midright");
	var midheight=document.getElementById("mid");
	var maincont=document.getElementById("maincont");
	var midleftheight=document.getElementById("midleft");	
	if(midleftheight.offsetHeight>midrightheight.offsetHeight)//�ұ����ݴ����������
	{
		midmin=midleftheight.offsetHeight;
	}
	else{		
		midmin=midrightheight.offsetHeight;		
	}
		maincont.style.height=midmin+"px";
		midheight.style.height=maincont.offsetHeight+80+"px";		
	
}

//		bottom.style.marginTop="616px"; ����marging