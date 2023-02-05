import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_SUMARRY } from "@storage/storageConfig";

export async function getSummary() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_SUMARRY);

    const summary: string[] = storage ? JSON.parse(storage) : [];

    return summary;
  } catch (error) {
    throw error;
  }
}