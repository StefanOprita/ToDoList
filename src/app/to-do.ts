export class ToDo {
    id:number;
    text:string;
    complete:boolean =false;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }


}
