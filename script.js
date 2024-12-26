const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')

const cardArray = [
  {
    id: 0,
    title: 'Пвх материал 2й сорт',
    price: '170 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './image/card-img.jpeg'
  }
]

searchBtn.addEventListener('click', () => {
  console.log(searchInput.value);
})