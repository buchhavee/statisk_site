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
        <article class="product">
          <a href="produkt.html?id=${product.id}">
          <div class="product-image">
            <img class="${product.soldout && "sold-out-img"}" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
          </div>
          <div class="product-description">
              <h2>${product.productdisplayname}</h2>
              <h3>${product.brandname}</h3>
              <div class="price">
                  <p class="${product.discount && "crossout"}"> ${product.price},-</p>
                  <p class="tilbud-hidden ${product.discount && "isOnSale"}">Now <span>${Math.floor(product.price - (product.price * product.discount) / 100)}<span/>,-</p>
              </div>
              
              <span class="discount ${product.discount && "isOnSale"}">
                  <p>${product.discount}%</p>
              </span>
              <span class="sold-out ${product.soldout && "isSoldOut"}">
                  <p>Sold out</p>
              </span>
              <a href="produkt.html?id=${product.id}" id="readmore">Read more</a>
          </div>
          </a>
        </article>
      `
    )

    .join("");

  console.log(markup);

  listContainer.innerHTML = markup;
}

document.querySelectorAll("option").forEach((knap) => knap.addEventListener("click", showFiltered));

function showFiltered() {
  if (!allData) {
    console.error("Data not loaded yet");
    return;
  }
  console.log("showFiltered");
  const filter = this.dataset.gender;
  if (filter == "All") {
    showList(allData);
  } else {
    fraction = allData.filter((product) => product.gender === filter);
    showList(fraction);
  }
}

let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((json) => {
    allData = json;
    showList(allData);
  });
