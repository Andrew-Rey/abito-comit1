export const Home = () => {
  return (
    <div>
      <header class="header">
        <div class="container">
          <div class="header-box">
            <a href="/" class="header-logo">
              <img src="/image/logo.svg" alt="logo" />
              <span>Abito</span>
            </a>
            <div class="header-controls">
              <button class="btn btn-outline">
                Вход и регистрация
              </button>
              <button class="btn btn-primary">
                Подать обьявление
              </button>
            </div>
            <div class="headre-burger">
              <img src="/image/burger.svg" alt="menu" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="search">
          <div class="container">
            <div class="search-box">
              <input type="text" />
              <button class="btn btn-primary search-btn">
                <img class="search-btn_icon" src="/image/search.svg" alt="search" />
                <span class="search-btn_text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <section class="content">
          <div class="container">
            <div class="contetn-box">
              <div class="content-main">
                <h2 class="content-main-title">Рекомендации для вас</h2>
                <div class="content-maim_list">
                  {/*<a href="./product.html" class="content-mine_list-item">
                    <div class="content-mine_list-item--img">
                      <img src="/image/card-img.jpeg" alt="card-img" />
                    </div>
                    <h5 class="content-mine_list-item--title">Пвх материал 2й сорт</h5>
                    <strong class="content-mine_list-item--price">170 ₽</strong>
                    <div class="content-mine_list-item--desc-box">
                      <span class="content-mine_list-item--desc">Казань, р-н Вахитовский</span>
                      <span class="content-mine_list-item--desc">10 июля 11:39</span>
                    </div>
                  </a>*/}
                </div>
              </div>
              <div class="content-side">
                <h3 class="content-side-title">Сервисы и услуги</h3>
                <div class="conten-side_box">
                  <div class="content-side_list">
                    <div class="content-side_list-item">
                      <img src="/image/side-inf0-1.svg" alt="info_1" class="content-side_list-item--img" />
                      <h5 class="content-side_list-item--title">Доставка</h5>
                      <p class="content-side_list-item--text">Проверка при получении и возможность бесплатно вернуть товар
                      </p>
                    </div>
                    <div class="content-side_list-item">
                      <img src="/image/side-info-2.svg" alt="info_2" class="content-side_list-item--img" />
                      <h5 class="content-side_list-item--title">Автотека</h5>
                      <p class="content-side_list-item--text">Отчёт с историей авто: пробег, владельцы, сведения о залоге,
                        ДТП и ремонтах</p>
                    </div>
                    <div class="content-side_list-item">
                      <img src="/image/side-info-3.svg" alt="info_3" class="content-side_list-item--img" />
                      <h5 class="content-side_list-item--title">Онлайн-бронирование жилья</h5>
                      <p class="content-side_list-item--text">Посуточная аренда квартир и домов: большой выбор вариантов для
                        поездок по России</p>
                    </div>
                  </div>
                  <div class="content-side_footer">
                    <p class="content-side_footer--item">
                      © ООО «Абито», 2011–2021
                    </p>
                    <a href="#" class="content-side_footer--item">
                      Политика конфиденциальности
                    </a>
                    <a href="#" class="content-side_footer--item">
                      Политика конфиденциальности
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}