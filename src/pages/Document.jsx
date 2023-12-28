function Document() {
  return (
    <div className="document w-full page">
      <div className="container">
        <div className="document__body">
          <h1 className="document__title">Правообладателям</h1>
          <div className="document__text--container">
            <h3 className="document__title--min">О проекте</h3>
            <p className="document__description">
              5dorama.online — информационно-развлекательный ресурс (далее —
              Ресурс), предназначенный для общения и обмена информацией между
              поклонниками кинематографа стран Азии (дорам, лакорнов и т.д.).
              Все материалы, размещенные на сайте, предназначены исключительно
              для ознакомительных и культурно-развлекательных целей, попадают
              под требования добросовестного использования и не предназначены
              для коммерческого и/или иного неправомерного использования, а их
              источниками являются иные открытые ресурсы, размещающие контент в
              свободном доступе.
            </p>
          </div>
          <div className="document__text--container">
            <h3 className="document__title--min">Защита авторских прав</h3>
            <p className="document__description">
              Если вы являетесь правообладателем и считаете, что на Ресурсе
              размещен контент, принадлежащий вам и подлежитащий защите
              законодательством в области авторского, смежного и/или иного
              интеллектуального права, мы просим вас оповестить нас об этом,
              отправив соответствующее уведомление на адрес
              <a
                className="document__link"
                href="5doramaapi@gmail.com"
                target="_blank"
              >
                bizning-droma.gmail.com
              </a>
              , составив данное уведомление в форме, установленной действующим
              законодательством вашей страны, и приложив к письму документ,
              подтверждающий ваше право собственности на указанный контент. Мы
              оперативно среагируем на ваше обращение!
            </p>
          </div>
          <div className="document__text--container">
            <h3 className="document__title--min">
              Удаление или блокирование доступа к материалам
            </h3>
            <p className="document__description mb-10">
              В течение трёх рабочих дней мы рассмотрим ваше обращение и примем
              необходимые меры по защите интеллектуальной собственности, правами
              на которую вы обладаете. Указанные меры могут включать следующие
              действия: частичное или полное ограничение доступа к указанным
              материалам, удаление контента или направление встречного
              уведомления физическому и/или юридическому лицу, отправившему
              уведомление о нарушении авторских прав, с целью дальнейшего
              уточнения информации — в случае, если предоставленных раннее
              данных было не достаточно для установления права собственности на
              контент.
            </p>

            <p className="document__description">
              Пользователи Ресурса, замеченные в нарушении авторских прав при
              использовании в любой мере сервисов, предоставляемых Ресурсом,
              могут быть лишены права доступа к Ресурсу в одностороннем порядке
              без объяснения причин.
            </p>
          </div>
          <div className="document__text--container">
            <h3 className="document__title--min">
              Встречное уведомление и восстановление доступа к материалам
            </h3>
            <p className="document__description mb-10">
              В случае, если доступ к материалам Ресурса был заблокирован и/или
              материал был удален по причине получения уведомления о нарушении
              авторских прав, пользователь Ресурса, считающий себя обладателем
              права собственности на контент, имеет право направить встречное
              уведомление с просьбой восстановить доступ к контенту на адрес
              <a
                className="document__link"
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
              >
                bizning-droma.gmail.com
              </a>
              , предоставив убедительные доказательства обладания правами на
              указанный контент. После рассмотрения обращения, в случае
              удовлетворения требования, право доступа к указанному контенту
              может быть восстановлено.
            </p>

            <p className="document__description">
              Обращаем ваше внимание на то, что законодательствами большинства
              стран предусмотрена ответственность для любого лица, которое
              сознательно представляет ложные сведения о нарушении материалом
              или действием авторского права и/или искажении информации о
              таковых с целью удаления, блокирования и/или восстановления
              доступа к указанным материалам и/или действиям на основании
              законодательства о защите авторского права.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Document;
