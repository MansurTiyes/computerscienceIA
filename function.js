export class Function {
    #function_type
    #actual_function

    get functionType(){
        return this.#function_type;
    }
    set functionType(newFunctionType){
        this.#function_type = newFunctionType;
    }

    get actualFunction(){
        return this.#actual_function;
    }
    set actualFunction(newActualFunction){
        this.#actual_function = newActualFunction;
    }

    constructor(){

    }
}