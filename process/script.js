
// console.log(process.release);
// console.log(process.cwd());
// console.log(process.argv);
let arg=process.argv;
for(i=2;i<arg.length;i++){
    console.log(`Hello ${arg[i]}`);
}