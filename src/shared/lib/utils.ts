import { EvalType } from "../component/Eval"

export function makeTimeFormat(seconds: number): string {
  const format = (val: number) => `0${Math.floor(val)}`.slice(-2)
  const hours = seconds / 3600
  const minutes = (seconds % 3600) / 60
  if (hours < 1) {
    return [minutes, seconds % 60].map(format).join(":")
  }
  return [hours, minutes, seconds % 60].map(format).join(":")
}

export function getRandomStatus(): EvalType {
  const statuses: EvalType[] = ["Отлично", "Хорошо", "Плохо"]
  const min = 0,
    max = 2
  return statuses[Math.floor(min + Math.random() * (max - min + 1))]
}

export function getCurrentDate(): string {
  const date = new Date()
  const weekDay = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][date.getDay()];
  const day = date.getUTCDate() + 1
  const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентрября", "октября", "ноября", "декабря"][date.getUTCMonth()]
  return `${weekDay}, ${day} ${month}`
}
