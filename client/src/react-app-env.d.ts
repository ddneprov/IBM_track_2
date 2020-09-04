/// <reference types="react-scripts" />

/**
 * Создает объект с конфигурациями приложения.
 */
class Config {
    private DebugEnable: false

    public Config(DebugEnable) {
        this.DebugEnable = DebugEnable
    }

    /**
     * true, елси использовать настройки для отладки
     */
    public getDebugEnable = () => DebugEnable
}

export const config = new Config(true)