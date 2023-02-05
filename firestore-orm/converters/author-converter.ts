import {Author} from "@/firestore-orm/author";
import type {AuthorType} from "@/firestore-orm/author";
import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

const authorConverter = {
    toFirestore: (author: AuthorType) => {
        return {
            userName: author.userName
        }
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions | undefined) => {
        const data = snapshot.data(options);
        return new Author(data.userName);
    }
}

export default authorConverter;