const doc = document;

let box = doc.getElementById("box")
const clip = doc.getElementById("clip");

clip.addEventListener("click", function(){
    
    const nav = navigator;
    // console.log("hi");
    nav.clipboard.writeText(box.innerText);
})

function checkGitURL(url){
    // url = url.toLowerCase()
    if (((url.toLowerCase()).startsWith("https://github.com/"))){
        url = url.substring("19")
        return url
    }
    else if ((url.toLowerCase()).startsWith("http://github.com/")){
        url = url.substring("18")

        return url
    }
    return undefined
}

const input = doc.getElementById("linkField");

// box.innerText = input.value;

input.addEventListener("input",function(){
    // console.log("hi");
    if (checkGitURL((input.value).trim()) == undefined){
        box.innerText = "Undefined"
    }
    else{
        let url = checkGitURL((input.value).trim())
        let username = (url.split("/"))[0]
        
        let restURL = url.substring(`${username.length+1}`)
        let RepName = (restURL).split("/")[0]

        restURL = restURL.substring(`${RepName.length+10}`)
        console.log(RepName)
        box.innerText = "https://"+username+".github.io/"+RepName+""+restURL;
    }
    
})