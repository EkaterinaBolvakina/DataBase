------------------------ DE ----------------------------
1. Server-Installation und Beekeeper Studio
## Wenn Sie Windows haben:
Hier sind die Anweisungen für die Installation:
https://winitpro.ru/index.php/2019/10/25/ustanovka-nastrojka-postgresql-v-windows/
Link zum Installationsprogramm:
https://www.postgresql.org/download/
https://github.com/beekeeper-studio/beekeeper-studio/releases/tag/v4.0.3 folgen Sie dem Link und laden Sie Beekeeper-Studio-Setup-4.0.3.exe herunter und installieren Sie es (Sie können auch eine andere Datei aus der Liste wählen, wenn sie Ihnen besser gefällt).

2. Datenbank und DBMS
3. Tabelle, Zeilen, Spalten, Primärschlüssel, Normalisierung in allgemeiner Form
4. SQL-Abfragen - Praxis

**Grundlagen der relationalen Datenbanken
Ein Datenbankmanagementsystem, DBMS**, ist ein spezielles Serverprogramm, das die Nutzung und Verwaltung von Datenbanken ermöglicht. Mit DBMS können Sie Daten lesen und schreiben, suchen und komplexe Selektionen durchführen.

**Datenbank**
**Datenbank** - Dateien, die auf der Festplatte erstellt werden und in denen die mit Hilfe eines DBMS erfassten Informationen gespeichert werden

Wichtig: Oft werden die Begriffe "Datenbank" und "DBMS" verwechselt, so kann es sein, dass Sie den Ausdruck "PostgreSQL-Datenbank" hören, obwohl Sie "PostgreSQL DBMS" meinen.

**Was ist ein DBMS?
Ein relationales Datenbankmanagementsystem, DBMS / **Database Management System (DBMS)** ist ein DBMS, das Daten in Form von Tabellen und Zeilen in diesen Tabellen speichert. Beispiele für DBMS:

- MySQL
- PostgreSQL
- MSSQL
- Oracle

**PostgreSQL**
**SQL* - *Strukturierte Abfragesprache*

**SQL** ist eine *deklarative* Programmiersprache, die für die Beschreibung, Änderung und Abfrage von Daten aus einem DBMS gedacht ist. Sie wird am häufigsten in relationalen DBMSs verwendet.

**Tabelle, Zeile, Spalte**
- Tabelle - ein Satz von Zeilen und Spalten
- Zeile - ein Datenbankeintrag über eine bestimmte Entität
- Spalte - jedes Attribut einer Entität, das in einer Zeile gespeichert ist

**Datentypen: numerisch**
- serial - Ganzzahl mit automatischer Inkrementierung, von 1 bis 2147483647
- smallint, int2 - Ganzzahl, von -32768 bis +32767;
- integer, int, int4 - Ganzzahl, von -2147483648 bis +2147483647
- bigint, int8 - Ganzzahl, von -9 223 372 036 854 775 808 bis 9 223 372 036 854 775 807
- double precision, float8 - Gleitkomma, von 1E-307 bis 1E+308

**Datentypen: text**
- character(n), char(n) - stellt eine Zeichenkette mit einer festen Anzahl von Zeichen dar. Der Parameter legt die Anzahl der Zeichen in der Zeichenkette fest
- character varying(n), varchar(n) - steht für eine Zeichenfolge mit einer festen Anzahl von Zeichen. Die Anzahl der Zeichen in der Zeichenkette wird mit Hilfe des Parameters
- text - stellt einen Text von beliebiger Länge dar

**Datentypen: Zeit und Datum**
- timestamp - speichert Datum und Uhrzeit, mit oder ohne Zeitzone. Bei Datumsangaben ist der niedrigste Wert 4713 v. Chr., der höchste Wert ist 294276 n. Chr.
- date - stellt das Datum von 4713 v. Chr. bis 5874897 n. Chr. dar.
- time - speichert die Tageszeit, ohne Datum, mit oder ohne Zeitzone. Akzeptiert Werte von 00:00:00 bis 24:00:00.

**Datentypen: andere**
- boolean - boolescher Wert, wahr oder falsch
- jsonb - beliebige Daten im JSON-Format

**SQL: Erstellen eines DBMS-Benutzers**
CREATE USER test_user WITH PASSWORD 'qwerty';
Der Benutzer wird genau im DBMS angelegt!

