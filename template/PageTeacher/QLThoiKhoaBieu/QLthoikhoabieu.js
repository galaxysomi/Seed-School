var x = [
    {         
      date : 'Sep 15 , 2022'  ,
      time : "12h30" ,         
      activity : "câu cá",
      place : "công viên" ,
       _id :"123"
    },
    {
      date : 'Sep 15 , 2022'  ,
      time : "12h30" ,         
      activity : "câu cá",
      place : "công viên",
      _id :"123"
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
              <td> ${value.time} </td>
              <td> ${value.activity}   </td>                        
              <td> ${value.place}</td>
              <td> ${value._id}</td>          
            </tr>            
             `            
          });         
          $('#information').html(info);
      //   });
      // }
     
      