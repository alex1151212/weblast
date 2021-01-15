
var boo =[true,true,true,true];
$( document).ready(function() {


        
    $(".gett").click(function () {
        content_get();
    });
    $(".buyy").click(function () {
        content_buy();
    });
    $(".refundd").click(function () {
        content_refund();
    });
    $(".otherss").click(function () {
        content_others();
    });


    $(".buy_icon").click(function () {
        $(".buy").slideToggle("slow");

        if(boo[0]==true)
        {
            //$(".buy_icon").animate({borderBottom:'0px'},100);
            $(".buy_icon").css('borderBottom','#26576C solid 10px');
            boo[0]=false;
        }
        else
        {
            //$(".buy_icon").animate({borderBottom:'10px'},100);
            $(".buy_icon").css('borderBottom','#26576C solid 0px');
            boo[0]=true;
        }


        $(".get_icon").css('borderBottom','#26576C solid 0px');
        boo[1]=true;
        $(".refund_icon").css('borderBottom','#26576C solid 0px');
        boo[2]=true;
        $(".others_icon").css('borderBottom','#26576C solid 0px');
        boo[3]=true;

        $(".get").css('display','none')
        $(".refund").css('display','none')
        $(".others").css('display','none')
    });


    $(".get_icon").click(function () {
        $(".get").slideToggle("slow"); 

        
        if(boo[1]==true)
        {
            //$(".buy_icon").animate({borderBottom:'0px'},100);
            $(".get_icon").css('borderBottom','#26576C solid 10px');
            boo[1]=false;
        }
        else
        {
            //$(".buy_icon").animate({borderBottom:'10px'},100);
            $(".get_icon").css('borderBottom','#26576C solid 0px');
            boo[1]=true;
        }


        $(".buy_icon").css('borderBottom','#26576C solid 0px');
        boo[0]=true;
        $(".refund_icon").css('borderBottom','#26576C solid 0px');
        boo[2]=true;
        $(".others_icon").css('borderBottom','#26576C solid 0px');
        boo[3]=true;
        $(".buy").css('display','none')
        $(".refund").css('display','none')
        $(".others").css('display','none')
    });
    $(".refund_icon").click(function () {
        $(".refund").slideToggle("slow"); 


        if(boo[2]==true)
        {
            //$(".buy_icon").animate({borderBottom:'0px'},100);
            $(".refund_icon").css('borderBottom','#26576C solid 10px');
            boo[2]=false;
        }
        else
        {
            //$(".buy_icon").animate({borderBottom:'10px'},100);
            $(".refund_icon").css('borderBottom','#26576C solid 0px');
            boo[2]=true;
        }

        
        $(".get_icon").css('borderBottom','#26576C solid 0px');
        boo[1]=true;
        $(".buy_icon").css('borderBottom','#26576C solid 0px');
        boo[0]=true;
        $(".others_icon").css('borderBottom','#26576C solid 0px');
        boo[3]=true;

        $(".get").css('display','none')
        $(".buy").css('display','none')
        $(".others").css('display','none')
    });
    $(".others_icon").click(function () {
        $(".others").slideToggle("slow");


        if(boo[3]==true)
        {
            //$(".buy_icon").animate({borderBottom:'0px'},100);
            $(".others_icon").css('borderBottom','#26576C solid 10px');
            boo[3]=false;
        }
        else
        {
            //$(".buy_icon").animate({borderBottom:'10px'},100);
            $(".others_icon").css('borderBottom','#26576C solid 0px');
            boo[3]=true;
        }

        $(".refund_icon").css('borderBottom','#26576C solid 0px');
        boo[2]=true;
        $(".get_icon").css('borderBottom','#26576C solid 0px');
        boo[1]=true;
        $(".buy_icon").css('borderBottom','#26576C solid 0px');
        boo[0]=true;
        
        $(".get").css('display','none')
        $(".refund").css('display','none')
        $(".buy").css('display','none') 
    });


});

var a =true;

function content_get() {
    

    for(i=1;i<6;i++)
    {
       $(".getb"+i).slideToggle("slow"); 
    }

    if(a==true)
    {
        $(".get .title").animate({marginBottom:'0px'},500);
        //$(".get .title").css('marginBottom','0px');
        a=false;
    }
    else
    {
        $(".get .title").animate({marginBottom:'4px'},500);
        //$(".get .title").css('marginBottom','4px');
        a=true;
    }

    
    
}

function content_buy() {


    for(i=1;i<6;i++)
    {
       $(".buyb"+i).slideToggle("slow"); 
    }

    if(a==true)
    {
        $(".buy .title").animate({marginBottom:'0px'},500);
        //$(".get .title").css('marginBottom','0px');
        a=false;
    }
    else
    {
        $(".buy .title").animate({marginBottom:'4px'},500);
        //$(".get .title").css('marginBottom','4px');
        a=true;
    }

    
}

function content_refund() {
    for(i=1;i<3;i++)
    {
       $(".refundb"+i).slideToggle("slow"); 
    }

    if(a==true)
    {
        $(".refund .title").animate({marginBottom:'0px'},500);
        //$(".get .title").css('marginBottom','0px');
        a=false;
    }
    else
    {
        $(".refund .title").animate({marginBottom:'4px'},500);
        //$(".get .title").css('marginBottom','4px');
        a=true;
    }

    
}

function content_others() {
    for(i=1;i<8;i++)
    {
       $(".othersb"+i).slideToggle("slow"); 
    }

    if(a==true)
    {
        $(".others .title").animate({marginBottom:'0px'},500);
        //$(".get .title").css('marginBottom','0px');
        a=false;
    }
    else
    {
        $(".others .title").animate({marginBottom:'4px'},500);
        //$(".get .title").css('marginBottom','4px');
        a=true;
    }

    
}




