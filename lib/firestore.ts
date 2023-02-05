import { firestore } from "@/lib/firebase-services";
import {
  getDocs,
  collection,
} from "firebase/firestore";
import type { JunkType } from "@/firestore-orm/junks";
import junkConverter from "@/firestore-orm/converters/junk-converter";

export async function getAllJunks() {
  let result: JunkType[] = [];
  try {
    const querySnapshot = await getDocs(
      collection(firestore, "junks").withConverter(junkConverter)
    );
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
  } catch (e) {
    throw new Error("Error while getting data from firestore " + e);
  }

  return result;
}
