class todoList {
	constructor(name, description) {
		this.name = name
		this.description = description
	}

	showList() {
		console.log(this.name, this.description)
	}
}

class NewActivity extends todoList {
	constructor(name, description) {
		super(name, description)
	}
}


let activity1 = new NewActivity("programming", "\n i should learn programing.");
activity1.showList()
console.log("\n");
let activity2 = new NewActivity("dancing", "\n i should learn programing.");
activity2.showList()
console.log("\n");
let activity3 = new NewActivity("playing", "\n play football on sunday.");
activity3.showList()
