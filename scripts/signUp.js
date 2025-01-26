/*  Name: Manjot Kaur and Subhana Hashimi
    Student ID:  100951033 and 100949958
    Date: 2025-01-25
 */

"use strict";

class SignUp {
    /**
     * Constructor to initialize the SignUp class with default values.
     * @param {string} name - The user's name.
     * @param {string} emailAddress - The user's email address.
     * @param {string} preferredRole - The user's preferred role (e.g., Admin, User, Volunteer, Manager).
     */
    constructor(name = "", emailAddress = "", preferredRole = "") {
        this._name = name;
        this._emailAddress = emailAddress;
        this._preferredRole = preferredRole;
    }

    /**
     * Setter for `name` with validation.
     * Ensures the name is a non-empty string.
     * @param {string} name - The user's name.
     * @throws Will throw an error if the name is not a valid string.
     */
    set name(name) {
        if (typeof name !== "string" || name.trim() === "") {
            throw new Error("Invalid Name: Must be a non-empty string");
        }
        this._name = name;
    }

    /**
     * Setter for `emailAddress` with validation.
     * Validates the email format using a regular expression.
     * @param {string} email - The user's email address.
     * @throws Will throw an error if the email address is not valid.
     */
    set emailAddress(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Email format validation
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email address: Must be a valid format");
        }
        this._emailAddress = email;
    }

    /**
     * Setter for `preferredRole` with validation.
     * Ensures the role is one of the predefined valid roles.
     * @param {string} role - The user's preferred role.
     * @throws Will throw an error if the role is not valid.
     */
    set preferredRole(role) {
        const validRoles = ['Admin', 'User', 'Volunteer', 'Manager'];  // Example roles
        if (!role || !validRoles.includes(role)) {
            throw new Error("Invalid Role: Must be one of the predefined roles");
        }
        this._preferredRole = role;
    }

    /**
     * Converts the object properties into a readable string format.
     * @returns {string} A string representation of the object.
     */
    toString() {
        return `Name: ${this._name}, Email: ${this._emailAddress}, Preferred Role: ${this._preferredRole}`;
    }

    /**
     * Serializes the object properties into a single string for storage.
     * If any property is missing or invalid, logs an error and returns `null`.
     * @returns {string|null} A serialized string or `null` if properties are invalid.
     */
    serialize() {
        if (!this._name || !this._emailAddress || !this._preferredRole) {
            console.error("One or more properties are missing or invalid");
            return null;
        }
        return `${this._name},${this._emailAddress},${this._preferredRole}`;
    }

    /**
     * Deserializes a string and updates the object properties.
     * Validates the format of the input string.
     * @param {string} data - A serialized string containing the object data.
     * @throws Logs an error if the input data format is invalid.
     */
    deserialize(data) {
        if (typeof data !== "string" || data.split(",").length !== 3) {
            console.error("Invalid data format");
            return;
        }
        const proArray = data.split(",");
        this._name = proArray[0];
        this._emailAddress = proArray[1];
        this._preferredRole = proArray[2];
    }
}
