const { Kafka } = require("kafkajs");

const createPartition = async () => {
  const kafka = new Kafka({
    clientId: "player-jersey-4",
    brokers: ["127.0.0.1:9092"],
  });

  const admin = kafka.admin();
  await admin.connect();

  await admin.createTopics({
    topics: [
      {
        topic: "jersey5",
        numPartitions: 2,
      },
    ],
  });
  console.log("2 Partions Created...");
  await admin.disconnect();
};

createPartition();
