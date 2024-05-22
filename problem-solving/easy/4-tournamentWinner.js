function updateScore(team, point, scores) {
  if (scores[team]) {
    scores[team] += point;
  } else {
    scores[team] = point;
  }
}

// Time Complexity => O(n) | Space Complexity => O(n)
function tournamentWinner(competitions, results) {
  let tournamentWinnerTeam = '';
  const scores = { tournamentWinnerTeam: 0 };

  for (let i = 0; i < competitions.length && i < results.length; i++) {
    const awayTeam = competitions[i][1];
    const homeTeam = competitions[i][0];

    const winningTeam = results[i] === 1 ? homeTeam : awayTeam;

    updateScore(winningTeam, 3, scores);

    tournamentWinnerTeam =
      scores[tournamentWinnerTeam] > scores[winningTeam]
        ? tournamentWinnerTeam
        : winningTeam;
  }

  return tournamentWinnerTeam;
}

const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
];

const results = [0, 1, 1];

console.log(tournamentWinner(competitions, results));
