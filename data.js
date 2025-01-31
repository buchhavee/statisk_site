let productId = 1163;
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    
     <div class="productsite-image">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Sahara Team India Jersey">
        </div>

        <div class="product-info">
            <div class="info-group">
                <span class="info-label">Model name</span>
                <span class="info-value">${data.productdisplayname}</span>
            </div>

            <div class="info-group">
                <span class="info-label">Color</span>
                <span class="info-value">${data.colour1}</span>
            </div>

            <div class="info-group">
                <span class="info-label">Inventory number</span>
                <span class="info-value">${data.id}</span>
            </div>

            <div class="separator"></div>

            <div class="info-group">
                <div class="brand-logo">
                    <img src="${data.brandimage}" alt="Nike Logo" width="80" height="40">
                </div>
                <p class="brand-description">${data.brandbio}</p>
            </div>
        </div>

        <div class="purchase-section">
            <h1 class="product-title">${data.productdisplayname}</h1>
            <p class="product-category">${data.brandname} | ${data.articletype}</p>

            <div class="size-selector">
                <label for="size" class="size-label">Choose a size</label>
                <select id="size" class="size-select">
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                </select>
            </div>
        <button class="add-to-basket">Add to basket</button>
        </div>
    `;
  });
