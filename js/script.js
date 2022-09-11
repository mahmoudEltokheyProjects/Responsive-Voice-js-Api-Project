/* Get "selectBox" element */
let select = document.querySelector(".select select");
// call "selectOptions()" function
selectOptions();
// create "selectOptions()" function
function selectOptions()
{
    var voicelist = responsiveVoice.getVoices(); 
    voicelist.forEach( voiceElem => {
        select.innerHTML+= `<option value='${voiceElem.name}'> ${voiceElem.name} </option>` ;
    });
}
let textareaElem = document.querySelector("#txt"),
    buttonElem   = document.querySelector(".button");
// when click on button , it will get textarea Value and put it as parameter to speak function
buttonElem.addEventListener("click",function(){
    let textAreaVal = textareaElem.value ;
    // convert text to voice
    responsiveVoice.speak(textAreaVal);
    // add class "active" to button to show animation during 3 seconds
    buttonElem.classList.add("active");
    // after 3 seconds , it will remove animation from button
    setTimeout( function(){
        buttonElem.classList.remove("active");
    } , 3000 );
});
// selectBox اللي اخترته من ال voice وهحط فيه ال setDefaultVoice هينادي علي الدالة selectBox من ال voice لما اختار اي 
select.addEventListener("change",function(){
    responsiveVoice.setDefaultVoice(select.value);
});


