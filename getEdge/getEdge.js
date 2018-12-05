directFlight(graph, arrOfCities) {
  if (!graph.length && arrOfCities !== null) return 'error';
  let flightCost = 0;
  for (let i = 0; i < arrOfCities.length - 1; i++) {
    let connections = getNeighbors(arrOfCities[i]);
    if (connections.includes(arrOfCities[i + 1])) {
      for(let edge of connections) {
        if (edge === arrOfCities[i + 1]) {
          flightCost += edge.weight;
        }
      }
    } else return 'false';
  }
  return `true. ${flightCost}`;
}