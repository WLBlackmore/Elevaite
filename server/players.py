from nba_api.stats.static import players
from nba_api.stats.endpoints import playercareerstats
import requests

def getPlayerIdFromName(player_name):
    all_players = players.get_players()
    player_info = [player for player in all_players if player['full_name'] == player_name][0]
    player_id = player_info['id']
    print (player_info)
    return player_id

def getPlayerSeasonStats(player_name, year):
    found_player_id = getPlayerIdFromName(player_name)
    career_stats = playercareerstats.PlayerCareerStats(player_id=found_player_id, per_mode36='PerGame')
    career_df = career_stats.get_data_frames()[0]
    player_szn_stats = career_df[career_df['SEASON_ID'] == year]
    print(player_name + " has these stats in year " + year + '\n')
    return player_szn_stats

def getPlayerHeadshot(player_name):
    req_name = player_name.replace(' ', '_')
    url = f'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p={req_name}'
    response = requests.get(url)
    data = response.json()
    image_url = data['player'][0]['strCutout']
    return image_url
