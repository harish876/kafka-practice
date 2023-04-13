# INTRODUCTION

A Small hello world program for Kafka Producer and Consumer

# STEPS TO FOLLOW

1. Have Docker Installed

2. Run Zookeeper on a container using this command: 

    docker run --name zookeeper -p 2181:2181 zookeeper

3. Run Kafka on another container using this command: 

    docker run --name kafka -p 9092:9092 \
    -e KAFKA_ZOOKEEPER_CONNECT=127.0.0.1:2181 \
    -e KAFKA_ADVERTISED_LISTERNER = PLAINTEXT://127.0.0.1:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1

4. Run partition.js to create topics and create number of partitions as 2
5. Run producer.js as node producer.js [argv]  (Give Arguments as jerseyNumber mentioned in ./producer.js)
6. Run consumer.js to consumer message

