import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_SUMARRY } from "@storage/storageConfig";

export async function saveSummary(summary: any) {
  try {
    const storage = JSON.stringify(summary);

    await AsyncStorage.setItem(MEAL_SUMARRY, storage);

  } catch (error) {
    throw error;
  }
}