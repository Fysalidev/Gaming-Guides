exports.handler = async (event, context) => {
  const guides = [
    { title: "Beat all Zelda Bosses like a boss", author: "mario" },
    { title: "Mario Kart Shortcuts You Never Knew Existed", author: "luigi" },
    { title: "Ultimate Street Fighter Guide", author: "chun-li" },
  ];

  console.log(context.clientContext.user);

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({
      mssg: "ah ah ah, you must be logged in to see this",
    }),
  };
};
