/**
 * Module for managing observable events.
 * @module Observables
 */

/**
 * Object representing an observable event.
 * @typedef {Object} ObservableObject
 * @property {string} name - The name of the event.
 * @property {function} callback - The callback function associated with the event.
 */

/**
 * Array containing registered observable events.
 * @constant {ObservableObject[]}
 */
const observers = [];

/**
 * Object providing methods for registering, calling, and removing observable events.
 */
const Observables = {
    /**
     * Find the index of an observable event in the observers array.
     * @method findIndex
     * @memberOf Observables
     * @param {string} name - The name of the observable event to find.
     * @return {number} The index of the observable event in the array, or -1 if not found.
     */
    findIndex: (name) => observers.findIndex(observer => observer.name === name),

    /**
     * Find an observable object in the observers array.
     * @method find
     * @memberOf Observables
     * @param {string} name - The name of the observable event to find.
     * @return {ObservableObject} The full object of the observable event, or undefined if not found.
     */
    find: (name) => observers.find(observer => observer.name === name),

    /**
     * Register a new observable event.
     * @method register
     * @memberOf Observables
     * @param {string} name - The name of the observable event to register.
     * @param {Function} [callback=() => {}] - The callback function for this observable event.
     * @return {boolean} Returns true if registration is successful, false otherwise.
     */
    register: (name, callback = () => {}) => {
        if (Observables.findIndex(name) === -1) {
            observers.push({
                name: name,
                callback: callback
            });
            return true;
        }
        return false;
    },

    /**
     * Remove an observable event from the observers array.
     * @method remove
     * @memberOf Observables
     * @param {string} name - The name of the observable event to remove.
     * @return {boolean} Returns true if removal is successful, false otherwise.
     */
    remove: (name) => {
        const findByName = Observables.findIndex(name);
        if (findByName !== -1) {
            observers.splice(findByName, 1);
            return true;
        }
        return false;
    },

    /**
     * Call an observable event.
     * @method call
     * @memberOf Observables
     * @param {string} name - The name of the observable event to call.
     * @param {*} data - The data to pass to the callback function of the observable event.
     * @return {boolean} Returns true if the observable event is called successfully, false otherwise.
     */
    call: (name, data = null) => {
        const observable = Observables.find(name);
        if (observable) {
            observable.callback(data);
            return true;
        }
        return false;
    }
};

module.exports = Observables;
