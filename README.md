# TakeOffStaff_test_task
## Для установки и работы

Скачать архив -> ввести в консоли (находясь в папке проекта) npm install -> npm run dev -> и ввести url в браузер, который будет показан в консоле

Чтобы войти необходимо ввести один из указанных логинов, которые находятся в консоле (Ctrl+Shift+I)

На странице контактов всё интуитивно понятно, кроме "редактирования"

Для редактирования записи -> введите в пустое поле контакт и нажмите кнопку "заменить" рядом с одной из записей

## The main task:
You need to write a personal account application.
The application should have two pages:
- Login page
- Contact List page
The design and data for filling in the pages are at the discretion of the candidate.
It is mandatory to have information in the readme about how to launch the application.
To perform a test task, you can use the UI framework.

When writing code, it is necessary to use typing, i.e. not to use :any in the code.
When doing work, it is mandatory to use a state manager (redux, mobx)
The time to complete the test task is not limited.

### Login page
To implement authorization, you can use requests with mock data https://github.com/typicode/json-server .
### Contact List page
The page with the user's contact list should be available only after authorization.
On the contact list page, it should be possible to add/delete/edit contacts, and it is also desirable to have a search function.
