import {measure} from "helpful-decorators"
class DateClass{
    constructor(){

    }
    @measure
    getTime(){
        console.log("hi from getTime")
        return 2;
    }
}

const obj=new DateClass();
obj.getTime();
obj.getTime();
obj.getTime();
obj.getTime();
obj.getTime();
obj.getTime();
