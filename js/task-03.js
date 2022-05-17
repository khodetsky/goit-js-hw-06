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
const imagesEl = images.forEach(image => {
  const galleryElement = document.createElement('li');
  const newImage = document.createElement('img');
  newImage.classList.add('gallery__image')
  newImage.src = image.url;
  newImage.alt = image.alt;
  newImage.style.width = '750px';
  galleryElement.style.marginLeft = '200px';
  galleryElement.style.marginBottom = '20px';
  galleryElement.style.listStyle = 'none';
  galleryElement.append(newImage)
  return gallery.append(galleryElement);
});

  gallery.lastElementChild.style.marginBottom = '0px';
  gallery.lastElementChild.style.marginLeft = '400px';
  gallery.firstElementChild.style.marginLeft = '0px';