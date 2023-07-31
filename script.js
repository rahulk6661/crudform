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
    var datasubmit={
        "name":name,
        "email":email,
        "phone":phone,
        "category":category,
        "time":time
    }
    //server connection
    axios.post("https://crudcrud.com/api/d2df527bc98f4819931f322cc6444009/appointmentapp",datasubmit).then((res)=>console.log(res)).catch((err)=>console.log(err));
    showyourdata(datasubmit);
    //empty again
    

})
//after refresh also show the data
window.addEventListener("DOMContentLoaded",()=>
{
    axios.get("https://crudcrud.com/api/d2df527bc98f4819931f322cc6444009/appointmentapp")
    .then((res)=>{
        for(var i=0;i<res.data.length;i++)
        {
            showyourdata(res.data[i]);
        }
    })
})
//



function showyourdata(user)
{
//creating li tag
var li=document.createElement("li");
//creating next-node
var textcontent=document.createTextNode(user.name+" "+user.email+" "+user.phone+" "+user.category+" "+user.time);

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
document.getElementById("txt").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("dis").value="";
    document.getElementById("time").value="";
}
ul.addEventListener("click",(e)=>
{
    if(e.target.classList.contains('delete'))
    {
        var li=e.target;
     let data=li.parentNode.textContent;
     let slice=data.split(" ");
     let data2=slice[0];
     deletehandler(data2);
     var li = e.target.parentElement;       
     ul.removeChild(li);
    }

    
})
//edit button
function deletehandler(postid)
{
     axios.delete(`https://crudcrud.com/api/d2df527bc98f4819931f322cc6444009/appointmentapp/${postid}`);

     
}
   
    
