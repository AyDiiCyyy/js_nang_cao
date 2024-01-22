const eventArray = new Map([
    [17, '⚽ GOAL'],
    [36, '🔃 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔃 Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔃 Substitution'],
    [72, '🔃 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yellow card'],
]);

//1 
const events = [...new Set(eventArray.values())];
console.log(events);

//2
eventArray.delete(64);

//3
console.log(`Trung bình, mỗi sự kiện diễn ra cứ sau ${90 / eventArray.size} phút`);
const time = [...eventArray.keys()].pop();
console.log(time);
console.log(`Trung bình, mỗi sự kiện diễn ra cứ sau ${time / eventArray.size} phút`);

//4

for (const [min, event] of eventArray) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min} :${event}`);
}