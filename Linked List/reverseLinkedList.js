const reverseList = (head, prev = null) => {
  let current = head;
  if(current === null) return prev
  //get the next node and store to variable
  const next = current.next
  //flip the current node's pointer, to the prev value
  current.next = prev
  
  //call again with the value of the next value, and the prev being the current node
  return reverseList(next, current)
};

//Time: O(N)
//Space: O(N)

const reverseList2 = (head) => {
  let current = head;

  let prev = null;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

//Time: O(N)
//Space: O(1)