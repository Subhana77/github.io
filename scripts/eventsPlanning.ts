"use strict";

/*
Represent an event with a name, location, description, date, and time.
*/
class EventsPlanning {
    private _eventName: string;     // to store the event name
    private _description: string;  // to store the event description
    private _location: string;    // to store the event location
    private _eventDate: string;  // Property to store the event date
    private _eventTime: string;  // Property to store the event time

    /**
     * Constructs a new event instance
     * @param eventName - Name of the event
     * @param location - Location of the event
     * @param description - Description of the event
     * @param eventDate - Date of the event
     * @param eventTime - Time of the event
     */
    constructor(eventName = "", location = "", description = "", eventDate = "", eventTime = "") {
        this._eventName = eventName;
        this._location = location;
        this._description = description;
        this._eventDate = eventDate;
        this._eventTime = eventTime;
    }

    /**
     * Gets the event name
     * @returns {string} - Event name
     */
    get eventName() {
        return this._eventName;
    }

    /**
     * Gets the event date
     * @returns {string} - Event date
     */
    get eventDate(): string {
        return this._eventDate;
    }

    /**
     * Sets the event date, ensures the date is non-empty
     * @param eventDate - Event date
     */
    set eventDate(eventDate: string) {
        if (!eventDate) {
            throw new Error("Invalid date: Must be a non-empty string");
        }
        this._eventDate = eventDate;
    }

    /**
     * Gets the event time
     * @returns {string} - Event time
     */
    get eventTime() {
        return this._eventTime;
    }

    /**
     * Sets the event time
     * @param eventTime - Event time
     */
    set eventTime(eventTime: string) {
        this._eventTime = eventTime;
    }

    /**
     * Sets the event name. Validates input to ensure it's a non-empty string
     * @param eventName - Event name
     */
    set eventName(eventName: string) {
        if (eventName.trim() === "") {
            throw new Error("Invalid eventName: Must be a non-empty string");
        }
        this._eventName = eventName;
    }

    /**
     * Gets the event location
     * @returns {string} - Event location
     */
    get location() {
        return this._location;
    }

    /**
     * Sets the event location. Validates input to ensure it's a non-empty string
     * @param location - Event location
     */
    set location(location: string) {
        if (location.trim() === "") {
            throw new Error("Invalid location: Must be a non-empty string");
        }
        this._location = location;
    }

    /**
     * Gets the event description
     * @returns {string} - Event description
     */
    get description(): string {
        return this._description;
    }

    /**
     * Sets the event description. Validates input to ensure it's a non-empty string
     * @param description - Event description
     */
    set description(description: string) {
        if (description.trim() === "") {
            throw new Error("Invalid description: Must be a non-empty string");
        }
        this._description = description;
    }

    /**
     * Convert the event details into a human-readable string
     * @returns {string}
     */
    toString() {
        return `Event Name: ${this._eventName}\nLocation: ${this._location}\nDescription: ${this._description}\nDate: ${this._eventDate}\nTime: ${this._eventTime}`;
    }

    /**
     * Serializing the event details into a string format suitable for storage
     * @returns {string|null} - JSON string of event details or null if validation fails
     */
    serialize() {
        if (!this._eventName || !this._location || !this._description || !this._eventDate || !this._eventTime) {
            console.error("One or more of the event properties are missing or invalid");
            return null;
        }
        return JSON.stringify({
            eventName: this._eventName,
            location: this._location,
            description: this._description,
            eventDate: this._eventDate,
            eventTime: this._eventTime
        });
    }

    /**
     * Deserialize the data and populate the event properties
     * @param data - JSON string to deserialize
     */
    deserialize(data: string) {
        try {
            const eventObj = JSON.parse(data);
            this._eventName = eventObj.eventName;
            this._location = eventObj.location;
            this._description = eventObj.description;
            this._eventDate = eventObj.eventDate;
            this._eventTime = eventObj.eventTime;
        } catch (error) {
            console.error("Invalid data format for deserializing data", error);
        }
    }
}
