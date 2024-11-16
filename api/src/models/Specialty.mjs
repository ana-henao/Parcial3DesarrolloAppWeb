class Specialty {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.doctors = new Set();
    }
}