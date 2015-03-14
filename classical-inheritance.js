'use strict';
Object.prototype.extends = function (parent) {
    //Fixing Missing Object.create(…) for all browsers
    if (!Object.create) {
        Object.prototype.create = function (proto) {
            function F() { };
            F.prototype = proto;
            return new F;
        };
    };
    
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

var Person = (function () {
    function Person(name, age) {
        //Function Constructor Fix, If this is not of type the function, call the function with new
        if (!(this instanceof Person)) {
            return new Person(name, age);
        }
        this._name = name;
        this._age = age;
    }
    
    Person.prototype.introduce = function () {
        return "Name: " + this._name + ", Age: " + this._age;
    };
    
    return Person;
})();

var Student = (function () {
    function Student(name, age, grade) {
        if (!(this instanceof Student)) {
            return new Student(name, age, grade);
        }
        Person.apply(this, arguments);
        this._grade = grade;
    }
    
    Student.extends(Person);
    
    Student.prototype.introduce = function () {
        return Person.prototype.introduce.call(this) + ", Grade: " + this._grade;
    };
    
    return Student;
})();

var john = new Student("John", 18, 12);
console.log(john.introduce());
console.log(john instanceof Person);
console.log(john instanceof Student);
var george = Student("George", 14, 7);
console.log(george.introduce());
