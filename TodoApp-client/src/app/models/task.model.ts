export class Task {

    constructor(public title: string) {
    }
  
    toggleIsDone() {
      this.isDone = !this.isDone;
    }
  
    public isDone = false;
  }