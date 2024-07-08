import { flattenObjectValuesIntoArray, structureBookAsHtml, renderBooksToDom } from './helper.js';
import { books } from './bookList.js';

// Click handler for search button
const captureSearchValue = () => {
  let inputValue = document.querySelector('#search-bar').value;
  return inputValue;
};

// Filter books based on search input
const filterBooks = (searchString, bookList) => {
  let flatBookList = flattenObjectValuesIntoArray(bookList);
  let outputArray = [];
  for (let i = 0; i < flatBookList.length; i++) {
    for (let j = 0; j < flatBookList[i].length; j++) {
      if (searchString === flatBookList[i][j]) {
        outputArray.push(books[i]);
      }
    }
  }
  return outputArray;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (filteredBooks) => {
  let displayDiv = document.querySelector('#bookList');
  displayDiv.innerHTML = "";
  let outputArray = [];
  for (let i = 0; i < filteredBooks.length; i++) {
    outputArray.push(structureBookAsHtml(filteredBooks[i]))
  }
  return outputArray;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  const searchText = captureSearchValue();

  const filteredBooks = filterBooks(searchText, books);

  const outputHTML = structureBooksAsHtml(filteredBooks);

  const displayDiv = document.querySelector('#bookList');
  for (let i = 0; i < outputHTML.length; i++) {
    displayDiv.appendChild(outputHTML[i]);
  }
}

// Grab search button from the DOM
const searchBtn = document.querySelector('#search-btn');


// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });
