/**
 * Класс описывающий объект для авторизации пользователя.
 */
export class UserAuth {
    constructor(readonly userLogin,
        readonly userPassword)

    public toJSON() {
        return {
            userLogin: this.userLogin,
            userPassword: this.userPassword
        }
    }
}