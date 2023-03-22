import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { membership } from "@/components/membership";

export async function getUserLevel(walletAddress = "") {
  if (!walletAddress) return false;
  try {
    const userRef = doc(firestore, `users/${walletAddress}`);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data().member;
    } else {
      const newUserData = {
        member: membership.free,
        createAt: serverTimestamp(),
        updateAt: serverTimestamp(),
      };
      await setDoc(userRef, newUserData);
      return newUserData.member;
    }
  } catch (err) {
    console.log(err.message);
  }
}
