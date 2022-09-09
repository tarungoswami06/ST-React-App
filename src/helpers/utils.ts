import { HorseDetailTypes, RaceResultType } from "../types/RaceTypes";
import { RACE_EVENT_TYPE } from "./constants";

// Add/Update record in race status list
export const updateRaceStatus = (data: HorseDetailTypes[], newRecord: RaceResultType): HorseDetailTypes[] => {
    const index = data.findIndex((item: HorseDetailTypes) => item.id === newRecord.horse.id);
    if (newRecord.event === RACE_EVENT_TYPE.START) {
        if (index !== -1) {
            data[index].time = newRecord.time;
            data[index].eventType = RACE_EVENT_TYPE.START;
        } else {
            //Latest Record
            const newHorseDetail = {
                id: newRecord.horse.id,
                name: newRecord.horse.name,
                eventType: newRecord.event,
                time: newRecord.time,
            };
            data = [...data, newHorseDetail];
        }
        const isAnyHorseFinished = data.find((item) => item.time !== 0);
        //Sort Latest Record
        return isAnyHorseFinished ? sortRaceStatus(data) : data;
    } else {
        if (newRecord.horse) {
            data = updateHorseData(data, newRecord, index);
        }
        return sortRaceStatus(data);
    }
};

// Sort race status list
export const sortRaceStatus = (data: HorseDetailTypes[]): HorseDetailTypes[] => {
    data.sort((a, b) => a.time - b.time);
    const idx = data.findIndex((o) => o.time > 0);
    const spliceData = data.splice(0, idx);
    return data.concat(spliceData);
};

//Update Horse data for already exists
const updateHorseData = (data: HorseDetailTypes[], newRecord: RaceResultType, index: number) => {
    if (index !== -1) {
        data[index].time = newRecord.time;
        data[index].eventType = RACE_EVENT_TYPE.FINISH;
    }
    return data;
};
