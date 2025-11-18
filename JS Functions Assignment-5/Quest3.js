let user = {
    name: "Rishav",
    showName: () => {
        console.log(this.name);
    }
};

user.showName(); 

let fixedUser = {
    name: "Rishav",
    showName: function() {
        console.log(this.name);
    }
};

fixedUser.showName(); 
