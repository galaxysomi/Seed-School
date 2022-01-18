
    function findMenu() {
      axios.get('http://localhost:3000/api/admin/foodmenu')  // dien link api vao
        .then((x) => {
          console.log(x);
          let info = " ";
          $.each(x.data, function (index, value) {            
            info += `
            <tr>            
              <td> ${new Date(value.date).getDay()+1} </td>
              <td> ${new Date(value.date).getDate()}/${new Date(value.date).getMonth()+1}/${new Date(value.date).getFullYear()} </td>            
              <td> ${value.monChinh} </td>
              <td> ${value.monDiemTam}   </td>                        
              <td> ${value.quaChieu}</td>               
              <td>
              <button onClick = "getMenuById('${value._id}')"  style="margin-top: 20px;" type="button" class="btn btn-primary" data-toggle="modal" data-target="#changeFoodMenu">
                        Sửa
                      </button>
                      <button onClick = "getMenuById('${value._id}')"  style="margin-top: 20px;" type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteActivity">
                        Xóa
                      </button>  
              </td>            
            </tr>            
             `            
          });         
          $('#information').html(info);
        });
      }                  

      $(document).ready(function () {
        findMenu();
    });
    
    function deleteMenu() {
      const id = document.getElementById("invisibleID").value
      axios.delete('http://localhost:3000/api/admin/foodmenu/'+ id)
      .then((rs) => {
        console.log(rs);
        if(rs.data.success){
        alert("Xóa menu thành công")
        refreshPage();
      }
      })
    }

    function addMenu() {
      axios.post('http://localhost:3000/api/admin/foodmenu/add',{
        date : document.getElementById("date").value,
        monChinh:document.getElementById("monChinh").value,
        monDiemTam: document.getElementById("monTrua").value,
        quaChieu : document.getElementById("quaChieu").value
      })
      .then((rs) => {
        
        console.log(rs.data);
        
        
        if(rs.data.success == true ){
          alert("Thêm thành công");
        }else{
          alert("Bạn đã thêm thực đơn ngày này");
        }
        refreshPage();               
      })   
    }

    function refreshPage() {
      window.location.reload();
    }
    
    function themMoiOnClick() {

      addMenu();

    }

    function deleteMenuOnClink(id) {
      deleteMenu(id);       
    }

    function getMenuById(id){
      axios.get('http://localhost:3000/api/admin/foodmenu/'+id).then(data =>{
        //document.getElementById("changeDate").value = data.data.date ;
        document.getElementById("changeMonChinh").value = data.data.monChinh ;
        document.getElementById("changeMonDiemTam").value = data.data.monDiemTam;
        document.getElementById("changeQuaChieu").value = data.data.quaChieu;    
        document.getElementById("invisibleID").value = id ;
           
                     
      })
    }


    function changeMenuByID() {
      const id = document.getElementById("invisibleID").value
      console.log(id);
      axios.put('http://localhost:3000/api/admin/foodmenu/'+id,{
        date : document.getElementById("changeDate").value,
        monChinh:document.getElementById("changeMonChinh").value,
        monDiemTam: document.getElementById("changeMonDiemTam").value,
        quaChieu : document.getElementById("changeQuaChieu").value
      })
      .then((rs) => {      
        if(rs.data.success){
            alert(rs.data.message);
            refreshPage()
        }else{
            alert(rs.data.message)
            refreshPage()
      }
    })
    }