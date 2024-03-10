//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList: string[] = ["Ali", "Kamal", "Murad"];

console.log(`Dear ${guestList[0]}, you are invited to Hi-tea.`);
console.log(`Dear ${guestList[1]}, you are invited to Hi-tear.`);
console.log(`Dear ${guestList[2]}, you are invited to dinner.`);

// Someone can't make it
let unableToAttend = guestList[1];
console.log(`${unableToAttend} can't make it to the Hi-tea.`);

// Replace with a new guest
guestList[1] = "Kamran";

console.log(`Dear ${guestList[0]}, you are invited to Hi-tea.`);
console.log(`Dear ${guestList[1]}, you are invited to Hi-tea.`);
console.log(`Dear ${guestList[2]}, you are invited to Hi-tea.`);
