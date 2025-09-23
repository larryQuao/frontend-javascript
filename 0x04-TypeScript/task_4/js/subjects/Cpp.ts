namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      const { firstName, lastName, experienceTeachingC } = this.teacher;

      if (experienceTeachingC !== undefined && experienceTeachingC > 0)
        return `Available Teacher: ${this.teacher.firstName}}`;
      return "No available teacher";
    }
  }
}