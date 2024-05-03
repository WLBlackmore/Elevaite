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

# Set up the OpenAI API key
openai.api_key = os.getenv("OPEN_AI_KEY")

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
    
    return jsonify(combined_response), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
