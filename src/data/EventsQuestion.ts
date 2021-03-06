import { Question } from "../lib/Question";

export class EventsQuestion implements Question {
    public answer: string = "There are several events and things happening at NFC:\n" +
        "A Bouncy Castle, Gaming Arcade, Board Games, Dying Dog Dinner, Eat South America, Temple of Temptation," +
        "Haunted House, Charity Concert, Fursuit Huning, Achievement Hunting, karaoke, fursuit games," +
        "fursuit parade, fursuit zoo, afternoon waffles, international snack exchange, Furries Got Talent," +
        "drawing corner, dealers den, and much more.\n" +
        "Schedule: https://www.nordicfuzzcon.org/Program/Schedule";

    public keyword: string = "events_list";

    public questions: string[] = [
        "What is happening at NFC?",
        "What is happening?",
        "What events are there?",
        "What can I do?",
        "Where is the schedule?",
        "Where is the schedule for NFC?",
        "What is the schedule?",
        "What is the schedule for NFC?",
    ];
}
