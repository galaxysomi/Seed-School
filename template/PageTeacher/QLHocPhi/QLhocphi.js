var x = [
    {
      month : 1 ,
      name : 'Tung tran'  ,
      tuition : "50$" ,
      deadline : "Sep 15 , 2022",
      status : "Đã nộp"
    },
    {
      month : 2 ,
      name : 'Quang'  ,
      tuition : "50$" ,
      status: "Chưa nộp"
    }
   ]     //Object de test
    // function findTuition() {
    //   axios.post()  // dien link api vao
    //     .then((x) => {
          
          let tuition = " ";
          $.each(x, function (index, value) {
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
      //   });
    
      // }
      function submitSuccess(){
      alert("Submit thành công");
}      
function cancelSuccess(){
      alert("Cancel thành công");
}      