export function add(x,y){return x+y;}
export function sub(x,y){return x-y;}
export function mul(x,y){return x*y;}
export function div(x,y){
    if (y===0){
        throw new Error("Division by zero is not allowed");
    }
    return x/y;
}
    