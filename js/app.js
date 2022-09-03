
/*

let h1Entry = ()=>
{
    $('.welcomeScreen h1').animate({'left' : '0%'}, 2000,divUp);
}

let divUp = ()=>
{
    $('.welcomeScreen').animate({'top':'0px'},2000, lessFontSize);
}

let lessFontSize = ()=>
{
    $('.welcomeScreen h1').animate({'font-size' : '40px'}, 2000);
}



h1Entry();
*/

let s = Array("hello There!","I'm Mohammed Adel");
let n = 11;
let curr = 0;
let currWord = 0;
let x = document.querySelector('.wordContainer textarea');


x.style.disabled = true;

let PreType = ()=>
{
    if(currWord >= s.length)
        return;

    x.value = "";
    curr = 0;

    x.focus();
    x.setSelectionRange(curr + 1, curr + 1);

    let y= "";
    y = s[currWord];

    setTimeout(()=>{ typeWord(y) },1000);

}

let typeWord = (Word)=>
{
    if (curr == Word.length)
    {
        setTimeout(()=>{postType()},1000);
        return;
    }

    x.value += Word[curr];

    x.focus();
    x.setSelectionRange(curr + 1, curr + 1);

    curr++;
    
    setTimeout(()=>{typeWord(Word)},100);
}

let postType = ()=>
{
    if (curr < 0)
    {
        currWord++;
        PreType();
        return;
    }


    if (currWord == s.length -1 )
    {
        return;
    }
    
    x.value = x.value.substring(0,x.value.length - 1);
    curr--;
    setTimeout(()=>{postType()},100);
}


let deleteCurrentValue = ()=>
{
    x.value = "";
}

PreType();
