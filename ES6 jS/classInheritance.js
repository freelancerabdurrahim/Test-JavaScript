class parent{
    fun1(){
        console.log("function 1 style");
    }

    fun2(){
        console.log("function 2 style");
    }
}

class child extends parent{
    
}

var obj = new child();
obj.fun2();