const { Kafka } = require("kafkajs");

const consume = async () => {
  const kafka = new Kafka({
    clientId: "player-jersey-4",
    brokers: ["127.0.0.1:9092"],
  });

  const consumer = kafka.consumer({ groupId: "player-jersey-4" });
  await consumer.connect();
  console.log("Consumer connected...");

  await consumer.subscribe({
    topic: "jersey5",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ partition, message }) => {
      console.log(
        `To Partition ${partition} -> message ${message.value.toString()}`
      );
    },
  });
};

consume();
