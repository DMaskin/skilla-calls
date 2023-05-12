import avatar from "../../shared/img/Header/avatar.png"
import { Eval } from "../../shared/component/Eval"
import React from "react"

export type IFilter = {
  title: string
  options: Array<React.ReactElement | string>
  avatars?: string[]
}

export const filters: IFilter[] = [
  {
    title: "Все типы",
    options: ["Все типы", "Входящие", "Исходящие"],
  },
  {
    title: "Все сотрудники",
    options: ["Все сотрудники", "Константик К.", "Полина З."],
    avatars: ["", avatar, avatar],
  },
  {
    title: "Все звонки",
    options: ["Все звонки", "Все клиенты", "Новые клиенты", "Все исполнители", "Через приложение", "Прочие звонки"],
  },
  {
    title: "Все источники",
    options: ["Все источники", "Yandex", "Rambler"],
  },
  {
    title: "Все оценки",
    options: [
      "Все оценки",
      "Распознать",
      "Скрипт не использован",
      React.createElement(Eval, { title: "Отлично" }),
      React.createElement(Eval, { title: "Хорошо" }),
      React.createElement(Eval, { title: "Плохо" }),
    ],
  },
  {
    title: "Все ошибки",
    options: ["Все ошибки", "Приветствие", "Имя", "Цена"],
  },
]
