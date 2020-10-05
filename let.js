let bar = 1;
const baz = 2;

function func(){
    if(true){
        let foobar1 = "foobar";
        const foobar2 = "foobar2";
    }
    console.timeLog(foobar1); //Reference Error
    console.timeLog(foobar2); //Reference Error
}
func();