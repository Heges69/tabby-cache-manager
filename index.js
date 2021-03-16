/*
    This project is open-source
    Primarly made for https://tabbybot.eu
    Discord: Hegy#6666
*/
class cache{
    /**
     * @param {Number} timeout How long do you want to store the data in cache (default: 5m) 
     */
    constructor(timeout){
        this.timeout = timeout || 60*5;
        this._cache = new Array();
    }
    /**
     * 
     * @param {*} obj Object the data you want to store in cache 
     * @param {String} key Key you want to use to get access to the data you have saved 
     */
    set = (obj, key) =>{
        if(Object.keys(this._cache).includes(key)){
            this._cache[key] = obj;
        }else{
            this._cache[key] = obj;
            var timeout = setTimeout(() => {
                delete this._cache[key];
                clearTimeout(timeout);
            }, this.timeout * 1000);
        }
    }
    /**
     * 
     * @param {String} key Key you use for getting data 
     */
    get = (key) => this._cache[key];
}

module.exports = cache;
