    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var imageObj = new Image();

    imageObj.onload = function()
    {
        context.drawImage(imageObj, 100, 0);
    }  

    imageObj.src = "https://image.freepik.com/free-vector/abstract-background-in-geometric-style_1013-17.jpg"; 

    var myForm = document.getElementById('MDD');
    myForm.addEventListener('submit', function(e)
    {
        var sku = document.getElementById('sku').value;
        var lancet = document.getElementById('lancet').value;

        if(sku.lenght == 0)
        {
             alert("you forgot to put something");
        }

        context.font = "40pt Calibri";
        context.fillText(sku,300, 50);

        var sku = document.getElementById('lancet').value;

if(lancet.lenght == 0)
{
     alert("you forgot to put something");
}

context.font = "40pt Calibri";
context.fillText(lancet,200, 100);

        e.preventDefault();
    });
