const PICKS = {
     'AD': {
            'ATL': 'U',
            'BOS': 'O',
            'BKN': 'O',
            'CHA': 'U',
            'CHI': 'O',
            'CLE': 'U',
            'DAL': 'U',
            'DEN': 'O',
            'DET': 'O',
            'GS': 'U',
            'HOU': 'O',
            'IND': 'U',
            'LAC': 'O',
            'LAL': 'O',
            'MEM': 'U',
            'MIA': 'O',
            'MIL': 'O',
            'MIN': 'O',
            'NO': 'U',
            'NY': 'O',
            'OKC': 'O',
            'ORL': 'O',
            'PHI': 'O',
            'PHX': 'U',
            'POR': 'U',
            'SAC': 'O',
            'SA': 'U',
            'TOR': 'U',
            'UTAH': 'U',
            'WSH': 'U',
            'locks': ['CHA', 'MEM', 'WSH']
        },
        'JR': {
            'ATL': 'O',
            'BOS': 'U',
            'BKN': 'O',
            'CHA': 'U',
            'CHI': 'O',
            'CLE': 'U',
            'DAL': 'U',
            'DEN': 'O',
            'DET': 'O',
            'GS': 'U',
            'HOU': 'O',
            'IND': 'U',
            'LAC': 'O',
            'LAL': 'O',
            'MEM': 'U',
            'MIA': 'O',
            'MIL': 'O',
            'MIN': 'O',
            'NO': 'U',
            'NY': 'U',
            'OKC': 'U',
            'ORL': 'U',
            'PHI': 'O',
            'PHX': 'U',
            'POR': 'O',
            'SAC': 'O',
            'SA': 'O',
            'TOR': 'O',
            'UTAH': 'O',
            'WSH': 'U',
            'locks': ['BKN', 'MIA', 'PHI']
        },
        'JT': {
            'ATL': 'O',
            'BOS': 'U',
            'BKN': 'U',
            'CHA': 'U',
            'CHI': 'O',
            'CLE': 'U',
            'DAL': 'O',
            'DEN': 'O',
            'DET': 'O',
            'GS': 'O',
            'HOU': 'O',
            'IND': 'O',
            'LAC': 'O',
            'LAL': 'O',
            'MEM': 'U',
            'MIA': 'O',
            'MIL': 'O',
            'MIN': 'O',
            'NO': 'U',
            'NY': 'U',
            'OKC': 'O',
            'ORL': 'O',
            'PHI': 'O',
            'PHX': 'O',
            'POR': 'U',
            'SAC': 'U',
            'SA': 'U',
            'TOR': 'U',
            'UTAH': 'U',
            'WSH': 'U',
            'locks': ['DEN', 'LAC', 'WSH']
        },
        'MM': {
            'ATL': 'U',
            'BOS': 'U',
            'BKN': 'O',
            'CHA': 'U',
            'CHI': 'U',
            'CLE': 'U',
            'DAL': 'U',
            'DEN': 'O',
            'DET': 'O',
            'GS': 'O',
            'HOU': 'O',
            'IND': 'U',
            'LAC': 'U',
            'LAL': 'U',
            'MEM': 'O',
            'MIA': 'O',
            'MIL': 'O',
            'MIN': 'U',
            'NO': 'U',
            'NY': 'U',
            'OKC': 'O',
            'ORL': 'U',
            'PHI': 'O',
            'PHX': 'U',
            'POR': 'U',
            'SAC': 'U',
            'SA': 'O',
            'TOR': 'O',
            'UTAH': 'O',
            'WSH': 'U',
            'locks': ['IND', 'POR', 'TOR']
        },
        'JF': {
            'ATL': 'U',
            'BOS': 'U',
            'BKN': 'O',
            'CHA': 'U',
            'CHI': 'O',
            'CLE': 'U',
            'DAL': 'U',
            'DEN': 'U',
            'DET': 'O',
            'GS': 'U',
            'HOU': 'O',
            'IND': 'U',
            'LAC': 'O',
            'LAL': 'O',
            'MEM': 'O',
            'MIA': 'O',
            'MIL': 'U',
            'MIN': 'U',
            'NO': 'U',
            'NY': 'U',
            'OKC': 'O',
            'ORL': 'O',
            'PHI': 'O',
            'PHX': 'O',
            'POR': 'U',
            'SAC': 'O',
            'SA': 'U',
            'TOR': 'O',
            'UTAH': 'O',
            'WSH': 'U',
            'locks': ['DET', 'MIA', 'MIN']
        },
        'TK': {
            'ATL': 'O',
            'BOS': 'U',
            'BKN': 'U',
            'CHA': 'U',
            'CHI': 'U',
            'CLE': 'U',
            'DAL': 'U',
            'DEN': 'U',
            'DET': 'O',
            'GS': 'U',
            'HOU': 'U',
            'IND': 'U',
            'LAC': 'U',
            'LAL': 'O',
            'MEM': 'U',
            'MIA': 'O',
            'MIL': 'O',
            'MIN': 'U',
            'NO': 'U',
            'NY': 'O',
            'OKC': 'U',
            'ORL': 'U',
            'PHI': 'U',
            'PHX': 'O',
            'POR': 'U',
            'SAC': 'U',
            'SA': 'U',
            'TOR': 'U',
            'UTAH': 'U',
            'WSH': 'O',
            'locks': ['MIN', 'POR', 'TOR']
        },
        'JW': {
            'ATL': 'U',
            'BOS': 'U',
            'BKN': 'O',
            'CHA': 'O',
            'CHI': 'U',
            'CLE': 'U',
            'DAL': 'U',
            'DEN': 'U',
            'DET': 'O',
            'GS': 'U',
            'HOU': 'O',
            'IND': 'U',
            'LAC': 'O',
            'LAL': 'U',
            'MEM': 'U',
            'MIA': 'U',
            'MIL': 'U',
            'MIN': 'O',
            'NO': 'U',
            'NY': 'O',
            'OKC': 'O',
            'ORL': 'U',
            'PHI': 'U',
            'PHX': 'O',
            'POR': 'U',
            'SAC': 'U',
            'SA': 'U',
            'TOR': 'U',
            'UTAH': 'U',
            'WSH': 'O',
            'locks': ['BOS', 'IND', 'PHI']
        },
        'ZN': {
            'ATL': 'O',
            'BOS': 'U',
            'BKN': 'U',
            'CHA': 'O',
            'CHI': 'O',
            'CLE': 'U',
            'DAL': 'O',
            'DEN': 'U',
            'DET': 'U',
            'GS': 'O',
            'HOU': 'O',
            'IND': 'O',
            'LAC': 'O',
            'LAL': 'O',
            'MEM': 'O',
            'MIA': 'U',
            'MIL': 'U',
            'MIN': 'O',
            'NO': 'O',
            'NY': 'O',
            'OKC': 'O',
            'ORL': 'U',
            'PHI': 'U',
            'PHX': 'O',
            'POR': 'U',
            'SAC': 'U',
            'SA': 'U',
            'TOR': 'O',
            'UTAH': 'U',
            'WSH': 'O',
            'locks': ['CHI', 'HOU', 'SA']
        }
}


export default PICKS;