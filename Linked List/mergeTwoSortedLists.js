var mergeTwoLists = function(list1, list2) {
  let head = new ListNode(null);
  let dummyHead = head;

    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        dummyHead.next = list1;
        list1 = list1.next;
      }

      else {
        dummyHead.next = list2;
        list2 = list2.next;
      }

      dummyHead = dummyHead.next
    }

    dummyHead.next = list1 || list2
    return head.next;
};

//Time: O(N * M) N is the number of nodes in list1, M is number of nodes in list2
//Space: O(N * M) We create a new list with all nodes in both the lists.