**SQL: Anlegen einer Datenbank**
CREATE DATABASE test_db EIGENTÜMER test_user
Jede Datenbank muss erstellt werden, bevor auf sie zugegriffen werden kann. Der Benutzer, der als Eigentümer angegeben ist, hat die maximalen Zugriffsrechte auf diese Datenbank.

**SQL: Datenbankbenutzerrechte**
GRANT ALL PRIVILEGES ON DATABASE test_db TO test_user;
Standardmäßig haben nur der Eigentümer und der DBMS-Superadministrator Zugriff auf die Datenbank. Alle anderen Benutzer müssen explizit hinzugefügt werden.

**SQL: Datenbank löschen**
DROP DATABASE test_db;
Eine Datenbank kann von ihrem Eigentümer, dem DBMS-Superadministrator oder einem Benutzer, der ausdrücklich dazu berechtigt ist, gelöscht werden.

**SQL: Tabellenerstellung**
CREATE TABLE students (
id serial PRIMARY KEY, name varchar(80), age integer
);
**SQL: Hinzufügen von Zeilen zur Tabelle**
INSERT INTO studenten (name, alter) VALUES
('Anna', 25),
('Maria', 23),
('Roman', 28);
Beachten Sie, dass das Feld id in der Tabelle vorhanden ist, aber es ist nicht notwendig, seinen Wert anzugeben. Der serielle Datentyp ermöglicht es, dass es automatisch ausgefüllt wird.

**SQL: Datenextraktion**
SELECT * FROM Schüler;
SELECT Name, Alter FROM Schüler;
SELECT * FROM Schüler WHERE Alter < 18;
SELECT * FROM students ORDER BY age ASC;
SELECT AVG(age) AS 'Durchschnittsalter' FROM students;
Mit SELECT können Sie nicht nur Daten abrufen, sondern auch filtern, sortieren und einfache Aggregationen durchführen.

**SQL: Datenänderung**
UPDATE students SET age = 26 WHERE name = 'Anna';
Mit UPDATE können Sie alle Daten in der Tabelle ändern. Die Verwendung von WHERE ist optional, wird aber dringend empfohlen. Ohne WHERE werden alle vorhandenen Zeilen in der Tabelle aktualisiert.

**SQL: Löschen von Daten**
DELETE FROM Schüler WHERE id = 1;
Meistens wird nach id gelöscht, aber Sie können auch nach jedem anderen Feld löschen:

**DELETE FROM studenten WHERE name = 'Anna';**
Es ist auch möglich, DELETE ohne WHERE zu verwenden. In diesem Fall werden alle Daten in der Tabelle gelöscht.

Analysiert, was eine Tabelle ist, Zeilen, Spalten, Primärschlüssel, Normalisierung in allgemeinen Worten: Tabellenreferenz https://docs.google.com/spreadsheets/d/1mn1_AQoMEw9CAwJrS5kxwCJSXG5YbZRdVx-21i8r-24/edit?hl=de#gid=0

------------------------ RU ----------------------------
1. Установка сервера и Beekeeper Studio
## Если у вас Windows:
Вот инструкция на установку:
https://winitpro.ru/index.php/2019/10/25/ustanovka-nastrojka-postgresql-v-windows/
Ссылка на установщик:
https://www.postgresql.org/download/
https://github.com/beekeeper-studio/beekeeper-studio/releases/tag/v4.0.3 переходите по ссылке и скачиваете и устанавливаете Beekeeper-Studio-Setup-4.0.3.exe (можете выбрать другой из списка, если он подходит лучше)
2. БД и СУБД
3. Таблица, строки, столбцы, primary key, нормализация в общих словах
4. SQL запросы - практика

**Основы реляционных БД
Система управления базами данных, СУБД** — специальная программа-сервер позволяющая использовать и управлять базами данных. СУБД позволяет читать и записывать данные, искать по ним и выполнять сложные выборки.

**База данных**
**БД** — фактически создаваемые на диске файлы, в которых хранится информация записанная с помощью СУБД

Важно! Часто значение БД и СУБД путают, можно услышать фразу “БД PostgreSQL” когда имелось ввиду “СУБД PostgreSQL”

**Что такое СУБД?**
Реляционная система управления базами данных, СУБД / **Database Management System (DBMS)** — СУБД которая хранит данные в виде таблиц и строк в этих таблицах. Примеры СУБД:

