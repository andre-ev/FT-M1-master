function LinkedList() {
    this.head = null;
    this.size = 0; 
}

function Node(data) {
    this.data = data;
    this.next = null;
}

LinkedList.prototype.add = function (value) {
    const newNode = new Node(value);
    let current = this.head;
    
    if (!current) {
        this.head = newNode;
        this.size++;
        return newNode;
    }

    while (current.next) {
        current = current.next;
    }
    
    current.next = newNode;
    this.size++;
};


var newList = new LinkedList();
newList.add(5);
console.log(newList);
newList.add(15);
console.log(newList);
newList.add(75);
console.log(newList);
console.log(newList.head.next.next);

for (word of 'Lostacli') {
    console.log(word);
}