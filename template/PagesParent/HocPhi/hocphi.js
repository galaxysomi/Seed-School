function findTuition() {
    axios.get()  // dien link api vao
      .then((hocphi) => {       
        let tuition = " ";
        $.each(hocphi.data, function (index, value) {
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
      });   
    }
    function submitSuccess(){
      alert("Submit thành công");
  }