- MySQL
- PostgreSQL
- MSSQL
- Oracle

**PostgreSQL**
*SQL* - язык структурированных запросов *Structured Query Language*

**SQL** — *декларативный* язык программирования, предназначенный для описания, изменения и извлечения данных из СУБД. Чаще всего используется в реляционных СУБД.

**Таблица, строка, столбец**
- Таблица — совокупность строк и столбцов
- Строка — запись в БД о конкретной сущности
- Столбец — любой атрибут сущности хранящейся в строке

**Типы данных: числовые**
- serial — целое с автоувеличением, от 1 до 2147483647
- smallint, int2 — целое, от -32768 до +32767;
- integer, int, int4 — целое, от -2147483648 до +2147483647
- bigint, int8 — целое, от -9 223 372 036 854 775 808 до 9 223 372 036 854 775 807
- double precision, float8 — с плавающей точкой, от 1E-307 до 1E+308

**Типы данных: стоковые**
- character(n), char(n) — представляет строку из фиксированного количества символов. С помощью параметра задается задается количество символов в строке
- character varying(n), varchar(n) - представляет строку из фиксированного количества символов. С помощью параметра задается задается количество символов в строке
- text — представляет текст произвольной длины

**Типы данных: время и даты**
- timestamp — хранит дату и время, с учётом часового пояса или без. Для дат самое нижнее значение 4713 год до н. э., самое верхнее значение 294276 год н. э.
- date — представляет дату от 4713 год до н. э. до 5874897 года н.э
- time — хранит время суток, без даты, с учётом часового пояса или без. Принимает значения от 00:00:00 до 24:00:00

**Типы данных: прочие**
- boolean — булево значение, true или false
- jsonb — данные произвольного формата в формате JSON

**SQL: создание пользователя СУБД**
CREATE USER test_user WITH PASSWORD 'qwerty';
Пользователь создаётся именно в СУБД!

**SQL: создание базы данных**
CREATE DATABASE test_db OWNER test_user
Любая база должна быть создана, прежде чем к ней можно будет подключиться. Пользователь, указанный как owner, будет иметь максимальные права доступа к этой базе данных.

**SQL: права пользователя в БД**
GRANT ALL PRIVILEGES ON DATABASE test_db TO test_user;
По умолчанию доступ к базе имеет только owner и супер-администратор СУБД. Всем остальным пользователям доступ нужно добавлять явным образом.

**SQL: удаление базы данных**
DROP DATABASE test_db;
Удалить базу данных может её владелец, супер-администратор СУБД или пользователь, которому явным образом даны на это права.

**SQL: создание таблицы**
CREATE TABLE students (
id serial PRIMARY KEY, name varchar(80), age integer
);
**SQL: добавление строк в таблицу**
INSERT INTO students (name, age) VALUES
('Anna', 25),
('Maria', 23),
('Roman', 28);
Обратите внимание, что поле id существует в таблице, но указывать его значение не обязательно. Тип данных serial позволяет ему заполняться автоматически.

**SQL: извлечение данных**
SELECT * FROM students;
SELECT name, age FROM students;
SELECT * FROM students WHERE age < 18;
SELECT * FROM students ORDER BY age ASC;
SELECT AVG(age) AS 'Средний возраст' FROM students;
С помощью SELECT можно не просто вытаскивать данные, но и проводить фильтрацию, сортировать и проводить несложные агрегации.

**SQL: изменение данных**
UPDATE students SET age = 26 WHERE name = 'Anna';
С помощью UPDATE можно изменять любые данные в таблице. Использование WHERE не обязательно, хотя и крайне рекомендуется. Без WHERE будут обновлены все существующие строчки в таблице.

**SQL: удаление данных**
DELETE FROM students WHERE id = 1;
Чаще всего удаление происходит по id, но можно удалять и по любому другому полю:

**DELETE FROM students WHERE name = 'Anna';**
Возможно использование DELETE вообще без WHERE, в таком случае будут удалены вообще все данные в таблице.

Обсудили что такое БД и СУБД

Разборали, что такое таблица, строки, столбцы, primary key, нормализация в общих словах: ссылка на таблицу https://docs.google.com/spreadsheets/d/1mn1_AQoMEw9CAwJrS5kxwCJSXG5YbZRdVx-21i8r-24/edit?hl=de#gid=0