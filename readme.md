# Poker Calculator
This may seem a bit silly for most poker players. For them, one simply adds up the value of the chips in
front of them and that is their payout in the end. However, we play by special "TARP" rules that require
a bit more work.

# [TARP Poker|http://en.wikipedia.org/wiki/Troubled_Asset_Relief_Program]
The poker games are nothing special, but the buy-in and payout are a bit unusual since we're all "too big to fail".
If anyone comes close to running out of chips, we give all the players a set of additional high-value chips.
This allows the person who is losing to continue playing without increasing their buy-in.
They might win big later and will generally have more fun than if they were forced out.
And if the game is short-handed, it has the side benefit of keeping all the players playing - nothing worse
than stopping play for lack of a quorum.

The overall goal is to provide an incentive for the weaker players to keep coming back month after month.

# An example
Suppose we have a $25 buy-in for 7 players, for a total of $175.
One player, lets call him Joe, has had too many drinks and is losing badly. No problem.

When Joe gets low, we give everyone more chips - maybe $20 worth - but we don't bother keeping track of how much
we give out, just that the amounts are equal.

Later still, Joe is still losing badly. No problem, everyone gets $15 more.

When it comes time to settle up we divide the total value of chips into the total buy-in to calculate the weighting
factor (which, in the example given, is 25/60 or 5/12 which is 0.41666...).
Next we apply the weighting factor to the chips in front of everyone and round the result to the nearest dollar
of five dollars.

So thus was born the poker calculator, optimized for the mobile browsers we carry in our pockets.
