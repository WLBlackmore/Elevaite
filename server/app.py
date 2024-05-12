from flask import Flask, request, jsonify
from flask_cors import CORS
from players import getPlayerSeasonStats
import pandas as pd
import json
import openai
from dotenv import load_dotenv
import os

# Load the .env file
load_dotenv()

# Initialize the OpenAI client
client = openai.OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

# Initialize the Flask app
app = Flask(__name__)
CORS(app)

@app.route('/players', methods=['POST'])
def receive_player_data():
    data = request.get_json()
    player1stats = getPlayerSeasonStats(data['player1']['name'], data['player1']['season'])
    player2stats = getPlayerSeasonStats(data['player2']['name'], data['player2']['season'])
    
    # Convert DataFrames to dictionaries
    player1_json = json.loads(player1stats.to_json(orient="records"))
    player2_json = json.loads(player2stats.to_json(orient="records"))
    
    # Combine both players' stats into one response
    combined_response = {
        "player1stats": player1_json,
        "player2stats": player2_json
    }
    
    # Formulating the prompt for OpenAI
    prompt = "which player is better? Player 1: " + data['player1']['name'] + " in the " + data['player1']['season'] + " season. Player 2: " + data['player2']['name'] + " in the " + data['player2']['season'] + " season."
    
   # Call the OpenAI API using the updated method for chat completion
    chat_completion = client.chat.completions.create(
        model="gpt-4-turbo",
        messages=[
           {"role": "system", "content": "You are helping to compare two sports players based on their stats. Compare in these categories: advanced stats (e.g PER, WS, BPM), roles, and accolaides."},
            {"role": "user", "content": prompt}
     ]
     
    )

    # Get the response text
    answer = chat_completion.choices[0].message

    print(answer)  # Print the model's response to the console


    return jsonify(combined_response), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)

