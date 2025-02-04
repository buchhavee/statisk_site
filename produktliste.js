const myCategory = new URLSearchParams(window.location.search).get("category");
const listContainer = document.querySelector("#productContainer");
const categoryHeading = document.querySelector("#categoryHeading");

categoryHeading.textContent = `${myCategory}`;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        `
    <div class="product">
      <article class="product ${product.discount && "udsolgt-overlay"} ${product.soldout && "udsolgt-overlay"}">
      <div class="product-image">
      
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
      </div>
      <div class="product-description">
        <h3>${product.productdisplayname}</h3>
        <p>${product.articletype} - ${product.brandname}</p>
        <p>DKK ${product.price},-</p>
        ${product.discount ? `<div class="rabat">-${product.discount}%</div>` : ""}
        <a href="produkt.html?id=${product.id}">Read more</a>
      </div>
    </div>
      `
    )

    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
