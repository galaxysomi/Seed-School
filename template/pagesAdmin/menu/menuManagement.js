var x = [
    {         
      date : 'Sep 15 , 2022'  ,
      day : "monday" ,         
      breakfast : "cá",
      lunch : "cơm" ,
      tea : " bánh"
    },
    {
      date : 'Sep 15 , 2022'  ,
      day : "monday" ,         
      breakfast : "cá",
      lunch : "cơm" ,
      tea : " bánh"
    }
  ]    
    // function findSoTheoDoi() {
    //   axios.post()  // dien link api vao
    //     .then((x) => {
          console.log(x);
          let info = " ";
          $.each(x, function (index, value) {
            info += `
            <tr>
              <td> ${value.date} </td>
              <td> ${value.day} </td>
              <td> ${value.breakfast}   </td>                        
              <td> ${value.lunch}</td>
              <td> ${value.tea}</td>                
            </tr>            
             `            
          });         
          $('#information').html(info);
      //   });
      // }                  
