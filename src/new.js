let lang = [
    {
        CSS: 120390342,
        HTML: 342234
    },
    {
        CSS: 120390342,
        JS: 342234
    },
    {
        CSS: 120390342,
        PYTHON: 342234
    },
    {
        CSS: 120390342,
        HTML: 342234
    },
]

let arrPercentage = [
    {
        CSS: 90
    },
    {
        JS: 3
    },
    {
        HTML: 6
    },
    {
        PYTHON: 1
    }
]

// to-do one function that will handle the dublicates and sum the 

const sumLang = (arr) => {
    let newArr = [];
    for( let i = 0; i < arr.length; i++){
        // if element already in the array just add in to previous one 
        let keys = Object.keys(arr[i]);
        let values = Object.values(arr[i])
        for(let j = 0; j < keys.length; j++){
            if(newArr.contains(keys[j])){
                let specificLanguage = newArr.find(el =>  el[0] === keys[j])
                specificLanguage[1] +=  values[j]
            } else {
                let obj = {}
                obj[keys[j]] = values[j] 
                newArr.push([keys[j], values[j]])
            }
        }
    }

    return newArr;
}

const newArr =  sumLang(lang)
const totalNumber = 0
for(let i = 0; i < newArr.length; i++){
    totalNumber += newArr[i][1]
}

const countPercentage = (whole, part) => {
    return 100 * part / whole
}

for(let i = 0; i < newArr.length; i++){
    let percentage = countPercentage(totalNumber, newArr[1])
    newArr[1] = percentage
}