const { synchronousWrite, asyncWrite } = require("./writeFiles.js");
const { syncRead, asyncRead } = require("./readFiles.js");

data = `There are plenty of moral stories in English rich with benefits for kids. 
They activate your child’s imagination, entertain them, and make them happy. 
Short moral stories are ideal for maintaining their 
attention and keeping them focused during the entire story.
However, the best moral stories in English teach your children universal truths. 
Reading the same moral stories to them repetitively will help them to familiarise 
themselves with the story and its moral lesson. The best part about moral stories 
is that they can teach your kid life lessons in a fun and easy way.`;
synchronousWrite(data);

syncRead();
