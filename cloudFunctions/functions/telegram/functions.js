import adminFirebase from "firebase-admin";

if (adminFirebase.apps.length === 0) {
  adminFirebase.initializweApp();
}

// Firestore
const adminFireStore = adminFirebase.firestore();
const serverTime = adminFirebase.firestore.FieldValue.serverTimestamp();

const kmPerLitre = 17;
const gskCollection = "gsk-petrol-card";

export async function getLatestMileAge() {
  try {
    const snapshot = await adminFireStore
      .collection(gskCollection)
      .orderBy("date", "desc")
      .limit(1)
      .get();

    if (snapshot.empty) return { status: false, data: "Can't get records" };

    return { status: true, data: snapshot.docs[0].data() };
  } catch (err) {
    return { status: false, data: err.message };
  }
}

export async function addMileAgeDoc(litre = 0) {
  try {
    const latestData = await getLatestMileAge();
    if (!latestData.status) return { status: false, data: latestData.data };

    const latestMileage = +latestData.data.mileage;
    const addMilesFromKM = Math.round(litre * kmPerLitre + Math.random() * 5);
    const newMileage = Math.round(latestMileage + addMilesFromKM);

    const newData = {
      mileage: newMileage,
      date: serverTime,
      addedLitre: litre,
      addedKM: addMilesFromKM,
      MinusKM: 0,
      lastMileage: latestMileage,
    };
    await adminFireStore.collection(gskCollection).add(newData);

    return {
      status: true,
      data: `Added ${litre} litre, about (${addMilesFromKM}km), and next mileage is ${newMileage}`,
    };
  } catch (err) {
    console.log(err.message);
    return { status: false, data: err.message };
  }
}

export async function minusMileAgeDoc(km = 0) {
  try {
    const latestData = await getLatestMileAge();
    if (!latestData.status) return { status: false, data: latestData.data };

    const latestMileage = +latestData.data.mileage;
    const roundedKM = Math.round(km);
    const newMileage = Math.round(latestMileage - roundedKM);

    const newData = {
      mileage: newMileage,
      date: serverTime,
      addedLitre: 0,
      addedKM: 0,
      MinusKM: roundedKM,
      lastMileage: latestMileage,
    };
    await adminFireStore.collection(gskCollection).add(newData);

    return {
      status: true,
      data: `Minus ${roundedKM}km from record, and next mileage is ${newMileage}`,
    };
  } catch (err) {
    console.log(err.message);
    return { status: false, data: err.message };
  }
}
