interface Employee {
  work(): string;
}

class Programmer implements Employee {
  work(): string {
    return "Writing code";
  }
}

class Lawyer implements Employee {
  work(): string {
    return "Lawyering";
  }
}

abstract class Department {
  abstract createEmployee(): Employee;
}

export class ITDepartment extends Department {
  createEmployee(): Employee {
    return new Programmer();
  }
}

export class LegalDepartment extends Department {
  createEmployee(): Employee {
    return new Lawyer();
  }
}
