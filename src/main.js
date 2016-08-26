import extend from './extend';

const SandStorage = {
    available(type) {
        const storage = window[type || 'localStorage'];
        const key = '__sandstorage__';

        if (storage.getItem(key)) {
            return true;
        }

        try {
            storage.setItem(key, true);

            return true;
        } catch(e) {
            return false;
        }
    },

    setItem(key, value, options) {
        options = extend({
            type: 'localStorage'
        }, options);

        if (!this.available(options.type)) {
            return null;
        }

        const now = Date.now();

        if (options.to < now) {
            return null;
        }

        const type = options.type;

        delete options.type;

        const data = extend({
            data: value
        }, options);

        return window[type].setItem(key, JSON.stringify(data));
    },

    getItem(key, options) {
        options = extend({
            type: 'localStorage'
        }, options);

        if (!this.available(options.type)) {
            return null;
        }

        const rawItem = window[options.type].getItem(key);

        if (rawItem === undefined) {
            return rawItem;
        }

        const item = JSON.parse(rawItem);

        if (item === null) {
            return null;
        }

        const now = Date.now();

        if (item.from > now || item.to < now) {
            return null;
        }

        return item.data;
    },

    removeItem(key, options) {
        options = extend({
            type: 'localStorage'
        }, options);

        const type = options.type;

        if (!this.available(type)) {
            return null;
        }

        return window[type].removeItem(key);
    }
};

export default SandStorage;
