module Domain {
    export class InvalidArgumentException implements Error
    {
        public name = "InvalidArgumentException";
        
        constructor(public message: string) {                
        }
        
        toString() : string {
            return this.name + ': ' + this.message; 
        }
    }     
}


declare var exports: any;
if (typeof exports != 'undefined') {
    exports.Domain = Domain;
}

