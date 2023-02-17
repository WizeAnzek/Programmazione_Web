function checkAdmin() {
        var user = prompt("User: ");
        var password = prompt("Password: ");
        if (user == "admin" && password == "admin")
            window.location.replace("admin.html");
        else
            alert("Forbidden access!");
}


function inizializzaStorageUtenti(){
  if (typeof(localStorage.utenti) == "undefined") {
    localStorage.utenti="[]";
  }
}

function resetStorageUtenti(){
  localStorage.utenti="[]";
}

function stampaStorageSemplice(){
  var u = JSON.parse(localStorage.utenti);
  var l = u.length;
  var s = new String("<h3>Stato di localStorage:</h3>");
  for (i=0;i<l;i++)
    s += JSON.stringify(u[i])+"<br/>";
  document.getElementById("vistaStorage").innerHTML=s;
  return true;
}

function stampaStorageTabella(){
  var u = JSON.parse(localStorage.utenti);
  var l = u.length;
  var s = new String("<h3>Stato di localStorage:</h3>");
  s +="<table border=1><tr><th>cognome</th><th>nome</th><th>matricola</th></tr>";
  for (i=0;i<l;i++)
    s += "<tr><td>"+u[i].c+"</td><td>"+u[i].n+"</td><td>"+u[i].m+"</td></tr>";
  s += "</table>";
  document.getElementById("vistaStorage").innerHTML = s;
  return true;
}

function uguali(u,o){
  if ((u.c==o.c)&&(u.n==o.n)&&(u.m==o.m)) 
    return true;
  return false;
}

function addUser() {
  var u = JSON.parse(localStorage.utenti);
  var nextpos = u.length;
  var o = { c:document.registrazione.cognome.value, 
            n:document.registrazione.nome.value, 
            m:document.registrazione.matricola.value };
  for (i=0;i<nextpos;i++)
    if(uguali(u[i],o)) {
      alert("Utente gia' inserito");
      return false;
    }
  alert("Dati inseriti correttamente");
  u[nextpos] = o;
  localStorage.utenti = JSON.stringify(u);
  return true;