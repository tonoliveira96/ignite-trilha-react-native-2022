import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { AppError } from '@utils/AppErros';
import { getAllMeals } from './getAllMeals';

export async function mealCreate(newMeal: any) {
  try {
    const storedMeals = await getAllMeals();

    const mealsExist = storedMeals.includes(newMeal);

    if (mealsExist) {
      throw new AppError('Já existe uma refeição com esse nome!');
    }

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}