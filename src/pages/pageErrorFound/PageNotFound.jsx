import "./styles.scss";

import HeaderSlider from "../../components/HeaderSlider/HeaderSlider";

function PageNotFound() {
  return (
    <>
      <div className="over--container"></div>
      <section className="App__pageNotFound w-full page">
        <div className="container">
          <div className="App__pageNotFound__container">
            <div className="App__pageNotFound__content">
              <div className="box__text">
                <h1 className="title">Страница не найдена</h1>
                <p>Скорое всего страница была удалена или перемещена.</p>
              </div>
              <div className="App__pageNotFound__video">
                <img src="./images/png/error-page__img.webp" alt="erro image" />
              </div>
            </div>
          </div>
          <h2 className="App__pageNotFound__text">Случайный фильм)</h2>
          <HeaderSlider pNone={0} />
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
