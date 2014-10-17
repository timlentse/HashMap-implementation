/**
 =====================================================================
 @ HashMap implementation
 @ author xiejinglun <tinglenxan@gmail.com>
 @ 2014--10--15
 =====================================================================
 */
function HashMap(obj) { 
    
    var  items = {};
    var  length = 0;
    for (var keyOfObj in obj) {
        if (obj.hasOwnProperty(keyOfObj)) {
            items[keyOfObj] = obj[keyOfObj];
            length++;
        }
    }
    
//  @ setItem 
    this.setItem = function(key /*string*/, value)
    { 
        if ((key!== undefined)&&(typeof(key)=== 'string')) {
        var exist = false;
        if (this.hasItem(key)) {
           exist = true;
        }
        else {
            length++;
        }
        items[key] = value;
        return exist;
    }
        else {
        console.log("Bad arguments!");
        return false;
        }
    };
    
//  @ getItem  
    this.getItem = function(key) {
        return this.hasItem(key) ? items[key] : undefined;
    };

//  @ removeItem  
    this.removeItem = function(key)
    { 
        if (this.hasItem(key)) {
            length--;
            delete items[key];
        }
        else {
            return undefined;
        }
    };
//  @ hasItem 
   this.hasItem = function(key)
    {
        return items.hasOwnProperty(key);
    };
 
 //  @ clear 
    this.clear = function()
    {
        items = {};
        length = 0;
    };

 //  @getAllKeys   
    this.getAllKeys =  function()
    {
        var keySet = [];
        for (var key in items) {
            if (this.hasItem(key)) {
                keySet.push(key);
            }
        }
        return keySet;
    };

// @ getAllValues 
    this.getAllValues = function()
    {
        var valueSet = [];
        for (var key in items) {
            if (this.hasItem(key)) {
                valueSet.push(items[key]);
            }
        }
        return valueSet;
    };
   // @ getLength
    this.getlength = function() {
        return length;
    };
    //@ getAllItems(测试用)
     this.getAllItems = function() {
       console.log(items);
    };
}

//test the hashMap script
var hashTable1 = new HashMap({"name": "timlentse","phone": "1234567"});
hashTable1.setItem("email","foo@mail.com");
hashTable1.getAllItems();

var hashTable2 = new HashMap({"name": "john","phone": "8910234"});
hashTable2.setItem("email","bar@mail.com");
hashTable2.getAllItems();