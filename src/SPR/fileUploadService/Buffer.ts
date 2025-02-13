export default class Buffer {
    private data: any;
  
    constructor(data: any) {
      this.data = data;
    }
  
    get length(): number {
      return this.data.length;
    }
  
    slice(start: number, end: number): Buffer {
      return new Buffer(this.data.slice(start, end));
    }
  }
