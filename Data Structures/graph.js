/* Graphs in JavaScript
Graphs are a fundamental data structure used to model pairwise relationships between objects.
They consist of vertices (nodes) and edges (connections between nodes). 

Here’s a breakdown of graph concepts and algorithms:

<-------------------Graph Representation------------------------->
1. Adjacency Matrix
   A 2D array where the cell at row i and column j is 1 (or the weight of the edge)
   if there is an edge between vertex i and vertex j, otherwise 0.

2. Adjacency List
    An array of lists. The array index represents the vertex, and each element is a list of vertices adjacent to that vertex.

<------------------Graph Traversals-------------------------------> 
1. Breadth-First Search (BFS):
   Explores all neighbors of a vertex before moving on to their neighbors. It uses a queue for traversal.

2. Depth-First Search (DFS):
Explores as far down a branch as possible before backtracking. It can be implemented using recursion or a stack.

<---------------Weighted Graphs and Shortest Path Algorithms-------->

1. Dijkstra’s Algorithm:
   Finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative weights.

2. Bellman-Ford Algorithm:
   Finds the shortest path from a source vertex to all other vertices, handling graphs with negative weights.


   */

//Adjancy Matrix

class GraphMatrix {
  constructor(size) {
    this.size = size;
    this.adjMatrix = Array(size)
      .fill(null)
      .map(() => Array(size).fill(0));
  }

  addEdge(src, dest, weight = 1) {
    this.adjMatrix[src][dest] = weight;
    this.adjMatrix[dest][src] = weight; // For undirected graph
  }

  print() {
    console.log(this.adjMatrix);
  }
}

// Example usage:
const graphMatrix = new GraphMatrix(4);
graphMatrix.addEdge(0, 1, 1);
graphMatrix.addEdge(0, 2, 4);
graphMatrix.addEdge(1, 2, 2);
graphMatrix.addEdge(1, 3, 5);
graphMatrix.addEdge(2, 3, 1);

graphMatrix.print();

/* <---------------Adjancy List--------------------->  */
class GraphList {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(src, dest, weight = 1) {
    if (!this.adjList.has(src)) this.addVertex(src);
    if (!this.adjList.has(dest)) this.addVertex(dest);
    this.adjList.get(src).push({ node: dest, weight });
    this.adjList.get(dest).push({ node: src, weight }); // For undirected graph
  }

  print() {
    this.adjList.forEach((value, key) => {
      console.log(
        `${key} -> ${value
          .map((edge) => `(${edge.node}, ${edge.weight})`)
          .join(" ")}`
      );
    });
  }
}

// Example usage:
const graphList = new GraphList();
graphList.addEdge(0, 1, 1);
graphList.addEdge(0, 2, 4);
graphList.addEdge(1, 2, 2);
graphList.addEdge(1, 3, 5);
graphList.addEdge(2, 3, 1);

graphList.print();

/*<-----------Breadth First-Search (BFS) ---------------->*/
class GraphList {
  // ... previous code ...

  bfs(start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
      const node = queue.shift();
      if (!visited.has(node)) {
        console.log(node);
        visited.add(node);
        const neighbors = this.adjList.get(node);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor.node)) {
            queue.push(neighbor.node);
          }
        }
      }
    }
  }
}

// Example usage:
graphList.bfs(0); // Output: 0 1 2 3

/*<-------------Depth First Search-------------->*/
class GraphList {
  // ... previous code ...

  dfs(start) {
    const visited = new Set();
    this.dfsHelper(start, visited);
  }

  dfsHelper(node, visited) {
    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      const neighbors = this.adjList.get(node);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor.node)) {
          this.dfsHelper(neighbor.node, visited);
        }
      }
    }
  }
}

// Example usage:
graphList.dfs(0); // Output: 0 1 2 3 (order may vary)

/*
  <__________________Shortest Path Algorithm______________>
  <__________________Dijkstra Algorithm___________________>
*/
class GraphList {
  // ... previous code ...

  dijkstra(start) {
    const distances = new Map();
    const visited = new Set();
    const pq = new MinHeap();

    for (const vertex of this.adjList.keys()) {
      distances.set(vertex, Infinity);
    }
    distances.set(start, 0);
    pq.insert({ vertex: start, distance: 0 });

    while (pq.heap.length > 0) {
      const { vertex: u, distance } = pq.extractMin();
      if (visited.has(u)) continue;
      visited.add(u);

      const neighbors = this.adjList.get(u);
      for (const neighbor of neighbors) {
        const v = neighbor.node;
        const weight = neighbor.weight;
        if (distance + weight < distances.get(v)) {
          distances.set(v, distance + weight);
          pq.insert({ vertex: v, distance: distance + weight });
        }
      }
    }

    return distances;
  }
}

// Example usage:
console.log(graphList.dijkstra(0)); // Output: Map { 0 => 0, 1 => 1, 2 => 3, 3 => 4 }

/*<_______________Bellman-Ford Algorithm_______________________*/
class GraphList {
  // ... previous code ...

  bellmanFord(start) {
    const distances = new Map();
    const vertices = Array.from(this.adjList.keys());

    for (const vertex of vertices) {
      distances.set(vertex, Infinity);
    }
    distances.set(start, 0);

    for (let i = 0; i < vertices.length - 1; i++) {
      for (const u of vertices) {
        const neighbors = this.adjList.get(u);
        for (const neighbor of neighbors) {
          const v = neighbor.node;
          const weight = neighbor.weight;
          if (distances.get(u) + weight < distances.get(v)) {
            distances.set(v, distances.get(u) + weight);
          }
        }
      }
    }

    // Check for negative-weight cycles
    for (const u of vertices) {
      const neighbors = this.adjList.get(u);
      for (const neighbor of neighbors) {
        const v = neighbor.node;
        const weight = neighbor.weight;
        if (distances.get(u) + weight < distances.get(v)) {
          throw new Error("Graph contains a negative-weight cycle");
        }
      }
    }

    return distances;
  }
}

// Example usage:
console.log(graphList.bellmanFord(0)); // Output: Map { 0 => 0, 1 => 1, 2 => 3, 3 => 4 }

/*<________________SUMMARY ________________________>

>>>>>>>>>>>>>Graph Representation:

1. Adjacency Matrix: 2D array where cell (i, j) represents the presence (and weight) of an edge between i and j.
2. Adjacency List: Array of lists where each index represents a vertex and the list contains its neighbors.

>>>>>>>>>>>>>Graph Traversals:

1. BFS: Uses a queue, explores neighbors level by level.
2. DFS: Uses recursion or a stack, explores as far as possible down each branch.

>>>>>>>>>>>>>>Shortest Path Algorithms:

1. Dijkstra’s Algorithm: Efficient for non-negative weights, uses a priority queue.
2. Bellman-Ford Algorithm: Handles negative weights, detects negative-weight cycles.


*/
