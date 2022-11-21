import { useState } from "react";
import { database } from "../config/firebase";
import { ref, onValue } from "firebase/database";

export const useBanners = () => {
  const [bannersDb, setBannersDb] = useState([]);

  if (bannersDb == "") {
    const starCountRef = ref(database, "banners");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setBannersDb(data);
    });
  }
  return { bannersDb };
};
