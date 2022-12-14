var hasCycle = function(head) {
  let current = head;

    const visited = new Set()

    while (current !== null) {
      if(visited.has(current)) return true;

      visited.add(current)
      current = current.next;
    }

  return false;
};

//Time: O(N) n is # of nodes in the list
//Space: O(N) at worst, you are adding every node to the set.