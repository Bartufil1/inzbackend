# Kurs: Testowanie i Jakość Oprogramowania

## Autor: BF

## Temat Projektu: Aplikacja Treningowo-Żywieniowa

### Opis Projektu
Celem projektu było zaprojektowanie oraz zaimplementowanie aplikacji, który zainspiruje użytkowników do przygotowywania zdrowych i prostych w wykonaniu potraw oraz podjęcia jakiejkolwiek aktywności fizycznej w ciągu dnia.
Aplikacja powstała na urządzenia mobilne przy użyciu frameworka React Native. 
Obejmuje rejestarcje, logowanie oraz resetowanie hasła. Ponadto otrzymując dostęp do zasobów apliakcji użytkownikowi zostają wyświetlone ekrany, w których może:
* Wybrać potrawę i wyświetlić szczegółowy przepis by ją przygotować,
* Skorzystać z wbudowanej wyszukiwarki by znaleźć interesującą go potrawę,
* Wybrać intresujący go plan treningowy i wyświetlić szczegóły planu.
* Podjąc wyzwanie <br>
Dzięki aplikacji użytkownik przygotuje smaczny i zdrowy posiłek dla siebie oraz bliskich na bazie wybranego przepisu oraz wykona ćwiczenia, wykorzystując spersonalizowane plany treningowe, przygotowane indywidualnie dla niego.

### Uruchomienie projektu (front) 
* npm start <br>
* npm run android
### Uruchomienie testów jednostkowych oraz integracyjnych 
Przejeście do odpowiedniego folderu <br>
* cd Backend
* npm run test
  
## Dokumentacja API

| Ścieżka                          | Metoda | Opis                                       | Kontroler                   |
|----------------------------------|--------|--------------------------------------------|-----------------------------|
| /api/recipe/getAll               | GET    | Pobiera wszystkie dostępne przepisy kulinarne | Recipe Controller          |
| /api/recipe/get/{id}             | GET    | Pobiera szczegóły przepisu kulinarnego        | Recipe Controller          |
| /api/recipe/create               | POST   | Tworzy lub aktualizuje przepis kulinarny      | Recipe Controller          |
| /api/recipe/remove/{id}          | DELETE | Usuwa przepis kulinarny                      | Recipe Controller          |
| /api/workout/getAll              | GET    | Pobiera wszystkie dostępne plany treningowe  | Training Plan Controller   |
| /api/workout/getAllRandom        | GET    | Pobiera indywidualne plany treningowe        | Training Plan Controller   |
| /api/workout/get/{id}            | GET    | Pobiera szczegóły planu treningowego         | Training Plan Controller   |
| /api/workout/create               | POST   | Tworzy lub aktualizuje plany treningowe      | Training Plan Controller   |
| /api/workout/remove/{id}          | DELETE | Usuwa plan treningowy                        | Training Plan Controller   |
| /api/password/reset              | POST   | Wysyła prośbę o zresetowanie hasła          | Reset Password Controller  |
| /api/password/confirm            | POST   | Potwierdza zresetowanie hasła za pomocą tokena| Reset Password Controller  |
| /api/exercise/getAll             | GET    | Pobiera wszystkie dostępne ćwiczenia         | Exercise Controller         |
| /api/exercise/create              | POST   | Tworzy lub aktualizuje ćwiczenie              | Exercise Controller         |
| /api/exercise/remove/{id}         | DELETE | Usuwa ćwiczenie                             | Exercise Controller         |
| /api/bmi/getAll                  | GET    | Pobiera wszystkie dane BMI                   | BMI Controller              |
| /api/bmi/get/{id}                | GET    | Pobiera dane BMI dla konkretnego użytkownika | BMI Controller              |
| /api/bmi/create                  | POST   | Tworzy lub aktualizuje dane BMI              | BMI Controller              |
| /api/bmi/remove/{id}             | DELETE | Usuwa dane BMI                              | BMI Controller              |
| /api/user/create                 | GET    | Tworzy nowego użytkownika                    | User Controller             |
| /api/user/auth                   | POST   | Autentykacja użytkownika                    | User Controller             |
| /api/user/logout/:{Id}           | DELETE | Wylogowuje użytkownika                       | User Controller             |

