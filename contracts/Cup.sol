// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

contract Cup{
    uint public val;

    // constructor(uint _val){
    //     val = _val;
    // }

    function initialize(uint _val) external {
        val = _val;
    }
    
}