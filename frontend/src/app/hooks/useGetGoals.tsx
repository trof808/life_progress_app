import { useEffect, useMemo, useState } from "react";

type GoalItemAppType = {
    id: string;
    title: string;
    finishDate?: Date;
    streamCount: number,
    finishedStreamsCount: number,
    mainGoalId?: string;
    createdAt: Date;
    updatedAt: Date;
}

export const useGetGoals = () => {
    const [goals, setGoals] = useState<GoalItemAppType[]>([]);

    const getGoalsMithProgress = useMemo(() => {
        return goals.map(g => {
            return {
                ...g,
                progress: g.finishedStreamsCount / g.streamCount * 100
            }
        })
    }, [goals]);

    useEffect(() => {
        setGoals([
            {
                id: '1',
                title: "Повысить грейд до 17",
                streamCount: 12,
                finishedStreamsCount: 3,
                finishDate: new Date("12-29-2023"),
                createdAt: new Date("09-20-2023"),
                updatedAt: new Date("09-20-2023"),
            },
        ]);
    }, []);

    return { goals };
}
