let lists = []
let req = prompt("enter the request")

while (true){
    if (req == 'quit'){
        console.log('qutting')
        break;
    }
    if (req == 'list'){
        for( let list of lists){
            console.log(list)
        }
    }
    else if (req == 'add'){
        item = prompt("enter the task")
        lists.push(item)
        console.log("task added")
    }
    else if (req == 'delete'){
        del = prompt('enter the index :')
        lists.pop(del,1)
        console.log('task delted')
    }
    req = prompt("enter the request")
}