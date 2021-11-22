const categoriesRef = document.querySelector('#categories');
// console.log(categoriesRef);

// const itemRef = document.querySelector('.item');
// console.log(itemRef);

const itemsOfCategories = categoriesRef.children;
// console.log(itemsOfCategories);

const numberOfElements = itemsOfCategories.length;
console.log(`Number of Categories: ${numberOfElements}`);



for (let item of itemsOfCategories) {
    const headingRef = item.querySelector('h2').textContent;
    console.log(`Catagory: ${headingRef}`);

    const numberOfElementsOfItem = item.querySelector('ul').children.length;
    console.log(`Elements: ${numberOfElementsOfItem}`);
};

