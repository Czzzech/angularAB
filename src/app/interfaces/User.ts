export interface User{
    login       : string,
    password    : string,
    email       : string,
    phone       : string,
    created     : Date,
    lastVisit   : Date,
    permissions : object,
    payer       : boolean,
    birthDate   : Date,
    timeZone    : string
}