## Scenariusze dla testera manualnego 
| CASE ID | OPIS                                      | Kroki testowe                                                                                                                                                                                                                                    | Oczekiwany wynik                                                                                                               |
|---------|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| TC_01   | Rejestracja w systemie                     | 1. Przejdź do ekranu logowania w serwisie.<br/>2. Wybierz pole "Zarejestruj się".<br/>3. Wypełnij formularz rejestracji.<br/>4. Wybierz pole "Zarejestruj się".<br/>5. Wprowadź dane BMI.<br/>6. Wybierz pole "Dalej". | Użytkownik zarejestruje się w serwisie. Po pomyślnej rejestracji zostanie przekierowany do okna logowania w serwisie.         |
| TC_02   | Logowanie w systemie                      | 1. Przejdź do okna logowania w serwisie.<br/>2. Wprowadź adres e-mail i hasło w wyznaczonych polach, które wprowadziłeś podczas rejestracji konta.<br/>3. Wybierz pole "Zaloguj się".              | Użytkownik zaloguje się do systemu. Po pomyślnym logowaniu otrzymuje dostęp do zasobów aplikacji.                             |
| TC_03   | Resetowanie hasła w systemie              | 1. Przejdź do okna logowania w serwisie.<br/>2. Wybierz pole "Reset hasła".<br/>3. W wyświetlonym oknie wprowadź adres e-mail, który został użyty podczas rejestracji konta.<br/>4. Wybierz pole "Zresetuj hasło".<br/>5. Przejdź do skrzynki pocztowej.<br/>6. Przejdź do wiadomości e-mail wysłanej przez serwis.<br/>7. Skopiuj link i wklej go w przeglądarce w polu odpowiedzialnym za wprowadzenie adresu URL.<br/>8. W wyświetlonym formularzu wprowadź nowe hasło.<br/>9. Wybierz przycisk "Zresetuj".<br/>10. Następuje odświeżenie przeglądarki. | Użytkownik zresetował hasło. Do logowania może używać nowo nadanego hasła.                                                     |
| TC_04   | Kalkulator BMI – Obliczanie wskaźnika i statusu BMI | 1. Przejdź do okna logowania w serwisie.<br/>2. Wybierz pole "Zarejestruj się".<br/>3. Wypełnij formularz rejestracji.<br/>4. Wybierz pole "Zarejestruj się".<br/>5. W wyznaczone pola wprowadź wagę i wzrost. | Zostaje wyświetlona wartość wskaźnika BMI, a także aktualny status BMI użytkownika.                                             |
| TC_05   | Przejście do szczegółów potrawy           | 1. Przejdź do okna logowania w serwisie.<br/>2. Wprowadź adres e-mail i hasło w wyznaczonych polach, które wprowadziłeś podczas rejestracji konta.<br/>3. Wybierz pole "Zaloguj się".<br/>4. Wybierz przepis. | Użytkownik zostanie przeniesiony do szczegółów potrawy.                                                                         |
| TC_06   | Przejście do okna z treningami             | 1. Przejdź do okna logowania w serwisie.<br/>2. Wprowadź adres e-mail i hasło w wyznaczonych polach, które wprowadziłeś podczas rejestracji konta.<br/>3. Wybierz pole "Zaloguj się".<br/>4. W wyświetlonym oknie wybierz ikonę „hantli” sugerującą ćwiczenia. | Użytkownik zostaje przeniesiony do nowego okna, w którym będą wyświetlone plany treningowe i ćwiczenia.                          |
| TC_07   | Przejście do szczegółów planu treningowego | 1. Przejdź do okna głównego w serwisie.<br/>2. Wprowadź adres e-mail i hasło w wyznaczonych polach, które wprowadziłeś podczas rejestracji konta.<br/>3. Wybierz pole "Zaloguj się".<br/>4. W wyświetlonym oknie wybierz ikonę „hantli” sugerującą ćwiczenia.<br/>5. Wybierz plan treningowy. | Użytkownik zostaje przeniesiony do szczegółów planu treningowego.                                                               |
| TC_08   | Dodawanie potrawy do serwisu              | 1. Przejdź do okna logowania w panelu administratora.<br/>2. Wprowadź adres e-mail i hasło przypisane do konta administratora w wyznaczonych polach.<br/>3. Wybierz pole "Zaloguj się".<br/>4. W wyświetlonym oknie wybierz pole „Dodaj przepis”.<br/>5. Uzupełnij wyświetlony formularz. Wprowadź dane takie jak: nazwa potrawy, obraz potrawy, sposób przygotowania, czas przygotowania, ilość porcji, ilość polubień, punkty zdrowia, rodzaj potrawy, poszczególne składniki dania, obrazy poszczególnych składników dania.<br/>6. Wybierz pole „Dodaj”.<br/>7. Następuje przekierowanie do ekranu głównego w panelu administratora. | Przepis został dodany do bazy danych. Jest widoczny w serwisie i panelu administratora.                                       |
| TC_09   | Dodawanie planu treningowego do serwisu    | 1. Przejdź do okna logowania w panelu administratora.<br/>2. Wprowadź adres e-mail i hasło przypisane do konta administratora w wyznaczonych polach.<br/>3. Wybierz pole "Zaloguj się".<br/>4. W wyświetlonym oknie wybierz pole „Dodaj trening”.<br/>5. Uzupełnij wyświetlony formularz. Wprowadź dane takie jak: nazwa treningu, obraz ćwiczenia, ocenę, czas treningu, poziom kalorii, opis planu treningowego.<br/>6. Wybierz i wprowadź ćwiczenia składające się na dany plan treningowy.<br/>7. Wybierz pole „Dodaj”.<br/>8. Następuje przekierowanie ekranu głównego w panelu administratora. | Plan treningowy został dodany do bazy danych. Jest widoczny w serwisie i panelu administratora.                               |
| TC_10   | Usuwanie przez administratora przepisu i planu treningowego dostępnego w serwisie | 1. Przejdź do okna logowania w panelu administratora.<br/>2. Wprowadź adres e-mail i hasło przypisane do konta administratora w wyznaczonych polach.<br/>3. Wybierz pole "Zaloguj się".<br/>4. W wyświetlonym oknie przy wybranym przepisie wybierz pole „Usuń”.<br/>5. Następuje odświeżenie panelu.<br/>6. W wyświetlonym oknie przy wybranym treningu wybierz pole „Usuń”.<br/>7. Następuje odświeżenie panelu. | Przepis i trening zostały usunięte z bazy danych i serwisu. Nie są już widoczne w serwisie i panelu administratora.           |

## Technologie użyte w projekcie
* JavaScript
* React
* ReactNative
* HTML 
* CSS 
* Node.js
* Expres.js
* Mongoose
