class School {
    constructor(name, level, number) {
        this._name = name;
        this._level = level;
        this._number = number;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get number() {
        return this._number;
    }

    set number(num) {
        return this._number = num;
    }

    quickfacts() {

    }

    static pickSubstituteTeacher() {

    }
}

class Primary extends School {
    constructor(name, level, number, pickup) {
        super(name, level, number);
        this._pickup = pickup;
    }

    get pickup(){
        return this._pickup;
    }
}

class Middle extends School {
    constructor(name, level, number){
        super(name, level, number);
    }
}

class Senior extends School {
    constructor(name, level, number, teams){
        super(name, level, number);
        this._teams = teams;
    }

    get teams() {
        return this._teams;
    }
}