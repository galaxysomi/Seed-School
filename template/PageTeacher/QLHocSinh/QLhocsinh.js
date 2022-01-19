
const host = 'http://localhost:3000'
axios.get(host + '/api/teacher/student', {
  headers: { Authorization: 'Bearer ' + localStorage.token }
}).then(result => {
  if (result.data.status === 'ok') {
    console.log(result);
    let students = result.data.students;
    let info = " ";
    $.each(students, function (index, value) {
      info += `
      <tr>
            <td> ${index+1}</td>

            <td> ${value.name}   </td>
            <td> ${convertDateToString(value.birth)}  </td>                                  
            <td> ${value.sex}  </td>

            <td> ${value.parent.name}  </td>  
            <td> ${convertDateToString(value.parent.birth)}  </td>  
            <td> ${value.parent.phoneNumber}  </td>  
            
            <td> ${value.parent.sex}  </td>  
            <td>
            <button onClick="getStudentById('${value._id}')" style="margin-top: 50px;  margin-bottom: 50px;" type="button" class="btn btn-primary" data-toggle="modal" data-target="#changeStudent">
            Sửa
          </button>
          <button onClick="deleteStudentByID('${value._id}')" style="margin-top: 50px;  margin-bottom: 50px;" type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteStudent">
            Xóa
          </button>
            </td>                                                                  
          </tr>     
      
      
            `;
    });
    $('#information').html(info);
    
  }
})

function getStudentById(id){
  console.log("123");
  console.log(id);
  axios.get('http://localhost:3000/api/teacher/student/'+id,{
    headers: { Authorization: 'Bearer ' + localStorage.token }
  }).then(data =>{
    console.log(data.data.student);
    let student = data.data.student;
    let parent = student.parent;
    document.getElementById("changeName").value = student.name ;
    document.getElementById("changeSex").value = student.sex ;
    document.getElementById("changeAddress").value = parent.address ;
    document.getElementById("changeNameParent").value = student.parent.name ;
    document.getElementById("changeSexParent").value = parent.sex;
    document.getElementById("changePhoneNumber").value = parent.phoneNumber ;
    document.getElementById("changeUsername").value = parent.username ;
    document.getElementById("changePassword").value = parent.password ;


    document.getElementById("invisibleID").value = id ;
  })
}


function changeStudentById(){
  console.log(localStorage.token);
  const id = document.getElementById("invisibleID").value;
  console.log(id);
  axios.put('http://localhost:3000/api/teacher/student/'+id,{
    sInfo:{
      sName : document.getElementById("changeName").value ,
      sSex : document.getElementById("changeSex").value  ,
      sBirth : document.getElementById("changeBirth").value ,
    },
    pInfo:{
      pName  : document.getElementById("changeNameParent").value  ,
      pBirth  : document.getElementById("changeBirthParent").value  ,
      pAddress : document.getElementById("changeAddress").value  ,
      pSex : document.getElementById("changeSexParent").value ,
      pPhoneNumber: document.getElementById("changePhoneNumber").value  ,
      pUserName : document.getElementById("changeUsername").value ,
      pPassword : document.getElementById("changePassword").value ,
    }    
  },{
    headers: { Authorization: 'Bearer ' + localStorage.token }
  }).then(rs =>{
    console.log(rs);
  })
}

function addStudent(){
  axios.post('http://localhost:3000/api/teacher/student/',{
    sInfo:{
      sName : document.getElementById("name").value ,
      sSex : document.getElementById("sex").value  ,
      sBirth : document.getElementById("birth").value ,
    },
    pInfo:{
      pName  : document.getElementById("nameParent").value  ,
      pBirth  : document.getElementById("birthParent").value  ,
      pAddress : document.getElementById("address").value  ,
      pSex : document.getElementById("sexParent").value ,
      pPhoneNumber: document.getElementById("phoneNumber").value  ,
      pUserName : document.getElementById("username").value ,
      pPassword : document.getElementById("password").value ,
    }    
  },{
    headers: { Authorization: 'Bearer ' + localStorage.token }
  }).then(rs =>{
    console.log(rs);
  })
}




function deleteStudentByID(id){
  axios.delete('http://localhost:3000/api/teacher/student/'+id,{
    headers: { Authorization: 'Bearer ' + localStorage.token }
  }).then(rs =>{
    console.log(rs);              
  })
}

function clearFieldAdd() {
  document.getElementById("name").value=''
  document.getElementById("sex").value=''
  document.getElementById("nameParent").value=''
  document.getElementById("sexParent").value=''
  document.getElementById("address").value=''
  document.getElementById("phoneNumber").value=''
  document.getElementById("username").value=''
  document.getElementById("password").value=''

}

function convertDateToString(date) {
  const d = new Date(date)
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //Months are zero based
  var curr_year = d.getFullYear();
  return curr_date + "/" + curr_month + "/" + curr_year
}