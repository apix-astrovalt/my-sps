let userscore=0;
let compscore=0;


const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const user=document.querySelector("#a");

const comp=document.querySelector("#b");

const win=document.querySelector("#win");

const lose=document.querySelector("#lose");

const draw=document.querySelector("#draw");







const genCompChoice =()=>{

    const options =["rock","paper","scisser"];

    const value= Math.floor(Math.random()*3)
    return options[value];


}



const drawgame=()=>{

    console.log("game was draw");
    msg.innerText="game is draw";
    draw.play();

}

const showwinner=(userwin)=>{
    
    if(userwin){

        console.log("you win");
        userscore++;
        msg.innerText="you win";
        a.innerText=userscore;
        win.play();

    }


   else{
    console.log("you lose");
     compscore++;

     msg.innerText="you lose";
     b.innerText=compscore;
     lose.play();

   }

    }    


const playgame=(userchoice)=>{

    console.log("user choice=",userchoice);

   const comp= genCompChoice();
   console.log("comp choice=", comp);

   if(userchoice==comp){

    drawgame();

   }else{
    

    let userwin=true;
    if(userchoice=="rock"){
         userwin= comp=="paper"?false:true;
    }

    else if(userchoice=="paper"){

        userwin= comp== "scisser"?false:true;


    }
    else {

        userwin= comp=="rock"?false:true;

    }


    showwinner(userwin);
    console.log("user score=",userscore);
    console.log("comp score=", compscore);






    }


   }


choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{

       /// console.log("choice was clicked");
       const userchoice=choice.getAttribute("id");
       playgame(userchoice);



    });




});








