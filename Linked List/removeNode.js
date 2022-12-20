const removeNode = (head, targetVal) => {
  if(!head) return null;
  
  if(head.val === targetVal) return head.next;
  
  head.next = removeNode(head.next, targetVal);
  
  return head
};

//Time O(N) # of nodes
//Space O(N) recurison