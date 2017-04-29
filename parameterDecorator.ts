function myParameterDecorator(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`MyParameterDecorator called on: 
    target: ${target}, propertyKey : ${propertyKey}, parameterIndex : ${parameterIndex}`);
}

class MyParameterDecoratorExample {
    print(@myParameterDecorator param1: string, @myParameterDecorator param2: number) {
        console.log(`MyStaticMethodDecoratorExample.print(${param1}, ${param2}) called.`);
    }
}

var testObj = new MyParameterDecoratorExample();
testObj.print("test", 999);
