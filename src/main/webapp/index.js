function showValue(value) {
    var form = document.querySelector("#param_r");
    form.value = value;
}
function showValueX(value) {
    var form = document.querySelector("#param_x");
    form.value = value;
    inputs=document.getElementsByClassName("x");
    for(var i=0;i<inputs.length;i++) {
        inputs[i].onchange=function() {
            for(var i=0;i<inputs.length;i++)
            {
                if(inputs[i].type=="checkbox")
                {
                    inputs[i].checked=false;
                }
                this.checked=true;
            }
        }
    }
}

const form = document.querySelector('.user-form');
form.addEventListener('submit', (evt) => {
    // Отменяем действие по умолчанию
    evt.preventDefault();
    // Получаем значения полей формы
    let x = document.querySelector("#param_x").value;
    let y = document.querySelector("#y").value;
    let r = document.querySelector("#param_r").value;

    if (x==="") {
        alert('Choose X');
        evt.preventDefault();
        return;
    }
    if (y==="") {
        alert('Choose Y');
        return;
    }
    if (r==="") {
        alert('Choose R');
        return;
    }

    if (isNaN(Number.parseFloat(y)) || Number.parseFloat(y) < -3 || Number.parseFloat(y) > 5) {
        alert('Enter number from -3 to 5');
        return;
    }

    form.submit();
});
