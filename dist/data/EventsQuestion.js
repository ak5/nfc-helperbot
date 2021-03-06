"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventsQuestion {
    constructor() {
        this.answer = "There are several events and things happening at NFC:\n" +
            "A Bouncy Castle, Gaming Arcade, Board Games, Dying Dog Dinner, Eat South America, Temple of Temptation," +
            "Haunted House, Charity Concert, Fursuit Huning, Achievement Hunting, karaoke, fursuit games," +
            "fursuit parade, fursuit zoo, afternoon waffles, international snack exchange, Furries Got Talent," +
            "drawing corner, dealers den, and much more.\n" +
            "Schedule: https://www.nordicfuzzcon.org/Program/Schedule";
        this.keyword = "events_list";
        this.questions = [
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
}
exports.EventsQuestion = EventsQuestion;
