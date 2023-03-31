type TableElement = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
};

fetch("https://dummyjson.com/products")
  .then((data) => {
    return data.json(); //converted to object
  })
  .then(({ products }: { products: TableElement[] }) => {
    // create table element
    const table = document.createElement("table");

   // create table header row
    const headerRow = table.insertRow();
    const idHeader = headerRow.insertCell();
    idHeader.innerText = "ID";
    const titleHeader = headerRow.insertCell();
    titleHeader.innerText = "Title";
    const descriptionHeader = headerRow.insertCell();
    descriptionHeader.innerText = "Description";
    const priceHeader = headerRow.insertCell();
    priceHeader.innerText = "Price";
    const categoryHeader = headerRow.insertCell();
    categoryHeader.innerText = "Category";

    // create table data rows
    const dataRows = products.map((product: TableElement) => {
      const dataRow = table.insertRow();
      const idCell = dataRow.insertCell();
      idCell.innerText = product.id.toString();
      const titleCell = dataRow.insertCell();
      titleCell.innerText = product.title;
      const descriptionCell = dataRow.insertCell();
      descriptionCell.innerText = product.description;
      const priceCell = dataRow.insertCell();
      priceCell.innerText = product.price.toString();
      const categoryCell = dataRow.insertCell();
      categoryCell.innerText = product.category;
      return dataRow;
    });

    // append data rows to table
    dataRows.forEach((dataRow) => {
      table.appendChild(dataRow);
    });

    // append table to HTML document
    document.body.appendChild(table);
  })
  .catch((error) => {
    console.log(error);
  });
