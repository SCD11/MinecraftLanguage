// alert("Well hello There !")
document.getElementById("submit").addEventListener('click',getValue);
document.getElementById("clear").addEventListener('click',()=>{
    document.getElementById('input').value=''
    element=document.getElementById('output');
    if(element){
        document.querySelector('#container').removeChild(element);
    }
})

function getValue(){
    value1 = document.getElementById("input").value;
    // console.log(value1)
    value1 = value1.toLowerCase();
    outputTranslation(value1)
}

function outputTranslation(val){
    element=document.getElementById('output');
    // console.log(element)
    if(element){
        document.querySelector('#container').removeChild(element);
    }
    if(val){
    output=document.createElement('p');
    textNode=document.createTextNode(val);
        output.setAttribute('id',"output");
        output.appendChild(textNode);
        document.querySelector('#container').appendChild(output)
    }
        // setTimeout(()=>{output.setAttribute('id','output'),100})
    // console.log("value"+output.value);
}