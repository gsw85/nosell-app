import {
  firestore,
  storage,
  storageRef,
  storageUploadFileData,
  getStorageDownloadURL,
} from "@/lib/firebase";
import {
  getDoc,
  doc,
  addDoc,
  serverTimestamp,
  collection,
  updateDoc,
} from "firebase/firestore";

export async function addListing(
  ownerAddress = "",
  title = "",
  description = "",
  priceUSD = 0,
  payoutCurrency = "",
  payoutWallet = "",
  files = []
) {
  try {
    const listingDataInit = {
      owner: ownerAddress,
      title: title,
      description: description,
      priceUSD: priceUSD,
      payoutCurrency: payoutCurrency,
      payoutWallet: payoutWallet,
      files: [],
      createAt: serverTimestamp(),
    };

    const listingSnap = await addDoc(
      collection(firestore, "listings"),
      listingDataInit
    );

    const downloadURLAll = await Promise.all(
      files.map(async (file) => {
        const fileName = file.name;
        const fileUploadRef = storageRef(
          storage,
          `listings/${listingSnap.id}/${fileName}`
        );
        const uploadSnap = await storageUploadFileData(fileUploadRef, file);
        const fileDownloadURL = await getStorageDownloadURL(uploadSnap.ref);

        return { name: fileName, url: fileDownloadURL };
      })
    );

    await updateDoc(doc(firestore, `listings/${listingSnap.id}`), {
      files: downloadURLAll,
    });

    return listingSnap.id;
  } catch (err) {
    console.log(err.message);
  }
}
