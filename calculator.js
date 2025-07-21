num1=0;
num2=0;
ans=0;
op="";
function func1(para)
{
    a=t1.value;
    
    if(para=="1")
    {
        if(a=="0")
        {
           a=1;
        }
        else{
            
            a=a+"1";
        }
        t1.value=a
    }
    else if(para=="0")
    {
        if(a=="0")
        {
            a=0;
        }
        else{
                a=a+"0";
        }
        t1.value=a
    }
    else if(para=="2")
    {
        if(a=="0")
        {
             a=2;
        }
        else{
                a=a+"2";
        }
        t1.value=a
    }
    else if(para=="3")
    {
        if(a=="0")
        {
            a=3;
        }
        else{
                a=a+"3";
        }
        t1.value=a
    }
    else if(para=="4")
    {
        if(a=="0")
        {
            a=4;
        }
        else{
                a=a+"4";
        }
        t1.value=a
    }
    else if(para=="5")
        {
            if(a=="0")
            {
               a=5;
            }
            else{
                
                a=a+"5";
            }
            t1.value=a
    }
    else if(para=="6")
    {
        if(a=="0")
        {
            a=6;
        }
        else{
                a=a+"6";
        }
        t1.value=a
    }
    else if(para=="7")
    {
        if(a=="0")
        {
            a=7;
        }
        else{
                 a=a+"7";
        }
        t1.value=a
    }
    else if(para=="8")
    {
        if(a=="0")
        {
            a=8;
        }
        else{
                a=a+"8";
        }
        t1.value=a
    }
    else if(para=="9")
    {
        if(a=="0")
        {
            a=9;
        }
        else{
                a=a+"9";
        }
        t1.value=a
    }
    else if(para==".")
    {
        if(a=="0")
        {
            a=".";
        }
        else{
                a=a+".";
        }
        t1.value=a
    }
    else if(para=="+")
    {
        num1=parseFloat(a);
        op="+";
        a=0;
        t1.value=a;
    }
    else if(para=="-")
    {
        num1=parseFloat(a);
        op="-";
        a=0;
        t1.value=a;
    }
    else if(para=="*")
    {
        num1=parseFloat(a);
        op="*";
        a=0;
        t1.value=a;
    }
    else if(para=="/")
        {
            num1=parseFloat(a);
            op="/";
            a=0;
            t1.value=a;
        }
    else if(para="=")
    {
        if(op=="+")
        {
            num2=parseFloat(a);
            a=num1+num2;
            t1.value=a;
        }
        else if(op=="-")
        {
            num2=parseFloat(a);
            a=num1-num2;
            t1.value=a;
        }
        else if(op=="*")
        {
            num2=parseFloat(a);
            a=num1*num2;
            t1.value=a;
        }
        else if(op=="/")
        {
            num2=parseFloat(a);
            a=num1/num2;
            t1.value=a;
        }
    }
}
