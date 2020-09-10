/// <reference types="react-scripts" />

/**
 * Создает объект с конфигурациями приложения.
 */
class Config {
    private DebugEnable: false

    public constructor(DebugEnable: boolean) {
        this.DebugEnable = DebugEnable
    }

    /**
     * true, елси использовать настройки для отладки
     */
    public getDebugEnable = () => this.DebugEnable
}

export const config = new Config(false)