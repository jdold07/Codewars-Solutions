// [object Object] - Parts of a list  [ ID: 56f3a1e899b386da78000732  (parts-of-a-list) ]
// URL: https://www.codewars.com/kata/56f3a1e899b386da78000732
// Category: REFERENCE  |  Tags: ARRAYS | LISTS | DATA STRUCTURES | ALGORITHMS
// *****************************************************************************
const {assert,config} = require('chai')
config.truncateThreshold = 0

function testing(actual, expected) {
    assert.deepEqual(actual, expected);
}

describe("partlist",function() {
  it("1st Basic tests", function() {
    testing(partlist(["I", "wish", "I", "hadn't", "come"]),
        [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
    testing(partlist(["cdIw", "tzIy", "xDu", "rThG"]), 
        [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
    testing(partlist(["vJQ", "anj", "mQDq", "sOZ"]), 
        [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
    testing(partlist(["mkC", "WoiP", "pCHh", "mkv"]), [["mkC", "WoiP pCHh mkv"], ["mkC WoiP", "pCHh mkv"], ["mkC WoiP pCHh", "mkv"]])
    testing(partlist(["vHW", "bPq", "pme", "jJr", "HGHV"]), 
        [["vHW", "bPq pme jJr HGHV"], ["vHW bPq", "pme jJr HGHV"], ["vHW bPq pme", "jJr HGHV"], ["vHW bPq pme jJr", "HGHV"]])
    testing(partlist(["YZd", "ptUD", "IXr"]), [["YZd", "ptUD IXr"], ["YZd ptUD", "IXr"]])

    testing(partlist(["dOXj", "nMlK", "QGT", "LSt", "BHNR"]), 
        [["dOXj", "nMlK QGT LSt BHNR"], ["dOXj nMlK", "QGT LSt BHNR"], ["dOXj nMlK QGT", "LSt BHNR"], ["dOXj nMlK QGT LSt", "BHNR"]])
    testing(partlist(["UQB", "aIfC", "eVB", "aCL", "bWoU"]), 
        [["UQB", "aIfC eVB aCL bWoU"], ["UQB aIfC", "eVB aCL bWoU"], ["UQB aIfC eVB", "aCL bWoU"], ["UQB aIfC eVB aCL", "bWoU"]])
    testing(partlist(["Pimt", "qxEm", "enzX", "Luk", "Smi"]), 
        [["Pimt", "qxEm enzX Luk Smi"], ["Pimt qxEm", "enzX Luk Smi"], ["Pimt qxEm enzX", "Luk Smi"], ["Pimt qxEm enzX Luk", "Smi"]])
    testing(partlist(["CyAg", "zzWg", "ZZuR", "wbpx", "mYr"]), 
        [["CyAg", "zzWg ZZuR wbpx mYr"], ["CyAg zzWg", "ZZuR wbpx mYr"], ["CyAg zzWg ZZuR", "wbpx mYr"], ["CyAg zzWg ZZuR wbpx", "mYr"]])
    testing(partlist(["Epb", "yTcb", "njU"]), [["Epb", "yTcb njU"], ["Epb yTcb", "njU"]])
  })


  it("Random tests partlist",function() {

    function randint(a, b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    //................
    function partlist22(arr) {
        var bigres = [], i = 0;
        while (i < arr.length) { 
            var res = [];
            res.push(arr.slice(0, i+1).join(" "));
            res.push(arr.slice(i+1, arr.length).join(" "));
            bigres.push(res);
            i++;
        }
        var l = bigres.length;
        return bigres.slice(0, l-1);
    }
    //................
 
    function doEx(k) {
        var a1 = [], i = 0;
        while (i < k) {
            let s = ""; let j = 0; let u = randint(3, 7)
            while (j < u) {
                if (randint(0, 100) % 2 === 0) s += String.fromCharCode(randint(97, 122));
                else s += String.fromCharCode(randint(65, 90));
                j += 1
            }
            a1.push(s); 
            i += 1
        }
        return a1
    }

    
    var i = 0;
    while (i < 200) {
        var s = doEx(randint(6, 12));        
        testing(partlist(s.slice()), partlist22(s))
        i++;
    }
  })
})
