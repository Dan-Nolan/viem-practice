// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

contract Game {
  uint public x; // <-- 0x0

  constructor(uint _x) {
    emit XWasChanged(x, _x);
    x = _x;
  } 

  event XWasChanged(uint, uint);

  function changeX(uint _x) external {
    emit XWasChanged(x, _x);
    x = _x;
  }
}