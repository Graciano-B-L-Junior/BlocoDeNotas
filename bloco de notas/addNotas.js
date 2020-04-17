var btn = $(".add-icon");
var display = $(".regiao");
var notas =[]
var id=1;

btn.click(function(){
    var nota = $(`.Nota:first`).clone();
    notas[id] =nota;
    $(".regiao").append(notas[id])
    var trash= $(".trash").eq(id);
    $(trash).attr("myId",id)
    id++;
    $(trash).click(function(){
        ident = $(trash).attr("myId");
        for(i=0;i<=id;i++){
            if(ident==i){                
                $(notas[ident]).remove();
                id--;
            }
            
        }
        console.log(ident+" ident");
        console.log(id+" id")
    })
})






