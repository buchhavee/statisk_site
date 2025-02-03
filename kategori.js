const categoryList = document.querySelector("#categoryList");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  console.log(data);

  const markup = data
    .map(
      (category) =>
        `
            <a href="produktliste.html?category=${category.category}">${category.category}</a>
        `
    )

    .join("");

  console.log(markup);

  categoryList.innerHTML = markup;
}
