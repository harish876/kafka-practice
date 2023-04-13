const { Kafka } = require("kafkajs");

const produce = async () => {
  const kafka = new Kafka({
    clientId: "player-jersey-4",
    brokers: ["127.0.0.1:9092"],
  });

  const jerseyNumber = process.argv[2];
  const players = {
    7: "Dhoni",
    18: "Virat",
    12: "Yuvraj",
    10: "Sachin",
    45: "Rohit",
  };
  const producer = kafka.producer();
  await producer.connect();
  console.log("Producer Connected...");
  const producedData = await producer.send({
    topic: "jersey5",
    messages: [
      {
        value: players[jerseyNumber],
        partition: jerseyNumber <= 10 ? 0 : 1,
      },
    ],
  });
  console.log(`The produced data is: ${JSON.stringify(producedData)}`);
};

produce();
