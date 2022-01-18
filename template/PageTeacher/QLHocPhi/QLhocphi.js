var x = [
    {
      month : 1 ,
      name : 'Tung tran'  ,
      tuition : "50$" ,
      nghicophep : "4",
      nghikhongphep1 : "2" ,
      nghikhongphep2 : "2" ,
      status : "Đã nộp"
    },
    {
      month : 2 ,
      name : 'Quang'  ,
      tuition : "50$" ,
      nghicophep : "4",
      nghikhongphep1 : "2" ,
      nghikhongphep1 : "2" ,
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
              <td> ${value.nghicophep} </td>
              <td> ${value.nghikhongphep1} </td>
              <td> ${value.nghikhongphep2} </td>
              <td> ${value.tuition} </td> 
               
              
              `;
            if(value.status == 'Đã nộp'){
              tuition += `
              <td>
              <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" checked> Đã nộp </label>
              </div>
              </td>
                       
             `
            }
            if(value.status == 'Chưa nộp'){
              tuition += `
              <td>
              <div class="form-check">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" checked> Đã nộp </label>
                            </div>
              </td>
                         
             `
            }
            tuition += `
            <td>
             
            </td>
            </tr> 
            `
                         
          });
          $('#tuitionTable').html(tuition);
      //   });
    
      // }
     
      