import "./styles.scss";

// Compoenents
import HeaderPage from "../../components/HeaderPage/HeaderPage";

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
                {/* <video width="750" height="300"  srcautoplay >
                  <source src="./video/notFount__video.mp4" type="video/mp4" />
                </video> */}
                <img src="./images/png/error-page__img.png" alt="erro image" />
              </div>
            </div>
          </div>
          <h2 className="App__pageNotFound__text">Случайный фильм)</h2>
          <HeaderPage
            image="./images/png/backound__img01.png"
            containerBlur="container--blur"
          />
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
