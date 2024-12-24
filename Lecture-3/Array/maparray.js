const finalParticipants = ["Taylor" , "Donald" , "Natasha" , "Bobby"];

const announcements = finalParticipants.map((member) => {
    return member + " joined the contest.";
}) ;

console.log(announcements);