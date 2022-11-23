// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.22 <0.9.0;

contract Voting
{
    address owner;
    string electionName;
    uint deadline;
    event winner(string election ,string winnerCandiate,uint votecount_);
     modifier onlyOwner
     {
         require(msg.sender==owner);
         _;
     }
     modifier Deadline{
         require(block.timestamp < deadline,"the vote time has been over now!");
         _;
     }
     struct Candidate
     {
         string name;
         uint8 voterCount;
     }
     struct Voter{
         bool authorized;
         bool voted;
         uint8 voterIndex;
     }
     Candidate[] public Candidates;
     mapping (address=>Voter) public Voters;
     function addCandiadtes(string memory _name,string[] memory candidateNames,uint _deadline) public
     {
         owner=msg.sender;
         electionName = _name;
         deadline = block.timestamp+_deadline;
         for(uint i=0;i<candidateNames.length;i++)
         {
             Candidates.push(Candidate({
                 name:candidateNames[i],
                 voterCount:0
             }));
         }
     } 

     function Authorize(address voter) external onlyOwner 
     {
         Voters[voter].authorized=true;
     }

     function VOTE(uint _id) external 
     {
         require(Voters[msg.sender].authorized == true,"you are not eligiable for voting");
        require(Voters[msg.sender].voted == false,"you have already voted");
         Voters[msg.sender].voted=true;
         Candidates[_id].voterCount++;
     }

     function end() onlyOwner external onlyOwner
     {
         //require(block.timestamp>deadline);
         emit winner(electionName,Candidates[winningCandidate()].name,Candidates[winningCandidate()].voterCount);
     }

     function winningCandidate() public view onlyOwner returns (uint winnerCandiate)
     {
         uint winningVoteCount=0;
         for(uint i=0;i<Candidates.length;i++)
         {
             if(Candidates[i].voterCount>winningVoteCount)
             {
                 winningVoteCount = Candidates[i].voterCount;
                 winnerCandiate=i;
             }
         }
     }
}

//0x41544b9d695dcB3C7600ac4C6B5E39d1498C7A26