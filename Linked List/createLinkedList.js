const createLinkedList = (values, idx = 0) => {
  if(values[idx] === undefined) return null
  const head = new Node(values[idx])
 
  head.next = createLinkedList(values, idx + 1)
  return head

};

//Time: O(N)
//Space: O(N)