
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
            <td> ${index}</td>
            <td>${value.name}   </td>
            <td> ${value._id}  </td>
            <td> ${value.sex}  </td>                        
            <td> ${value.parent}  </td>  
            <td> ${value.birth}  </td>                        


                 
          </tr>     
      
      
            `;
    });
    $('#information').html(info);
    
  }
})

    