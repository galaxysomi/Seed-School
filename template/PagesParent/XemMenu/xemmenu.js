function findMenu() {
    axios.get("http://localhost:3000/api/admin/foodmenu")  
      .then((menu) => {
        console.log(menu);
        let info = " ";
        $.each(menu.data, function (index, value) {
          info += `
          <tr>
            <td> ${value.date} </td>
            <td> ${value.description} </td>
            <td> ${value.monChinh}   </td>                        
            <td> ${value.monDiemTam}</td>
            <td> ${value.quaChieu}</td>                
          </tr>            
           `            
        });         
        $('#information').html(info);
      });
    }
    
    $( document ).ready(findMenu());