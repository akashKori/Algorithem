class ValidationError extends Error{
    constructor(customizedErrorObj) {
        super(customizedErrorObj);
        this.name = customizedErrorObj.name;
        this.message= customizedErrorObj.message;
    }
}

class ObjectMissingError extends ValidationError{
    
}