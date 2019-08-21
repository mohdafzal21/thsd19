const obj = {}

obj.init = function init () {
    obj.load()
}

obj.load = function load(){
    console.log("hello")
}

module.exports = obj