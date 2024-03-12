//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation: string[]= ['civic','bike','bus','cow suzuki'];
for(let i=0; i<transportation.length; i++){
    console.log('i would like to own a ' +transportation[i]);
}
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_list : string [] = ['yaman','minsa','hiba'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected madam' + guest_list[i] + ',\nwe invited  you on dinner tomorrow.\nThankyou\n')
}
//Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let not_person :string = 'hiba';
let new_guest :string = 'Kamran Tasoori';
guest_list[2]= new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected madam' + guest_list[i] + ',\nwe invited  you on dinner tomorrow.\nThankyou\n')
}
console.log(`Mr.${not_person} will not coming tomorrow dinner.`)