import avatar from "../../shared/img/Header/avatar.png"

export type IFilter = {
  title: string,
  options: string[],
  avatars?: string[]
}

export const filters: IFilter[] = [{
    title: "Все типы",
    options: ["Все типы", "Входящие", "Исходящие"],
  },{
    title: "Все сотрудники",
    options: ["Все сотрудники", "Константик К.", "Полина З."],
    avatars: ["", avatar, avatar]
  },{
    title: "Все звонки",
    options: ["Все звонки", "Все клиенты", "Новые клиенты", "Все исполнители", "Через приложение", "Прочие звонки"],
  },{
    title: "Все источники",
    options: ["Все источники", "Yandex.ru", "Rambler.ru"],
  },{
    title: "Все оценки",
    options: ["Все оценки", "Распознать", "Скрипт не использован", "Отлично", "Хорошо", "Плохо"],
  },{
    title: "Все ошибки",
    options: ["Все ошибки", "Приветствие", "Имя", "Цена"],
  },
]