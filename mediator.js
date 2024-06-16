// import {classnma} from filename
// Defines simplified communication between classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator(c1, c2) {
        this.colleague1 = c1;
        this.colleague1.setMediator(this);
        this.colleague2 = c2;
        this.colleague2.setMediator(this);
    }
    ConcreteMediator.prototype.notify = function (sender, event) {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.colleague2.doC();
        }
        else if (event === 'D') {
            console.log('Mediator reacts on D and triggers following operations:');
            this.colleague1.doB();
            this.colleague2.doC();
        }
    };
    return ConcreteMediator;
}());
var BaseColleague = /** @class */ (function () {
    function BaseColleague(mediator) {
        this.mediator = mediator;
    }
    BaseColleague.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return BaseColleague;
}());
var ConcreteColleague1 = /** @class */ (function (_super) {
    __extends(ConcreteColleague1, _super);
    function ConcreteColleague1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteColleague1.prototype.doA = function () {
        console.log('Colleague1 does A.');
        this.mediator.notify(this, 'A');
    };
    ConcreteColleague1.prototype.doB = function () {
        console.log('Colleague1 does B.');
    };
    return ConcreteColleague1;
}(BaseColleague));
var ConcreteColleague2 = /** @class */ (function (_super) {
    __extends(ConcreteColleague2, _super);
    function ConcreteColleague2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteColleague2.prototype.doC = function () {
        console.log('Colleague2 does C.');
    };
    ConcreteColleague2.prototype.doD = function () {
        console.log('Colleague2 does D.');
        this.mediator.notify(this, 'D');
    };
    return ConcreteColleague2;
}(BaseColleague));
// Client code
var c1 = new ConcreteColleague1();
var c2 = new ConcreteColleague2();
var mediator = new ConcreteMediator(c1, c2);
c1.doA();
c2.doD();
//# sourceMappingURL=mediator.js.map