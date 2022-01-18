const host = 'http://localhost:3000'
axios.get(host + '/api/teacher/tuition', {
  headers: { Authorization: 'Bearer ' + localStorage.token }
}).then(result => {
  if (result.data.status === 'ok') {
    console.log(result);
    let tuition = " ";
        $.each(result.data.tuitions, function (index, value) {
          const totalTuition = value.baseTuition + value.late1 * 0.01 + value.late2 * 0.05 - value.validAbsence * 0.05 ;         
          tuition += `
          <tr>
            <td>${new Date(value.date).getMonth()+1} </td> 
            <td> ${value.student.name} </td> 
            <td> ${totalTuition}$</td> 
            <td> ${value.validAbsence} </td> 
            <td> ${value.invalidAbsence} </td>
            <td> ${value.late1} </td> 
            <td> ${value.late2} </td> 
            
            `;
          if(value.paid == 'Đã nộp'){
            tuition += `
            <td><label class="badge badge-success">${value.paid}</label></td>
            </tr>              
           `
          }
          if(value.paid == 'Chưa nộp'){
            tuition += `
            <td><label class="badge badge-danger">${value.paid}</label></td>
            </tr>              
           `
          }                
        });
        $('#tuitionTable').html(tuition);
  }
})