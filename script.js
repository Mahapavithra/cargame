const btn=document.getElementById("btn");
const ptag=document.getElementById("ptag");
const ul=document.getElementById("ul");

btn.addEventListener('click' ,function(e){
    function startgame(){
        if(ptag.innerHTML===""){
            const create=document.createElement("h2");
            create.textContent="Game Started";
            ptag.appendChild(create);
        }
        else{
            btn.value="again start";
            ul.innerHTML="";
        }

    }
    startgame();

    var petrolpumps=[];
    do{
        const randomNum=Math.floor(Math.random()*100)+1;
        if(!petrolpumps.includes(randomNum)){
            petrolpumps.push(randomNum);
        }
    }while(petrolpumps.length<6);
    console.log(petrolpumps)

    const pump=document.createTextNode(`petrolpumps generated are ${petrolpumps}`);
    ul.appendChild(pump);

    var move=1;
    var rem=30;
    var position=0;

    do{
        var random=Math.floor(Math.random()*6+1);
        position=position+random;
        rem=rem-random;
            if(petrolpumps.includes(position)){
                rem=rem+20;
                console.log(rem)
            }
            var output=`move ${move} - car at position ${position}, petrol remaining is ${rem<=0? '0':rem}`;
            var li=document.createElement("li");
            li.append(output);
            ul.appendChild(li);
            move++;
    }while(move<100 && rem>0)

    if(rem>0){
        var li=document.createElement('h2');
        li.textContent="Reached";
        ul.appendChild(li);
        againstart();
    }
    else{
        var li=document.createElement('h2');
        li.textContent="Game over";
        ul.appendChild(li);
        againstart();
    }
});
function againstart(){
        btn.innerHTML="Again Start";
        btn.style.visibility="visible";
        btn.value="again start";
}
