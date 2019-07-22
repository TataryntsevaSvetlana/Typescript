// const userEl1 = document.querySelector('.content1');
// const userEl2 = document.querySelector('.content2');
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(alias, surname, age, id, isAdmin, mark) {
        this.alias = alias;
        this.surname = surname;
        this.age = age;
        this.id = id;
        this.isAdmin = isAdmin;
        this.mark = mark;
        this.alias = alias;
        this.surname = surname;
        this.age = age;
        this.id = id;
        this.isAdmin = isAdmin;
        this.mark = mark;
        this.year = this.setYear(age);
    }
    // public get name(): string {
    //   return this._name;
    // }
    //
    // public set name(value: string) {
    //   this._name = value;
    // }
    User.prototype.getUser = function () {
        return "Name: " + this.alias + ", id: " + this.id + ", isAdmin: " + this.isAdmin;
    };
    User.prototype.showInfo = function () {
        if (this.isAdmin) {
            var points = this.mark + 10;
            console.log("user " + this.alias + " has " + points + " points");
        }
        else {
            console.log("user " + this.alias + " has " + this.mark + " points");
        }
    };
    User.prototype.setYear = function (age) {
        return new Date().getFullYear() - age;
    };
    return User;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(alias, surname, emloyIdCardPhoto) {
        var _this = _super.call(this, alias, surname) || this;
        _this.emloyIdCardPhoto = emloyIdCardPhoto;
        return _this;
    }
    Employee.prototype.getUser = function () {
        return "Name: " + this.alias + ", surname: " + this.surname + ", emloyIdCardPhoto: " + this.emloyIdCardPhoto;
    };
    return Employee;
}(User));
var user = new Employee('Sveta', 'Tataryntseva', '123123123123');
user.getUser();
