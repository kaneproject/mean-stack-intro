var ajax;
function construirObjetoAjax(){
    if(window.XMLHttpRequest){
        ajax = new XMLHttpRequest();
    }else{
        ajax = new ActiveXObject("microsoft.XMLHTTP");
    }
}
function procesarRespuesta(){
    if(ajax.readyState == 4){
        if(ajax.status == 200){
            document.getElementById("resultado").innerHTML = ajax.responseText;
        }
    }
}
function hacerPeticion(){
    construirObjetoAjax();
    ajax.onreadystatechange = procesarRespuesta;
    //ajax.open('GET',"http://localhost:8080/ejemplo01.html");
    ajax.open('GET',"https://www.google.es");
    ajax.send(null);
}