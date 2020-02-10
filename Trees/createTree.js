//Traversing a Tree With Depth First Traversaal
// 1. Visit the root node of the tree.
// 2. Get the first unvisited child sub-tree of the current node.
// 3. Do step 1 with the sub-tree.

class Employee {
    constructor(name, title, salary) {
        this.name = name,
        this.title = title,
        this.salary= salary,
        this.boss = null,
        this.subordinate = [];
    }

    addSubordinate(subordinate) {
        this.subordinate.push(subordinate);
        subordinate.boss = this;
    }

}

const ada = new Employee('Ada', 'CEO', 300000);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

console.log(ada);

