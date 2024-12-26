const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWraper = document.querySelector('.content-maim_list')

const cardArray = [
  {
    id: 0,
    title: 'Первый товар',
    price: '170 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './image/card-img.jpeg'
  },
  {
    id: 1,
    title: 'Второй товар',
    price: '171 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './image/card-img.jpeg'
  },
  {
    id: 2,
    title: 'Третий товар',
    price: '172 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './image/card-img.jpeg'
  },
  {
    id: 3,
    title: 'Четвертый товар',
    price: '173 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './image/card-img.jpeg'
  },
  {
    id: 4,
    title: 'Пятый товар',
    price: '174 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './image/card-img.jpeg'
  },
  {
    id: 5,
    title: 'Шестой товар',
    price: '175 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './image/card-img.jpeg'
  }
]

const render = (cardlist) => {
  cardWraper.innerHTML = ''

  cardlist.forEach((item) => {
    cardWraper.insertAdjacentHTML('beforeend', `
      <a href="./product.html" class="content-mine_list-item">
        <div class="content-mine_list-item--img">
          <img src="${item.img}" alt="card">
            </div>

              <h5 class="content-mine_list-item--title">${item.title}</h5>
              <strong class="content-mine_list-item--price">${item.price}</strong>
              
              <div class="content-mine_list-item--desc-box">
                 <span class="content-mine_list-item--desc">${item.address}</span>
                 <span class="content-mine_list-item--desc">${item.date}</span>
          </div>
      </a>
      `)
  })
}

const filteredArray = (array, value) => {
  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value)
  })
}

cardWraper.style.justifyContent = 'flex-start'
cardWraper.style.rowGap = 'normal'
cardWraper.style.gap = '30px'

render(cardArray)

searchBtn.addEventListener('click', () => {
  render(filteredArray(cardArray, searchInput.value))
})