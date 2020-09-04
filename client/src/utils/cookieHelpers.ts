import cookie from 'react-cookies'

export const getCookieByPropertyName = (propertyName: string) => cookie.load(propertyName)