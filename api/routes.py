import json
import re

import requests
from flask import Response, request

from api.utils.translator import translate_recipe_to_danish


def json_response(data, status=200):
    """Return a Flask Response with JSON and non-ASCII characters preserved."""
    return Response(
        json.dumps(data, ensure_ascii=False, indent=2),
        mimetype="application/json",
        status=status
    )


def register_routes(app):

    @app.get("/api/hello")
    def hello():
        name = request.args.get("name", "world")
        return json_response({"message": f"hello {name}"})

    @app.get("/health")
    def health():
        return json_response({"status": "ok"})

    @app.get("/api/recipes")
    def get_recipes_by_ingredient():
        ingredient = request.args.get("ingredient")
        if not ingredient:
            return json_response({"error": "ingredient query parameter is required"}, status=400)
        
        url = f"https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}"
        response = requests.get(url)
        if response.status_code != 200:
            return json_response({"error": "failed to fetch from mealdb"}, status=500)
        
        data = response.json()
        meals = data.get("meals") or []
        return json_response({"meals": meals})

    @app.get("/api/recipes/details")
    def get_recipe_details():
        recipe_id = request.args.get("recipe_id")
        if not recipe_id:
            return json_response({"error": "recipe_id query parameter is required"}, status=400)

        url = f"https://www.themealdb.com/api/json/v1/1/lookup.php?i={recipe_id}"
        response = requests.get(url)
        if response.status_code != 200:
            return json_response({"error": "failed to fetch from mealdb"}, status=500)

        data = response.json()
        if not data.get("meals"):
            return json_response({"error": "recipe not found"}, status=404)

        meal = data["meals"][0]

        # Translate recipe (skip non-translatable fields internally)
        translated_meal = translate_recipe_to_danish(meal)

        # Clean instructions: split on boxes/newlines and fix spacing after dots
        instructions_raw = translated_meal.get("strInstructions", "")
        instructions = [step.strip() for step in instructions_raw.replace("▢", "\n").split("\n") if step.strip()]
        instructions = [re.sub(r'\.(\S)', r'. \1', paragraph) for paragraph in instructions]

        # Build structured ingredients with conversion
        ingredients = []
        for i in range(1, 21):
            name = translated_meal.get(f"strIngredient{i}")
            measure = translated_meal.get(f"strMeasure{i}")
            if name and name.strip():
                ingredients.append({
                    "name": name.strip(),
                    "measure": measure.strip() if measure else "",
                })

        # Build final recipe object
        recipe_output = {
            "idMeal": translated_meal.get("idMeal"),
            "name": translated_meal.get("strMeal"),
            "category": translated_meal.get("strCategory"),
            "area": translated_meal.get("strArea"),
            "instructions": instructions,
            "thumbnail": translated_meal.get("strMealThumb"),
            "source": translated_meal.get("strSource"),
            "youtube": translated_meal.get("strYoutube"),
            "ingredients": ingredients
        }

        return json_response({"meal": recipe_output})        return json_response({"meal": recipe_output})