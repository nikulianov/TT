import {daysWeeksSymbol} from '../constans/date'

/**
 * функция берет 1 символ из имены, переводит его в upperCase и выводит.
 * Используется если нет картинки и нужно вывести заглавную букву имени вместо фото
 * @param name
 * @returns {string}
 */

export const firstSymbolName = (name: string) => {
  if (!name.toString()) {
	return ''
  }
  return name[0].toUpperCase()
}

export const getDateLastMessage = (time: Date) =>{
  // const timeNow = new Date()
  return daysWeeksSymbol[time.getDay() - 1]
}
