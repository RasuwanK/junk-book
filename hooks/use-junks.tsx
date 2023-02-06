import { useEffect, useState } from "react"
import { getJunksByDate } from "@/lib/firestore";
import type { JunkType } from "@/firestore-orm/junks";

export default function useJunks(date: Date | undefined) {
    // This hook is used to get and set junks (stories) to the database
    const [junks, setJunks] = useState<JunkType[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        // Taking all the 'junk' from the database
        if (date) {
            // If the hydration takes longer to get router query
            getJunksByDate(date)
                .then((data) => {
                    // Data returned successfully
                    setJunks(data);
                    setLoading(false);
                })
                .catch((error) => {
                    // Error while returning data
                    setError(error);
                    setLoading(false);
                });
        }

    }, [date]);

    return {
        junks,
        isLoading,
        error
    }
}