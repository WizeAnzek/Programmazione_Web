function checkAdmin() {
        var user = prompt("User: ");
          if (!user)
            return ;
        var password = prompt("Password: ");
          if (!password)
            return ;
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

function resetStorage(){
  if (confirm("Are you sure you want to remove all your data?"))
    if (confirm("I tell you the last time, are you really sure?"))
      localStorage.students="[]";
}


function printStorage(){
  var u = JSON.parse(localStorage.students);
  var l = u.length;
  var s = new String("<h3>Inscriptions register:</h3>");
  s +="<table class=\"styled-table\"><thead><tr><th>Name</th><th>Surname</th><th>Matriculation number</th><th>Sport</th></tr></thead><tbody>";
  for (i=0;i<l;i++)
    s += "<tr><td>"+u[i].name+"</td><td>"+u[i].surname+"</td><td>"+u[i].matr+"</td><td>"+u[i].sport+"</td></tr>";
  s += "</tbody></table>";
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
  window.location.replace("index.html");
  return true;
}