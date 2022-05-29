// TYPES AND INTERFACES BASICS

// type aliases
// to describe function types

// type Data = string;

// type Person2 = {
//   profession: String;
//   age: Number;
// };

// TS recommend to use Interfaces over Types when possible

// Describe data structures in more natural way
// Describing objects
// Shipment, Orders,

//Declaring functions

// interface PersonLoggerFn {
//   (name: string, age: number): string;
// }

// type PersonLoggerFn = (name: string, age?: number) => string;

// interface person {
//   name: string;
//   age: number;
// }

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// export default function play() {
//   const name: string = 'Kushal';
//   const age: number = 15;

//   logPersonInfo(name, age);

//   const logPersonInfo: PersonLoggerFn = (
//     personName: string,
//     personAge: number = 0
//   ) => {
//     const info = 'Name ' + personName + ', age: ' + personAge;
//     console.log(info);
//     return info;
//   };

//   function logPersonInfo2(passedPerson: Person): string {
//     const info = 'Name ' + passedPerson.name + ', age: ' + passedPerson.age;
//     console.log(info);
//     return info;
//   }

//   function logPersonInfo3(argument: Person2): string {
//     const information =
//       'The Person is an ' +
//       argument.profession +
//       ' and the person is ' +
//       argument.age +
//       ' yrs old ';
//     console.log(information);

//     return information;
//   }

//   logPersonInfo(name, age);
//   logPersonInfo(name);

//   logPersonInfo3({ profession: 'Engineer', age: 23 });

//   logPersonInfo2(new Person('GGWP', 99));
// }

// NARROWING

interface Person {
  name: string;
  age: number;
}

interface BusinessPerson extends Person {
  salary: number;
}

interface AcademicPerson extends Person {
  publications: string[];
}

type Car = {
  name: string;
  price: number;
};

type RaceCar = {
  speed: number;
} & Car & {
    mileage: number;
  };

export default function play() {
  // const names: string[] = ['Fillip', 'John'];
  // const numbers: Array<number> = [1, 2, 3, 4, 5];
  // const random = Math.random() > 0.5 ? 'Hello' : [1, 2];
  // if (typeof random === 'string') {
  //   const upper = random.toUpperCase();
  // } else {
  //   console.log(random);
  // }
  // console.log(random.length);

  const person: Person = {
    name: 'filip',
    age: 23,
  };

  const businessPerson: BusinessPerson = {
    name: 'Kushal',
    age: 28,
    salary: 20000,
  };

  const academicPerson: AcademicPerson = {
    name: 'Kushal',
    age: 28,
    publications: ['Mahabharat', 'Ramayan'],
  };

  const RaceCar = {
    name: 'Lamborgini',
    price: 2000,
    speed: 350,
    mileage: 200,
  };

  function logPerson(person: Person) {}
  logPerson(person);
}

// GENERIC TYPES

class Logger<ownGeneric> {
  log(items: Array<ownGeneric>, callback: (i: ownGeneric) => void) {
    items.forEach((item) => {
      callback(item);
    });
  }
}

export function Genric() {
  // function iterate(items: Array<string>) {
  //   items.forEach((item) => {
  //     console.log(item.toUpperCase());
  //   });
  // }

  // iterate(['hello', 'kam nalagne', 'hr']);

  const logger = new Logger<number>();

  const cars = [1, 2, 3];
  logger.log(cars, (car) => {
    console.log(car);
  });
}
