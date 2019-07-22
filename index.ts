// const userEl1 = document.querySelector('.content1');
// const userEl2 = document.querySelector('.content2');

class User {
  private name: string;
  private year: number;

  constructor(
      protected alias: string,
      protected surname: string,
      private age ?: number,
      readonly id ?: number,
      private isAdmin ?: boolean,
      private mark ?: number,
  ) {
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

  public getUser(): string {
    return `Name: ${this.alias}, id: ${this.id}, isAdmin: ${this.isAdmin}`;
  }

  public showInfo(): void {
    if (this.isAdmin) {
      let points: number = this.mark + 10;
      console.log(`user ${this.alias} has ${points} points`);
    } else {
      console.log(`user ${this.alias} has ${this.mark} points`);
    }
  }

  private setYear(age: number): number {
    return new Date().getFullYear() - age;
  }
}

class Employee extends User {
    emloyIdCardPhoto: string;

    constructor (
        alias: string,
        surname: string,
        emloyIdCardPhoto ?: string,
    ) {
        super(alias, surname);

        this.emloyIdCardPhoto = emloyIdCardPhoto;
    }

    getUser(): string {
        return `Name: ${this.alias}, surname: ${this.surname}, emloyIdCardPhoto: ${this.emloyIdCardPhoto}`;
    }
}

const user: Employee = new Employee(
    'Sveta',
    'Tataryntseva',
    '123123123123',

);

user.getUser();
