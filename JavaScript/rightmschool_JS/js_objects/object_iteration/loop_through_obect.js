var instructor = {
    name: "Matt",
    mathWizard: true,
    dogOwner: true
};

for(var singleKey in instructor){
    console.log(instructor[singleKey]);
}
