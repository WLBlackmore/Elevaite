from nba_api.stats.endpoints import playercareerstats

# LeBron James's Player ID
lebron_id = '2544'  # Replace with the actual Player ID

# Create an instance of the PlayerCareerStats endpoint
career_stats = playercareerstats.PlayerCareerStats(player_id=lebron_id, per_mode36='PerGame')

# Extract the data for the 2022 season
career_df = career_stats.get_data_frames()[0]
season_2022_stats = career_df[career_df['SEASON_ID'] == '2021-22']

print(season_2022_stats.PTS)
