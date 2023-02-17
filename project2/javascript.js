function checkAdmin() {
        var user = prompt("User: ");
        var password = prompt("Password: ");
        if (user == "admin" && password == "admin")
            window.location.replace("admin.html");
        else
            alert("Forbidden access!");
}


function initializeStorage(){
  if (typeof(localStorage.students) == "undefined") {
    localStorage.students="[]";
  }
}

function resetStorageUtenti(){
  localStorage.students="[]";
}

function stampaStorageSemplice(){
  var u = JSON.parse(localStorage.students);
  var l = u.length;
  var s = new String("<h3>Stato di localStorage:</h3>");
  for (i=0;i<l;i++)
    s += JSON.stringify(u[i])+"<br/>";
  document.getElementById("vistaStorage").innerHTML=s;
  return true;
}

function stampaStorageTabella(){
  var u = JSON.parse(localStorage.students);
  var l = u.length;
  var s = new String("<h3>Stato di localStorage:</h3>");
  s +="<table border=1><tr><th>cognome</th><th>nome</th><th>matricola</th><th>sport</th></tr>";
  for (i=0;i<l;i++)
    s += "<tr><td>"+u[i].name+"</td><td>"+u[i].surname+"</td><td>"+u[i].matr+"</td><td>"+u[i].sport+"</td></tr>";
  s += "</table>";
  document.getElementById("vistaStorage").innerHTML = s;
  return true;
}

function equals(saved,saving){
  if ((saved.name==saving.name)&&(saved.surname==saving.surname)&&(saved.matr==saving.matr)&&(saved.sport==saving.sport)) 
    return true;
  return false;
}

function addUser() {
  var studentData = JSON.parse(localStorage.students);
  var len = studentData.length;
  var newStudent = { name:document.inscription.name.value, 
            surname:document.inscription.surname.value, 
            matr:document.inscription.matr.value,
            sport:document.inscription.sport.value
        };
  for (i=0;i<len;i++)
    if(equals(studentData[i],newStudent)) {
      alert("You're already registered for this sport!");
      return false;
    }
  alert("Well done, you're registered in "+newStudent["sport"]);
  studentData[len] = newStudent;
  localStorage.students = JSON.stringify(studentData);
  return true;
}