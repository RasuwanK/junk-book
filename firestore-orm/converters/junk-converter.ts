import { Junk } from "@/firestore-orm/junks";
import type { JunkType } from "@/firestore-orm/junks";
import {
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
} from "firebase/firestore";

// Junk converter
const junkConverter = {
  toFirestore: (junk: JunkType) => {
    return {
      title: junk.title,
      story: junk.story,
      dateAdded: Timestamp.fromDate(junk.dateAdded),
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions | undefined
  ) => {
    const data = snapshot.data(options);
    return new Junk(data.title, data.story, new Date(data.dateAdded.seconds));
  },
};

export default junkConverter;
