var person;

person = {
    firstName : "Jack",
    lastName : "Smith",
    age : 19,
    employed: true
}

for (var i in person)
{
    if (person.hasOwnProperty(i))
    {
        console.log(person[i])
    }
}