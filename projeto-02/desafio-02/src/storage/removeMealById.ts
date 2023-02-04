import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function removwMealByid(id?: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: string[] = storage ? JSON.parse(storage) : [];

    const filtredMeal = meals.filter((item: any) => item.id !== id);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filtredMeal));
  } catch (error) {
    throw error;
  }
}