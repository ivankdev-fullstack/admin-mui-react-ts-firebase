import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { UsersTableRowsType } from "../../interfaces/users";
import { db } from "../db";

class UserRepository {
  TABLE_NAME = "users";

  async getAll() {
    try {
      const querySnapshot = await getDocs(collection(db, this.TABLE_NAME));
      const data = [] as any;
      querySnapshot.forEach((d) => {
        data.push({
          ...d.data(),
          id: d.id,
        });
      });

      return data as UsersTableRowsType[];
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async save(data: any) {
    try {
      return addDoc(collection(db, this.TABLE_NAME), data);
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async deleteById(id: string) {
    try {
      await deleteDoc(doc(db, this.TABLE_NAME, id));
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

export const userRepository = new UserRepository();
