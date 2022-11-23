const Votings = artifacts.require("./Voting.sol");

module.exports = function (deployer)
{
    deployer.deploy(Votings)
};