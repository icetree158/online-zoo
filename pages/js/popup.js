const popupsLinks=document.querySelectorAll('.popup-link')
const body=document.querySelector('body')
let popupCloseX=document.querySelectorAll('.popup__close')
const buttonClick=document.getElementById('input_value')
const aciveButton=document.querySelectorAll('.button__active')
const subBut=document.getElementById("SUB")

function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  } 





for (let i = 0; i < aciveButton.length; i++) {
    aciveButton[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

    });
  }
  


buttonClick.addEventListener("click", function(){
    document.getElementById('button__otherAmout').value=document.getElementById('button_value').value;
    if(document.getElementById('button_value').value){
        let current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          document.querySelector('.other__amount').className+=" active"
    } 
    
});

if(popupsLinks.length>0){
    for(let i=0;i<popupsLinks.length;i++){
        const popupsLink=popupsLinks[i];
        popupsLink.addEventListener("click", function(e){
        const popupName=popupsLink.getAttribute('action').replace('#','');
        const corectPopup=document.getElementById(popupName)
        popupOpen(corectPopup);
        e.preventDefault();
        });
    }
}
if(popupCloseX.length>0){
    for(let i=0; i<popupCloseX.length;i++){
        const elpopupClose=popupCloseX[i];
        elpopupClose.addEventListener('click', function(e){
            popupClosefun(elpopupClose.closest('.popup'));
            e.preventDefault();
        });
    }
}
    function popupOpen(corectPopup){
        if(corectPopup){
            const popupNowActive=document.querySelector('.popup.open');
            if(popupNowActive){
                popupClosefun(popupNowActive,false)
            }
            corectPopup.classList.add('open');
            corectPopup.addEventListener('click',function(e){
                if(!e.target.closest('.popup__content')){
                    popupClosefun(e.target.closest('.popup'));
                }
            });
        }
    }
    function popupClosefun(popupNowActive){
        
            popupNowActive.classList.remove('open');       
        
    }
   
    

    function checCard(){
        if(document.getElementById("num_card").value.length===12 && document.getElementById("lenCvv").value.length===3){
            subBut.disabled = false
          
        }
        else 
        subBut.disabled = true
        
    }
    document.getElementById("num_card").addEventListener("input",checCard)
    document.getElementById("lenCvv").addEventListener("input",checCard)
