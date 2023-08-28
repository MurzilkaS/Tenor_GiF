const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
btn.addEventListener("click", function(){
    const  xmlHttp = new XMLHttpRequest();
    let gif = document.querySelector("#gifs").value;
    console.log(gif);
    xmlHttp.open("GET",`https://g.tenor.com/v1/search?q=${gif}&key=LIVDSRZULELA`,true)
    xmlHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            var response_objects = JSON.parse(this.responseText)

            var output ="";
            for(let i=0; i<12;i++){
               output += `<div class="pictures">
               <img class="imgs" src = ${response_objects.results[i].media[0].gif.url}></img> 
                </div>`    
            }
            result.innerHTML = output;
        }
    }
    xmlHttp.send()
    })

