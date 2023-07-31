

const form=document.getElementById("form1");
var ul=document.getElementById("msg");

//for adding data
form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    const name=document.getElementById("txt").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("number").value;
    const category=document.getElementById("dis").value;
    const time=document.getElementById("time").value;
    //crreating object 
    

    //creating li tag
    var li=document.createElement("li");
    //creating next-node
    var textcontent=document.createTextNode(name+" "+email+" "+phone+" "+category+" "+time);

    //append textcontent in li
    li.appendChild(textcontent);

    //create edit button
    var editbutton=document.createElement("button");
    editbutton.className="edit";
    const textcontent1=document.createTextNode("Edit");
    editbutton.appendChild(textcontent1);

    //create delete button
    var deletebutton=document.createElement("button");
    deletebutton.className="delete";
    const textcontent2=document.createTextNode("Delete");
    deletebutton.appendChild(textcontent2);

    //append edit button and delete button to li
    li.appendChild(editbutton);
    li.appendChild(deletebutton);

    //append to ul
    ul.append(li);

    var datasubmit={
        "name":name,
        "email":email,
        "phone":phone,
        "category":category,
        "time":time
    }
    //server connection
    axios.post("https://crudcrud.com/api/d2df527bc98f4819931f322cc6444009/appointmentapp",datasubmit).then((res)=>console.log(res)).catch((err)=>console.log(err));
    
    //empty again
    document.getElementById("txt").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("dis").value="";
    document.getElementById("time").value="";

})

//edit button
/*ul.addEventListener("click",(postid)=>{
    if(e.target.classList.contain('edit'))
    {
     axios.get("https://crudcrud.com/api/d2df527bc98f4819931f322cc6444009/appointmentapp/${postid}",)
     
     const user=JSON.parse(localStorage.getItem(data2));
     console.log(user);
    const username=user.username;
     const email=user.email;
     const phone=user.phone;
     localStorage.removeItem(user);
     
     document.getElementById('name').value=username;
     document.getElementById('email').value=email;
     document.getElementById('phone_number').value=phone;
     var li = e.target.parentElement;       
     userList.removeChild(li);
    }
})*/