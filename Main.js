var NomeDosConvidados = []; 
function Mandar() { 
    var NomeDaPessoa=document.getElementById("name1").value; 
    NomeDosConvidados.push(NomeDaPessoa); 
    console.log(NomeDaPessoa); 
    console.log(NomeDosConvidados);
    var NomeDosConvidadosComLength=NomeDosConvidados.length; 
    console.log(NomeDosConvidadosComLength); 
    document.getElementById("displayName").innerHTML=NomeDosConvidados.toString();
} 
function ListaOrganizada() { 
    NomeDosConvidados.sort(); 
    var i=NomeDosConvidados.join("<br>"); 
    console.log(NomeDosConvidados); 
    document.getElementById("sorted").innerHTML=i.toString(); 
} 
function ver() { 
    var i=NomeDosConvidados.join("<br>"); 
    console.log(NomeDosConvidados); 
    document.getElementById("p1").innerHTML=i.toString(); 
    document.getElementById("sortButton").style.display="block"; 
}
function Procurar() {
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<NomeDosConvidados.length; j++){
        if(s==NomeDosConvidados[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="encontrado: "+found+" vez(es)";

}