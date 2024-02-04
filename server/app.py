from flask import Flask, request, jsonify
from flask_cors import CORS
from players import getPlayerSeasonStats

app = Flask(__name__)
CORS(app)

@app.route('/players', methods=['POST'])
def receive_player_data():
    data = request.get_json()
    player1stats = getPlayerSeasonStats(data['player1']['name'], data['player1']['season'])
    print("Player1 stats: ", player1stats)
    return jsonify({'message': 'Success'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)