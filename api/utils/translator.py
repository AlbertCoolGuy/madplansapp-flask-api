from googletrans import Translator

translator = Translator()

NON_TRANSLATABLE = {"strMealThumb", "strSource", "strYoutube"}

def translate_recipe_to_danish(recipe):
    """
    Translate all relevant string fields in a recipe JSON to Danish.
    """
    for key, value in recipe.items():
        if key.startswith("str") and key not in NON_TRANSLATABLE and isinstance(value, str) and value.strip():
            try:
                translated = translator.translate(value, src='en', dest='da').text
                recipe[key] = translated
            except Exception as e:
                # If translation fails, keep original
                print(f"Translation failed for {key}: {e}")
    return recipe