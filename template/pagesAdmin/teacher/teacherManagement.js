function findTeacher() {
    axios.get("http://localhost:3000/api/admin/teacher")  // dien link api vao
      .then((teacher) => {
        console.log(teacher);
        let info = " ";
        $.each(teacher.data, function (index, value) {
          info += `
          <tr>
            <td> ${index} </td>
            <td> ${value.name} </td>
            <td> ${value.age}   </td>                        
            <td> ${value.SDT}</td>
            <td> ${value.className}</td>                               
          </tr>            
           `            
        });         
        $('#information').html(info);
      });        
    }     
    
    $( document ).ready(findTeacher());