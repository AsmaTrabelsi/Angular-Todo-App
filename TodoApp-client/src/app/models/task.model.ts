export class Task {

    constructor(public title: string, public id=0) {
    }
  
    toggleIsDone() {
      this.isDone = !this.isDone;
    }
  
    public isDone = false;
  }