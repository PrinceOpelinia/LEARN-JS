
var personObject = {
    firstName : "John",
    lastName : "Smith"
}

//adding new stuff
personObject.age = 23;
personObject["Salary"] = 14000;

for (var member in personObject)
{
    if (personObject.hasOwnProperty(member))
    {
        console.log("the member " + member + " of personObject is " + personObject[member])
    }
}