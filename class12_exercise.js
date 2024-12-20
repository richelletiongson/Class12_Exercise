const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  /*
We will create an application that lists arrays within an object as looping through objects are useful
We will use for (let key in obj)

This application will allow hosts to give add users to their chat server, assign roles through permissions that are true or untrue

CHALLENGE,
Make a function and command to turn all permissions off and all permissions on

CHALLENGE 2,
Using the role object, make commands to assign different roles by looping through the settings and assing the values of the chosen role
 

PLANNING

Creating Users:
readline.question to prompt for the user's name and role they want to assign to the user. If the role name they provided is not an object
in the role array declared, then tell the user it is an invalid code. If role name they provided is acceptable, make a new const container 
newUser. This will contain the name of the user, the role, and the permissions they have within that role. 

Assigning Roles:
List the users by number and using readline.question prompt user to choose which user they want to assign a new role to. When user answers
with the number, it will be a string, so using parseInt will convert their answer from string to integer. We will store their answer in new const 
(index). Prompt user again to ask what role they want to assign to the user they chose. Index will then be used to call a specific user in the array 
to change their role and permissions.

Listing Users:
Using for loop, list all in the users array. i=0 and as long as i is less than the number of users in the array, increase i by 1 and  
it will output a user and their role and permissions each loop (i = 0; i < users.length; i++).

Showing Permission:
Go through all users using a for loop and then nesting another for loop inside it with "let key in obj" to go through all the permissions of the
each user. Key will represent the permission name and user.permissions[key] will show whether they have permission or not (true or false).

CHALLENGE 1:
Create a new function that will toggle all permissions on or off using a for loop and "let key in obj". If the command the user chooses is to turn permissions on the the state 
in the function will be true. If the command they choose is to turn off permissions then the state will be false.

CHALLENGE 2:
Assigning permission, list users using listUsers() function. (opted out)


*/

let users = [];

//CHALLENGE 2 ONLY
let role = {
  moderator:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:false,
    editChannels:true
  },
  simple:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:false,
    deleteAccounts:false,
    createChannels:false,
    editChannels:false
  },
  coAdmin:{
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:true,
    editChannels:true
  }
};


let settings = {
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:true,
    createChannels:true,
    editChannels:true
}

function createUsers(){
      readline.question("Enter User Name: ", (userName) => {
        readline.question("Assign a Role (moderator/simple/coAdmin):", (roleName) => {
          if (!role[roleName]){                    //this is to check if the roleName inputted is in the roles array.  
            console.log("Invalid role, try again"); 
            StartApp();
            return;
          }
          const newUser = {
            userNameame, 
            role: roleName, 
            permissions: role[roleName],
          };
          users.push(newUser);
          console.log('User ${name} has been added with the role ${roleName}.');
          StartApp();
        }
       );
      });
}

function assignRole(){
    listUsers();
    readline.question("Select a User by Their Corresponding Number to Assign Them a New Role:", (num) => {
      const index = parseInt(num) - 1;
      readline.question("Assign a New Role (moderator/simple/coAdmin):", (roleName) => {
        users[index].role = roleName;
        users[index].permissions = role[roleName];
        console.log('The role for ${users[index].name} has been updated to ${roleName}.');
        StartApp();
      }
      );
    }); 
}

function listUsers(){
    for (let i = 0; i < users.length; i++){
      console.log('${i + 1}. ${users[i]} - Role: ${users[i].role}, Permissions: ${users[i].permissions}');
    }
  StartApp();
}

function assignPermissions(){
  listUsers();
  readline.question("Which user would you like to change permissions for? (select user's corresponding number)", (num) => {
    const index = parseInt(num) - 1;
   //Opting out of challenge 2!
  });
}

function showPermissions(){
  console.log("User Permissions: ");
  for (let user of users) {
    console.log(`${user.name} - Role: ${user.role}`);
    console.log("Permissions:");
    for (let key in user.permissions) {
      console.log(`${key}: ${user.permissions[key]}`);
    }
  }
  StartApp();
}

function togglePermissions(state) {
  for (let key in settings) {
    settings[key] = state;
  }
  console.log(`All permissions are turned ${state}.`);
  StartApp();
}

function StartApp() {
  console.log("Commands:");
  console.log("1. Add User");
  console.log("2. List Users");
  console.log("3. Assign Role");
  console.log("4. Show Permissions");
  console.log("5. Turn All Permissions On");
  console.log("6. Turn All Permissions Off");
  console.log("Type 'quit' to exit.");

    readline.question("What would you like to do? (Use corresponding number of command.)", (_command) => {
   
      if (_command === "1"){
        createUsers();
      } else if (_command === "2"){
        listUsers();
      } else if (_command === "3"){
        assignRole();
      } else if (_command === "4"){
        showPermissions();
      } else if (_command === "5"){
        togglePermissions(true);
      } else if (_command === "6"){
        togglePermissions(false);
      } else if(_command !== "quit") {
        readline.close();
        return;
      } else {
        console.log("Invalid command, try again.")
        StartApp();
      }
    });
  }

  StartApp();

  // Code seems functional and has clear planning. 
  //Reviewed by: Beau
  