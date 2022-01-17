const host = 'http://localhost:3000'
axios.get(host + '/api/parent/student', {
  headers: { Authorization: 'Bearer ' + localStorage.token }
}).then(result => {
  if (result.data.status === 'ok') {
    const student = result.data.student
    console.log(result.data);
    let infoStudent = " ";
    const parent = result.data.parent
      let infoParent = " ";
              
      infoStudent += `
                <div class="col-lg-3 grid-margin">
                <div style="position: absolute;">
                  <img style="position: relative;width: 200px;height: 200px; left: 20px;border-radius: 50%;" src="https://kenh14cdn.com/2016/photo-1-1466407298127.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-4 grid-margin ">
                <div class="card">
                  <ul style="margin-top: 20px;">
                    <li>Họ và tên : ${student.name} </li>
                    <li>Ngày sinh : ${new Date(student.birth).getDate()}/${new Date(student.birth).getMonth()+1}/${new Date(student.birth).getFullYear()}</li>
                    <li>Mã học sinh : ${student._id}</li>
                    <li> Địa chỉ : ${result.data.parent.address} </li>                   
                    <li>Giới tính : ${student.sex}</li>                                    
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 grid-margin ">             
                <div class="card">
                  <ul style="margin-top: 20px;">
                    <li >Họ và tên : ${parent.name} </li>
                    <li >Ngày sinh : ${parent.birth}</li>
                    <li>Điện thoại :${parent.phoneNumber}</li>
                    <li>Giới tính : ${parent.sex}</li>
                  </ul>
                </div>             
              </div>                                 
                 `
      $('#studentInformation').html(infoStudent);
      
               
                       

  }
})
      
      
        
              
            
          
          
              
      

         