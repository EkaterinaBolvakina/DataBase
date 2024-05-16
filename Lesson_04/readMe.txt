Lesson_04 - PLAN:
1. eine Einführung in NoSQL
2.den MongoDB-Kompass installieren
https://www.mongodb.com/try/download/compass

3.MongoDB Atlas - Verbindung
https://www.mongodb.com/products/platform/atlas-database

4.mongoDB-Grundlagen
5.grundlegende Datenstrukturen
6.Dokumente hinzufügen
7.suchen und sortieren

SQL
Grundsätzliche Unterschiede zwischen MongoDB und RDBMS
Unterschiedliche Sprache für die Abfrageausführung (NoSQL - QUERY API)
Datenmodell - DOCUMENT (Dokument - Assoziation/Array)
Dynamisches Datenschema (schema-less, schemaless) - jedes Dokument kann seinen eigenen Satz von Feldern haben
Verwendet JSON und Binary JSON (BSON)
Ermöglicht die Speicherung verschachtelter Datenstrukturen
// Beispiel
users = [
    {username: 'hacker', email: '123@example.org', is_blocked: true},
    {username: 'user1', email: 'hello@example.org', phone: '+0000000000'}
]
MongoDB: CRUD
MongoDB: CRUD

CREATE erstellen

insertOne() ein Dokument hinzufügen
ein Argument
assoziieren/Array (Objekt)
insertMany() mehrere Dokumente hinzufügen
ein Argument
Array von Assoziationen/Arrays

READ Lesen

findOne() findet (wählt) ein Dokument
find() findet (wählt) mehrere Dokumente
Argumente
filter
projection
countDocuments() Anzahl der Treffer
Argumente
filter

UPDATE Aktualisieren

updateOne() ein Dokument ändern
updateMany() mehrere Dokumente ändern
Argumente
filter
action

DELETE Löschen

deleteOne() ein Dokument löschen
deleteMany() löscht mehrere Dokumente
Argumente
Filter

Beispiel. Hinzufügen von Benutzern

db.users.insertMany([
    { _id: 1, fullname: 'Ivan Ivanov', country: 'Germany'},
    { _id: 2, vollständiger Name: 'Petr Ivanov', Land: 'USA'},
    { _id: 3, vollständiger Name: 'Sidr Ivanov', Land: 'Deutschland'},
    { _id: 4, vollständiger Name: 'hacker', Land: 'USA' },
    { _id: 5, vollständiger Name: 'nonname', Land: 'Frankreich' }
])

Beispiel. Alle Benutzer ausgeben

db.users.find()

Beispiel. Benutzer aus den USA finden

db.users.find(
    { Land: 'USA' } // Filter
)
------------------ RU -----------------------
1.Введение в NoSQL
2.Установка MongoDB compass
3.MongoDB Atlas - подключение
4.Основы работы с MongoDB
5.Базовые структуры данных
6.Добавление документов
7.Поиск и сортировка

SQL
Принципиальные отличия MongoDB от RDBMS
Другой язык для выполнения запросов (NoSQL - QUERY API)
Модель данных - ДОКУМЕНТНАЯ (документ - ассоц/массив)
Динамическая схема данных (без схемы, schemaless) - каждый документ может иметь свой набор полей
Использует JSON и Binary JSON (BSON)
Позволяет хранить вложенные структуры данных
// пример
users = [
    {username: 'hacker', email: '123@example.org', is_blocked: true},
    {username: 'user1', email: 'hello@example.org', phone: '+0000000000'}
]
MongoDB: CRUD

Create

insertOne() добавить один документ
один аргумент
ассоц/массив (объект)
insertMany() добавить несколько документов
один аргумент
массив ассоц/массивов

Read

findOne() найти (выбрать) один документ
find() найти (выбрать) несколько документов
аргументы
filter
projection
countDocuments() ко-во совпадений
аргументы
filter

Update

updateOne() изменить один документ
updateMany() изменить несколько документов
аргументы
filter
action

Delete

deleteOne() удалить один документ
deleteMany() удалить несколько документов
аргументы
filter

Пример. Добавление юзеров

db.users.insertMany([
    { _id: 1, fullname: 'Ivan Ivanov', country: 'Germany' },
    { _id: 2, fullname: 'Petr Ivanov', country: 'USA' },
    { _id: 3, fullname: 'Sidr Ivanov', country: 'Germany' },
    { _id: 4, fullname: 'hacker', country: 'USA' },
    { _id: 5, fullname: 'noname', country: 'France' }
])

Пример. Вывести всех юзеров

db.users.find()

Пример. Вывести юзеров из USA

db.users.find(
    { country: 'USA' } // filter
)