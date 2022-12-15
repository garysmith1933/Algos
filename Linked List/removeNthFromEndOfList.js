var removeNthFromEnd = function(head, n) {
  
  const length = getNthFromEnd(head, n);

  const isHead = length < 0;
  if (isHead) return head.next;

  const current = moveNode(head, length); 

  current.next = current.next.next;

  return head
};

const getNthFromEnd = (current, n, length = 0) => {

  while (current !== null) {                       
      current = current.next;
      length++;
  }

  return (length - n) - 1;
}

const moveNode = (current, length) => {

  while (length > 0) {                  
      current = current.next;
      length--;
  }

  return current;
}

//Time: O(N) # of nodes
//Space: O(1)