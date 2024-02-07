import Team from "team";
import Character from "character";

const team = new Team();

team.add(new Character("Лучник", "Bowman"));
team.add(new Character("Демон", "Demon"));
team.add(new Character("Маг", "Magician"));
team.add(new Character("Нежить", "Undead"));

for (const char of team) {
  console.log(char);
}
