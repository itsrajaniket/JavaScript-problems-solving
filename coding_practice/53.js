function dijkstra(graph, start) {
  const distances = {};
  const visited = {};
  const queue = [];

  // Initialize distances
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  queue.push(start);

  while (queue.length) {
    // Pick node with smallest distance
    let currentNode = queue.reduce((minNode, node) =>
      distances[node] < distances[minNode] ? node : minNode,
    );

    queue.splice(queue.indexOf(currentNode), 1);
    visited[currentNode] = true;

    // Update neighbors
    for (let neighbor in graph[currentNode]) {
      let newDist = distances[currentNode] + graph[currentNode][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      }
    }
  }

  return distances;
}

// Example Graph (Adjacency List)
const graph = {
  A: { B: 2, C: 4 },
  B: { A: 2, C: 1, D: 7 },
  C: { A: 4, B: 1, D: 3 },
  D: { B: 7, C: 3 },
};

console.log(dijkstra(graph, "A"));
// Output: { A: 0, B: 2, C: 3, D: 6 }
