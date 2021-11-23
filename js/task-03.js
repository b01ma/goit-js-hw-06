const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

const addToList = (image) => {
 
  const itemOfList = document.createElement('li');
  itemOfList.classList.add('item');

  const imgOfItem = document.createElement('img');
  imgOfItem.classList.add('image');
  imgOfItem.src = image.url;
  imgOfItem.alt = image.alt;
  // imgOfItem.width = 340;

  itemOfList.insertAdjacentElement("afterbegin", imgOfItem);

  return itemOfList;
}

const listOfItems = images.map(addToList);

gallery.append(...listOfItems);






