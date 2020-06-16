var users = [
    {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
        city: 'San Francisco',
        state: 'CA'
    }
    },
    {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
        city: 'New York',
        state: 'NY'
    }
    },
    {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
        city: 'Fargo',
        state: 'SD'
    }
    },
    {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
        city: 'Albany',
        state: 'NY'
    }
    },
    {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
        city: 'Los Angeles',
        state: 'CA'
    }
    }
];


 

function printHobbies(users) {
    users.forEach((element) => element['hobbies'].forEach((item) => console.log(item)));
}

function printEmails(users) {

    users.forEach((element) => console.log( element['email'] ));
}

function findHometownByState(users, state) {
    users.forEach(function(element) {
        if(element['hometown']['state'] === state) {
            console.log(element);
        }
    });    

}

function allLanguages(users) {
    let languages = [];
    users.forEach(function(element) {
        element['favoriteLanguages'].forEach(function(item) { 
            if(!languages.includes(item)) {
                languages.push(item);
            }
        });
    });
    return languages;
}


function hasFavoriteEditor(users, editor) {
    let some = users.some((element) => element['favoriteEditor'].includes(editor));
    return some;
}

function findByUsername(users, username) {
    users.forEach(function(element) {
        if(element['username'] === username) {
            console.log( element )  ;
        }
    });
}


findByUsername(users, 'david');
// console.log( hasFavoriteEditor(users, 'VS Code') );
// console.log( allLanguages(users) );
// printHobbies(users);
// printEmails(users);
// findHometownByState(users, 'CA');
