const handler = (req, res) => {
  const eventId = req.query.eventId;
  if (req.method == "post") {
    const { email, name, text } = res.body;

    if (
      !userEmail ||
      !userEmail.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input address." });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);
    res
      .status(201)
      .json({ message: "comment success !!", comment: newComment });
  }
  if (req.method == "GET") {
    const dummylist = [
      {
        id: "c1",
        name: "sunil",
        text: "first ",
      },
      {
        id: "c2",
        name: "reddy",
        text: "hum first ",
      },
    ];
  }
};
export default handler;
