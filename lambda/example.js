exports.handler = function (event, context) {
  console.log("EVENT\n" + JSON.stringify(event))
  context.succeed('hello world');
};
