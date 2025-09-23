namespace Subjects {
    export class Cpp extends Subject {
        teacher?: Teacher;

        getRequirements(): string {
            return `Here is the list of requirements for Cpp`;
        }

        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.experinceTeachingC === undefined || this.teacher.experinceTeachingC <= 0) {
                return `No available teacher`;
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}