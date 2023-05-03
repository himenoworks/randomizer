import { Group } from "../pages/RandomGroup";

const shuffleArray = <T>(array: T[]): T[] => {
   const shuffled = [...array];
   for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }
   return shuffled;
};

const createEmptyGroups = (groupNames: string[]): Group =>
   Object.fromEntries(groupNames.map((groupName) => [groupName, []]));

export const randomGroup = (members: string[], groupNames: string[]): Group => {
   const oldSortedGroups = createEmptyGroups(groupNames);
   const shuffledMembers = shuffleArray(members);
   const shuffledGroups = shuffleArray(groupNames);
   const newSortedGroups = createEmptyGroups(shuffledGroups);
   const membersPerGroup = Math.ceil(members.length / groupNames.length);
   for (let i = 0; i < membersPerGroup; i++) {
      shuffledGroups.forEach((nameOfGroup) => {
         shuffledMembers.length !== 0 &&
            newSortedGroups[nameOfGroup].push(shuffledMembers.shift()!);
      });
   }
   groupNames.forEach((m) => oldSortedGroups[m].push(...newSortedGroups[m]));
   return oldSortedGroups;
};
