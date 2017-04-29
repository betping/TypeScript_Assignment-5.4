var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 A. Create a Parameter decorator, name it as MyParameterDecorator and
 define target function and display message once
 called with class MyParameterDecoratorExample for:
 Console following values:
 ● target,
 ● propertyKey,
 ● parameterIndex
 */
function myParameterDecorator(target, propertyKey, parameterIndex) {
    console.log("MyParameterDecorator called on: \n    target: " + target + ", propertyKey : " + propertyKey + ", parameterIndex : " + parameterIndex);
}
var MyParameterDecoratorExample = (function () {
    function MyParameterDecoratorExample() {
    }
    MyParameterDecoratorExample.prototype.print = function (param1, param2) {
        console.log("MyStaticMethodDecoratorExample.print(" + param1 + ", " + param2 + ") called.");
    };
    __decorate([
        __param(0, myParameterDecorator),
        __param(1, myParameterDecorator)
    ], MyParameterDecoratorExample.prototype, "print", null);
    return MyParameterDecoratorExample;
}());
var testObj = new MyParameterDecoratorExample();
testObj.print("test", 999);
