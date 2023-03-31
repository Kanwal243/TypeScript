fetch("https://fakestoreapi.com/products")
  .then((data) => {
    // console.log(data) json format
    return data.json(); //converted to object
  })
  .then((objectData) => {
   // console.log(objectData);

    console.log(objectData[0].title);
    let tableData = "";
     objectData.map((values) => {
       // tableData=`<h1>${values.title}</h1>`
      tableData += `  <tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
      </tr>`;
     });
   document.getElementById("table_body").innerHTML = tableData;
  }).catch((err)=>{
    console.log(err)
  })

  //=============================================================
  // fetch("https://fakestoreapi.com/products")
  // .then((data) => {
  //   // console.log(data) json format
  //   return data.json(); //converted to object
  // })
  // .then((objectData) => {
  //  // console.log(objectData);

  //   console.log(objectData[0].id);
  //   let tableData = "";
  //    objectData.map((values) => {
  //     tableData += `  <tr>
  //        <td>${values.id}</td>
  //       <td>${values.title}</td>
  //       <td>${values.description}</td>
  //       <td>${values.price}</td>
  //       <td>${values.category}</td>
  //     </tr>`;
  //    });
  //  document.getElementById("table_body").innerHTML = tableData;
  // }).catch((err)=>{
  //   console.log(err)
  // })
