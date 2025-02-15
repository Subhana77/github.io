"use strict";

(function (core){

    class User {
        constructor(displayName ="", emailAddress = "", username = "", password = "")
        {
            this._displayName = displayName;
            this._emailAddress = emailAddress;
            this._username = username;
            this._password = password;
        }

        get displayName() {
            return this._displayName;
        }

        get emailAddress() {
            return this._emailAddress;
        }
        get username() {
            return this._username;
        }

        set displayName(displayName) {
            this._displayName = displayName;
        }

        set EmailAddress(emailAddress) {
            this._emailAddress = emailAddress;
        }

        set username(username) {
            this._username = username;
        }

        toString(){
            return `Display Name: ${this._displayName}
                    \nEmail Address: ${this._emailAddress}
                    \nUserName: ${this._password};
                    `
        }

        toJSON(){
            return{
                DisplayName: this._displayName,
                EmailAddress: this._emailAddress,
                Username: this._username,
                Password: this._password
            }
        }

        fromJOSN(data){
            this._displayName = data.displayName;
            this._emailAddress = data.EmailAddress;
            this._username = data.Username;
            this._password = data.Password;
        }

        serialize(){
            if(this._displayName !== "" && this._emailAddress !== "" && this._username !== ""){
                return `${this._displayName}, ${this._emailAddress}, ${this._username}`
            }
            console.error("[ERROR] Failed to serialize. One or more user properties are missing");
            return null;
        }

        deserialize(data){
            let propertyArray = data.split(',');
            this._displayName = propertyArray[0];
            this._emailAddress = propertyArray[1];
            this._username = propertyArray[2];
        }
    }


    core.User = User;
}) (core || (core = {}));

