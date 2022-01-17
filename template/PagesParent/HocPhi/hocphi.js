const host = 'http://localhost:3000'
axios.get(host + '/api/parent/tuition', {
  headers: { Authorization: 'Bearer ' + localStorage.token }
}).then(result => {
  if (result.data.status === 'ok') {
    console.log(result.data);
    let tuition = " ";
        $.each(result.data.tuition, function (index, value) {
          tuition += `
          <tr>
            <td> ${value.month} </td> 
            <td> ${value.name} </td> 
            <td> ${value.tuition} </td> 
            <td> ${value.deadline} </td> 
            `;
          if(value.status == 'Đã nộp'){
            tuition += `
            <td><label class="badge badge-success">${value.status}</label></td>
            </tr>              
           `
          }
          if(value.status == 'Chưa nộp'){
            tuition += `
            <td><label class="badge badge-danger">${value.status}</label></td>
            </tr>              
           `
          }                
        });
        $('#tuitionTable').html(tuition);
  }
})

        
      