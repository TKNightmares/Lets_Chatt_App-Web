function addUser(){
    Name = document.getElementById("user_name").value;
    localStorage.setItem("Username", Name);
    window.location = "chat_room.html";
}