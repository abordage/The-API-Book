(function(global){global.l10n={ru:JSON.parse("{\"title\":\"API\",\"author\":\"Сергей Константинов\",\"chapter\":\"Глава\",\"toc\":\"Содержание\",\"description\":\"Разработка API — особый навык: API является как мультипликатором ваших возможностей, так и мультипликатором ваших ошибок. Эта книга написана для того, чтобы поделиться опытом и изложить лучшие практики проектирования API. Книга состоит из двух больших разделов. В первом разделе мы поговорим о проектировании API на стадии разработки концепции — как грамотно выстроить архитектуру, от крупноблочного планирования до конечных интерфейсов. Второй раздел посвящён развитию существующих API с сохранением обратной совместимости\",\"locale\":\"ru_RU\",\"file\":\"API\",\"landingFile\":\"index.ru.html\",\"aboutMe\":{\"title\":\"Об авторе\",\"content\":[\"<p>Сергей Константинов работает с API уже больше десятилетия. Он начинал свою карьеру разработчиком в подразделении API Яндекс.Карт, и со временем стал руководителем всего сервиса, отвечая и за техническую, и за продуктовую составляющую.</p>\",\"<p>За это время Сергей получил уникальный опыт построения API мирового уровня с дневной аудторией в десятки миллионов человек, планирования роадмапов для такого продукта и многочисленных публичных выступлений. Он также проработал полтора года в составе Технической архитектурной группы W3C.</p>\",\"<p>После девяти лет в Картах Сергей переключился на технические роли в других департаментах и компаниях, занимаясь интеграционными проектами и будучи ответственным за техническую архитектуру целых продуктов компании. Сегодня Сергей живёт в Таллинне, Эстония, и работает ведущим инженером в компании Bolt.</p>\"],\"imageCredit\":\"Фото: <a href=\\\"http://linkedin.com/in/zloylos/\\\">Denis Hananein</a>\"},\"url\":\"https://twirl.github.io/The-API-Book/index.ru.html\",\"favicon\":\"/img/favicon.png\",\"imageCredit\":\"Image Credit\",\"links\":{\"email\":\"yatwirl@gmail.com\",\"emailString\":\"yatwirl@gmail.com\",\"linkedinHref\":\"https://www.linkedin.com/in/twirl/\",\"linkedinString\":\"linkedin.com/in/twirl\",\"patreonHref\":\"https://www.patreon.com/yatwirl\",\"patreonString\":\"patreon.com/yatwirl\",\"patreonTag\":\"Patreon\",\"githubHref\":\"https://github.com/twirl/The-API-Book\",\"githubString\":\"github.com/twirl/The-API-Book\",\"habrHref\":\"https://habr.com/ru/users/forgotten/posts/\",\"habrTag\":\"Хабре\"},\"sourceCodeAt\":\"Исходный код доступен на\",\"frontPage\":{\"title\":\"API\",\"pageTitle\":\"Титульный лист\",\"contents\":[\"<p>«API-first» подход — одна из самых горячих горячих тем в разработке программного обеспечения в наше время. Многие компании начали понимать, что API выступает мультипликатором их возможностей — но также умножает и допущенные ошибки.</p>\",\"<p>Эта книга посвящена проектированию API: как правильно выстроить архитектуру, начиная с высокоуровневого планирования и заканчивая деталями реализации конкретных интерфейсов, и как развивать API, не нарушая обратную совместимость.</p>\",\"<p>Иллюстрации и вдохновение: Maria Konstantinova &middot; <a href=\\\"https://www.instagram.com/art.mari.ka/\\\">art.mari.ka</a>.</p>\",\"<img class=\\\"cc-by-nc-img\\\" alt=\\\"Creative Commons «Attribution-NonCommercial» Logo\\\" src=\\\"https://i.creativecommons.org/l/by-nc/4.0/88x31.png\\\"/>\",\"<p class=\\\"cc-by-nc\\\">Это произведение доступно по <a href=\\\"http://creativecommons.org/licenses/by-nc/4.0/\\\">лицензии Creative Commons «Attribution-NonCommercial» («Атрибуция — Некоммерческое использование») 4.0 Всемирная</a>.</p>\"]},\"landing\":{\"subTitle\":\"Бесплатная электронная книга\",\"subscribeOn\":\"Подпишитесь на обновления на\",\"updates\":[\"habr\"],\"supportThisWork\":\"Поддержите эту работу на\",\"support\":[\"patreon\"],\"content\":[\"<p>«API-first» подход — одна из самых горячих горячих тем в разработке программного обеспечения в наше время. Многие компании начали понимать, что API выступает мультипликатором их возможностей — но также умножает и допущенные ошибки.</p>\",\"<p>Эта книга посвящена проектированию API: как правильно выстроить архитектуру, начиная с высокоуровневого планирования и заканчивая деталями реализации конкретных интерфейсов, и как развивать API, не нарушая обратную совместимость.</p>\",\"<p>Иллюстрации и вдохновение: Maria Konstantinova &middot; <a href=\\\"https://www.instagram.com/art.mari.ka/\\\">art.mari.ka</a>.</p>\"],\"download\":\"Вы можете скачать книгу «API» в формате\",\"or\":\"или\",\"readOnline\":\"прочитать её онлайе\",\"license\":\"Это произведение доступно по <a href=\\\"http://creativecommons.org/licenses/by-nc/4.0/\\\">лицензии Creative Commons «Attribution-NonCommercial» («Атрибуция — Некоммерческое использование») 4.0 Всемирная</a>.\",\"footer\":[\"<p>You might also <a href=\\\"index.html\\\">read ‘The API’ in English</a>.</p>\"]},\"contents\":[{\"chapters\":[\"\",\"\",\"\",\"\",\"\",\"\"]},{\"chapters\":[\"\",\"\",\"\",\"\",\"\",\"\"]},{\"chapters\":[\"\",\"\",\"\",\"\",\"\",\"\",\"\"]},{\"title\":\"Часть III. API как продукт\",\"chapters\":[\"Продукт API\",\"Бизнес-модели API\",\"Формирование продуктового видения\",\"Взаимодействие с разработчиками\",\"Взаимодействие с бизнес-аудиторией\",\"Линейка сервисов API\",\"Ключевые показатели эффективности API\",\"Идентификация пользователей и борьба с фродом\",\"Информационная безопасность\",\"Поддержка пользователей\",\"Документация\",\"Тестовая среда\",\"Управление ожиданиями\"]}]}")}})(this)