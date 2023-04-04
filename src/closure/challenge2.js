function createPetList() {
    const petList = [];
    function addingToPetList(petS) {
        if(petS) {
            petList.push(petS);
        }
        console.log(petList);
        return petList
    }
    return addingToPetList
}

myPetList = createPetList();

myPetList('Bella');
myPetList('Makio');

console.log(myPetList());