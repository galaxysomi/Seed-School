var x = [
    {         
      name : 'Tung tran'  ,
      studentID : "123456" ,
      date : "Sep 15 , 2022",
      status : "Đi học",
      anhDiemDanh : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgqgcSx5b7CbwTZ4E-wiVsCuEwBSiMY9gb4A&usqp=CAU"
    },
    {
      name : 'Tung tran'  ,
      studentID : "123456" ,
      date : "Sep 15 , 2022",
      status : "Nghỉ học",
      anhDiemDanh : "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/51574639_2002558206715933_3318347992666210304_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=G8rbellI_JQAX89HqdD&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-C1udkDwF5DkOTGdQHxU_6ZOsSmrne5QRY18t_OGo2BQ&oe=62070BF2"
    }
  ]    
    // function findSoTheoDoi() {
    //   axios.post()  // dien link api vao
    //     .then((x) => {
          console.log(x);
          let info = " ";
          $.each(x, function (index, value) {
            info += `
            <div class="col-lg-7 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Sổ theo dõi</h4>                  
                </p>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Tên học sinh</th>
                        <th>${value.name}</th>                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mã học sinh</td>
                        <td>${value.studentID}</td>
                        
                      </tr>
                      <tr>
                        <td>Ngày</td>
                        <td>${value.date}</td>                                                     
                      </tr>                         
                      <tr>
                        <td>Trạng thái</td>`;
                        if(value.status == 'Đi học'){
              info += `
              <td><label class="badge badge-success" id="statusText">${value.status}</label></td>           
             `
            }
            if(value.status == 'Nghỉ học'){
              info += `
              <td><label class="badge badge-danger" id="statusText">${value.status}</label></td>              
             `
            }
            info += `                          
                      </tr>                                                                                                           
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Ảnh điểm danh</h4>                  
                </p>
                <div class="table-responsive" style="position: absolute;">
                  <img id="anhDiemDanh" src="${value.anhDiemDanh}" alt="">                                           
                </div>
              </div>
            </div>
          </div>         
             `
             
          });         
          $('#information').html(info);
      //   });
      // }
     
      