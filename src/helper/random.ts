import { Group } from "../interface/form";

const shuffleArray = (array: string[]): string[] => {
   return array.sort(() => Math.random() - 0.5);
};

const mapNameGroup = (groupNames: string[]): Group => {
   const nameRecords: Group = {};
   groupNames.forEach((nameOfGroup) => (nameRecords[nameOfGroup] = []));
   return nameRecords;
};

export const randomGroup = (members: string[], groupNames: string[]): Group => {
   const oldSortedGroups = mapNameGroup(groupNames);
   const shuffledMembers = shuffleArray(members);
   const shuffledGroups = shuffleArray(groupNames);
   const newSortedGroups = mapNameGroup(shuffledGroups);
   const membersPerGroups = Math.ceil(members.length / groupNames.length);
   for (let i = 0; i < membersPerGroups; i++) {
      shuffledGroups.forEach((nameOfGroup) => {
         shuffledMembers.length !== 0 &&
            newSortedGroups[nameOfGroup].push(shuffledMembers.shift()!);
      });
   }
   groupNames.forEach((m) => oldSortedGroups[m].push(...newSortedGroups[m]));
   return oldSortedGroups;
};
