class parent{
    fun1(){
        console.log("function 1 style");
    }

    fun2(){
        console.log("function 2 style");
    }
}

class child extends parent{
    demo(){
        super.fun1();
        super.fun2();
    }
}

var obj = new child();
obj.demo();