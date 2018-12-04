'use strict';

function breadthFirst(startNode) {
  let queue = [];
  let visited = new Set();

  queue.push(startNode);
  visited.add(startNode);

  while(queue.length) {
    let current = queue.shift();
    let neighbors = this.getNeighbors(current);

    for(let neighbor of neighbors) {
      let neighborNode = neighbor.vertex;
      if(visited.has(neighborNode)) {
        continue;
      } else {
        visited.add(neighborNode);
      }
      queue.push(neighborNode);
    }
  }
  return visited;
}