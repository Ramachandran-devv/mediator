// import {classnma} from filename
// Defines simplified communication between classes

// The Mediator design pattern is a behavioral design pattern that provides a
//  centralized communication medium between objects in a system. The pattern is used to reduce the complexity 
//  and dependencies between tightly coupled objects communicating directly with each other. By using a mediator, 
//  objects no longer communicate directly with each other, but instead communicate through the mediator.
//  This reduces the dependencies between communicating objects, thereby lowering the coupling.

interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private colleague1: ConcreteColleague1;
    private colleague2: ConcreteColleague2;

    constructor(c1: ConcreteColleague1, c2: ConcreteColleague2) {
        this.colleague1 = c1;
        this.colleague1.setMediator(this);
        this.colleague2 = c2;
        this.colleague2.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.colleague2.doC();
        } else if (event === 'D') {
            console.log('Mediator reacts on D and triggers following operations:');
            this.colleague1.doB();
            this.colleague2.doC();
        }
    }
}

class BaseColleague {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class ConcreteColleague1 extends BaseColleague {
    public doA(): void {
        console.log('Colleague1 does A.');
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        console.log('Colleague1 does B.');
    }
}

class ConcreteColleague2 extends BaseColleague {
    public doC(): void {
        console.log('Colleague2 does C.');
    }

    public doD(): void {
        console.log('Colleague2 does D.');
        this.mediator.notify(this, 'D');
    }
}

// Client code
const c1 = new ConcreteColleague1();
const c2 = new ConcreteColleague2();
const mediator = new ConcreteMediator(c1, c2);

c1.doA();
c2.doD();
