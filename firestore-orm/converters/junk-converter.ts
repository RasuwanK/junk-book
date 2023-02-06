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
      index: junk.index
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions | undefined
  ) => {
    const data = snapshot.data(options);
    const date = new Timestamp(data.dateAdded.seconds, data.dateAdded.nanoseconds).toDate();
    return new Junk(data.title, data.story, date, data.index);
  },
};

export default junkConverter;
